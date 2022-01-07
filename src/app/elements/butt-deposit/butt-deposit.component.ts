
import { Component, OnInit,Input } from '@angular/core';
import { TokenStorageService } from 'src/app/_services/token-storage.service';
import { ElementsService } from '../elements.service';

@Component({
  selector: 'app-butt-deposit',
  templateUrl: './butt-deposit.component.html',
  styleUrls: ['./butt-deposit.component.css']
})
export class ButtDepositComponent implements OnInit {

  form: any = {
    amount: null,
    paypalaccount: this.tokenStorage.getUser().email
  };

  @Input()
    currentUserContent: any;

  result:any;
  submitted = false;
  successed = false;
  constructor(private elementsService:ElementsService,
    private tokenStorage:TokenStorageService) { }

  ngOnInit(): void {

   }

  onSubmit() {

    if(this.tokenStorage.getToken())
    {


      this.elementsService.create_empty().subscribe(value => { 

        console.log(value);

        const data:any = {
          username:this.currentUserContent.username,
          amount:this.form.amount,
          paymentmethod:"PAYPAL",
          paymentdetail:this.form.paypalaccount,
          published:false,
          transectionstatus:"created",
          transectiontype:"deposit"
        }
    
        this.elementsService.update(value.id,data).subscribe(count => { 
          console.log(count)
          if(count)
            this.elementsService.read(value.id).subscribe(data => { 
              console.log(data);
            });
        });
      });


  
      this.submitted=true;
  
      setTimeout(() => {
        this.submitted=false;
        this.successed=true;
      }, 10000);
  
    }

  }
}
