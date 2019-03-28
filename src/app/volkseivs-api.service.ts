import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { catchError, tap, map } from 'rxjs/operators';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
const apiUrl = "http://192.168.0.4:8080/volksevis/api/";

@Injectable({
  providedIn: 'root'
})
export class VolkseivsAPIService {

  constructor(private http: HttpClient) { }

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    // return an observable with a user-facing error message
    return throwError('Something bad happened; please try again later.');
  }

  private extractData(res: Response) {
    let body = res;
    return body || {};
  }

  getAllServices(): Observable<any> {
    return this.http.get(apiUrl + 'getServices', httpOptions).pipe(
      map(this.extractData),
      catchError(this.handleError));
  }

  postContactInformation(object): Observable<any> {
    object["memberId"] = 682015;
    return this.http.post(apiUrl + 'saveMemberInfo', object, httpOptions).pipe(
      tap((res) => console.log(res)), catchError(this.handleError));
  }

  postbusinessInformation(object): Observable<any> {
    //  object["memberId"] = 682015;
    return this.http.post(apiUrl + 'saveBusinessInfo', object, httpOptions).pipe(
      tap((res) => console.log(res)), catchError(this.handleError));
  }

  // postContactInformation (contactInformation): Observable<any> {
  //   return this.http.post<any>(apiUrl+'saveMemberInfo', contactInformation, httpOptions).pipe(
  //     tap((product: Product) => console.log(`added product w/ id=${product._id}`)),
  //     catchError(this.handleError<Product>('addProduct'))
  //   );
  // }
}
