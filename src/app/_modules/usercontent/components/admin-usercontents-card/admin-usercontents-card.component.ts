import { Component, OnInit } from '@angular/core';
import { ContentStorageService } from '../../../../_services/content-storage.service'; 

@Component({
  selector: 'app-admin-usercontents-card',
  templateUrl: './admin-usercontents-card.component.html',
  styleUrls: ['./admin-usercontents-card.component.css']
})
export class AdminUsercontentsCardComponent implements OnInit {

  currentUserContent?:any;
  constructor(private contentStorageService: ContentStorageService) { }

  ngOnInit(): void {
  
    console.log(JSON.stringify(this.currentUserContent));
  }

}
