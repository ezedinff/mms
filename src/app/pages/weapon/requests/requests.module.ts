import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RequestsComponent } from './requests.component';
import { RouterModule } from '@angular/router';
import { MmsCommonModule } from 'src/app/mms-common/mms-common.module';
import { RequestDetailComponent } from './request-detail/request-detail.component';
import { MatTabsModule } from '@angular/material/tabs';
import { ApprovesComponent } from './approves/approves.component';
import { ApproveDetailComponent } from './approve-detail/approve-detail.component';

@NgModule({
  declarations: [RequestsComponent, RequestDetailComponent, ApprovesComponent, ApproveDetailComponent],
  imports: [
    CommonModule,
    MmsCommonModule,
    MatTabsModule,
    RouterModule.forChild([
      { path: '', component: RequestsComponent},
      { path: ':id', component: RequestDetailComponent },
      // { path: ':id', component: ApprovesComponent },
      // { path: ':id', component: ApproveDetailComponent }
    ]),
  ],
})
export class RequestsModule {}
