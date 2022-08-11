import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LangMenuComponent } from './lang-menu.component';
import { MatListModule } from '@angular/material/list';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatIconModule } from '@angular/material/icon';
import { TranslateModule } from '@ngx-translate/core';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [LangMenuComponent],
  imports: [
    CommonModule,
    MatListModule,
    FlexLayoutModule,
    MatIconModule,
    MatButtonModule,
    TranslateModule,
  ],
  exports: [LangMenuComponent],
})
export class LangMenuModule {}
