import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotifyWeaponComponent } from './notify-weapon.component';
import { MmsCommonModule } from 'src/app/mms-common/mms-common.module';
import { RouterModule } from '@angular/router';
import { NotifyService } from './notify.service';



@NgModule({
  declarations: [
    NotifyWeaponComponent
  ],
  imports: [
  CommonModule,
    MmsCommonModule,
    RouterModule.forChild([
      {path: '', component: NotifyWeaponComponent}
    ])
  ],
  providers: [NotifyService],
})
export class NotifyWeaponModule { }
