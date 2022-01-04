import { Component, OnInit } from '@angular/core';
import { FileUploadService } from 'src/app/elements/file-upload.service';
import { HttpEventType, HttpResponse } from '@angular/common/http';
import { SolutionService } from '../../services/solution.service';

@Component({
  selector: 'app-add-solution',
  templateUrl: './add-solution.component.html',
  styleUrls: ['./add-solution.component.css']
})
export class AddSolutionComponent implements OnInit {

  model:any ={

    itemname:   "Member-",
    description: "",
    serviceperiod:  "",
    liveoptimizerresult: "",
    supervisorrole:  "",
    unitprice:  0,
    discount:  0,
    published: false

  };

  currentsolution_id?: any;
  
  selectedFiles?: FileList;

  progressInfos: any[] = [];

  message: string[] = [];

  previews: any[] = [];

  submitted = false;

  constructor(
    private solutionService: SolutionService,
    private uploadService: FileUploadService
    ) { }

  ngOnInit(): void {
     this.currentsolution_id=null;

   }

  savePicture(): void { 
    
    if(this.currentsolution_id)
    {
     this.uploadFiles();
    }

    setTimeout(() => {
      this.currentsolution_id=null;
      
    }, 10000);

  }

  saveSolution(): void {
    
    const data = {

      itemname:   this.model.itemname,
      description:  this.model.description,
      serviceperiod:   this.model.serviceperiod,
      liveoptimizerresult:    this.model.liveoptimizerresult,
      supervisorrole:   this.model.supervisorrole,
      unitprice:   this.model.unitprice,
      discount:   this.model.discount,
      published: false
 
    };

    this.solutionService.create(data)
      .subscribe(
        response => {
        //  console.log(response);
          this.currentsolution_id=response.id;
        },
        error => {
          console.log(error);
        });

  };

    selectFiles(event: any): void {
      this.message = [];
      this.progressInfos = [];
      this.selectedFiles = event.target.files;
  
      this.previews = [];

      if (this.selectedFiles && this.selectedFiles[0]) {
        const numberOfFiles = this.selectedFiles.length;
        for (let i = 0; i < numberOfFiles; i++) {
          const reader = new FileReader();
  
          reader.onload = (e: any) => {
            // console.log(e.target.result);
            this.previews.push(e.target.result);
          };
  
          reader.readAsDataURL(this.selectedFiles[i]);
        }
      }
    };

    upload(idx: number, file: File): void {
      this.progressInfos[idx] = { value: 0, fileName: file.name };
      if (file) {
        this.uploadService.upload(file).subscribe(
          (event: any) => {
            if (event.type === HttpEventType.UploadProgress) {
              this.progressInfos[idx].value = Math.round(100 * event.loaded / event.total);
            } else if (event instanceof HttpResponse) {

              const data = {
                id:event.body.id,
                solutionId:this.currentsolution_id
              }

              this.uploadService.update(data.id,data).subscribe(data=>{
              //  console.log(data);
                },
                error => {
                  console.log(error);
                });
                
              const msg = 'Uploaded the file successfully: ' + file.name;
              this.message.push(msg);
              
            }
          },
          (err: any) => {

            this.progressInfos[idx].value = 0;
            const msg = 'Could not upload the file: ' + file.name;
            this.message.push(msg);

          });
      }
    };
  
    uploadFiles(): void {
      this.message = [];

      if (this.selectedFiles) {
        for (let i = 0; i < this.selectedFiles.length; i++) {
          this.upload(i, this.selectedFiles[i]);
        }
      }
    };

}
