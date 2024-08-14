export interface userData {
  id: number;
  username: string;
  firstName: string;
  lastName: string;
  email: string;
  gender: "female" | "male";
  image: string;
  refreshToken: string;
  token: string;
}

export interface loginData {
  username: string;
  password: string;
}
