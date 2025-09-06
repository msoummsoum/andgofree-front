export interface routerlink {
  url: string;
}
export interface pageSelection {
  skip: number;
  limit: number;
}
export interface apiResultFormat {
  data: Array<any>;
  totalData: number;
}

export interface popularCars1 {
  carName: string;
  img1: string;
  img2: string;
  carModel: string;
  rating: string;
  carDetail1: string;
  carDetail2: string;
  carDetail3: string;
  carDetail4: string;
  carDetail5: string;
  carDetail6: string;
  country: string;
  price: string;
  heading: string;
  text: string;
  like: boolean;
}
export interface popularCars2 {
  carName: string;
  img1: string;
  img2: string;
  carModel: string;
  rating: string;
  carDetail1: string;
  carDetail2: string;
  carDetail3: string;
  carDetail4: string;
  carDetail5: string;
  carDetail6: string;
  country: string;
  price: string;
  heading: string;
  text: string;
  like: boolean;
}
export interface popularCars3 {
  carName: string;
  img1: string;
  img2: string;
  carModel: string;
  rating: string;
  carDetail1: string;
  carDetail2: string;
  carDetail3: string;
  carDetail4: string;
  carDetail5: string;
  carDetail6: string;
  country: string;
  price: string;
  heading: string;
  text: string;
  like: boolean;
}
export interface popularCars4 {
  carName: string;
  img1: string;
  img2: string;
  carModel: string;
  rating: string;
  carDetail1: string;
  carDetail2: string;
  carDetail3: string;
  carDetail4: string;
  carDetail5: string;
  carDetail6: string;
  country: string;
  price: string;
  heading: string;
  text: string;
  like: boolean;
}
export interface popularCars5 {
  carName: string;
  img1: string;
  img2: string;
  carModel: string;
  rating: string;
  carDetail1: string;
  carDetail2: string;
  carDetail3: string;
  carDetail4: string;
  carDetail5: string;
  carDetail6: string;
  country: string;
  price: string;
  heading: string;
  text: string;
  like: boolean;
}
export interface popularCars6 {
  carName: string;
  img1: string;
  img2: string;
  carModel: string;
  rating: string;
  carDetail1: string;
  carDetail2: string;
  carDetail3: string;
  carDetail4: string;
  carDetail5: string;
  carDetail6: string;
  country: string;
  price: string;
  heading: string;
  text: string;
  like: boolean;
}
export interface recommendedCar {
  img: string;
  text: string;
  carModel: string;
  heading: string;
  name: string;
  carDetail1: string;
  carDetail2: string;
  carDetail3: string;
  carDetail4: string;
  carDetail5: string;
  carDetail6: string;
  title: string;
}
export interface testimonial {
  img: string;
  Name: string;
  rating: string;
  para: string;
}
export interface carTypes {
  img: string;
  heading: string;
  cars: string;
}
export interface vehicleDetails {
  img: string;
}
export interface testimonials {
  name: string;
  location:string;
  title: string;
  content: string;


}
export interface thumbnails1 {
  img: string;
}

export interface thumbnails {
  img: string;
}
export interface interestedCars {
  carName: string;
  img1: string;
  img2: string;
  carModel: string;
  rating: string;
  carDetail1: string;
  carDetail2: string;
  carDetail3: string;
  carDetail4: string;
  carDetail5: string;
  carDetail6: string;
  country: string;
  price: string;
  heading: string;
  text: string;
  like: boolean;
}
export interface vehicleGrid {
  carName: string;
  img1: string;
  img2: string;
  carModel: string;
  rating: string;
  carDetail1: string;
  carDetail2: string;
  carDetail3: string;
  carDetail4: string;
  carDetail5: string;
  carDetail6: string;
  country: string;
  price: string;
  heading: string;
  text: string;
  like: boolean;
}
export interface header {
  tittle: string;
  showAsTab: boolean;
  separateRoute: boolean;
  routes?: string;
  hasSubRoute?: boolean;
  showSubRoute?: boolean;
  menu?: menu[];
  img?:string;
  base?: string;
}
export interface menu {
  menuValue: string;
  routes?: string;
  hasSubRoute: boolean;
  showSubRoute: boolean;
  subMenus?: submenu[];
  page1?: string;
  page2?: string;
  page3?: string;
  page4?: string;
  page5?: string;
  page6?: string;
  page7?: string;
  page8?: string;
  page9?: string;
  page10?: string;
  page11?: string;
  img?:string;
  badge?:string;
}
export interface submenu {
  menuValue: string;
  routes: string;
  hasSubRoute: boolean;
  showSubRoute: boolean;
  page1?: string;
  page2?: string;
  page3?: string;
  page4?: string;
  page5?: string;
  page6?: string;
  page7?: string;
  page8?: string;
  page9?: string;
  page10?: string;
  page11?: string;
  subMenus: [];
}
export interface carousel {
  img: string;
  Name: string;
  rating: string;
  para: string;
}
export interface userPayment {
    id: number;
    bookingID: string;
    carName: string;
    paidOn: string;
    mode: string;
    total: string;
    status: string;
    img:string;
    feature: string;
    isSelected: boolean;
  }
  export interface userReview {
    id: number;
    carName: string;
    rentalType: string;
    review: string;
    ratings: string;
    img: string;
    feature: string;
    isSelected: boolean;
    rating: string;
  }
  export interface userWallet {
    id: number;
    refId: string;
    transactionFor: string;
    date: string;
    total: string;
    status: string;
    isSelected: boolean;
  }

