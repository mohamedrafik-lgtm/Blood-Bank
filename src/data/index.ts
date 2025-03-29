import { IRegisterData, Option } from '@/interface/index'
export const BloodType: Option[] = [
    { id: 1, name: 'A+' },
    { id: 2, name: 'A-' },
    { id: 3, name: 'B+' },
    { id: 4, name: 'B-' },
    { id: 5, name: 'AB+' },
    { id: 6, name: 'AB-' },
    { id: 7, name: 'O+' },
    { id: 8, name: 'O-' },
  ];

export const governorate:Option[] = [
    { id: 1, name: 'Cairo' },
    { id: 2, name: 'Giza' },
    { id: 3, name: 'Alexandria' },
    { id: 4, name: 'Sharqia' },
    { id: 5, name: 'Dakahlia' },
    { id: 6, name: 'Beheira' },
    { id: 7, name: 'Qalyubia' },
    { id: 8, name: 'Monufia' },
    { id: 9, name: 'Gharbia' },
    { id: 10, name: 'Fayoum' },
    { id: 11, name: 'Kafr El Sheikh' },
    { id: 12, name: 'Minya' },
    { id: 13, name: 'Asyut' },
    { id: 14, name: 'Sohag' },
    { id: 15, name: 'Qena' },
    { id: 16, name: 'Aswan' },
    { id: 17, name: 'Luxor' },
    { id: 18, name: 'Red Sea' },
    { id: 19, name: 'New Valley' },
    { id: 20, name: 'Matrouh' },
    { id: 21, name: 'North Sinai' },
    { id: 22, name: 'South Sinai' },
    { id: 23, name: 'Port Said' },
    { id: 24, name: 'Ismailia' },
    { id: 25, name: 'Damietta' },
    { id: 26, name: 'Suez' }
  ];

  export const RegisterData:IRegisterData[]=[
   {
    label:'username',
    name:"name",
    placeholder:"Enter name hear",
    type:"text"
   },
   {
    label:'Email',
    name:"email",
    placeholder:"Enter email hear",
    type:"text"
   },
   {
    label:'password',
    name:"password",
    placeholder:"Enter password hear",
    type:"password"
   },
   {
    label:'password confirmation',
    name:"password_confirmation",
    placeholder:"Enter password confirmation hear",
    type:"password"
   },
   {
    label:'phone',
    name:"phone",
    placeholder:"Enter phone hear",
    type:"text"
   },
   {
    label:'city id',
    name:"city_id",
    placeholder:"Enter city id hear",
    type:"text"
   },
   {
    label:'D O D',
    name:"d_o_d",
    placeholder:"Enter D O D hear",
    type:"text"
   },
   {
    label:'last donation date',
    name:"last_donation_date",
    placeholder:"Enter last donation date hear",
    type:"text"
   },
   
   {
    label:'blood type id',
    name:"blood_type_id",
    placeholder:"Enter blood type id hear",
    type:"text"
   },
   {
    label:'governorate id',
    name:"governorate_id",
    placeholder:"Enter governorate id hear",
    type:"text"
   },
  ]

  