/* tslint:disable */
/* eslint-disable */
// Generated using typescript-generator version 3.2.1263 on 2025-09-18 20:37:03.

export interface AttachmentDTO {
    fileName: string;
    contentType: string;
    fileUrl: string;
    size: number;
}

export interface AvailabilityDTO {
    id: number;
    startDate: Date;
    endDate: Date;
    city: string;
    pickupLocation: string;
    returnLocation: string;
    vehicleId: number;
    deliveryMethod: DeliveryMethod;
    rentalPeriod: RentalPeriod;
    dailyRate: number;
    weeklyRate: number;
    monthlyRate: number;
}

export interface BookingRequest {
    vehicleId: number;
    availableId: number;
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

export interface MessageDTO {
    id: number;
    body: string;
    sentAt: Date;
    attachments: AttachmentDTO[];
}

export interface MessageThreadDTO {
    conversations: Conversation[];
    recentConversations: RecentConversationDTO[];
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

export interface VehicleRequest {
    id: number;
    title: string;
    brand: string;
    model: string;
    licensePlateNumber: string;
    year: number;
    color: string;
    seats: number;
    vehicleCategory: VehicleCategory;
    fuelType: FuelType;
    specifications: VehicleSpecification[];
    transmission: Transmission;
}

export interface EnumConfiguration {
    label: string;
}

export interface EnumDTO {
    key: string;
    value: string;
}

export interface PhotoTypeConfigResponse {
    type: string;
    owner: string;
    label: string;
    min: number;
    max: number;
}

export interface VehicleBrand {
    id: number;
    brandName: string;
    count: number;
}

export interface VehicleConfigurationResponse {
    brands: VehicleBrand[];
    years: number[];
    conditions: EnumDTO[];
    categories: EnumDTO[];
    transmissions: EnumDTO[];
    brakes: EnumDTO[];
    drivetrians: EnumDTO[];
    fuelTypes: EnumDTO[];
    specifications: EnumDTO[];
    colors: EnumDTO[];
    doors: number[];
    seats: number[];
}

export interface VehicleModelResponse {
    modelId: number;
    name: string;
}

export interface Feedback {
    id: number;
    comment: string;
    authorFirstName: string;
    authorLastName: string;
    creationDate: Date;
    replies: Feedback[];
}

export interface Conversation {
    interlocutor: Interlocutor;
    lastMessage: string;
    lastMessageDate: Date;
}

export interface RecentConversationDTO {
    message: string;
    sentAt: Date;
    interlocutor: Interlocutor;
    attachments: AttachmentDTO[];
}

export interface Interlocutor {
    id: number;
    fullName: string;
    photoUrl: string;
    online: boolean;
}

export type Brake = "DISC" | "DRUM" | "REGENERATIVE" | "ABS";

export type Drivetrian = "FWD" | "RWD" | "AWD" | "OTHER";

export type FuelType = "GASOLINE" | "DIESEL" | "ELECTRIC" | "HYBRID" | "PLUGIN_HYBRID" | "LPG" | "CNG";

export type VehicleColor = "WHITE" | "BLACK" | "RED" | "BLUE" | "SILVER" | "GREY" | "GREEN" | "YELLOW" | "ORANGE" | "BROWN" | "PURPLE";

export type VehicleCondition = "USED" | "NEW";

export type DeliveryMethod = "DELIVERY" | "PICKUP";

export type RentalPeriod = "DAILY" | "WEEKLY" | "MONTHLY";

export type PhotoType = "VEHICLE_COVER" | "VEHICLE_FRONT" | "VEHICLE_BACK" | "VEHICLE_LEFT" | "VEHICLE_RIGHT" | "VEHICLE_INTERIOR" | "VEHICLE_DASHBOARD" | "VEHICLE_TRUNK" | "VEHICLE_DETAIL" | "USER_PROFILE";

export type VehicleCategory = "CONVERTIBLE" | "COUPE" | "SEDAN" | "HATCHBACK" | "SUV" | "WAGON";

export type VehicleSpecification = "AIR_CONDITIONERS" | "KEYLESS" | "PANORAMIC" | "BLUETOOTH" | "AUX" | "TOP_WINDOW" | "SPEAKERS" | "AUTOMATIC_WINDOW" | "USB";

export type Transmission = "MANUAL" | "AUTOMATIC" | "SEMI_AUTOMATIC";
