import {Injectable} from '@angular/core';
import {Observable} from "rxjs";
import {HttpClient, HttpHeaders, HttpParams} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class GenericHttpClient<T> {
  constructor(private httpClient: HttpClient) {
  }

  /**
   * @description
   * Generic Http GET method to Get the response and bind to the view model
   * @param {string} destinationUrl endPoint it doesn't need / in front of the end point.
   * @param {any} options options of the request like headers, body, etc.
   * @returns {Observable<T>}
   * @usageNotes
   * The following snippet shows how to use this method
   * ```ts
   *    this.genericHttpService.Get("get_url").subscribe(data => {
   *        console.log('success');
   *      }, error => {
   *      console.log(error);
   *      });
   * ```
   */
  get(destinationUrl: string, options?: { headers?: HttpHeaders; params?: HttpParams }): Observable<T> {
    return this.httpClient.get<T>(destinationUrl, options);
  }
}
