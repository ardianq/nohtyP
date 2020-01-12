import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {PokemonListComponent} from './pokemon-list/pokemon-list.component';
import {PokemontrainerListComponent} from './pokemontrainer-list/pokemontrainer-list.component';
import {PokemonFormComponent} from './pokemon-form/pokemon-form.component';
import {PokemontrainerOptionResolver} from './resolvers/pokemontrainer.resolver';
import {RegionResolver} from './resolvers/region.resolver';
import {PokemontrainerFormComponent} from './pokemontrainer-form/pokemontrainer-form.component';
import {PokemonResolver} from './resolvers/pokemon.resolver';
import {PokemontrainerResolver} from './resolvers/pokemontrainer2.resolver';
import {LoginComponent} from './login/login.component';
import {AuthGuard} from './auth.guard';


const routes: Routes = [
  {path: '', redirectTo: 'login', pathMatch: 'full'},
  {path: 'login', component: LoginComponent},
  {path: 'pokemon-list', component: PokemonListComponent, canActivate: [AuthGuard], resolve: {regionOptions: RegionResolver}},
  {path: 'pokemontrainer-list', component: PokemontrainerListComponent, canActivate: [AuthGuard]},
  {
    path: 'pokemon-form',
    component: PokemonFormComponent, canActivate: [AuthGuard],
    resolve: {trainerOptions: PokemontrainerOptionResolver, regionOptions: RegionResolver}
  },
  {path: 'pokemontrainer-form', component: PokemontrainerFormComponent, canActivate: [AuthGuard]},
  {
    path: 'pokemon-form/:id', component: PokemonFormComponent, resolve: {
      pokemon: PokemonResolver, canActivate: [AuthGuard],
      trainerOptions: PokemontrainerOptionResolver, regionOptions: RegionResolver
    }
  },
  {
    path: 'pokemontrainer-form/:id', component: PokemontrainerFormComponent, canActivate: [AuthGuard],
    resolve: {pokemontrainer: PokemontrainerResolver}
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
