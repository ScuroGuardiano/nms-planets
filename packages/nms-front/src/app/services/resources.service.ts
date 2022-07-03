import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { API } from '../api';
import { CreateResourceDto, IResource, UpdateResourceDto } from '../api-interfaces';

@Injectable({
  providedIn: 'root'
})
export class ResourcesService {
  constructor(private http: HttpClient) { }

  list() {
    // There's not much resources in the game so I want to load them all.
    const limit = 1337;

    return this.http.get<IResource[]>(API.resources.list, {
      params: { limit }
    }).toPromise();
  }

  find() {
    throw new TypeError("Not implemented");
    // TODO: implement this :)
  }

  getById(id: number) {
    return this.http.get<IResource>(API.resources.get(id)).toPromise();
  }

  create(resourceDto: CreateResourceDto) {
    return this.http.post<IResource>(API.resources.create, { ...resourceDto }).toPromise();
  }

  update(id: number, resourceDto: UpdateResourceDto) {
    return this.http.put<IResource>(API.resources.update(id), { ...resourceDto }).toPromise();
  }

  delete(id: number) {
    return this.http.delete<void>(API.resources.delete(id)).toPromise();
  }
}
