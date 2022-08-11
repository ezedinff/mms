import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DefaultPageComponent } from './default-page/default-page.component';
import { DefaultDetailPageComponent } from './default-detail-page/default-detail-page.component';
import { TabbedPageComponent } from './tabbed-page/tabbed-page.component';
import { TableModule } from '../../organisms/table/table.module';
import { MatDialogModule } from '@angular/material/dialog';
import { FormDialogComponent } from './form-dialog/form-dialog.component';
import { FormModule } from '../../organisms/form/form.module';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [
    DefaultPageComponent,
    DefaultDetailPageComponent,
    TabbedPageComponent,
    FormDialogComponent,
  ],
  imports: [
    CommonModule,
    MatToolbarModule,
    MatButtonModule,
    MatDialogModule,
    TableModule,
    FormModule,
  ],
  exports: [
    DefaultPageComponent,
    DefaultDetailPageComponent,
    TabbedPageComponent,
  ],
})
export class PagesModule {}
