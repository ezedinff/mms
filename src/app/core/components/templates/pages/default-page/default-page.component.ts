import { Component, OnDestroy, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';
import { distinctUntilChanged, takeWhile, tap } from 'rxjs/operators';
import { pageActions } from 'src/app/store/actions/page.actions';
import { AppState } from 'src/app/store/models/app.state';
import { DefaultDetailPageComponent } from '../default-detail-page/default-detail-page.component';
import { FormDialogComponent } from '../form-dialog/form-dialog.component';
import { Page } from '../models';

@Component({
  selector: 'app-default-page',
  templateUrl: './default-page.component.html',
  styleUrls: ['./default-page.component.scss'],
})
export class DefaultPageComponent implements OnInit, OnDestroy {
  sub!: Subscription;
  page$!: Observable<Page>;
  constructor(
    private store$: Store<AppState>,
    private activatedRoute: ActivatedRoute,
    private titleService: Title,
    private matDialog: MatDialog
  ) {}
  ngOnInit(): void {
    this.sub = this.activatedRoute.data
      .pipe(
        tap((data: Page) => {
          this.titleService.setTitle(data.title ?? 'MMS - MMS');
          this.store$.dispatch(pageActions.setPage({ page: data }));
        })
      )
      .subscribe();
    this.page$ = this.store$
      .select((state) => state.page)
      .pipe(
        distinctUntilChanged((x, y) => x.dialog?.id === y.dialog?.id),
        tap((page: Page) => {
          if (page.dialog) {
            this.openDialog(page.dialog);
          }
        })
      );

    // this.store$
    //   .select((state) => state.page)
    //   .pipe(
    //     distinctUntilChanged((x, y) => x.dialog?.id !== y.dialog?.id),
    //     tap((page: Page) => {
    //       if (page.dialog) {
    //         this.openDialog(page.dialog);
    //       }
    //     })
    //   );
  }

  identify(index: any, item: any) {
    return item.id;
  }

  openDialog(data: any) {
    const dialog = this.matDialog.open(FormDialogComponent, {
      width: '80%',
      maxWidth: '100vw',
      disableClose: true,
      data,
    });

    dialog.afterClosed().subscribe((result) => {
      this.store$.dispatch(
        pageActions.closeDialogWithForm({ payload: { formId: data.form.id } })
      );
    });
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }
}