export interface userBookingCancelled {
  isSelected: boolean;
  id: number;
  bookingId: string;
  carName: string;
  img: string;
  deliveryStatus: string;
  rentalType: string;
  pickupDeliveryLocation1: string;
  dropoffLocation1: string;
  dropoffLocation2: string;
  bookedOn: string;
  total: string;
  cancelledBy: string;
  reason: string;
  status: string;
  pickupDeliveryLocation2: string;
}
export interface userBookingComplete {
  isSelected: boolean;
  id: number;
  bookingId: string;
  carName: string;
  img: string;
  rentalType: string;
  deliveryStatus: string;
  pickupDeliveryLocation1: string;
  pickupDeliveryLocation2: string;
  dropoffLocation1: string;
  dropoffLocation2: string;
  bookedOn: string;
  total: string;
  status: string;
}
export interface userBookingInprogress {
  isSelected: boolean;
  id: number;
  bookingId: string;
  carName: string;
  deliveryStatus: string;
  rentalType: string;
  pickupDeliveryLocation1: string;
  pickupDeliveryLocation2: string;
  dropoffLocation1: string;
  dropoffLocation2: string;
  bookedOn: string;
  total: string;
  status: string;
  img: string;
}
export interface userBookingUpcoming {
  isSelected: boolean;
  id: number;
  bookingId: string;
  carName: string;
  deliveryStatus: string;
  rentalType: string;
  pickupDeliveryLocation1: string;
  pickupDeliveryLocation2: string;
  dropoffLocation1: string;
  dropoffLocation2: string;
  bookedOn: string;
  total: string;
  status: string;
  img: string;
}
export interface userBookings {
  isSelected: boolean;
  id: number;
  bookingId: string;
  carName: string;
  deliveryStatus: string;
  rentalType: string;
  pickupDeliveryLocation1: string;
  pickupDeliveryLocation2: string;
  dropoffLocation1: string;
  dropoffLocation2: string;
  bookedOn: string;
  total: string;
  status: string;
  img: string;
}


export interface SideBarMenu {
  showMyTab?: boolean;
  menuValue: string;
  route?: string;
  hasSubRoute?: boolean;
  showSubRoute: boolean;
  icon: string;
  base?: string;
  base2?:string;
  base3?:string;
  base4?:string;
  base5?:string;
  base7?:string;
  base8?:string;
  base9?:string;
  base10?:string;
  last1?: string;
  last?: string;
  page?: string;
  last2?: string;
  materialicons?: string;
  subMenus: SubMenu[];
  dot?: boolean;
  changeLogVersion?: boolean;
  hasSubRouteTwo?: boolean;
  page1?: string;
}

export interface SubMenu {
  menuValue: string;
  route?: string;
  base?: string;
  page?: string;
  page1?: string;
  page2?: string;
  base2?: string;
  base3?: string;
  base4?: string;
  base5?: string;
  base6?: string;
  base7?: string;
  base8?: string;
  dot?:boolean;
  currentActive?: boolean;
  hasSubRoute?: boolean;
  showSubRoute?: boolean;
  customSubmenuTwo?: boolean;
  customSubmenuThree?: boolean;
  subMenusTwo?: SubMenu[];
  subMenusThree?: SubMenu[];
  tittle?:string;
}

