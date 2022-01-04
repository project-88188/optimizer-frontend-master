import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from '../../models/product.model';
import { ProductService } from '../../services/product.service';

interface pictureInfo {

  Id:any,
  Url:any,
 
}

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})

export class ProductDetailsComponent implements OnInit {

  currentmodel: any = {};
  currentpictureInfos: pictureInfo[] =[];

  message = '';

  constructor(
    private productService: ProductService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.retrieveCurrentProduct(1);
    this.message = '';
  }

  retrieveCurrentProduct(id:any)
  {
    this.productService.get(id).subscribe(data=>{
      this.currentmodel=data;
      console.log(this.currentmodel);
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
