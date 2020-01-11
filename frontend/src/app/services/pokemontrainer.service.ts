import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PokemontrainerService {

  constructor(private http: HttpClient) {
  }

  getTrainer() {
    return this.http.get('/api/pokemontrainer/list');
  }

  getATrainer(id) {
    return this.http.get('/api/pokemontrainer/' + id + '/get');
  }

  updateTrainer(pokemontrainer: any) {
    return this.http.patch('/api/pokemontrainer/' + pokemontrainer.id + '/update', pokemontrainer);

  }

  createTrainer(pokemontrainer: any) {
    return this.http.post('/api/pokemontrainer/create', pokemontrainer);

  }

  removePokemontrainer(pokemontrainer: any) {
    return this.http.delete('/api/pokemontrainer/' + pokemontrainer.id + '/delete');
  }
}
