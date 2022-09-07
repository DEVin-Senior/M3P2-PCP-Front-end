import { Injectable } from '@angular/core';
import { IAlert } from 'src/app/_interfaces/alert/iAlert';
import { ERROR, INFO, QUESTION, SUCCESS, WARNING } from 'src/environments/environment';
import Swal, { SweetAlertIcon } from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class AlertService {

  constructor() { }

  private show(
    titleAlert: string,
    messageAlert: string,
    iconAlert: SweetAlertIcon
  ): void {
    Swal.fire(titleAlert, messageAlert, iconAlert);
  }

  public showGenericAlert(alert: IAlert){
    this.show(alert.title!, alert.message, alert.typeAlert!);
  }

  public showAlertInfo(alert: IAlert) {
    this.show(alert.title!, alert.message, INFO);
  }

  public showAlertSuccess(alert: IAlert) {
    this.show(alert.title!, alert.message, SUCCESS);
  }

  public showAlertError(alert: IAlert) {
    this.show(alert.title!, alert.message, ERROR);
  }

  public showAlertWarning(alert: IAlert) {
    this.show(alert.title!, alert.message, WARNING);
  }

  public showAlertQuestion(alert: IAlert) {
    this.show(alert.title!, alert.message, QUESTION);
  }
}
