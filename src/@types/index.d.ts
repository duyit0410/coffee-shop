declare global {
  interface IHandleApi {
    onSuccess: (res) => void;
    onError: (error) => void;
  }

  type ISz = 12 | 16 | 20 | 24 | 32;

  interface IUser {
    email: string;
    name: string;
    password?: string;
    birthday: string;
    mobile: string;
    gender: string;
  }
}

export {};
