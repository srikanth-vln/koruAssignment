import { Injectable } from '@angular/core';
import { IndividualConfig, ToastRef, ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class ToasterService {

  iconClasses = {
    error: 'toast-error',
    info: 'toast-info',
    success: 'toast-success',
    warning: 'toast-warning',
  };

  config = {
    closeButton : true,
    positionClass : 'toast-bottom-right',
    progressBar : true,
  }
  constructor(private toaster : ToastrService) {
  }

  success(message: any,title: any) {
    this.toaster.success(message,title,this.config)
  }

}
