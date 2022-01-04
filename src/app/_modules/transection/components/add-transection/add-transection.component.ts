import { Component, OnInit } from '@angular/core';
import { Transection } from '../../models/transection.model';
import { TransectionService } from '../../services/transection.service';

@Component({
  selector: 'app-add-transection',
  templateUrl: './add-transection.component.html',
  styleUrls: ['./add-transection.component.css']
})
export class AddTransectionComponent implements OnInit {

  tutorial: Transection = {
    title: '',
    description: '',
    published: false
  };

  submitted = false;

  constructor(private tutorialService: TransectionService) { }

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
