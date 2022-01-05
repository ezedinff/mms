import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {NotifyHeader} from "./notify";
import {BaseService} from "../../core/services/base.service";

@Injectable({
  providedIn: 'root'
})
export class NotifyHeaderService extends  BaseService<NotifyHeader> {

  constructor(public httpClient: HttpClient) {
    super(httpClient, '/notifies');
  }
}
