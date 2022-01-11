import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotifyHeaderComponent } from './notify-header/notify-header.component';
import { NotifyDetailComponent } from './notify-detail/notify-detail.component';
import {MmsCommonModule} from "../../mms-common/mms-common.module";
import {RouterModule} from "@angular/router";
import {NotifyDetailService} from "./notify-detail.service";
import {NotifyHeaderService} from "./notify-header.service";



@NgModule({
  declarations: [
    NotifyHeaderComponent,
    NotifyDetailComponent
  ],
  imports: [
    CommonModule,
    MmsCommonModule,
    RouterModule.forChild([
      { path: '', component: NotifyHeaderComponent },
      { path: ':id', component:NotifyDetailComponent}]),
  ],
  providers: [NotifyHeaderService,NotifyDetailService]
})
export class NotifyModule { }
