/* tslint:disable */
/* eslint-disable */
// Generated using typescript-generator version 3.2.1263 on 2025-09-06 17:13:01.

export interface AvailabilityDTO {
    id: number;
    startDate: string;
    endDate: string;
    rentalPeriod: string;
    city: string;
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

export interface PhotoTypeConfigResponse {
    type: string;
    owner: string;
    min: number;
    max: number;
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

export type PhotoType = "VEHICLE_COVER" | "VEHICLE_FRONT" | "VEHICLE_BACK" | "VEHICLE_LEFT" | "VEHICLE_RIGHT" | "VEHICLE_INTERIOR" | "VEHICLE_DASHBOARD" | "VEHICLE_TRUNK" | "VEHICLE_DETAIL" | "USER_PROFILE";
