import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Global } from './global';
import { Project } from '../models/project.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {
  public url: string;

  constructor(
    private httpClient: HttpClient
  ) {
    this.url = Global.url;
  }

  saveProject(project: Project): Observable<any>
  {
    const params = JSON.stringify(project);
    const httpHeaders = new HttpHeaders().set('Content-Type', 'application/json');

    return this.httpClient.post(this.url + 'project/saveProject', params, {headers: httpHeaders});

  }
}
