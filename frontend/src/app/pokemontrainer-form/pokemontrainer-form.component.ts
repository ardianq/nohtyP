import {Component, OnInit} from '@angular/core';
import {FormBuilder} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {PokemontrainerService} from '../services/pokemontrainer.service';

@Component({
  selector: 'app-pokemontrainer-form',
  templateUrl: './pokemontrainer-form.component.html',
  styleUrls: ['./pokemontrainer-form.component.scss']
})
export class PokemontrainerFormComponent implements OnInit {
  pokemontrainerFormGroup;

  constructor(private fb: FormBuilder, private router: Router, private pokemontrainerService: PokemontrainerService, private route: ActivatedRoute) {
  }

  ngOnInit() {
    const data = this.route.snapshot.data;
    this.pokemontrainerFormGroup = this.fb.group({
      id: [null],
      first_name: [''],
      last_name: [''],
      age: [10],
      gender: [true],
      height: [null],
      weight: [null]

    });

    if (data.pokemontrainer) {
      this.pokemontrainerFormGroup.patchValue(data.pokemontrainer);
    }
  }

  createTrainer() {
    const pokemontrainer = this.pokemontrainerFormGroup.value;
    if (pokemontrainer.id) {
      this.pokemontrainerService.updateTrainer(pokemontrainer)
        .subscribe(() => {
          alert('updated succefully');
        });
    } else {
      this.pokemontrainerService.createTrainer(pokemontrainer)
        .subscribe((response: any) => {
          this.router.navigate(['/pokemontrainer-form/' + response.id]);
        });
    }
  }
}
