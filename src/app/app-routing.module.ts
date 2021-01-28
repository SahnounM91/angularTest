import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PartiesComponent } from './parties-component/parties-component.component';
const routes: Routes = [
  { path: 'parties', component: PartiesComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
