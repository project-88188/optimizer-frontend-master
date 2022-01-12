
import { Component, OnInit ,Output} from '@angular/core';
import { Usercontent } from '../_modules/usercontent/models/usercontent.model';
import { TokenStorageService } from '../_services/token-storage.service';
import { ThemePalette} from '@angular/material/core';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-board-user',
  templateUrl: './board-user.component.html',
  styleUrls: ['./board-user.component.css']
})

export class BoardUserComponent implements OnInit {

 
  currentUserContent:Usercontent={};
  constructor(private tokenStorage:TokenStorageService) { }

  ngOnInit(): void {
    const read = this.tokenStorage.getUser().content;
    this.currentUserContent=JSON.parse(read);
   
  }
 
  tabChangedCount:Number =0;
  OnTabChanged(){
   this.tabChangedCount= Number(this.tabChangedCount)+1;
  }
}
