export type Option = {
    id: number;
    name: string;
};
export interface IRegisterData{
    label: string,
    name:string,
    type:string,
    placeholder:string,
}
export interface IRegister{
    name:string,
    email:string,
    password:string,
    password_confirmation:string
    phone:string,
    city_id:string,
    d_o_d:string,
    last_donation_date:string,
    blood_type_id:string,
    governorate_id:string,
    [key: string]: string;
  }

  interface Client {
    name: string;
    email: string;
    phone: string;
    d_o_b: string; 
    city_id: string; 
    blood_type_id: string; 
    last_donation_date: string;
}

interface ClientData {
    api_token: string;
    client: Client;
}

export  interface ApiResponse {
    status: 1 | 0;
    message: "client created successfully" | string;
    data: ClientData;
}