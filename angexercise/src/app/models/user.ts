export interface User {
  id?: number;
  name: string;
  surname : string;
  age?: number;
  dateOfBirth?: string;
  address?: Address;
  role?: Role;
  username?: string;
  profilePhotoUrl?: string;
  companies?: Company[];
  gender?: Gender;
}

export interface Address {
  city: string;
  street: string;
  postalCode: string;
}

export interface Company {
  id: number;
  name: string;
  description: string;
  location: Address;
}

export enum Role {
  staff = 'staff',
  student = 'student',
  manager = 'manager',
  admin = 'admin',
}

export enum Gender {
  male = 'male',
  female = 'female',
  other = 'other',
}
