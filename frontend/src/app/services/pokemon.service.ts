import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  constructor(private http: HttpClient) {
  }

  getPokemon() {
    return this.http.get('/api/pokemon/list');
  }

  getAPokemon(id) {
    return this.http.get('/api/pokemon/' + id + '/get');
  }

  updatePokemon(pokemon: any) {
    return this.http.patch('/api/pokemon/' + pokemon.id + '/update', pokemon);
  }

  createPokemon(pokemon: any) {
    return this.http.post('/api/pokemon/create', pokemon);

  }

  removePokemon(pokemon: any) {
    return this.http.delete('/api/pokemon/' + pokemon.id + '/delete');

  }
}
