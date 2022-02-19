import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReturnsComponent } from './returns.component';
import { ReturnDetailComponent } from './return-detail/return-detail.component';
import { MmsCommonModule } from 'src/app/mms-common/mms-common.module';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    ReturnsComponent,
    ReturnDetailComponent
  ],
  imports: [
    CommonModule,
    MmsCommonModule,
    RouterModule.forChild([
      { path: '', component: ReturnsComponent },
      { path: ':id', component: ReturnDetailComponent },
    ]),
  ]
})
export class ReturnsModule { }
