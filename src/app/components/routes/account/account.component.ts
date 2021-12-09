import { Component, OnInit, HostBinding } from '@angular/core';
import { FormBuilder, Validators, FormControl, FormGroup } from '@angular/forms';
import { Subscription } from 'rxjs';
import { CustomerService } from 'src/app/services/customer.service';


@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {
  @HostBinding('class') classes = 'grid grid-wrap align-items fill-body';

  customer: any = [
    {payment_terms: ""}
  ];
  customerSubscription: Subscription;
  isChecked!: boolean;
  amount = 0;

  constructor(
    private formBuilder: FormBuilder,
    public customerService: CustomerService,
  ) {
    this.customerSubscription = this.customerService.getCustomer().subscribe(customer => {
      console.log("kunden", customer)
      this.customer = customer;
      customer[0].payment_terms == "prepaid" ? this.isChecked = true : this.isChecked = false;
    })
  }

  ngOnInit(): void {
  }

  // Changes payment terms between prepaid and invoice
  paymentTerms() {
    this.isChecked ? this.customer[0].payment_terms = "Konto" : this.customer[0].payment_terms = "Faktura";
    this.customerService.setTerms(this.customer[0].id, this.customer[0].payment_terms, this.customer[0].funds);
  }

  // Adds amount to funds
  saveAmount() {
    this.customer[0].funds = parseFloat(this.customer[0].funds);
    this.customer[0].funds += parseFloat(this.amount.toFixed(2));
    this.customer[0].funds = this.customer[0].funds.toFixed(2);
    this.customerService.setTerms(this.customer[0].id, this.customer[0].payment_terms, this.customer[0].funds);
    this.addFundsForm.reset();
  }

  funds = new FormControl('', [Validators.required]);

  addFundsForm: FormGroup = this.formBuilder.group({
    funds: this.funds
  });
}
