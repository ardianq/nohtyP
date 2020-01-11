import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {ActivatedRouteSnapshot, Resolve} from '@angular/router';
import {PokemontrainerService} from '../services/pokemontrainer.service';

@Injectable({
  providedIn: 'root'
})
export class PokemontrainerResolver implements Resolve<Observable<any>> {

  constructor(private pokemontrainerService: PokemontrainerService) {
  }

  resolve(route: ActivatedRouteSnapshot) {
    return this.pokemontrainerService.getATrainer(route.paramMap.get('id'));
  }
}
