import {inject, TestBed} from '@angular/core/testing';

import {PizzaService} from './pizza.service';

describe('PizzaService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PizzaService]
    });
  });

  it('should be created', inject([PizzaService], (service: PizzaService) => {
    expect(service).toBeTruthy();
  }));
});
