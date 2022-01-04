import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-butt-buy-solution',
  templateUrl: './butt-buy-solution.component.html',
  styleUrls: ['./butt-buy-solution.component.css']
})
export class ButtBuySolutionComponent implements OnInit {
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
