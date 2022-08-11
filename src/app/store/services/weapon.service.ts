import {
  HttpClient,
  HttpHeaders,
  HttpParams,
  HttpResponse,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { concat, Observable, of, zip } from 'rxjs';
import { concatMap, map, mergeMap, tap } from 'rxjs/operators';
import { Table } from 'src/app/core/components/organisms/table/models';
import { AppState } from '../models/app.state';

interface CreateWithChildren {
  children: {
    old: any;
    data: any[];
    url: string;
    parentId: string;
  };
  parent: {
    old: any;
    data: any;
    url: string;
  };
  action: string;
}

@Injectable({ providedIn: 'root' })
export class WeaponService {
  headers = new HttpHeaders({
    'Content-Type': 'application/json',
  });
  constructor(private httpClient: HttpClient) {}

  notifies(args: any): Observable<any> {
    return this.fetchData(args.table);
  }
  createNotify(args: any): Observable<any> {
    const { notifyItems, ...rest } = args.data;
    const request = {
      children: {
        old: args.form.data.notifyItems,
        data: notifyItems,
        url: 'http://localhost:3000/notifyItems',
        parentId: 'notifyId',
      },
      parent: {
        old: args.form.data,
        data: rest,
        url: args.form.submit.url,
      },
      action: args.action,
    };
    return this.createWithChildren(request);
  }
  createNotifyItem(args: any): Observable<any> {
    return this.httpClient.post(args.form.submit.url, args.data);
  }
  getNotifyItems(args: any): Observable<any> {
    let params = new HttpParams();
    let url = args.url ?? '';
    if (args.parentId && args.hasChild) {
      params = params.set('notifyId', args.parentId);
      url = args.child.url;
    }
    return this.httpClient.get(url, { params });
  }
  private createWithChildren(args: CreateWithChildren): Observable<any> {
    // children: { data: [], url: '' }
    // parent{ data: {}, url: '' }
    if (args.action === 'create') {
      return this.httpClient.post(args.parent.url, args.parent.data).pipe(
        map((data: any) => {
          const parentId = data.id;
          return args.children.data.map((item: any) =>
            this.httpClient.post(args.children.url, {
              ...item,
              [args.children.parentId]: parentId,
            })
          );
        }),
        mergeMap((data: any) => concat(...data))
      );
    }
    // update parent and children
    // from parent get id and update parent.url to parent.url/id
    // from children data separate newly created children and children that needs to be updated
    const newChildren = args.children.data.filter((item: any) => !item.id);
    let updateChildren = args.children.data.filter((item: any) => item.id);

    // @TODO finish

    updateChildren = updateChildren.filter((item: any) => {
      const oldItem = args.children.old.find(
        (oldItem: any) => oldItem.id === item.id
      );
      return Object.keys(item).some((key) => item[key] !== oldItem[key]);
    });

    return zip(
      this.httpClient.patch(args.parent.url, args.parent.data),
      this.httpClient.patch(args.children.url, args.children.data)
    );
  }
  private fetchData(table: Table): Observable<any> {
    const params = table.dataSource.params;
    let httpParams = new HttpParams();
    if (params && Object.keys(params).length) {
      Object.keys(params).forEach((key) => {
        httpParams = httpParams.set(key, params[key]);
      });
    }
    if (table.paginated) {
      httpParams = httpParams.set(
        'page',
        (table?.pagination?.pageNumber ?? 1).toString()
      );
      httpParams = httpParams.set(
        'size',
        (table?.pagination?.pageSize ?? 5).toString()
      );
    }

    if (table.filterable && table?.filter?.data) {
      Object.keys(table?.filter?.data).forEach((key) => {
        if (table?.filter?.data[key]) {
          httpParams = httpParams.set(key, table?.filter?.data[key]);
        }
      });
    }

    const httpResponse = this.httpClient.get(table.dataSource.url, {
      params: httpParams,
      observe: 'response',
      responseType: 'json',
    });

    return httpResponse.pipe(
      map((data: HttpResponse<any>) => ({
        count: Number(data.headers.get('X-Total-Count') ?? '20'),
        data: data.body ?? [],
      }))
    );
  }
}
