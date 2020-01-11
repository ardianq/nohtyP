import {Component, OnInit} from '@angular/core';
import {PokemontrainerService} from '../services/pokemontrainer.service';

@Component({
  selector: 'app-pokemontrainer-list',
  templateUrl: './pokemontrainer-list.component.html',
  styleUrls: ['./pokemontrainer-list.component.scss']
})
export class PokemontrainerListComponent implements OnInit {

  pokemontrainer: any[];
  displayedColumns = ['first_name', 'last_name', 'gender', 'age', 'height', 'weight', 'id'];

  constructor(private pokemontrainerService: PokemontrainerService) {
  }

  ngOnInit() {
    this.pokemontrainerService.getTrainer().subscribe((response: any[]) => {
      this.pokemontrainer = response;
      console.log(response);
    });
  }

  removePokemontrainer(pokemontrainer: any) {
    this.pokemontrainerService.removePokemontrainer(pokemontrainer).subscribe(() => {
      this.ngOnInit();
    });


  }
}
