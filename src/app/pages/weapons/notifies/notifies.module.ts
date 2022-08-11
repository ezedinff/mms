import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DefaultPageComponent } from 'src/app/core/components/templates/pages/default-page/default-page.component';
import { PagesModule } from 'src/app/core/components/templates/pages/pages.module';
import notifyPage from './pages/notify.page';
const routes: Routes = [
  { path: '', component: DefaultPageComponent, data: notifyPage }, // page
  // { path: ':id', component: PageDetailComponent, data: notifyDetailPage }, // page detail
];
@NgModule({
  imports: [PagesModule, RouterModule.forChild(routes)],
})
export class NotifiesModule {}
