import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {AdminComponent} from "./admin.component";
import {MmsCommonModule} from "../../mms-common/mms-common.module";
import { NotifyWeaponModule } from '../notify-weapon/notify-weapon.module';

const routes: Routes = [
  {
    path: '',
    component: AdminComponent,
    children: [
      {
        path: '',
        redirectTo: 'dashboard',
        pathMatch: 'full'
      },
      // {
      //   path: 'notify',
      //   loadChildren: () => import('../sample/sample.module').then(m => m.SampleModule)
      // },
      {
        path: 'notify',
        loadChildren: () => import('../notify-weapon/notify-weapon.module').then(m => m.NotifyWeaponModule)
      },
      {
        path: 'dashboard',
        loadChildren: () => import('../dashboard/dashboard.module').then(m => m.DashboardModule)
      }
    ]
  }
]

@NgModule({
  declarations: [AdminComponent],
  imports: [
  CommonModule,
    RouterModule.forChild(routes),
    MmsCommonModule
  ]
})
export class AdminModule { }
