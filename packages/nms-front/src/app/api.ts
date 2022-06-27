import { environment } from "src/environments/environment";

export const API = {
  auth: {
    login: `${environment.baseApiUrl}/auth/login`,
    me: `${environment.baseApiUrl}/auth/me`
  },
  resources: {
    list: `${environment.baseApiUrl}/nms/resources`,
    get: (id: number) => `${environment.baseApiUrl}/nms/resources/${id}`,
    create: `${environment.baseApiUrl}/nms/resources`,
    update: (id: number) => `${environment.baseApiUrl}/nms/resources/${id}`,
    delete: (id: number) => `${environment.baseApiUrl}/nms/resources/${id}`
  },
  planets: {
    list: `${environment.baseApiUrl}/nms/planets`,
    get: (id: number) => `${environment.baseApiUrl}/nms/planets/${id}`,
    create: `${environment.baseApiUrl}/nms/planets`,
    update: (id: number) => `${environment.baseApiUrl}/nms/planets/${id}`,
    delete: (id: number) => `${environment.baseApiUrl}/nms/planets/${id}`
  },
  galaxies: {
    list: `${environment.baseApiUrl}/nms/galaxies`,
    get: (id: number) => `${environment.baseApiUrl}/nms/galaxies/${id}`,
    create: `${environment.baseApiUrl}/nms/galaxies`,
    update: (id: number) => `${environment.baseApiUrl}/nms/galaxies/${id}`,
    delete: (id: number) => `${environment.baseApiUrl}/nms/galaxies/${id}`
  },
  regions: {
    list: `${environment.baseApiUrl}/nms/regions`,
    get: (id: number) => `${environment.baseApiUrl}/nms/regions/${id}`,
    create: `${environment.baseApiUrl}/nms/regions`,
    update: (id: number) => `${environment.baseApiUrl}/nms/regions/${id}`,
    delete: (id: number) => `${environment.baseApiUrl}/nms/regions/${id}`
  },
  starSystems: {
    list: `${environment.baseApiUrl}/nms/star-systems`,
    get: (id: number) => `${environment.baseApiUrl}/nms/star-systems/${id}`,
    create: `${environment.baseApiUrl}/nms/star-systems`,
    update: (id: number) => `${environment.baseApiUrl}/nms/star-systems/${id}`,
    delete: (id: number) => `${environment.baseApiUrl}/nms/star-systems/${id}`
  }
}
