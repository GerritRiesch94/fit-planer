export interface AthleteData {
  title: string | null;
  firstName: string | null;
  lastName: string | null;
  age: string | null;
  gender: string | null;
  address: Address;
  email: string | null;
  phoneNumber: string | null;
}

export interface Address {
  street: string | null;
  addressAppendix?: string | null;
  postCode: string | null;
  city: string | null;
  state?: string | null;
  country: string | null;
}
