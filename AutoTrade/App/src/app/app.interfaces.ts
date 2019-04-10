export interface ResponseModel {
  succeeded: boolean;
  errors: string[];
  data: any;
}

export interface User {
  id: string;
  email: string;
  townId?: number;
  userName: string;
  isAdmin: boolean;
  address: string;
  phoneNumber: string;
  emailConfirmed: boolean;
}

export interface Common {
  id: number;
  name: string;
}

export interface AllCommons {
  colors: Common[];
  towns: Common[];
  vehicleTypes: Common[];
  fuelTypes: Common[];
  gearboxTypes: Common[];
}

export interface Vehicle {
  id: string;
  userId?: string;
  url?: string;
  coverImageUrl?: string;
  uploadImages: Image[];

  page: number;
  size: number;

  townId?: number;
  makeId?: number;
  modelId?: number;

  colorId?: number;
  typeId?: number;
  fuelTypeId?: number;
  gearboxTypeId?: number;

  horsePower?: number;
  price?: number;
  cubicCapacity?: number;
  productionDate?: string;
  displayDate?: string;

  airbags?: boolean;
  abs?: boolean;
  esp?: boolean;
  centralLocking?: boolean;
  airConditioning?: boolean;
  autoPilot?: boolean;

  fromCubicCapacity?: number;
  toCubicCapacity?: number;

  fromHorsePower?: number;
  toHorsePower?: number;

  fromPrice?: number;
  toPrice?: number;

  fromProductionDate?: string;
  toProductionDate?: string;
}

export interface VehicleMake {
  id: number;
  name: string;
}

export interface VehicleModel {
  id: number;
  name: string;
  makeId: number;
  vehicleTypeId: number;
}


export interface Image {
  id: number;
  name: string;
  vehidleId: string;
  data: number[];
  url: string;
}
