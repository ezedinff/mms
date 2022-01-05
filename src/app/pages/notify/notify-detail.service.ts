import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {BaseService} from "../../core/services/base.service";
import {NotifyDetail} from "./notify";

@Injectable({
  providedIn: 'root'
})
export class NotifyDetailService extends  BaseService<NotifyDetail> {

  constructor(public httpClient: HttpClient) {
    super(httpClient, '/notifyitems');
  }
}
