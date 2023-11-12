import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './main/main.component';
import { ResultComponent } from './result/result.component';
import { HistoryComponent } from './history/history.component';

const routes: Routes = [
  {path:"", component:MainComponent},
  {path:"result", component:ResultComponent},
  {path:"history", component:HistoryComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
