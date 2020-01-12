import {Component, OnInit} from '@angular/core';
import {AbstractControl, FormBuilder, ValidatorFn, Validators} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {PokemonService} from '../services/pokemon.service';
import {TypeService} from '../services/type.service';
import * as pokemons from 'pokemon';


@Component({
  selector: 'app-pokemon-form',
  templateUrl: './pokemon-form.component.html',
  styleUrls: ['./pokemon-form.component.scss']
})
export class PokemonFormComponent implements OnInit {
  pokemonFormGroup;
  trainerOptions;
  regionOptions;
  allNames;

  constructor(private fb: FormBuilder, private route: ActivatedRoute, private pokemonService: PokemonService, private router: Router,
              private typeService: TypeService) {
  }

  ngOnInit() {
    const data = this.route.snapshot.data;
    this.trainerOptions = data.trainerOptions;
    this.regionOptions = data.regionOptions;
    this.pokemonFormGroup = this.fb.group({
      id: [null],
      name: ['', [this.pokemonValidator(), Validators.required]],
      type: ['', [Validators.maxLength(1), Validators.required]],
      level: [1, [Validators.min(1), Validators.max(100), Validators.required]],
      gender: [true, Validators.required],
      pokemon_trainer: [null, Validators.required],
      region: [[], Validators.required]
    });

    if (data.pokemon) {
      this.pokemonFormGroup.patchValue(data.pokemon);
    }
  }

  pokemonValidator(): ValidatorFn {
    return (control: AbstractControl): { [key: string]: any } | null => {
      this.allNames = pokemons.all('de').concat(pokemons.all());
      if (this.allNames.indexOf(control.value) !== -1) {
        return null;
      } else {
        return {namenotfound: {value: control.value}};
      }

    };
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
          alert('created succesfully');
          this.router.navigate(['/pokemon-form/' + response.id]);
        });
    }
  }
}
