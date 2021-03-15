import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AloitussivuComponent } from './aloitussivu/aloitussivu.component';
import { AuthGuard } from './_guards/auth.guard';
import { InfoComponent } from './info/info.component';
import { KayttajaComponent } from './kayttaja/kayttaja.component';

const routes: Routes = [
  { path: 'kayttaja/:username', component: KayttajaComponent, canActivate: [AuthGuard] },
  { path: '', component: AloitussivuComponent },
  { path: 'info', component: InfoComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  declarations: [

  ]
})
export class AppRoutingModule { }
