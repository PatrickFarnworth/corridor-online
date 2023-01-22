import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GameScreenComponent } from './screens/game-screen/game-screen.component';

const routes: Routes = [
  { path: 'play', component: GameScreenComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
