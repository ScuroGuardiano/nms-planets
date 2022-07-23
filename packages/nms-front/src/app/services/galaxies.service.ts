import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { API } from '../api';
import { CreateGalaxyDto, IGalaxy, UpdateGalaxyDto } from '../api-interfaces';

@Injectable({
  providedIn: 'root'
})
export class GalaxiesService {

  constructor(private http: HttpClient) { }

  list(limit = 20, offset = 0) {
    return this.http.get<IGalaxy[]>(API.galaxies.list, {
      params: { limit, offset }
    }).toPromise();
  }

  find() {
    throw new TypeError("Not implemented");
  }

  getById(id: number) {
    return this.http.get<IGalaxy>(API.galaxies.get(id)).toPromise();
  }

  create(galaxyDto: CreateGalaxyDto) {
    return this.http.post<IGalaxy>(API.galaxies.create, { ...galaxyDto }).toPromise();
  }

  update(id: number, galaxyDto: UpdateGalaxyDto) {
    return this.http.put<IGalaxy>(API.galaxies.update(id), { ...galaxyDto }).toPromise();
  }

  delete(id: number) {
    return this.http.delete<void>(API.galaxies.delete(id)).toPromise();
  }
}
