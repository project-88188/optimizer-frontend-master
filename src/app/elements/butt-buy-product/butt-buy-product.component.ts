import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-butt-buy-product',
  templateUrl: './butt-buy-product.component.html',
  styleUrls: ['./butt-buy-product.component.css']
})
export class ButtBuyProductComponent implements OnInit {
  submitted = false;

  @Input()
  currentUserContent: any;

  constructor() { }

  ngOnInit(): void {
  }

  OnButtClick(){ this.submitted=!this.submitted;}

  OnSubmitClick()
  {
    this.submitted=false;
  }

}
