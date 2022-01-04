import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Usercontent } from '../../models/usercontent.model';
import { UsercontentService } from '../../services/usercontent.service';


@Component({
  selector: 'app-usercontent-details',
  templateUrl: './usercontent-details.component.html',
  styleUrls: ['./usercontent-details.component.css']
})
export class UsercontentDetailsComponent implements OnInit {

  currentUserContent:Usercontent = {
    title: '',
    description: '',
    published: false
  };
  message = '';

  constructor(
    private usercontentService: UsercontentService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.message = '';
    this.getUsercontent(this.route.snapshot.params.id);
  }

  getUsercontent(id: string): void {
    this.usercontentService.get(id)
      .subscribe(
        data => {
          this.currentUserContent = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }

  updatePublished(status: boolean): void {
    const data = {
      title: this.currentUserContent.title,
      description: this.currentUserContent.description,
      published: status
    };

    this.message = '';

    this.usercontentService.update(this.currentUserContent.id, data)
      .subscribe(
        response => {
          this.currentUserContent.published = status;
          console.log(response);
          this.message = response.message ? response.message : 'The status was updated successfully!';
        },
        error => {
          console.log(error);
        });
  }

  updateTutorial(): void {
    this.message = '';

    this.usercontentService.update(this.currentUserContent.id, this.currentUserContent)
      .subscribe(
        response => {
          console.log(response);
          this.message = response.message ? response.message : 'This tutorial was updated successfully!';
        },
        error => {
          console.log(error);
        });
  }

  deleteTutorial(): void {
    this.usercontentService.delete(this.currentUserContent.id)
      .subscribe(
        response => {
          console.log(response);
          this.router.navigate(['/tutorials']);
        },
        error => {
          console.log(error);
        });
  }

}
