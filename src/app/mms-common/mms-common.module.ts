import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  PERFECT_SCROLLBAR_CONFIG,
  PerfectScrollbarConfigInterface,
  PerfectScrollbarModule,
} from 'ngx-perfect-scrollbar';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormComponent } from './organisms/form/form.component';
import { LoadingButtonComponent } from './atoms/loading-button/loading-button.component';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { ReactiveFormsModule } from '@angular/forms';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { MatNativeDateModule, MatOptionModule } from '@angular/material/core';
import { TableComponent } from './organisms/table/table.component';
import { MatTableModule } from '@angular/material/table';
import { MatTabsModule } from '@angular/material/tabs';
import { CdkTableModule } from '@angular/cdk/table';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatDialogModule } from '@angular/material/dialog';
import { FormDialogComponent } from './organisms/form-dialog/form-dialog.component';
import { MatPaginatorModule } from '@angular/material/paginator';
import { HttpClientModule } from '@angular/common/http';
import { FileInputComponent } from '../core/components/atoms/inputs/file-input/file-input.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { DndDirective } from '../core/components/atoms/inputs/file-input/dnd.directive';
import { BasicComponent } from './templates/basic/basic.component';
import { RouterModule } from '@angular/router';
import { CrudHttpService } from './organisms/form-dialog/crudHttp.service';
import { TableService } from './organisms/table/table.service';
import { TranslateModule } from '@ngx-translate/core';

const DEFAULT_PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
  suppressScrollX: true,
};

@NgModule({
  declarations: [
    FormComponent,
    LoadingButtonComponent,
    TableComponent,
    FormDialogComponent,
    BasicComponent,
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    MatProgressSpinnerModule,
    PerfectScrollbarModule,
    MatNativeDateModule,
    FlexLayoutModule,
    MatListModule,
    MatIconModule,
    MatSidenavModule,
    MatToolbarModule,
    MatGridListModule,
    MatCardModule,
    MatMenuModule,
    MatButtonModule,
    MatProgressSpinnerModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    MatDatepickerModule,
    MatRadioModule,
    MatSelectModule,
    MatOptionModule,
    MatTableModule,
    CdkTableModule,
    MatTooltipModule,
    MatDialogModule,
    MatPaginatorModule,
    MatProgressBarModule,
    MatTabsModule,
    RouterModule,
    TranslateModule,
  ],
  providers: [
    {
      provide: PERFECT_SCROLLBAR_CONFIG,
      useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG,
    },
    CrudHttpService,
  ],
  exports: [FormComponent, LoadingButtonComponent, BasicComponent],
})
export class MmsCommonModule {}
