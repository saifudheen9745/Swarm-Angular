import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root',
})
export class ToastCollectionService {
  constructor(private toastr: ToastrService) {}

  errorToast = () => {
    this.toastr.error('Invalid Credentials','', {
      timeOut: 2000,
    });
  };

  successToast = ()=>{
    this.toastr.success('Valid cred',"",{
      timeOut:2000,
      progressAnimation:'decreasing'
    })
  }

  customErrorToast = (err:string)=>{
    this.toastr.error(err, '', {
      timeOut: 2000,
      progressAnimation: 'decreasing',
    });
  }

  customSuccessToast = (msg:string)=>{
    this.toastr.success(msg, '', {
      timeOut: 2000,
      progressAnimation: 'decreasing',
    });
  }

  LoginErrorToast = (err:string)=>{
    this.toastr.error(err, '', {
      timeOut: 2000,
      progressAnimation: 'decreasing',
    });
  }

}
