import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MmsCommonModule } from 'src/app/mms-common/mms-common.module';
import { RouterModule } from '@angular/router';
import { NotifyService } from './notify.service';
import { BatchDataComponent } from './batch-data/batch-data.component';
import { SpecificDataComponent } from './specific-data/specific-data.component';



@NgModule({
  declarations: [
    BatchDataComponent,
    SpecificDataComponent
  ],
  imports: [
  CommonModule,
    MmsCommonModule,
    RouterModule.forChild([
      {path: '', component: BatchDataComponent}
    ])
  ],
  providers: [NotifyService],
})
export class NotifyWeaponModule { }
