import { HttpClient } from '@angular/common/http';
import { EventEmitter, Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { ILoginResponse, IUser } from './interfaces';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  private accessToken?: string | null;
  private _user?: IUser | null;

  private set user(v: IUser | undefined | null) {
    this._user = v;
    this._user$.emit(this._user);
  }
  private get user() {
    return this._user;
  }

  private _user$ = new EventEmitter<IUser | null>();
  public get user$() {
    return this._user$;
  }

  readonly resources = {
    login: `${environment.baseApiUrl}/auth/login`,
    me: `${environment.baseApiUrl}/auth/me`
  }

  getAccessToken() {
    return this.accessToken;
  }

  getUser() {
    return this.user;
  }

  async login(username: string, password: string) {
    const res = await this.http.post<ILoginResponse>(
      this.resources.login,
      { username, password }
    ).toPromise();

    this.accessToken = res.accessToken;
    this.saveAccessToken(this.accessToken);
    await this.loadUser();
  }

  logout() {
    // TODO: Some JWT blacklisting would be nice on the server ^^
    this.resetSession();
  }

  async retrieveSession() {
    const accessToken = this.retrieveAccessToken();
    if (!accessToken) {
      return false;
    }
    this.accessToken = accessToken;
    await this.loadUser();
    return true;
  }

  async isLoggedIn() {
    if (this.user) {
      return true;
    }

    try {
      this.accessToken = this.retrieveAccessToken();
      if (this.accessToken) {
        await this.loadUser();
        return true;
      }
    }
    catch(err) {
      // TODO: check if 401
      this.resetSession();
      return false;
    }

    return false;
  }

  private async loadUser() {
    if (!this.accessToken) {
      throw new Error("Access token is not set.");
    }

    // Interceptor handles auth here
    const user = await this.http.get<IUser>(this.resources.me).toPromise();

    this.user = user;
  }


  private saveAccessToken(accessToken: string) {
    localStorage.setItem("accessToken", accessToken);
  }
  private retrieveAccessToken() {
    return localStorage.getItem("accessToken");
  }

  private resetSession() {
    this.accessToken = null;
    this.user = undefined;
    localStorage.removeItem("accessToken");
  }
}
