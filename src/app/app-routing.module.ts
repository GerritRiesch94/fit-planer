import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AthleteComponent } from './athlete/athlete.component';
import { AthleteCreationComponent } from './athlete/athlete-creation/athlete-creation.component';

const routes: Routes = [
  { path: 'athlete', component: AthleteComponent },
  { path: 'athlete/create', component: AthleteCreationComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
