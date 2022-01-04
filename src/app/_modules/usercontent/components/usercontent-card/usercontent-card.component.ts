import { Component, OnInit,Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-usercontent-card',
  templateUrl: './usercontent-card.component.html',
  styleUrls: ['./usercontent-card.component.css']
})
export class UsercontentCardComponent implements OnInit {
  
  constructor(private router: Router) { }

    @Input()
    currentUserContent: any;

    ngOnInit(): void {

      setTimeout(() => {
        if(!this.currentUserContent) {
          this.router.navigateByUrl('login')
          .then(() => {
            window.location.reload();
          });
        }}, 10000);
  }
}
