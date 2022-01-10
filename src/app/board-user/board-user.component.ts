
import { Component, OnInit } from '@angular/core';
import { Usercontent } from '../_modules/usercontent/models/usercontent.model';
import { TokenStorageService } from '../_services/token-storage.service';


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
}
