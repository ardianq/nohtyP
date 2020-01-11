import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {PokemontrainerFormComponent} from './pokemontrainer-form.component';

describe('PokemontrainerFormComponent', () => {
  let component: PokemontrainerFormComponent;
  let fixture: ComponentFixture<PokemontrainerFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [PokemontrainerFormComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PokemontrainerFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
