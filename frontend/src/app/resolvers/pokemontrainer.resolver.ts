import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {Resolve} from '@angular/router';
import {PokemontrainerService} from '../services/pokemontrainer.service';

@Injectable({
  providedIn: 'root'
})
export class PokemontrainerOptionResolver implements Resolve<Observable<any>> {

  constructor(private pokemontrainerService: PokemontrainerService) {
  }

  resolve() {
    return this.pokemontrainerService.getTrainer();
  }
}
