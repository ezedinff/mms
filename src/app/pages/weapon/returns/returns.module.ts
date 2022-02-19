import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReturnsComponent } from './returns.component';
import { ReturnDetailComponent } from './return-detail/return-detail.component';



@NgModule({
  declarations: [ReturnsComponent, ReturnDetailComponent],
  imports: [
    CommonModule
  ]
})
export class ReturnsModule { }
