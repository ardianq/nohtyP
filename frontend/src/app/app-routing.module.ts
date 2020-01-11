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


const routes: Routes = [
  {path: '', redirectTo: 'pokemon-list', pathMatch: 'full'},
  {path: 'pokemon-list', component: PokemonListComponent},
  {path: 'pokemontrainer-list', component: PokemontrainerListComponent},
  {
    path: 'pokemon-form',
    component: PokemonFormComponent,
    resolve: {trainerOptions: PokemontrainerOptionResolver, regionOptions: RegionResolver}
  },
  {path: 'pokemontrainer-form', component: PokemontrainerFormComponent},
  {
    path: 'pokemon-form/:id', component: PokemonFormComponent, resolve: {
      pokemon: PokemonResolver,
      trainerOptions: PokemontrainerOptionResolver, regionOptions: RegionResolver
    }
  },
  {path: 'pokemontrainer-form/:id', component: PokemontrainerFormComponent, resolve: {pokemontrainer: PokemontrainerResolver}}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
