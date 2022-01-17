import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BaseService } from 'src/app/core/services/base.service';
import { Notify } from './notify-weapon.model';

@Injectable({
  providedIn: 'root'
})
export class NotifyService extends BaseService<Notify> {

  constructor(public httpClient: HttpClient) {
    super(httpClient, '/notifies');

  }
}
