import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { MenuComponent } from './components/menu/menu.component';
import { SearchComponent } from './components/search/search.component';
import { LoggedGuard } from './guards/logged.guard';
import { DetailsComponent } from './components/details/details.component';

const routes: Routes = [
  {
    path: 'login',
    title: 'A la Carta - Login',
    component: LoginComponent,
  },
  {
    path: 'home',
    title: 'A la Carta - Home',
    component: MenuComponent,
    canActivate: [LoggedGuard],
  },
  {
    path: 'search',
    title: 'A la Carta - Buscar',
    component: SearchComponent,
    canActivate: [LoggedGuard],
  },
  {
    path: 'details/:id',
    title: 'A la Carta - Detalles',
    component: DetailsComponent,
    canActivate: [LoggedGuard],
  },
  { path: '**', redirectTo: 'home', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { onSameUrlNavigation: 'reload' })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