//ADMIN
export interface reservation{
  sNo?:number;
  isSelected?:boolean;
  id:string;
  img: string;
  carNo: string;
  car: string;
  customer: string;
  img2: string;
  badge: string;
  pickUpDate: string;
  pickUp: string;
  DropOffDate: string;
  DropOff: string;
  status: string;
  }
export interface enquires{
  sNo?:number;
  img: string;
  car: string;
  type: string;
  customer: string;
  email: string;
  phone: string;
  date: string;
  time: string;
  status: string
  }
export interface quotation{
  sNo?:number;
  isSelected?:boolean;
  img: string;
    customer: string;
    badge: string;
    img2: string;
    car: string;
    type: string;
    pickUpDate: string;
    pickUp: string;
    dropOffDate: string;
    dropOff: string;
    passengers: string;
    price: string;
    status: string;
  }

  export interface customer {
    sNo?:number;
    isSelected?:boolean;
    img: string;
    customer: string;
    phone: string;
    email: string;
    img2: string;
    language: string;
    documents: string;
    rents: string;
}
export interface user {
  sNo?:number;
  USER: string;
  IMAGE: string;
  PHONE: string;
  EMAIL: string;
  ROLE: string;
  STATUS: string;
}
export interface role {
  sNo?:number;
  ROLE: string;
  CREATEDDATE: string;
  STATUS: string;
}
export interface contact {
  sNo?:number;
  FROM: string;
  IMAGE: string;
  PHONE: string;
  EMAIL: string;
  CREATEDDATE: string;
  MESSAGE: string;
}
export interface announcement {
  sNo?:number;
  DATE: string;
  TIME: string;
  ANNOUNCEMENT: string;
  CONTENT: string;
  TYPE: string;
  STATUS: string;
}
export interface ticket {
  sNo?:number;
  TICKETCODE: string;
  CREATEDBY: string;
  CREATEDIMAGE: string;
  SUBJECT: string;
  CREATEDDATE: string;
  PRIORITY: string;
  ASSIGNEE: string;
  ASSIGNEEIMAGE: string;
  STATUS: string;
}
export interface page {
  sNo?:number;
  PAGE: string;
  PAGESLUG: string;
  LASTUPDATED: string;
  STATUS: string;
}
export interface management {
  sNo?:number;
  MENU: string;
  CREATEDDATE: string;
  STATUS: string;
}
export interface categories {
  sNo?:number;
  CATEGORY: string;
  NUMBEROFBLOGS: string;
  CREATEDDATE: string;
  STATUS: string;
}
export interface comments {
  sNo?:number;
  REVIEW: string;
  IMAGE: string;
  CREATEDDATE: string;
  RATING: string;
  BLOG: string;
  CUSTOMER: string;
  STATUS: string;
}
export interface tags {
  sNo?:number;
  TAGS: string;
  CREATEDDATE: string;
  STATUS: string;
}
export interface country {
  sNo?:number;
  REVIEW: string;
  IMAGE: string;
  CREATEDDATE: string;
  STATUS: string;
}
export interface state {
  sNo?:number;
  STATENAME: string;
  IMAGE: string;
  CREATEDDATE: string;
  STATUS: string;
}
export interface cities {
  sNo?:number;
  CITYNAME: string;
  IMAGE: string;
  STATENAME: string;
  CREATEDDATE: string;
  STATUS: string;
}
export interface rental {
  sNo?:number;
  INVOICENO: string;
  CAR: string;
  CARIMAGE: string;
  CAROWNER: string;
  IMAGE: string;
  CUSTOMER: string;
  CUSTOMERNAME: string;
  AMOUNT: string;
  DATE: string;
  STATUS: string;
}
export interface earnings {
  sNo?:number;
  INVOICENO: string;
  IMAGE: string;
  NAME: string;
  AMOUNT: string;
  PAYMENTMETHOD: string;
  DATE: string;
  STATUS: string;
}
export interface admintestimonial {
  sNo?:number;
  isSelected?:boolean
  IMAGE: string;
  CUSTOMER: string;
  RATING: string;
  REVIEW: string;
  CREATEDDATE: string;
}
export interface adminfaqLists {
  sNo?:number;
  QUESTION: string;
  ANSWER: string;
  CATEGORY: string;
  STATUS: string;
}
export interface adminfaqCategories {
  sNo?:number;
  CATEGORY: string;
  CREATEDDATE: string;
  NUMBEROFQUESTIONS: string;
  STATUS: string;
}
export interface news {
  sNo?:number;
  EMAIL: string;
  DATE: string;
}
export interface coupon {
  sNo?:number;
  COUPONNAME: string;
  CODE: string;
  DESCRIPTION: string;
  DISCOUNTTYPE: string;
  DISCOUNT: string;
  LIMIT: string;
  VALID: string;
  STATUS: string;
}
export interface customerCompany {
  sNo?:number;
  isSelected?:boolean;
  img: string;
  company: string;
  contact: string;
  img2: string;
  phone: string;
  email: string;
  img3: string;
  language: string;
  rents: string;
}
export interface driver {
  sNo?:number;
  isSelected?:boolean;
  img:string;
  drivers: string;
  phone: string;
  email: string;
  licenseNo: string;
  date:string;
  status: string;
}
export interface location {
  sNo?:number;
  isSelected?:boolean;
  IMAGE:string;
  LOCATION_TITLE: string;
  ADDRESS: string;
  PHONE: string;
  WORKING_DAYS: {
    DAYS:string;
    active:boolean;
  }[];
  STATUS: string;
}
export interface car {
  sNo?:number;
  isSelected?:boolean;
  image: string;
  car: string;
  carType: string;
  baseLocation: string;
  price: string;
  isFilled?:boolean;
  damages: number;
  createdDate: string;
  status: string;
}
export interface extraService {
  sNo?:number;
  isSelected?:boolean;
  name: string;
  price: string;
  type: string;
  noOfCars: number;
  status: string;
}
export interface pricing {
  sNo?:number;
  isSelected?:boolean;
  season: string;
  startDate: string;
  endDate: string;
  daily: string;
  weekly: string;
  month: string;
  status: string;
}
export interface inspection {
  sNo?:number;
  isSelected?:boolean;
  car: string;
  type: string;
  img: string;
  status1: string;
  date: string;
  inspectedBy: string;
  img2: string;
  status2: string;
}
export interface Star {
  show?: boolean;
  half?: boolean;
}
export interface dataTables {
  isSelected: boolean;
  sNo?: number;
  name?: string;
  position?: string;
  office?: string;
  age?: string;
  salary?: string;
  startDate?: string;
  id?: string;
}
export interface maintenance {
  sNo?:number;
  isSelected?:boolean;
  car: string;
  type: string;
  img: string;
  startDate: string;
  endDate: string;
  time: string;
  kilometer: string;
  status: string
}
export interface review {
  sNo?:number;
  isSelected?:boolean;
  author: string;
  img: string;
  date: string;
  rating: string;
  review: string;
}
export interface brand {
  sNo?:number;
  isSelected?:boolean;
  name: string;
  image: string;
  totalCars: number;
  status: string;
}
export interface type {
  sNo?:number;
  isSelected?:boolean;
  name: string;
  status: string;
}
export interface model {
  sNo?:number;
  isSelected?:boolean;
  model: string;
  brand: string;
  totalCars: number;
  status: string;
}
export interface color {
  sNo?:number;
  isSelected?:boolean;
  name: string;
  shape: string;
  status: string;
}
export interface seat {
  sNo?:number;
  isSelected?:boolean;
  seatType: string;
  status: string;
}
export interface door {
  sNo?:number;
  isSelected?:boolean;
  doorType: string;
  status: string;
}

export interface invoice {
  sNo?:number;
  invoiceNo: string;
  image: string;
  name: string;
  email: string;
  createdDate: string;
  createdTime: string;
  dueDate: string;
  dueTime: string;
  invoiceAmount: string;
  status: string;
}
export interface payment {
  sNo?:number;
  transactionId: string;
  name: string;
  image: string;
  amount: string;
  paymentMethod: string;
  date: string;
  status: string;
}

export interface expense {
  sNo?:number;
  invoiceNo: string;
  category: string;
  vehicleRelated: string;
  operational: string;
  miscellaneous: string;
  totalExpense: string;
  date: string;
  status: string;
}
export interface income {
  sNo?:number;
  invoiceNo: string;
  image: string;
  car: string;
  rentalFees: string;
  lateFees: string;
  additionalServices: string;
  totalIncome: string;
  date: string;
  status: string;
}
