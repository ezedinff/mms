import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
const routes: Routes = [
  {
    path: 'notifies',
    loadChildren: () =>
      import('./notifies/notifies.module').then((m) => m.NotifiesModule),
  },
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WeaponsRoutingModule {}
