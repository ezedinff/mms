import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SideNavItemComponent } from './side-nav-item.component';
import { MatListModule } from '@angular/material/list';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [SideNavItemComponent],
  imports: [
    CommonModule,
    RouterModule,
    MatListModule,
    TranslateModule,
    MatIconModule,
  ],
  exports: [SideNavItemComponent],
})
export class SideNavItemModule {}
