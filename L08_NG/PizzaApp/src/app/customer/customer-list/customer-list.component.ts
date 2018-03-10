import {Component, Inject, OnInit} from '@angular/core';

import {CUSTOMER_SERVICE, ICustomerService} from "../customer.service";
import {ICustomer} from "../customer.model";

@Component({
  selector: 'customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css']
})
export class CustomerListComponent implements OnInit {

  private customers: Array<ICustomer>;

  constructor(@Inject(CUSTOMER_SERVICE) private customerService: ICustomerService) {
  }

  ngOnInit() {
    this.customerService.getCustomers()
      .subscribe(customers => this.customers = customers);
  }
}
