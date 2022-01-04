
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CustomClass {

    constructor(private http:HttpClient) {}

    static toNewLineString(input: string) {
      var lines = input.split('\\n');
      var output = "";
      lines.forEach(element => {
        output += element + "\n";
      });
      
      return output; 
    }

    getIPAddress()
    {
     let ipAddress="1227.0.0.1";
      this.http.get("http://api.ipify.org/?format=json").subscribe((res:any)=>{
       ipAddress = res.ip;
      });
      return ipAddress;
    }

}




