import { Component } from '@angular/core';
import { UserService } from '../user.service';
import{
FormBuilder,FormGroup,Validators,AbstractControl}from '@angular/forms'
;
import { Geolocation } from '@ionic-native/geolocation/ngx';
import { NativeGeocoder, NativeGeocoderOptions, NativeGeocoderResult } from '@ionic-native/native-geocoder/ngx';
import { Camera} from '@ionic-native/camera/ngx';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  imageUrl:any;
  user: any;
 
  address: string;
  latitude: number;
longitude: number;
accuracy: number;


  geoencoderOptions: NativeGeocoderOptions = {
    useLocale: true,
    maxResults: 5
  };

  formgroup:FormGroup;
  phone:AbstractControl;
  email:AbstractControl;

  constructor(private userService: UserService,private camera:Camera,private geolocation: Geolocation,
    private nativeGeocoder: NativeGeocoder,public formbuilder:FormBuilder) { 
      this.formgroup=formbuilder.group({
        phone:['',Validators.required],
        email:['',Validators.required]
      });
      this.phone=this.formgroup.controls['phone'];
      this.email=this.formgroup.controls['email'];
    }

  ngOnInit() {
    this.user = this.userService;
    
    
  
  }

  getcamera(){
    this.camera.getPicture({
      sourceType:this.camera.PictureSourceType.CAMERA,
      destinationType:this.camera.DestinationType.DATA_URL
    }).then((res)=>{
      this.imageUrl='data:image/jpeg;base64,'+res;
      this.userService.setimage(this.imageUrl);
    })

  }
  getgallery(){
    this.camera.getPicture({
      sourceType:this.camera.PictureSourceType.PHOTOLIBRARY,
      destinationType:this.camera.DestinationType.DATA_URL
    }).then((res)=>{
      this.imageUrl='data:image/jpeg;base64,'+res;
      this.userService.setimage(this.imageUrl);
    })

  }

    getGeolocation() {
      this.geolocation.getCurrentPosition().then((resp) => {
    
        this.latitude = resp.coords.latitude;
        this.longitude = resp.coords.longitude;
        this.accuracy = resp.coords.accuracy;
    
        this.getGeoencoder(resp.coords.latitude, resp.coords.longitude);
    
      }).catch((error) => {
        alert('Error getting location' + JSON.stringify(error));
      });
    }
    
    //geocoder method to fetch address from coordinates passed as arguments
    getGeoencoder(latitude, longitude) {
      this.nativeGeocoder.reverseGeocode(latitude, longitude, this.geoencoderOptions)
        .then((result: NativeGeocoderResult[]) => {
          this.address = this.generateAddress(result[0]);
          this.userService.setaddr(this.address);
        })
        .catch((error: any) => {
          alert('Error getting location' + JSON.stringify(error));
        });
    }
    
    //Return Comma saperated address
    generateAddress(addressObj) {
      let obj = [];
      let address = "";
      for (let key in addressObj) {
        obj.push(addressObj[key]);
      }
      obj.reverse();
      for (let val in obj) {
        if (obj[val].length)
          address += obj[val] + ', ';
      }
      return address.slice(0, -2);
    }
  //   submit(){
  

  // console.log(po);
  // this.formgroup.reset();
  //   }
    


  }
  // oncl(a,b,c){
  //   a.value="";
  //   b.value="";
  //   c.value="";
    

    
  // }
