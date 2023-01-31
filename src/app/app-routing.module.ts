import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutMeComponent } from './about-me/about-me.component';
import { ContactMeComponent } from './contact-me/contact-me.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { ImprintComponent } from './imprint/imprint.component';
import { MySkillsComponent } from './my-skills/my-skills.component';
import { MyWorkComponent } from './my-work/my-work.component';
import { PrivacyPolicyComponent } from './privacy-policy/privacy-policy.component';
import { StartScreenComponent } from './start-screen/start-screen.component';

const routes: Routes = [
  // {path: '', component: HeaderComponent},
  // {path: '', component: StartScreenComponent},
  // {path: '', component: MySkillsComponent},
  // {path: '', component: MyWorkComponent},
  // {path: '', component: AboutMeComponent},
  // {path: '', component: ContactMeComponent},
  // {path: '', component: FooterComponent},
  {path: 'imprint', component: ImprintComponent},
  {path: 'privacy-policy', component: PrivacyPolicyComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
