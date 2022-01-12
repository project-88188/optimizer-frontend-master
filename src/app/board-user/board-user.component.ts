
import { Component, OnInit ,Output} from '@angular/core';
import { Usercontent } from '../_modules/usercontent/models/usercontent.model';
import { TokenStorageService } from '../_services/token-storage.service';
import { MatTabChangeEvent } from '@angular/material/tabs';

@Component({
  selector: 'app-board-user',
  templateUrl: './board-user.component.html',
  styleUrls: ['./board-user.component.css']
})

export class BoardUserComponent implements OnInit {

 
 public tabChangedCount:Number =0;
 
  currentUserContent:Usercontent={};
  constructor(private tokenStorage:TokenStorageService) { }

  ngOnInit(): void {
    const read = this.tokenStorage.getUser().content;
    this.currentUserContent=JSON.parse(read);
   
  }
 
  

  tabChanged = (tabChangeEvent: MatTabChangeEvent): void => {
   //console.log('tabChangeEvent => ', tabChangeEvent); 
  //  console.log('index => ', tabChangeEvent.index); 
    if(tabChangeEvent.index==0){
      this.tabChangedCount= Number(this.tabChangedCount)+1;
    }
}

}
