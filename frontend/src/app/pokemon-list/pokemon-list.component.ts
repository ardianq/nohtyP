import {Component, OnInit} from '@angular/core';
import {PokemonService} from '../services/pokemon.service';
import {TypeService} from '../services/type.service';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.scss']
})
export class PokemonListComponent implements OnInit {

  pokemon: any[];
  displayedColumns = ['name', 'type', 'level', 'gender', 'id'];


  constructor(private pokemonService: PokemonService, private typeService: TypeService) {
  }

  ngOnInit() {
    this.pokemonService.getPokemon().subscribe((response: any[]) => {
      this.pokemon = response;
    });
  }

  // removePokemon(pokemon: any) {
  //   this.pokemonService.remove(pokemon).subscribe(() => {
  //     this.ngOnInit();
  //   });
  // }


  getReadableType(type: any) {
    const types = this.typeService.typeNames;
    return types[type];

  }

  removePokemon(pokemon: any) {
    this.pokemonService.removePokemon(pokemon).subscribe(() => {
      this.ngOnInit();
    });

  }
}
