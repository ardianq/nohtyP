import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TypeService {

  typeNames = {
    a: 'normal',
    b: 'fire',
    c: 'fighting',
    d: 'water',
    e: 'flying',
    f: 'grass',
    g: 'poison',
    h: 'electric',
    i: 'ground',
    j: 'psychic',
    k: 'rock',
    l: 'bug',
    m: 'dragon',
    n: 'ghost',
    o: 'dark',
    p: 'steel',
    q: 'fairy'
  };

  constructor() {
  }
}
