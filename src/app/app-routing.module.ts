import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PartiesComponent } from './parties-component/parties-component.component';
import { DoctorComponent } from './doctor-component/doctor-component.component';

const routes: Routes = [
  { path: 'parties', component: PartiesComponent },
  { path: 'doctors', component: DoctorComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
