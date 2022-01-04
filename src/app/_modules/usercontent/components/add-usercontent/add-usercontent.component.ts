import { Component, OnInit } from '@angular/core';
import { Usercontent } from '../../models/usercontent.model';
import { UsercontentService } from '../../services/usercontent.service';

@Component({
  selector: 'app-add-usercontent',
  templateUrl: './add-usercontent.component.html',
  styleUrls: ['./add-usercontent.component.css']
})
export class AddUsercontentComponent implements OnInit {

  tutorial: Usercontent = {
    title: '',
    description: '',
    published: false
  };

  submitted = false;

  constructor(private tutorialService: UsercontentService) { }

  ngOnInit(): void {
  }

  saveTutorial(): void {
    const data = {
      title: this.tutorial.title,
      description: this.tutorial.description
    };

    this.tutorialService.create(data)
      .subscribe(
        response => {
          console.log(response);
          this.submitted = true;
        },
        error => {
          console.log(error);
        });
  }

  newTutorial(): void {
    this.submitted = false;
    this.tutorial = {
      title: '',
      description: '',
      published: false
    };
  }

}
