import { Injectable } from '@angular/core';
import { CoreModule } from '../core.module';
import { environment } from '../../../environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: CoreModule
})
export class SteamService {

  private headers = new HttpHeaders().set('Content-Type', 'application/json');

  readonly baseApi: string = `${environment.baseURL}`;

  constructor(private httpClient: HttpClient) { }


  public getOwnedGames(){
    return this.httpClient.get(`${this.baseApi}steam/`, {headers: this.headers})
  }


}
