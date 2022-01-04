import { Component, OnInit } from '@angular/core';
import { Solution } from '../../models/solution.model';
import { SolutionService } from '../../services/solution.service';
import { HttpEventType, HttpResponse } from '@angular/common/http';
import { FileUploadService } from 'src/app/elements/file-upload.service';
import { ImageService } from 'src/app/_services/image.service';

interface pictureInfo {

  Id:any,
  Url:any,
 
}

@Component({
  selector: 'app-solutions-list',
  templateUrl: './solutions-list.component.html',
  styleUrls: ['./solutions-list.component.css']
})
export class SolutionsListComponent implements OnInit {

  models: any[] = [];
  currentmodel: any = {};
  currentIndex = -1;
  itemname = '';
  editproductenable=false;

  selectedFiles?: FileList;

  progressInfos: any[] = [];
  
  uploadfilesenable=false;

  message: string[] = [];

  currentpictureInfos: pictureInfo[] =[];
  tempImage:pictureInfo = { Id:0, Url:"" }
  previews: pictureInfo[] = [];

  page = 1;
  count = 0;
  pageSize = 3;
  pageSizes = [3, 6, 9];

  constructor(
    private solutionService: SolutionService,
    private uploadService:FileUploadService,
    private imageService:ImageService,
    ) { }

  ngOnInit(): void {
    this.retrieveProducts();
  }

  getRequestParams(searchItemname: string, page: number, pageSize: number): any {
    let params: any = {};

    if (searchItemname) {
      params[`itemname`] = searchItemname;
    }

    if (page) {
      params[`page`] = page - 1;
    }

    if (pageSize) {
      params[`size`] = pageSize;
    }

    return params;
  }

  retrieveProducts(): void {
    const params = this.getRequestParams(this.itemname, this.page, this.pageSize);

    this.solutionService.getAll(params)
    .subscribe(
      response => {
        const { solutions, totalItems } = response;
        this.models = solutions;
        this.count = totalItems;
      },
      error => {
        console.log(error);
      });
  }

  retrieveCurrentProduct(id:any)
  {
    this.solutionService.get(id).subscribe(data=>{
      this.currentmodel=data;
    //  console.log(this.currentmodel);
    });

    setTimeout(() => {

      if(this.currentmodel)
      {
         
        this.currentpictureInfos=[];
        if(this.currentmodel.images)
        {
          const numberOfImage = this.currentmodel.images.length;
          for(let i=0; i<numberOfImage; i++)
          {
            const arrbuffer = this.currentmodel.images[i].data.data;
            var u8 = new Uint8Array(arrbuffer);
            var _imageurl:any = base64_arraybuffer(u8).then(data =>{

           // console.log('data:image/jpeg;base64,'+data);
              var _image:pictureInfo = {
                Id:this.currentmodel.images[i].id,
                Url:'data:image/jpeg;base64,'+data,
              };

            this.currentpictureInfos.push(_image);
            });
          };
        }
  
      }
  
    }, 2000);

  }

  handlePageChange(event: number): void {
    this.page = event;
    this.retrieveProducts();
  }

  handlePageSizeChange(event: any): void {
    this.pageSize = event.target.value;
    this.page = 1;
    this.retrieveProducts();
  }

  refreshList(): void {
    this.retrieveProducts();
    this.currentmodel = {};
    this.currentIndex = -1;
  }

  setActiveProduct(solution: Solution, index: number): void {

   this.retrieveCurrentProduct(solution.id);
   this.currentIndex = index;
  }

  searchItemName(): void {
    this.page = 1;
    this.retrieveProducts();
  }

  deletePicture(id:any):void {
    if(id)
    {
      this.imageService.delete(id).subscribe(data=>{
        console.log(data)
        for(let i=0; i< this.currentpictureInfos.length; i++)
        if(id==this.currentpictureInfos[i].Id)
             this.currentpictureInfos[i].Url=null;
      });
    }

  }

  savePicture(): void { 
    
    if(this.currentmodel.id)
    {
      this.uploadFiles();
    }

    this.uploadfilesenable=false;

    setTimeout(() => {

      this.previews=[];
      
    
    }, 5000);

  }

  saveProduct(): void {
    
    const data = {

      itemname:   this.currentmodel.itemname,
      description:  this.currentmodel.description,
      serviceperiod:   this.currentmodel.serviceperiod,
      liveoptimizerresult:    this.currentmodel.liveoptimizerresult,
      supervisorrole:   this.currentmodel.supervisorrole,
      unitprice:   this.currentmodel.unitprice,
      discount:   this.currentmodel.discount,
      published: this.currentmodel.published,
 
    };

    this.solutionService.update(this.currentmodel.id,data)
      .subscribe(
        data => {
          this.currentmodel=data;
        },
        error => {
          console.log(error);
        });

  };

  switchPublished():void {
    this.currentmodel.published=!this.currentmodel.published;
  }

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
         var _image:pictureInfo = {
          Id:null,
          Url:e.target.result,
        };
          this.previews.push(_image);
        };

        reader.readAsDataURL(this.selectedFiles[i]);
      }
    }

    this.uploadfilesenable=true;

  };

  upload(idx: number, file: File, imageurl:String): void {
    this.progressInfos[idx] = { value: 0, fileName: file.name };
    if (file) {
      this.uploadService.upload(file).subscribe(
        (event: any) => {
          if (event.type === HttpEventType.UploadProgress) {
            this.progressInfos[idx].value = Math.round(100 * event.loaded / event.total);
          } else if (event instanceof HttpResponse) {

            const data = {
              id:event.body.id,
              solutionId:this.currentmodel.id,
            }

            this.previews[idx].Id=event.body.id;

            this.uploadService.update(data.id,data).subscribe(data=>{
              this.currentpictureInfos.push(this.previews[idx]);
             // console.log(data);
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
        this.upload(i, this.selectedFiles[i],(this.previews[i].Url as string));
      }
     
    }
  };

}


const base64_arraybuffer = async (data:any) => {
  // Use a FileReader to generate a base64 data URI
  const base64url = await new Promise((r) => {
      const reader = new FileReader()
      reader.onload = () => r(reader.result)
      reader.readAsDataURL(new Blob([data]))
  })

  /*
  The result looks like 
  "data:application/octet-stream;base64,<your base64 data>", 
  so we split off the beginning:
  */
  return (base64url as string).split(",", 2)[1];
}