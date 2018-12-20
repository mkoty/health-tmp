export interface AuthResponse {
  token: string;
  user: {
    id: number,
    firstName: string,
    lastName: string
  };
}
