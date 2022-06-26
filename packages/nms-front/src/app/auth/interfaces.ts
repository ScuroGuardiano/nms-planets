export interface ILoginDto {
  username: string;
  password: string;
}

export interface ILoginResponse {
  accessToken: string;
}

export interface IUser {
  id: string;
  username: string;
}
