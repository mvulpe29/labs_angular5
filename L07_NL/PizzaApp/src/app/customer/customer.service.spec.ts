import {inject, TestBed} from '@angular/core/testing';

import {CUSTOMER_SERVICE, CustomerServiceProvider, ICustomerService} from "./customer.service";

describe('CustomerService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CustomerServiceProvider]
    });
  });

  it('should be created', inject([CUSTOMER_SERVICE], (service: ICustomerService) => {
    expect(service).toBeTruthy();
  }));
});
