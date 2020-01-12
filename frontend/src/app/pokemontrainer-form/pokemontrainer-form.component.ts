import {Component, OnInit} from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';
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
      first_name: ['', Validators.required],
      last_name: ['', Validators.required],
      age: [10, [Validators.required, Validators.min(10)]],
      gender: [true, Validators.required],
      height: [null, Validators.required],
      weight: [null, Validators.required]

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
          alert('created succefully');
        });
    }
  }
}
