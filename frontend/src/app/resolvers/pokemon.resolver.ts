import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {PokemonService} from '../services/pokemon.service';
import {ActivatedRouteSnapshot, Resolve} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class PokemonResolver implements Resolve<Observable<any>> {

  constructor(private pokemonService: PokemonService) {
  }

  resolve(route: ActivatedRouteSnapshot) {
    return this.pokemonService.getAPokemon(route.paramMap.get('id'));
  }
}
