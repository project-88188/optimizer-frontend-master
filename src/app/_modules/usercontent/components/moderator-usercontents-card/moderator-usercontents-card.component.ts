import { Component, OnInit } from '@angular/core';
import { ContentStorageService } from '../../../../_services/content-storage.service'; 

@Component({
  selector: 'app-moderator-usercontents-card',
  templateUrl: './moderator-usercontents-card.component.html',
  styleUrls: ['./moderator-usercontents-card.component.css']
})
export class ModeratorUsercontentsCardComponent implements OnInit {

  currentUserContent?:any;
  constructor(private contentStorageService: ContentStorageService) { }

  ngOnInit(): void {
    this.currentUserContent =this.contentStorageService.getContent();
    console.log(JSON.stringify(this.currentUserContent));
  }

}
