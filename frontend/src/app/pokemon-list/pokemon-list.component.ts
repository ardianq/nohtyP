import {Component, OnInit} from '@angular/core';
import {PokemonService} from '../services/pokemon.service';
import {TypeService} from '../services/type.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.scss']
})
export class PokemonListComponent implements OnInit {

  pokemon: any[];
  displayedColumns = ['name', 'type', 'level', 'gender', 'region', 'id'];
  private regionOptions;


  constructor(private pokemonService: PokemonService, private typeService: TypeService, private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.pokemonService.getPokemon().subscribe((response: any[]) => {
      this.pokemon = response;
    });
    this.regionOptions = this.route.snapshot.data.regionOptions;
  }


  getReadableType(type: any) {
    const types = this.typeService.typeNames;
    return types[type];

  }

  removePokemon(pokemon: any) {
    this.pokemonService.removePokemon(pokemon).subscribe(() => {
      this.ngOnInit();
    });

  }

  getReadableRegion(region: number[]) {
    let regionString = '';
    region.forEach((value) => {
      regionString = regionString + (this.regionOptions[value - 1].name) + ', ';
    });
    regionString = regionString.substring(0, regionString.length - 2);
    return regionString;

  }
}
