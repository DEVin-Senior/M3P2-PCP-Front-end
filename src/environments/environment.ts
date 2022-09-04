// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

import { SweetAlertIcon } from "sweetalert2";

export const environment = {
  production: false
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
//Trocar para URL do Endpoint
export const API_BASE = "http://localhost:8080";

//Alerts
export const INFO = <SweetAlertIcon>'info';
export const SUCCESS = <SweetAlertIcon>'success';
export const ERROR = <SweetAlertIcon>'error';
export const WARNING = <SweetAlertIcon>'warning';
export const QUESTION = <SweetAlertIcon>'question';