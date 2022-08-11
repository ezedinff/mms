import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FileInputComponent } from './file-input/file-input.component';
import { InputDateComponent } from './input-date/input-date.component';
import { InputSelectComponent } from './input-select/input-select.component';
import { InputTextComponent } from './input-text/input-text.component';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatListModule } from '@angular/material/list';
import { MatGridListModule } from '@angular/material/grid-list';
import { DndDirective } from './file-input/dnd.directive';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    MatIconModule,
    MatButtonModule,
    MatInputModule,
    MatProgressBarModule,
    MatListModule,
    MatGridListModule,
  ],
  declarations: [
    InputTextComponent,
    InputSelectComponent,
    InputDateComponent,
    FileInputComponent,
    DndDirective,
  ],
  exports: [
    InputTextComponent,
    InputSelectComponent,
    InputDateComponent,
    FileInputComponent,
  ],
})
export class InputsModule {}
