import {inject, TestBed} from '@angular/core/testing';

import {PizzaFileService} from './pizzaFile.service';

describe('PizzaService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PizzaFileService]
    });
  });

  it('should be created', inject([PizzaFileService], (service: PizzaFileService) => {
    expect(service).toBeTruthy();
  }));
});
