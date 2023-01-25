import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { MySkillsComponent } from './my-skills/my-skills.component';
import { StartScreenComponent } from './start-screen/start-screen.component';

const routes: Routes = [
  {path: '', component: HeaderComponent},
  {path: 'start-screen', component: StartScreenComponent},
  {path: 'my-skills', component: MySkillsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
