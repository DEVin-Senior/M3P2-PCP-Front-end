import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { iAllocation } from "src/app/_interfaces/allocation/iAllocation";
import { environment } from "src/environments/environment";

@Injectable()
export class AllocationService {

    private url:string = environment.apiBaseURL;

    constructor(
        private httpClient: HttpClient
    ){}

    public getAllocationItems() : Observable<iAllocation>{
        return this.httpClient.get<iAllocation>(`${this.url}allocation/allocationlist`).pipe(
            (res) => res,
            (error) => error
        )
    }    
}