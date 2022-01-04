import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { HttpEventType, HttpResponse } from '@angular/common/http';
import { FileUploadService } from 'src/app/elements/file-upload.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})

export class AddProductComponent implements OnInit {

  model:any ={

    itemname:   "Optimizer-",
    description: "",
    design:  "",
    manufacturer:  "OEM",
    cpu:  "",
    memory:   "",
    rom: "",
    config:   "",
    display: "",
    stock: 0,
    unitprice:  0,
    discount:  0,
    shippingprice:   0,
    shippingdetail: "standard international shipment with tracking number",
    deliverytime:  "1-2 weeks after payment received.",
    published: false

  };

  currentproduct_id?: any;
  
  selectedFiles?: FileList;

  progressInfos: any[] = [];

  message: string[] = [];

  previews: any[] = [];

  submitted = false;

  constructor(
    private productService: ProductService,
    private uploadService: FileUploadService
    ) { }

  ngOnInit(): void {
     this.currentproduct_id=null;

   }

  savePicture(): void { 
    
    if(this.currentproduct_id)
    {
     this.uploadFiles();
    }

    setTimeout(() => {
      this.currentproduct_id=null;
      
    }, 10000);

  }

  saveProduct(): void {
    
    const data = {

      itemname:   this.model.itemname,
      description:  this.model.description,
      design:   this.model.design,
      manufacturer:   this.model.manufacturer,
      cpu:   this.model.cpu,
      memory:    this.model.memory,
      rom:  this.model.rom,
      config:    this.model.config,
      display:   this.model.display,
      stock:  this.model.stock,
      unitprice:   this.model.unitprice,
      discount:   this.model.discount,
      shippingprice:    this.model.shippingprice,
      shippingdetail:   this.model.shippingdetail,
      deliverytime:   this.model.deliverytime,
      published: false
 
    };

    //console.log(data);
    
    this.productService.create(data)
      .subscribe(
        response => {
          console.log(response);
          this.currentproduct_id=response.id;
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
                productId:this.currentproduct_id
              }

              this.uploadService.update(data.id,data).subscribe(data=>{
                console.log(data);
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
