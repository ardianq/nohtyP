import {TestBed} from '@angular/core/testing';

import {PokemontrainerService} from './pokemontrainer.service';

describe('PokemontrainerService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PokemontrainerService = TestBed.get(PokemontrainerService);
    expect(service).toBeTruthy();
  });
});
