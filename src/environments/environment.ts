import { SweetAlertIcon } from "sweetalert2";

export const environment = {
  production: false,
  apiBaseURL: '/api/', 
  clientId: 'b5ba8562-289a-11ed-a261-0242ac120002',
  clientSecret: 'c7d119e6-7503-4693-8f92-0163f48cac49',
  tokenUrl: 'oauth/token'
};

//Trocar para URL do Endpoint
export const API_BASE = "/api/";

//Alerts
export const INFO = <SweetAlertIcon>'info';
export const SUCCESS = <SweetAlertIcon>'success';
export const ERROR = <SweetAlertIcon>'error';
export const WARNING = <SweetAlertIcon>'warning';
export const QUESTION = <SweetAlertIcon>'question';