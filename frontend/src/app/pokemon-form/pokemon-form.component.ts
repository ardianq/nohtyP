import {Component, OnInit} from '@angular/core';
import {FormBuilder} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {PokemonService} from '../services/pokemon.service';
import {TypeService} from '../services/type.service';

@Component({
  selector: 'app-pokemon-form',
  templateUrl: './pokemon-form.component.html',
  styleUrls: ['./pokemon-form.component.scss']
})
export class PokemonFormComponent implements OnInit {
  pokemonFormGroup;
  trainerOptions;
  regionOptions;

  constructor(private fb: FormBuilder, private route: ActivatedRoute, private pokemonService: PokemonService, private router: Router,
              private typeService: TypeService) {
  }

  ngOnInit() {
    const data = this.route.snapshot.data;
    this.trainerOptions = data.trainerOptions;
    this.regionOptions = data.regionOptions;
    this.pokemonFormGroup = this.fb.group({
      id: [null],
      name: [''],
      type: [''],
      level: [1],
      gender: [true],
      pokemon_trainer: [null],
      region: [[]]
    });

    if (data.pokemon) {
      this.pokemonFormGroup.patchValue(data.pokemon);
    }
  }

  createPokemon() {
    const pokemon = this.pokemonFormGroup.value;
    if (pokemon.id) {
      this.pokemonService.updatePokemon(pokemon)
        .subscribe(() => {
          alert('updated succefully');
        });
    } else {
      this.pokemonService.createPokemon(pokemon)
        .subscribe((response: any) => {
          this.router.navigate(['/pokemon-form/' + response.id]);
        });
    }
  }
}
