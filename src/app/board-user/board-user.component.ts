
import { Component, OnInit ,Output} from '@angular/core';
import { Usercontent } from '../_modules/usercontent/models/usercontent.model';
import { TokenStorageService } from '../_services/token-storage.service';
import { MatTabChangeEvent } from '@angular/material/tabs';
import { ContentStorageService,GUI_MODEL } from '../_services/content-storage.service';

@Component({
  selector: 'app-board-user',
  templateUrl: './board-user.component.html',
  styleUrls: ['./board-user.component.css']
})

export class BoardUserComponent implements OnInit {

 
 public tabChangedCount:Number =0;
 public currTabIndex:any;
 
  currentUserContent:Usercontent={};
  constructor(private tokenStorage:TokenStorageService,
    private contentStorage:ContentStorageService) { }

  ngOnInit(): void {

    const read = this.tokenStorage.getUser().content;
    this.currentUserContent=JSON.parse(read);

    let buttGUI:GUI_MODEL =this.contentStorage.getGUI();
    if(!buttGUI.BUTT_TAB_INDEX)
    {
      this.currTabIndex=0 
     let _buttGUI:GUI_MODEL = {
       BUTT_TAB_INDEX:this.currTabIndex  }
    this.contentStorage.saveGUI(_buttGUI);  }
    else{
      this.currTabIndex=buttGUI.BUTT_TAB_INDEX;   }
  
  }
 
  

  tabChanged = (tabChangeEvent: MatTabChangeEvent): void => {
    let buttGUI:GUI_MODEL = this.contentStorage.getGUI();
    this.currTabIndex=tabChangeEvent.index;
    buttGUI.BUTT_TAB_INDEX=this.currTabIndex;
    this.contentStorage.saveGUI(buttGUI);
   //console.log('tabChangeEvent => ', tabChangeEvent); 
  //  console.log('index => ', tabChangeEvent.index); 
    if(this.currTabIndex==0){
      this.tabChangedCount= Number(this.tabChangedCount)+1;
    }
}

}
