import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormComponent } from './form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { InputsModule } from '../../atoms/inputs/inputs.module';
import { ErrorHandler } from './services/error.handler';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormService } from './services/form.service';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatRadioModule } from '@angular/material/radio';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatDividerModule } from '@angular/material/divider';
import { MatSelectModule } from '@angular/material/select';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [FormComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatInputModule,
    MatFormFieldModule,
    MatRadioModule,
    MatDatepickerModule,
    MatSelectModule,
    MatDividerModule,
    FlexLayoutModule,
    MatIconModule,
    MatButtonModule,
    InputsModule,
  ],
  providers: [ErrorHandler, FormService],
  exports: [FormComponent],
})
export class FormModule {}
