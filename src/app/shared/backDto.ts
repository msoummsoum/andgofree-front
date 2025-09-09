/* tslint:disable */
/* eslint-disable */
// Generated using typescript-generator version 3.2.1263 on 2025-09-08 22:24:27.

export interface AvailabilityDTO {
    id: number;
    startDate: string;
    endDate: string;
    rentalPeriod: string;
    city: string;
}

export interface FeedbackRequest {
    parentId: number;
    bookingId: number;
    comment: string;
    rating: Rating;
}

export interface FeedbackResponse {
    rating: Rating;
    feedbacks: Feedback[];
}

export interface FileInfo {
    location: string;
    fileName: string;
    size: number;
    contentType: string;
}

export interface PhotoRequest {
    id: number;
    originalFileName: string;
    description: string;
    photoType: PhotoType;
    contentType: string;
    size: number;
    fileContent: any;
}

export interface PhotoResponse {
    url: string;
    description: string;
}

export interface Rating {
    rating: number;
    serviceRating: number;
    locationRating: number;
    valueForMoneyRating: number;
    facilitiesRating: number;
    cleanlinessRating: number;
}

export interface User {
    id: number;
    firstName: string;
    lastName: string;
    birthDate: Date;
    cityOfBirth: string;
    country: string;
    address: string;
    phoneNumber: string;
    verified: boolean;
}

/**
 * Represents a user.
 */
export interface UserRequest {
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    birthDate: Date;
    cityOfBirth: string;
    country: string;
    address: string;
    phoneNumber: string;
    verified: boolean;
}

export interface VehicleDTO {
    id: number;
    title: string;
    brand: string;
    model: string;
    licensePlateNumber: string;
    year: number;
    color: string;
    seats: number;
    dailyRate: number;
    weeklyRate: number;
    monthlyRate: number;
}

export interface JsonSerializableEnum {
}

export interface PhotoTypeConfigResponse {
    type: string;
    owner: string;
    min: number;
    max: number;
}

export interface VehicleBrand {
    id: number;
    brandName: string;
}

export interface VehicleConfigurationResponse {
    brands: VehicleBrand[];
    years: number[];
    conditions: VehicleCondition[];
    categories: VehicleCategory[];
    transmissions: Transmission[];
    fuelTypes: FuelType[];
    doors: number[];
    seats: number[];
    brakes: Brake[];
    drivetrians: Drivetrain[];
}

export interface VehicleModelResponse {
    brandId: number;
    model: string;
    motorization: string;
}

export interface Feedback {
    id: number;
    comment: string;
    authorFirstName: string;
    authorLastName: string;
    creationDate: Date;
    replies: Feedback[];
}

export interface Brand {
  id: number;
  brandName: string;
}

export interface VehicleCondition {
  key: string;
  value: string;
}

export interface Transmission {
  key: string;
  value: string;
}

export interface FuelType {
  key: string;
  value: string;
}

export interface Brake {
  key: string;
  value: string;
}

export interface Drivetrain {
  key: string;
  value: string;
}

export type PhotoType = "VEHICLE_COVER" | "VEHICLE_FRONT" | "VEHICLE_BACK" | "VEHICLE_LEFT" | "VEHICLE_RIGHT" | "VEHICLE_INTERIOR" | "VEHICLE_DASHBOARD" | "VEHICLE_TRUNK" | "VEHICLE_DETAIL" | "USER_PROFILE";

export type VehicleCategory = "CONVERTIBLE" | "COUPE" | "SEDAN" | "EV" | "HATCHBACK" | "LUXURY" | "SUV" | "WAGON";

