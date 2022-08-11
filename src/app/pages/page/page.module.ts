import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageComponent } from './page.component';
import { PageDetailComponent } from './page-detail/page-detail.component';
import { TabbedPageComponent } from './tabbed-page/tabbed-page.component';
import { RouterModule } from '@angular/router';
import { MatTabsModule } from '@angular/material/tabs';
import { HttpClientModule } from '@angular/common/http';
import { MatMenuModule } from '@angular/material/menu';
import { FormModule } from 'src/app/core/components/organisms/form/form.module';

@NgModule({
  declarations: [PageComponent, PageDetailComponent, TabbedPageComponent],
  imports: [
    CommonModule,
    RouterModule,
    MatTabsModule,
    MatMenuModule,
    HttpClientModule,
    FormModule,
  ],
  exports: [PageComponent, PageDetailComponent, TabbedPageComponent],
})
export class PageModule {}
