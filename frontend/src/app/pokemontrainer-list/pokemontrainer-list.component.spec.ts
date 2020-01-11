import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {PokemontrainerListComponent} from './pokemontrainer-list.component';

describe('PokemontrainerListComponent', () => {
  let component: PokemontrainerListComponent;
  let fixture: ComponentFixture<PokemontrainerListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [PokemontrainerListComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PokemontrainerListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
