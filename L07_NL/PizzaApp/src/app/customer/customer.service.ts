import {Injectable, InjectionToken, Provider} from '@angular/core';
import {Observable} from "rxjs/Observable";

import {ICustomer} from "./customer.model";
import {CUSTOMERS} from "./customer.data";

export interface ICustomerService {
  getCustomers(): Observable<Array<ICustomer>>;

  getCustomer(id: string): Observable<ICustomer>;
}

@Injectable()
export class CustomerFileService implements ICustomerService {
  getCustomers(): Observable<Array<ICustomer>> {
    return Observable.create(observer => {
      observer.next(CUSTOMERS);
      observer.complete();
    });
  }

  getCustomer(id: string): Observable<ICustomer> {
    return Observable.create(observer => {
      observer.next(CUSTOMERS.find(customer => customer.id === id));
      observer.complete();
    });
  }
}

export const CUSTOMER_SERVICE: InjectionToken<ICustomerService> = new InjectionToken('CUSTOMER_SERVICE');

export const CustomerServiceProvider: Provider = {
  provide: CUSTOMER_SERVICE,
  useClass: CustomerFileService
};
