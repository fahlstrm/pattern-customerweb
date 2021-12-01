import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormControl, FormGroup } from '@angular/forms';
import { Subscription } from 'rxjs';
import { CustomerService } from 'src/app/services/customer.service';


@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  host: {
    class: `grid grid-wrap`
  }, //Added to set grid for the router-outlet components
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {
  customer: any = [];
  customerSubscription: Subscription;

  constructor(
    private formBuilder: FormBuilder,
    public customerService: CustomerService,
  ) { 
    this.customerSubscription = this.customerService.onSetCustomer().subscribe(customer => {
      console.log("kunden", customer)
      this.customer = customer;
    })
  }

  ngOnInit(): void {
  }

  //Place these above constructor or not?
  prepaid = new FormControl('', [Validators.required]);
  invoice = new FormControl('', [Validators.required]);

  paymentTermsForm: FormGroup = this.formBuilder.group({
    prepaid: this.prepaid,
    invoice: this.invoice
  });

  //function to be called once paymentTermsForm is submitted
  paymentTerms() {
    console.log("submitted");
  }


  //and these above constructor?
  amount = new FormControl('', [
    Validators.required,
    Validators.minLength(5)
  ]);

  depositForm: FormGroup = this.formBuilder.group({
    amount: this.amount
  });



}
