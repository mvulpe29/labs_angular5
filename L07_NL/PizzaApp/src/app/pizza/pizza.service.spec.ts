import {inject, TestBed} from '@angular/core/testing';

import {IPizzaService, PIZZA_SERVICE, PizzaFileService} from './pizza.service';

describe('PizzaService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [{provide: PIZZA_SERVICE, useClass: PizzaFileService}]
    });
  });

  it('should be created', inject([PIZZA_SERVICE], (service: IPizzaService) => {
    expect(service).toBeTruthy();
  }));
});
