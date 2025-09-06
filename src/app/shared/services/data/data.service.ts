import { Injectable } from '@angular/core';
import { routes } from '../../routes';
import { apiResultFormat, header } from '../model/model';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  constructor(private http: HttpClient) {}
  public getuserPayment() {
    return this.http.get<apiResultFormat>('assets/JSON/user-payment.json').pipe(
      map((res: apiResultFormat) => {
        return res;
      })
    );
  }
  public getuserReview() {
    return this.http.get<apiResultFormat>('assets/JSON/user-review.json').pipe(
      map((res: apiResultFormat) => {
        return res;
      })
    );
  }

  public getUserBookingCancelled() {
    return this.http
      .get<apiResultFormat>('assets/JSON/user-booking-cancelled.json')
      .pipe(
        map((res: apiResultFormat) => {
          return res;
        })
      );
  }
  public getuserWallet() {
    return this.http.get<apiResultFormat>('assets/JSON/user-wallet.json').pipe(
      map((res: apiResultFormat) => {
        return res;
      })
    );
  }

  public getUserBookingComplete() {
    return this.http
      .get<apiResultFormat>('assets/JSON/user-booking-complete.json')
      .pipe(
        map((res: apiResultFormat) => {
          return res;
        })
      );
  }
  public getUserBookingInprogress() {
    return this.http
      .get<apiResultFormat>('assets/JSON/user-booking-inprogress.json')
      .pipe(
        map((res: apiResultFormat) => {
          return res;
        })
      );
  }
  public getUserBookingUpcoming() {
    return this.http
      .get<apiResultFormat>('assets/JSON/user-booking-upcoming.json')
      .pipe(
        map((res: apiResultFormat) => {
          return res;
        })
      );
  }
  public getUserBookings() {
    return this.http
      .get<apiResultFormat>('assets/JSON/user-bookings.json')
      .pipe(
        map((res: apiResultFormat) => {
          return res;
        })
      );
  }
  ///ADMIN
  public getEnquires() {
    return this.http .get<apiResultFormat>('assets/admin/json/enquire.json')
      .pipe( map((res: apiResultFormat) => {
          return res;
        })
      );
  }
public getReservation() {
  return this.http
    .get<apiResultFormat>('assets/admin/json/reservation.json')
    .pipe(
      map((res: apiResultFormat) => {
        return res;
      })
    );
}

  public getQuotation() {
    return this.http .get<apiResultFormat>('assets/admin/json/quotation.json')
      .pipe( map((res: apiResultFormat) => {
          return res;
        })
      );
  }
  public getCustomer() {
    return this.http .get<apiResultFormat>('assets/admin/json/customer.json')
      .pipe( map((res: apiResultFormat) => {
          return res;
        })
      );
  }
  public getUser() {
    return this.http .get<apiResultFormat>('assets/admin/json/user.json')
      .pipe( map((res: apiResultFormat) => {
          return res;
        })
      );
  }
  public getRole() {
    return this.http .get<apiResultFormat>('assets/admin/json/role.json')
      .pipe( map((res: apiResultFormat) => {
          return res;
        })
      );
  }
  public getContact() {
    return this.http .get<apiResultFormat>('assets/admin/json/contact.json')
      .pipe( map((res: apiResultFormat) => {
          return res;
        })
      );
  }
  public getAnnouncement() {
    return this.http .get<apiResultFormat>('assets/admin/json/announcement.json')
      .pipe( map((res: apiResultFormat) => {
          return res;
        })
      );
  }
  public getTicket() {
    return this.http .get<apiResultFormat>('assets/admin/json/ticket.json')
      .pipe( map((res: apiResultFormat) => {
          return res;
        })
      );
  }
  public getPage() {
    return this.http .get<apiResultFormat>('assets/admin/json/page.json')
      .pipe( map((res: apiResultFormat) => {
          return res;
        })
      );
  }
  public getManagement() {
    return this.http .get<apiResultFormat>('assets/admin/json/management.json')
      .pipe( map((res: apiResultFormat) => {
          return res;
        })
      );
  }
  public getCategories() {
    return this.http .get<apiResultFormat>('assets/admin/json/categories.json')
      .pipe( map((res: apiResultFormat) => {
          return res;
        })
      );
  }
  public getComments() {
    return this.http .get<apiResultFormat>('assets/admin/json/comments.json')
      .pipe( map((res: apiResultFormat) => {
          return res;
        })
      );
  }
  public getTags() {
    return this.http .get<apiResultFormat>('assets/admin/json/tags.json')
      .pipe( map((res: apiResultFormat) => {
          return res;
        })
      );
  }
  public getCountry() {
    return this.http .get<apiResultFormat>('assets/admin/json/country.json')
      .pipe( map((res: apiResultFormat) => {
          return res;
        })
      );
  }
  public getState() {
    return this.http .get<apiResultFormat>('assets/admin/json/state.json')
      .pipe( map((res: apiResultFormat) => {
          return res;
        })
      );
  }
  public getCities() {
    return this.http .get<apiResultFormat>('assets/admin/json/cities.json')
      .pipe( map((res: apiResultFormat) => {
          return res;
        })
      );
  }
  public getRental() {
    return this.http .get<apiResultFormat>('assets/admin/json/rental.json')
      .pipe( map((res: apiResultFormat) => {
          return res;
        })
      );
  }
  public getEarnings() {
    return this.http .get<apiResultFormat>('assets/admin/json/earnings.json')
      .pipe( map((res: apiResultFormat) => {
          return res;
        })
      );
  }
  public getAdmintestimonial() {
    return this.http .get<apiResultFormat>('assets/admin/json/admintestimonial.json')
      .pipe( map((res: apiResultFormat) => {
          return res;
        })
      );
  }
  public getAdminFaqlists() {
    return this.http .get<apiResultFormat>('assets/admin/json/faq-lists.json')
      .pipe( map((res: apiResultFormat) => {
          return res;
        })
      );
  }
  public getAdminFaqCategories() {
    return this.http .get<apiResultFormat>('assets/admin/json/faqcategories.json')
      .pipe( map((res: apiResultFormat) => {
          return res;
        })
      );
  }
  public getNews() {
    return this.http .get<apiResultFormat>('assets/admin/json/news.json')
      .pipe( map((res: apiResultFormat) => {
          return res;
        })
      );
  }
  public getCoupon() {
    return this.http .get<apiResultFormat>('assets/admin/json/coupon.json')
      .pipe( map((res: apiResultFormat) => {
          return res;
        })
      );
  }
  public getCustomerCompany() {
    return this.http .get<apiResultFormat>('assets/admin/json/customer-company.json')
      .pipe( map((res: apiResultFormat) => {
          return res;
        })
      );
  }
  public getDriver() {
    return this.http .get<apiResultFormat>('assets/admin/json/driver.json')
      .pipe( map((res: apiResultFormat) => {
          return res;
        })
      );
  }
  public getLocation() {
    return this.http .get<apiResultFormat>('assets/admin/json/location.json')
      .pipe( map((res: apiResultFormat) => {
          return res;
        })
      );
  }
  public getCar() {
    return this.http .get<apiResultFormat>('assets/admin/json/car.json')
      .pipe( map((res: apiResultFormat) => {
          return res;
        })
      );
  }
  public getMaintenance() {
    return this.http .get<apiResultFormat>('assets/admin/json/maintenance.json')
      .pipe( map((res: apiResultFormat) => {
          return res;
        })
      );
  }
  public getPricing() {
    return this.http .get<apiResultFormat>('assets/admin/json/pricing.json')
      .pipe( map((res: apiResultFormat) => {
          return res;
        })
      );
  }
  public getExtraService() {
    return this.http .get<apiResultFormat>('assets/admin/json/extra-service.json')
      .pipe( map((res: apiResultFormat) => {
          return res;
        })
      );
  }
  public getInspection() {
    return this.http .get<apiResultFormat>('assets/admin/json/inspections.json')
      .pipe( map((res: apiResultFormat) => {
          return res;
        })
      );
  }
  public getReview() {
    return this.http .get<apiResultFormat>('assets/admin/json/reviews.json')
      .pipe( map((res: apiResultFormat) => {
          return res;
        })
      );
  }
  public getBrand() {
    return this.http .get<apiResultFormat>('assets/admin/json/brand.json')
      .pipe( map((res: apiResultFormat) => {
          return res;
        })
      );
  }
  public getColor() {
    return this.http .get<apiResultFormat>('assets/admin/json/color.json')
      .pipe( map((res: apiResultFormat) => {
          return res;
        })
      );
  }
  public getCylinder() {
    return this.http .get<apiResultFormat>('assets/admin/json/cylinders.json')
      .pipe( map((res: apiResultFormat) => {
          return res;
        })
      );
  }
  public getDoor() {
    return this.http .get<apiResultFormat>('assets/admin/json/doors.json')
      .pipe( map((res: apiResultFormat) => {
          return res;
        })
      );
  }
  public getType() {
    return this.http .get<apiResultFormat>('assets/admin/json/types.json')
      .pipe( map((res: apiResultFormat) => {
          return res;
        })
      );
  }
  public getSteering() {
    return this.http .get<apiResultFormat>('assets/admin/json/steering.json')
      .pipe( map((res: apiResultFormat) => {
          return res;
        })
      );
  }
  public getTransmission() {
    return this.http .get<apiResultFormat>('assets/admin/json/transmissions.json')
      .pipe( map((res: apiResultFormat) => {
          return res;
        })
      );
  }
  public getSeat() {
    return this.http .get<apiResultFormat>('assets/admin/json/seats.json')
      .pipe( map((res: apiResultFormat) => {
          return res;
        })
      );
  }
  public getModel() {
    return this.http .get<apiResultFormat>('assets/admin/json/models.json')
      .pipe( map((res: apiResultFormat) => {
          return res;
        })
      );
  }
  public getFuel() {
    return this.http .get<apiResultFormat>('assets/admin/json/fuel.json')
      .pipe( map((res: apiResultFormat) => {
          return res;
        })
      );
  }
  public getFeature() {
    return this.http .get<apiResultFormat>('assets/admin/json/features.json')
      .pipe( map((res: apiResultFormat) => {
          return res;
        })
      );
  }
  public getSafetyFeature() {
    return this.http .get<apiResultFormat>('assets/admin/json/safety-features.json')
      .pipe( map((res: apiResultFormat) => {
          return res;
        })
      );
  }
  public getInvoice() {
    return this.http .get<apiResultFormat>('assets/admin/json/invoice.json')
      .pipe( map((res: apiResultFormat) => {
          return res;
        })
      );
  }
  public getPayment() {
    return this.http .get<apiResultFormat>('assets/admin/json/payment.json')
      .pipe( map((res: apiResultFormat) => {
          return res;
        })
      );
  }
  public getIncome() {
    return this.http .get<apiResultFormat>('assets/admin/json/income-report.json')
      .pipe( map((res: apiResultFormat) => {
          return res;
        })
      );
  }
  public getExpense() {
    return this.http .get<apiResultFormat>('assets/admin/json/expense-report.json')
      .pipe( map((res: apiResultFormat) => {
          return res;
        })
      );
  }
  public getDataTable(): Observable<apiResultFormat> {
    return this.http.get<apiResultFormat>('assets/admin/json/data-tables.json').pipe(
      map((res: apiResultFormat) => {
        return res;
      })
    );
  }

  public header: header[] = [
    {
      tittle: 'Home',
      showAsTab: false,
      separateRoute: false,
      menu: [
        {
          menuValue: 'Car Rental',
          routes: routes.index,
          hasSubRoute: false,
          showSubRoute: false,
          img:'home-01.svg',
          badge:'New',
          subMenus: [],
        },
        {
          menuValue: 'Car Rental 1',
          routes: routes.home,
          hasSubRoute: false,
          showSubRoute: false,
          img:'home-02.svg',
          badge:'Hot',
          subMenus: [],
        },
        {
          menuValue: 'Bike Rental',
          routes: routes.home3,
          hasSubRoute: false,
          showSubRoute: false,
          img:'home-03.svg',
          badge:'New',
          subMenus: [],
        },
        {
          menuValue: 'Yatch Rental',
          routes: routes.home2,
          hasSubRoute: false,
          showSubRoute: false,
          img:'home-04.svg',
          badge:'New',
          subMenus: [],
        }
      ]
    },

    {
      tittle: 'vehicles',
      showAsTab: false,
      separateRoute: false,
      menu: [
        {
          menuValue: 'vehicle Grid',
          routes: routes.vehicleGrid,
          hasSubRoute: false,
          showSubRoute: false,
          subMenus: [],
        },
        {
          menuValue: 'vehicle List',
          routes: routes.vehicleList,
          hasSubRoute: false,
          showSubRoute: false,
          subMenus: [],
        },
        {
          menuValue: 'vehicle With Map',
          routes: routes.vehicleMap,
          hasSubRoute: false,
          showSubRoute: false,
          subMenus: [],
        },
        {
          menuValue: 'vehicle Details',
          routes: routes.vehicleDetails,
          hasSubRoute: false,
          showSubRoute: false,
          subMenus: [],
        },
      ],
    },
    {
      tittle: 'Pages',
      showAsTab: false,
      separateRoute: false,
      menu: [
        {
          menuValue: 'About Us',
          routes: routes.aboutUs,
          hasSubRoute: false,
          showSubRoute: false,
          subMenus: [],
        },
        {
          menuValue: 'Authentication',
          hasSubRoute: true,
          showSubRoute: false,
          subMenus: [
            {
              menuValue: 'Signup',
              routes: routes.register,
              hasSubRoute: false,
              showSubRoute: false,
              subMenus: [],
            },
            {
              menuValue: 'Signin',
              routes: routes.login,
              hasSubRoute: false,
              showSubRoute: false,
              subMenus: [],
            },
            {
              menuValue: 'Forgot Password',
              routes: routes.forgotPassword,
              hasSubRoute: false,
              showSubRoute: false,
              subMenus: [],
            },
            {
              menuValue: 'Reset Password',
              routes: routes.resetPassword,
              hasSubRoute: false,
              showSubRoute: false,
              subMenus: [],
            },
          ],
        },
        {
          menuValue: 'Booking',
          hasSubRoute: true,
          showSubRoute: false,
          subMenus: [
            {
              menuValue: 'Booking Checkout',
              routes: routes.bookingCheckout,
              hasSubRoute: false,
              showSubRoute: false,
              subMenus: [],
            },
            {
              menuValue: 'Booking',
              routes: routes.bookingList,
              hasSubRoute: false,
              showSubRoute: false,
              subMenus: [],
            },
            {
              menuValue: 'Invoice Details',
              routes: routes.invoiceDetails,
              hasSubRoute: false,
              showSubRoute: false,
              subMenus: [],
            },
          ],
        },
        {
          menuValue: 'Error Page',
          hasSubRoute: true,
          showSubRoute: false,
          subMenus: [
            {
              menuValue: '404 Error',
              routes: routes.error404,
              hasSubRoute: false,
              showSubRoute: false,
              subMenus: [],
            },
            {
              menuValue: '500 Error',
              routes: routes.error500,
              hasSubRoute: false,
              showSubRoute: false,
              subMenus: [],
            },
          ],
        },
        {
          menuValue: 'Pricing',
          routes: routes.pricing,
          hasSubRoute: false,
          showSubRoute: false,
          subMenus: [],
        },
        {
          menuValue: 'FAQ',
          routes: routes.faq,
          hasSubRoute: false,
          showSubRoute: false,
          subMenus: [],
        },
        {
          menuValue: 'Gallery',
          routes: routes.gallery,
          hasSubRoute: false,
          showSubRoute: false,
          subMenus: [],
        },
        {
          menuValue: 'Our Team',
          routes: routes.ourTeam,
          hasSubRoute: false,
          showSubRoute: false,
          subMenus: [],
        },
        {
          menuValue: 'Testimonials',
          routes: routes.testimonial,
          hasSubRoute: false,
          showSubRoute: false,
          subMenus: [],
        },
        {
          menuValue: 'Terms & Conditions',
          routes: routes.termsCondition,
          hasSubRoute: false,
          showSubRoute: false,
          subMenus: [],
        },
        {
          menuValue: 'Privacy Policy',
          routes: routes.privacyPolicy,
          hasSubRoute: false,
          showSubRoute: false,
          subMenus: [],
        },
        {
          menuValue: 'Maintenance',
          routes: routes.maintenance,
          hasSubRoute: false,
          showSubRoute: false,
          subMenus: [],
        },
        {
          menuValue: 'Coming Soon',
          routes: routes.comingSoon,
          hasSubRoute: false,
          showSubRoute: false,
          subMenus: [],
        },
      ],
    },
    {
      tittle: 'Blog',
      showAsTab: false,
      separateRoute: false,
      menu: [
        {
          menuValue: 'Blog List',
          routes: routes.blogList,
          hasSubRoute: false,
          showSubRoute: false,
          subMenus: [],
        },
        {
          menuValue: 'Blog Grid',
          routes: routes.blogGrid,
          hasSubRoute: false,
          showSubRoute: false,
          subMenus: [],
        },
        {
          menuValue: 'Blog Details',
          routes: routes.blogDetails,
          hasSubRoute: false,
          showSubRoute: false,
          subMenus: [],
        },
      ],
    },

    {
      tittle: 'Dashboard',
      showAsTab: false,
      separateRoute: false,
      menu: [
        {
          menuValue: 'User Dashboard',
          hasSubRoute: true,
          showSubRoute: false,
          subMenus: [
            {
              menuValue: 'Dashboard',
              routes: routes.userDashboard,
              hasSubRoute: false,
              showSubRoute: false,
              page1: 'user dashboard',
              page2: 'user-dashboard',
              subMenus: [],
            },
            {
              menuValue: 'My Bookings',
              routes: routes.userBookings,
              page1: 'user booking cancelled',
              page2: 'user booking complete',
              page3: 'user booking inprogress',
              page4: 'user booking upcoming',
              page5: 'User Bookings',
              page6: 'user bookings',
              page7: 'user-booking-cancelled',
              page8: 'user-booking-complete',
              page9: 'user-booking-inprogress',
              page10: 'user-booking-upcoming',
              page11: 'user-bookings',
              hasSubRoute: false,
              showSubRoute: false,
              subMenus: [],
            },
            {
              menuValue: 'Reviews',
              routes: routes.userReview,
              page1: 'user review',
              page2: 'user-review',
              hasSubRoute: false,
              showSubRoute: false,
              subMenus: [],
            },
            {
              menuValue: 'Wishlist',
              page1: 'user wishlist',
              page2: 'user-wishlist',
              routes: routes.userWishlist,
              hasSubRoute: false,
              showSubRoute: false,
              subMenus: [],
            },
            {
              menuValue: 'Messages',
              page1: 'user messages',
              page2: 'user-messages',
              routes: routes.userMessages,
              hasSubRoute: false,
              showSubRoute: false,
              subMenus: [],
            },
            {
              menuValue: 'My Wallet',
              page1: 'user wallet',
              page2: 'user-wallet',
              routes: routes.userWallet,
              hasSubRoute: false,
              showSubRoute: false,
              subMenus: [],
            },
            {
              menuValue: 'Payments',
              page1: 'user payment',
              page2: 'user-payment',
              routes: routes.userPayment,
              hasSubRoute: false,
              showSubRoute: false,
              subMenus: [],
            },
            {
              menuValue: 'Settings',
              routes: routes.userSettings,
              hasSubRoute: false,
              showSubRoute: false,
              page1: 'User Settings',
              page2: 'settings',
              page3: 'user settings',
              page4: 'user-settings',
              subMenus: [],
            },
          ],
        },
        {
          menuValue: 'Admin Dashboard',
          hasSubRoute: true,
          showSubRoute: false,
          subMenus: [
            {
              menuValue: 'Dashboard',
              routes: routes.adminDashboard,
              hasSubRoute: false,
              showSubRoute: false,
              subMenus: [],
            },
            {
              menuValue: 'Bookings',
              routes: routes.reservation,
              hasSubRoute: false,
              showSubRoute: false,
              subMenus: [],
            },
            {
              menuValue: 'Manage',
              routes: routes.customers,
              hasSubRoute: false,
              showSubRoute: false,
              subMenus: [],
            },
            {
              menuValue: 'Rentals',
              routes: routes.cars,
              hasSubRoute: false,
              showSubRoute: false,
              subMenus: [],
            },
            {
              menuValue: 'Finance & Accounts',
              routes: routes.invoices,
              hasSubRoute: false,
              showSubRoute: false,
              subMenus: [],
            },
            {
              menuValue: 'Others',
              routes: routes.coupons,
              hasSubRoute: false,
              showSubRoute: false,
              subMenus: [],
            },
            {
              menuValue: 'CMS',
              routes: routes.pages,
              hasSubRoute: false,
              showSubRoute: false,
              subMenus: [],
            },
            {
              menuValue: 'Support',
              routes: routes.contactMessages,
              hasSubRoute: false,
              showSubRoute: false,
              subMenus: [],
            },
            {
              menuValue: 'User Managements',
              routes: routes.users,
              hasSubRoute: false,
              showSubRoute: false,
              subMenus: [],
            },
            {
              menuValue: 'Reports',
              routes: routes.earningsReport,
              hasSubRoute: false,
              showSubRoute: false,
              subMenus: [],
            },
            {
              menuValue: 'Settings & Configuration',
              routes: routes.userSettings,
              hasSubRoute: false,
              showSubRoute: false,
              subMenus: [],
            },
          ],
        },

      ],
    },
  ];

  public popularCars1 = [
    {
      carName: 'Toyota',
      img1: 'assets/img/cars/car-01.jpg',
      img2: 'assets/img/profiles/avatar-0.jpg',
      carModel: 'Toyota Camry SE 350',
      rating: '(5.0)',
      carDetail1: 'Auto',
      carDetail2: '10 KM',
      carDetail3: 'Petrol',
      carDetail4: 'Power',
      carDetail5: '2018',
      carDetail6: '5 Persons',
      country: 'Germany',
      price: '$400',
      heading: '/ Day',
      text: 'Rent Now',
      like: false,
    },
    {
      carName: 'KIA',
      img1: 'assets/img/cars/car-02.jpg',
      img2: 'assets/img/profiles/avatar-02.jpg',
      carModel: 'Kia Soul 2016',
      rating: '(5.0)',
      carDetail1: 'Auto',
      carDetail2: '22 KM',
      carDetail3: 'Petrol',
      carDetail4: 'Diesel',
      carDetail5: '2016',
      carDetail6: '5 Persons',
      country: 'Belgium',
      price: '$80',
      heading: '/ Day',
      text: 'Rent Now',
      like: false,
    },
    {
      carName: 'Audi',
      img1: 'assets/img/cars/car-03.jpg',
      img2: 'assets/img/profiles/avatar-03.jpg',
      carModel: 'Audi A3 2019 new',
      rating: '(5.0)',
      carDetail1: 'Manual',
      carDetail2: '10 KM',
      carDetail3: 'Petrol',
      carDetail4: 'Power',
      carDetail5: '2019',
      carDetail6: '4 Persons',
      country: 'Newyork, USA',
      price: '$45',
      heading: '/ Day',
      text: 'Rent Now',
      like: false,
    },
    {
      carName: 'Ferrai',
      img1: 'assets/img/cars/car-04.jpg',
      img2: 'assets/img/profiles/avatar-04.jpg',
      carModel: 'Ferrari 458 MM Speciale',
      rating: '(5.0)',
      carDetail1: 'Manual',
      carDetail2: '14 KM',
      carDetail3: 'Diesel',
      carDetail4: 'Basic',
      carDetail5: '2022',
      carDetail6: '5 Persons',
      country: 'Newyork, USA',
      price: '$160',
      heading: '/ Day',
      text: 'Rent Now',
      like: false,
    },
    {
      carName: 'Chevrolet',
      img1: 'assets/img/cars/car-05.jpg',
      img2: 'assets/img/profiles/avatar-05.jpg',
      carModel: '2018 Chevrolet Camaro',
      rating: '(5.0)',
      carDetail1: 'Manual',
      carDetail2: '18 KM',
      carDetail3: 'Diesel',
      carDetail4: 'Power',
      carDetail5: '2018',
      carDetail6: '4 Persons',
      country: 'Germany',
      price: '$36',
      heading: '/ Day',
      text: 'Rent Now',
      like: false,
    },
    {
      carName: 'Acura',
      img1: 'assets/img/cars/car-06.jpg',
      img2: 'assets/img/profiles/avatar-06.jpg',
      carModel: 'Acura Sport Version',
      rating: '(5.0)',
      carDetail1: 'Auto',
      carDetail2: '12 KM',
      carDetail3: 'Diesel',
      carDetail4: 'Power',
      carDetail5: '2013',
      carDetail6: '5 Persons',
      country: 'Newyork, USA',
      price: '$30',
      heading: '/ Day',
      text: 'Rent Now',
      like: false,
    },
    {
      carName: 'Chevrolet',
      img1: 'assets/img/cars/car-07.jpg',
      img2: 'assets/img/profiles/avatar-07.jpg',
      carModel: 'Chevrolet Pick Truck 3.5L',
      rating: '(5.0)',
      carDetail1: 'Manual',
      carDetail2: '10 KM',
      carDetail3: 'Petrol',
      carDetail4: 'Power',
      carDetail5: '2012',
      carDetail6: '5 Persons',
      country: 'Spain',
      price: '$77',
      heading: '/ Day',
      text: 'Rent Now',
      like: false,
    },
    {
      carName: 'Toyota',
      img1: 'assets/img/cars/car-08.jpg',
      img2: 'assets/img/profiles/avatar-08.jpg',
      carModel: 'Toyota Tacoma 4WD',
      rating: '(5.0)',
      carDetail1: 'Auto',
      carDetail2: '22 miles',
      carDetail3: 'Diesel',
      carDetail4: 'Power',
      carDetail5: '2019',
      carDetail6: '5 Persons',
      country: 'Dallas, USA',
      price: '$30',
      heading: '/ Day',
      text: 'Rent Now',
      like: false,
    },
    {
      carName: 'Accura',
      img1: 'assets/img/cars/car-09.jpg',
      img2: 'assets/img/profiles/avatar-10.jpg',
      carModel: 'Acura RDX FWD',
      rating: '(5.0)',
      carDetail1: 'Auto',
      carDetail2: '42 miles',
      carDetail3: 'Petrol',
      carDetail4: 'Power',
      carDetail5: '2021',
      carDetail6: '5 Persons',
      country: 'Dallas, USA',
      price: '$80',
      heading: '/ Day',
      text: 'Rent Now',
      like: false,
    },
  ];
  public popularCars2 = [
    {
      carName: 'Audi',
      img1: 'assets/img/cars/car-03.jpg',
      img2: 'assets/img/profiles/avatar-03.jpg',
      carModel: 'Audi A3 2019 new',
      rating: '(5.0)',
      carDetail1: 'Manual',
      carDetail2: '10 KM',
      carDetail3: 'Petrol',
      carDetail4: 'Power',
      carDetail5: '2019',
      carDetail6: '4 Persons',
      country: 'Newyork, USA',
      price: '$45',
      heading: '/ Day',
      text: 'Rent Now',
      like: false,
    },
    {
      carName: 'Ferrai',
      img1: 'assets/img/cars/car-04.jpg',
      img2: 'assets/img/profiles/avatar-04.jpg',
      carModel: 'Ferrari 458 MM Speciale',
      rating: '(5.0)',
      carDetail1: 'Manual',
      carDetail2: '14 KM',
      carDetail3: 'Diesel',
      carDetail4: 'Basic',
      carDetail5: '2022',
      carDetail6: '5 Persons',
      country: 'Newyork, USA',
      price: '$160',
      heading: '/ Day',
      text: 'Rent Now',
      like: false,
    },
    {
      carName: 'Chevrolet',
      img1: 'assets/img/cars/car-05.jpg',
      img2: 'assets/img/profiles/avatar-05.jpg',
      carModel: '2018 Chevrolet Camaro',
      rating: '(5.0)',
      carDetail1: 'Manual',
      carDetail2: '18 KM',
      carDetail3: 'Diesel',
      carDetail4: 'Power',
      carDetail5: '2018',
      carDetail6: '4 Persons',
      country: 'Germany',
      price: '$36',
      heading: '/ Day',
      text: 'Rent Now',
      like: false,
    },
    {
      carName: 'Acura',
      img1: 'assets/img/cars/car-06.jpg',
      img2: 'assets/img/profiles/avatar-06.jpg',
      carModel: 'Acura Sport Version',
      rating: '(5.0)',
      carDetail1: 'Auto',
      carDetail2: '12 KM',
      carDetail3: 'Diesel',
      carDetail4: 'Power',
      carDetail5: '2013',
      carDetail6: '5 Persons',
      country: 'Newyork, USA',
      price: '$30',
      heading: '/ Day',
      text: 'Rent Now',
      like: false,
    },
    {
      carName: 'Chevrolet',
      img1: 'assets/img/cars/car-07.jpg',
      img2: 'assets/img/profiles/avatar-07.jpg',
      carModel: 'Chevrolet Pick Truck 3.5L',
      rating: '(5.0)',
      carDetail1: 'Manual',
      carDetail2: '10 KM',
      carDetail3: 'Petrol',
      carDetail4: 'Power',
      carDetail5: '2012',
      carDetail6: '5 Persons',
      country: 'Spain',
      price: '$77',
      heading: '/ Day',
      text: 'Rent Now',
      like: false,
    },
    {
      carName: 'Toyota',
      img1: 'assets/img/cars/car-08.jpg',
      img2: 'assets/img/profiles/avatar-08.jpg',
      carModel: 'Toyota Tacoma 4WD',
      rating: '(5.0)',
      carDetail1: 'Auto',
      carDetail2: '22 miles',
      carDetail3: 'Diesel',
      carDetail4: 'Power',
      carDetail5: '2019',
      carDetail6: '5 Persons',
      country: 'Dallas, USA',
      price: '$30',
      heading: '/ Day',
      text: 'Rent Now',
      like: false,
    },
    {
      carName: 'Toyota',
      img1: 'assets/img/cars/car-01.jpg',
      img2: 'assets/img/profiles/avatar-0.jpg',
      carModel: 'Toyota Camry SE 350',
      rating: '(5.0)',
      carDetail1: 'Auto',
      carDetail2: '10 KM',
      carDetail3: 'Petrol',
      carDetail4: 'Power',
      carDetail5: '2018',
      carDetail6: '5 Persons',
      country: 'Germany',
      price: '$400',
      heading: '/ Day',
      text: 'Rent Now',
      like: false,
    },
    {
      carName: 'KIA',
      img1: 'assets/img/cars/car-02.jpg',
      img2: 'assets/img/profiles/avatar-02.jpg',
      carModel: 'Kia Soul 2016',
      rating: '(5.0)',
      carDetail1: 'Auto',
      carDetail2: '22 KM',
      carDetail3: 'Petrol',
      carDetail4: 'Diesel',
      carDetail5: '2016',
      carDetail6: '5 Persons',
      country: 'Belgium',
      price: '$80',
      heading: '/ Day',
      text: 'Rent Now',
      like: false,
    },
    {
      carName: 'Accura',
      img1: 'assets/img/cars/car-09.jpg',
      img2: 'assets/img/profiles/avatar-10.jpg',
      carModel: 'Acura RDX FWD',
      rating: '(5.0)',
      carDetail1: 'Auto',
      carDetail2: '42 miles',
      carDetail3: 'Petrol',
      carDetail4: 'Power',
      carDetail5: '2021',
      carDetail6: '5 Persons',
      country: 'Dallas, USA',
      price: '$80',
      heading: '/ Day',
      text: 'Rent Now',
      like: false,
    },
  ];
  public popularCars3 = [
    {
      carName: 'Toyota',
      img1: 'assets/img/cars/car-08.jpg',
      img2: 'assets/img/profiles/avatar-08.jpg',
      carModel: 'Toyota Tacoma 4WD',
      rating: '(5.0)',
      carDetail1: 'Auto',
      carDetail2: '22 miles',
      carDetail3: 'Diesel',
      carDetail4: 'Power',
      carDetail5: '2019',
      carDetail6: '5 Persons',
      country: 'Dallas, USA',
      price: '$30',
      heading: '/ Day',
      text: 'Rent Now',
      like: false,
    },
    {
      carName: 'Toyota',
      img1: 'assets/img/cars/car-01.jpg',
      img2: 'assets/img/profiles/avatar-0.jpg',
      carModel: 'Toyota Camry SE 350',
      rating: '(5.0)',
      carDetail1: 'Auto',
      carDetail2: '10 KM',
      carDetail3: 'Petrol',
      carDetail4: 'Power',
      carDetail5: '2018',
      carDetail6: '5 Persons',
      country: 'Germany',
      price: '$400',
      heading: '/ Day',
      text: 'Rent Now',
      like: false,
    },
    {
      carName: 'KIA',
      img1: 'assets/img/cars/car-02.jpg',
      img2: 'assets/img/profiles/avatar-02.jpg',
      carModel: 'Kia Soul 2016',
      rating: '(5.0)',
      carDetail1: 'Auto',
      carDetail2: '22 KM',
      carDetail3: 'Petrol',
      carDetail4: 'Diesel',
      carDetail5: '2016',
      carDetail6: '5 Persons',
      country: 'Belgium',
      price: '$80',
      heading: '/ Day',
      text: 'Rent Now',
      like: false,
    },
    {
      carName: 'Audi',
      img1: 'assets/img/cars/car-03.jpg',
      img2: 'assets/img/profiles/avatar-03.jpg',
      carModel: 'Audi A3 2019 new',
      rating: '(5.0)',
      carDetail1: 'Manual',
      carDetail2: '10 KM',
      carDetail3: 'Petrol',
      carDetail4: 'Power',
      carDetail5: '2019',
      carDetail6: '4 Persons',
      country: 'Newyork, USA',
      price: '$45',
      heading: '/ Day',
      text: 'Rent Now',
      like: false,
    },
    {
      carName: 'Ferrai',
      img1: 'assets/img/cars/car-04.jpg',
      img2: 'assets/img/profiles/avatar-04.jpg',
      carModel: 'Ferrari 458 MM Speciale',
      rating: '(5.0)',
      carDetail1: 'Manual',
      carDetail2: '14 KM',
      carDetail3: 'Diesel',
      carDetail4: 'Basic',
      carDetail5: '2022',
      carDetail6: '5 Persons',
      country: 'Newyork, USA',
      price: '$160',
      heading: '/ Day',
      text: 'Rent Now',
      like: false,
    },
    {
      carName: 'Chevrolet',
      img1: 'assets/img/cars/car-05.jpg',
      img2: 'assets/img/profiles/avatar-05.jpg',
      carModel: '2018 Chevrolet Camaro',
      rating: '(5.0)',
      carDetail1: 'Manual',
      carDetail2: '18 KM',
      carDetail3: 'Diesel',
      carDetail4: 'Power',
      carDetail5: '2018',
      carDetail6: '4 Persons',
      country: 'Germany',
      price: '$36',
      heading: '/ Day',
      text: 'Rent Now',
      like: false,
    },
    {
      carName: 'Acura',
      img1: 'assets/img/cars/car-06.jpg',
      img2: 'assets/img/profiles/avatar-06.jpg',
      carModel: 'Acura Sport Version',
      rating: '(5.0)',
      carDetail1: 'Auto',
      carDetail2: '12 KM',
      carDetail3: 'Diesel',
      carDetail4: 'Power',
      carDetail5: '2013',
      carDetail6: '5 Persons',
      country: 'Newyork, USA',
      price: '$30',
      heading: '/ Day',
      text: 'Rent Now',
      like: false,
    },
    {
      carName: 'Chevrolet',
      img1: 'assets/img/cars/car-07.jpg',
      img2: 'assets/img/profiles/avatar-07.jpg',
      carModel: 'Chevrolet Pick Truck 3.5L',
      rating: '(5.0)',
      carDetail1: 'Manual',
      carDetail2: '10 KM',
      carDetail3: 'Petrol',
      carDetail4: 'Power',
      carDetail5: '2012',
      carDetail6: '5 Persons',
      country: 'Spain',
      price: '$77',
      heading: '/ Day',
      text: 'Rent Now',
      like: false,
    },
    {
      carName: 'Accura',
      img1: 'assets/img/cars/car-09.jpg',
      img2: 'assets/img/profiles/avatar-10.jpg',
      carModel: 'Acura RDX FWD',
      rating: '(5.0)',
      carDetail1: 'Auto',
      carDetail2: '42 miles',
      carDetail3: 'Petrol',
      carDetail4: 'Power',
      carDetail5: '2021',
      carDetail6: '5 Persons',
      country: 'Dallas, USA',
      price: '$80',
      heading: '/ Day',
      text: 'Rent Now',
      like: false,
    },
  ];
  public popularCars4 = [
    {
      carName: 'Toyota',
      img1: 'assets/img/cars/car-01.jpg',
      img2: 'assets/img/profiles/avatar-0.jpg',
      carModel: 'Toyota Camry SE 350',
      rating: '(5.0)',
      carDetail1: 'Auto',
      carDetail2: '10 KM',
      carDetail3: 'Petrol',
      carDetail4: 'Power',
      carDetail5: '2018',
      carDetail6: '5 Persons',
      country: 'Germany',
      price: '$400',
      heading: '/ Day',
      text: 'Rent Now',
      like: false,
    },
    {
      carName: 'KIA',
      img1: 'assets/img/cars/car-02.jpg',
      img2: 'assets/img/profiles/avatar-02.jpg',
      carModel: 'Kia Soul 2016',
      rating: '(5.0)',
      carDetail1: 'Auto',
      carDetail2: '22 KM',
      carDetail3: 'Petrol',
      carDetail4: 'Diesel',
      carDetail5: '2016',
      carDetail6: '5 Persons',
      country: 'Belgium',
      price: '$80',
      heading: '/ Day',
      text: 'Rent Now',
      like: false,
    },
    {
      carName: 'Audi',
      img1: 'assets/img/cars/car-03.jpg',
      img2: 'assets/img/profiles/avatar-03.jpg',
      carModel: 'Audi A3 2019 new',
      rating: '(5.0)',
      carDetail1: 'Manual',
      carDetail2: '10 KM',
      carDetail3: 'Petrol',
      carDetail4: 'Power',
      carDetail5: '2019',
      carDetail6: '4 Persons',
      country: 'Newyork, USA',
      price: '$45',
      heading: '/ Day',
      text: 'Rent Now',
      like: false,
    },
    {
      carName: 'Ferrai',
      img1: 'assets/img/cars/car-04.jpg',
      img2: 'assets/img/profiles/avatar-04.jpg',
      carModel: 'Ferrari 458 MM Speciale',
      rating: '(5.0)',
      carDetail1: 'Manual',
      carDetail2: '14 KM',
      carDetail3: 'Diesel',
      carDetail4: 'Basic',
      carDetail5: '2022',
      carDetail6: '5 Persons',
      country: 'Newyork, USA',
      price: '$160',
      heading: '/ Day',
      text: 'Rent Now',
      like: false,
    },
    {
      carName: 'Chevrolet',
      img1: 'assets/img/cars/car-05.jpg',
      img2: 'assets/img/profiles/avatar-05.jpg',
      carModel: '2018 Chevrolet Camaro',
      rating: '(5.0)',
      carDetail1: 'Manual',
      carDetail2: '18 KM',
      carDetail3: 'Diesel',
      carDetail4: 'Power',
      carDetail5: '2018',
      carDetail6: '4 Persons',
      country: 'Germany',
      price: '$36',
      heading: '/ Day',
      text: 'Rent Now',
      like: false,
    },
    {
      carName: 'Acura',
      img1: 'assets/img/cars/car-06.jpg',
      img2: 'assets/img/profiles/avatar-06.jpg',
      carModel: 'Acura Sport Version',
      rating: '(5.0)',
      carDetail1: 'Auto',
      carDetail2: '12 KM',
      carDetail3: 'Diesel',
      carDetail4: 'Power',
      carDetail5: '2013',
      carDetail6: '5 Persons',
      country: 'Newyork, USA',
      price: '$30',
      heading: '/ Day',
      text: 'Rent Now',
      like: false,
    },
    {
      carName: 'Chevrolet',
      img1: 'assets/img/cars/car-07.jpg',
      img2: 'assets/img/profiles/avatar-07.jpg',
      carModel: 'Chevrolet Pick Truck 3.5L',
      rating: '(5.0)',
      carDetail1: 'Manual',
      carDetail2: '10 KM',
      carDetail3: 'Petrol',
      carDetail4: 'Power',
      carDetail5: '2012',
      carDetail6: '5 Persons',
      country: 'Spain',
      price: '$77',
      heading: '/ Day',
      text: 'Rent Now',
      like: false,
    },
    {
      carName: 'Toyota',
      img1: 'assets/img/cars/car-08.jpg',
      img2: 'assets/img/profiles/avatar-08.jpg',
      carModel: 'Toyota Tacoma 4WD',
      rating: '(5.0)',
      carDetail1: 'Auto',
      carDetail2: '22 miles',
      carDetail3: 'Diesel',
      carDetail4: 'Power',
      carDetail5: '2019',
      carDetail6: '5 Persons',
      country: 'Dallas, USA',
      price: '$30',
      heading: '/ Day',
      text: 'Rent Now',
      like: false,
    },
    {
      carName: 'Accura',
      img1: 'assets/img/cars/car-09.jpg',
      img2: 'assets/img/profiles/avatar-10.jpg',
      carModel: 'Acura RDX FWD',
      rating: '(5.0)',
      carDetail1: 'Auto',
      carDetail2: '42 miles',
      carDetail3: 'Petrol',
      carDetail4: 'Power',
      carDetail5: '2021',
      carDetail6: '5 Persons',
      country: 'Dallas, USA',
      price: '$80',
      heading: '/ Day',
      text: 'Rent Now',
      like: false,
    },
  ];
  public popularCars5 = [
    {
      carName: 'Toyota',
      img1: 'assets/img/cars/car-01.jpg',
      img2: 'assets/img/profiles/avatar-0.jpg',
      carModel: 'Toyota Camry SE 350',
      rating: '(5.0)',
      carDetail1: 'Auto',
      carDetail2: '10 KM',
      carDetail3: 'Petrol',
      carDetail4: 'Power',
      carDetail5: '2018',
      carDetail6: '5 Persons',
      country: 'Germany',
      price: '$400',
      heading: '/ Day',
      text: 'Rent Now',
      like: false,
    },
    {
      carName: 'KIA',
      img1: 'assets/img/cars/car-02.jpg',
      img2: 'assets/img/profiles/avatar-02.jpg',
      carModel: 'Kia Soul 2016',
      rating: '(5.0)',
      carDetail1: 'Auto',
      carDetail2: '22 KM',
      carDetail3: 'Petrol',
      carDetail4: 'Diesel',
      carDetail5: '2016',
      carDetail6: '5 Persons',
      country: 'Belgium',
      price: '$80',
      heading: '/ Day',
      text: 'Rent Now',
      like: false,
    },
    {
      carName: 'Audi',
      img1: 'assets/img/cars/car-03.jpg',
      img2: 'assets/img/profiles/avatar-03.jpg',
      carModel: 'Audi A3 2019 new',
      rating: '(5.0)',
      carDetail1: 'Manual',
      carDetail2: '10 KM',
      carDetail3: 'Petrol',
      carDetail4: 'Power',
      carDetail5: '2019',
      carDetail6: '4 Persons',
      country: 'Newyork, USA',
      price: '$45',
      heading: '/ Day',
      text: 'Rent Now',
      like: false,
    },
    {
      carName: 'Ferrai',
      img1: 'assets/img/cars/car-04.jpg',
      img2: 'assets/img/profiles/avatar-04.jpg',
      carModel: 'Ferrari 458 MM Speciale',
      rating: '(5.0)',
      carDetail1: 'Manual',
      carDetail2: '14 KM',
      carDetail3: 'Diesel',
      carDetail4: 'Basic',
      carDetail5: '2022',
      carDetail6: '5 Persons',
      country: 'Newyork, USA',
      price: '$160',
      heading: '/ Day',
      text: 'Rent Now',
      like: false,
    },
    {
      carName: 'Chevrolet',
      img1: 'assets/img/cars/car-05.jpg',
      img2: 'assets/img/profiles/avatar-05.jpg',
      carModel: '2018 Chevrolet Camaro',
      rating: '(5.0)',
      carDetail1: 'Manual',
      carDetail2: '18 KM',
      carDetail3: 'Diesel',
      carDetail4: 'Power',
      carDetail5: '2018',
      carDetail6: '4 Persons',
      country: 'Germany',
      price: '$36',
      heading: '/ Day',
      text: 'Rent Now',
      like: false,
    },
    {
      carName: 'Acura',
      img1: 'assets/img/cars/car-06.jpg',
      img2: 'assets/img/profiles/avatar-06.jpg',
      carModel: 'Acura Sport Version',
      rating: '(5.0)',
      carDetail1: 'Auto',
      carDetail2: '12 KM',
      carDetail3: 'Diesel',
      carDetail4: 'Power',
      carDetail5: '2013',
      carDetail6: '5 Persons',
      country: 'Newyork, USA',
      price: '$30',
      heading: '/ Day',
      text: 'Rent Now',
      like: false,
    },
    {
      carName: 'Chevrolet',
      img1: 'assets/img/cars/car-07.jpg',
      img2: 'assets/img/profiles/avatar-07.jpg',
      carModel: 'Chevrolet Pick Truck 3.5L',
      rating: '(5.0)',
      carDetail1: 'Manual',
      carDetail2: '10 KM',
      carDetail3: 'Petrol',
      carDetail4: 'Power',
      carDetail5: '2012',
      carDetail6: '5 Persons',
      country: 'Spain',
      price: '$77',
      heading: '/ Day',
      text: 'Rent Now',
      like: false,
    },
    {
      carName: 'Toyota',
      img1: 'assets/img/cars/car-08.jpg',
      img2: 'assets/img/profiles/avatar-08.jpg',
      carModel: 'Toyota Tacoma 4WD',
      rating: '(5.0)',
      carDetail1: 'Auto',
      carDetail2: '22 miles',
      carDetail3: 'Diesel',
      carDetail4: 'Power',
      carDetail5: '2019',
      carDetail6: '5 Persons',
      country: 'Dallas, USA',
      price: '$30',
      heading: '/ Day',
      text: 'Rent Now',
      like: false,
    },
    {
      carName: 'Accura',
      img1: 'assets/img/cars/car-09.jpg',
      img2: 'assets/img/profiles/avatar-10.jpg',
      carModel: 'Acura RDX FWD',
      rating: '(5.0)',
      carDetail1: 'Auto',
      carDetail2: '42 miles',
      carDetail3: 'Petrol',
      carDetail4: 'Power',
      carDetail5: '2021',
      carDetail6: '5 Persons',
      country: 'Dallas, USA',
      price: '$80',
      heading: '/ Day',
      text: 'Rent Now',
      like: false,
    },
  ];
  public popularCars6 = [
    {
      carName: 'Toyota',
      img1: 'assets/img/cars/car-08.jpg',
      img2: 'assets/img/profiles/avatar-08.jpg',
      carModel: 'Toyota Tacoma 4WD',
      rating: '(5.0)',
      carDetail1: 'Auto',
      carDetail2: '22 miles',
      carDetail3: 'Diesel',
      carDetail4: 'Power',
      carDetail5: '2019',
      carDetail6: '5 Persons',
      country: 'Dallas, USA',
      price: '$30',
      heading: '/ Day',
      text: 'Rent Now',
      like: false,
    },
    {
      carName: 'Toyota',
      img1: 'assets/img/cars/car-01.jpg',
      img2: 'assets/img/profiles/avatar-0.jpg',
      carModel: 'Toyota Camry SE 350',
      rating: '(5.0)',
      carDetail1: 'Auto',
      carDetail2: '10 KM',
      carDetail3: 'Petrol',
      carDetail4: 'Power',
      carDetail5: '2018',
      carDetail6: '5 Persons',
      country: 'Germany',
      price: '$400',
      heading: '/ Day',
      text: 'Rent Now',
      like: false,
    },
    {
      carName: 'KIA',
      img1: 'assets/img/cars/car-02.jpg',
      img2: 'assets/img/profiles/avatar-02.jpg',
      carModel: 'Kia Soul 2016',
      rating: '(5.0)',
      carDetail1: 'Auto',
      carDetail2: '22 KM',
      carDetail3: 'Petrol',
      carDetail4: 'Diesel',
      carDetail5: '2016',
      carDetail6: '5 Persons',
      country: 'Belgium',
      price: '$80',
      heading: '/ Day',
      text: 'Rent Now',
      like: false,
    },
    {
      carName: 'Audi',
      img1: 'assets/img/cars/car-03.jpg',
      img2: 'assets/img/profiles/avatar-03.jpg',
      carModel: 'Audi A3 2019 new',
      rating: '(5.0)',
      carDetail1: 'Manual',
      carDetail2: '10 KM',
      carDetail3: 'Petrol',
      carDetail4: 'Power',
      carDetail5: '2019',
      carDetail6: '4 Persons',
      country: 'Newyork, USA',
      price: '$45',
      heading: '/ Day',
      text: 'Rent Now',
      like: false,
    },
    {
      carName: 'Ferrai',
      img1: 'assets/img/cars/car-04.jpg',
      img2: 'assets/img/profiles/avatar-04.jpg',
      carModel: 'Ferrari 458 MM Speciale',
      rating: '(5.0)',
      carDetail1: 'Manual',
      carDetail2: '14 KM',
      carDetail3: 'Diesel',
      carDetail4: 'Basic',
      carDetail5: '2022',
      carDetail6: '5 Persons',
      country: 'Newyork, USA',
      price: '$160',
      heading: '/ Day',
      text: 'Rent Now',
      like: false,
    },
    {
      carName: 'Chevrolet',
      img1: 'assets/img/cars/car-05.jpg',
      img2: 'assets/img/profiles/avatar-05.jpg',
      carModel: '2018 Chevrolet Camaro',
      rating: '(5.0)',
      carDetail1: 'Manual',
      carDetail2: '18 KM',
      carDetail3: 'Diesel',
      carDetail4: 'Power',
      carDetail5: '2018',
      carDetail6: '4 Persons',
      country: 'Germany',
      price: '$36',
      heading: '/ Day',
      text: 'Rent Now',
      like: false,
    },
    {
      carName: 'Acura',
      img1: 'assets/img/cars/car-06.jpg',
      img2: 'assets/img/profiles/avatar-06.jpg',
      carModel: 'Acura Sport Version',
      rating: '(5.0)',
      carDetail1: 'Auto',
      carDetail2: '12 KM',
      carDetail3: 'Diesel',
      carDetail4: 'Power',
      carDetail5: '2013',
      carDetail6: '5 Persons',
      country: 'Newyork, USA',
      price: '$30',
      heading: '/ Day',
      text: 'Rent Now',
      like: false,
    },
    {
      carName: 'Chevrolet',
      img1: 'assets/img/cars/car-07.jpg',
      img2: 'assets/img/profiles/avatar-07.jpg',
      carModel: 'Chevrolet Pick Truck 3.5L',
      rating: '(5.0)',
      carDetail1: 'Manual',
      carDetail2: '10 KM',
      carDetail3: 'Petrol',
      carDetail4: 'Power',
      carDetail5: '2012',
      carDetail6: '5 Persons',
      country: 'Spain',
      price: '$77',
      heading: '/ Day',
      text: 'Rent Now',
      like: false,
    },
    {
      carName: 'Accura',
      img1: 'assets/img/cars/car-09.jpg',
      img2: 'assets/img/profiles/avatar-10.jpg',
      carModel: 'Acura RDX FWD',
      rating: '(5.0)',
      carDetail1: 'Auto',
      carDetail2: '42 miles',
      carDetail3: 'Petrol',
      carDetail4: 'Power',
      carDetail5: '2021',
      carDetail6: '5 Persons',
      country: 'Dallas, USA',
      price: '$80',
      heading: '/ Day',
      text: 'Rent Now',
      like: false,
    },
  ];
  public carousel = [
    {
      img: 'assets/img/profiles/avatar-02.jpg',
      Name: 'Rabien Ustoc',
      rating: '(5.0)',
      para: ' Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed doeiusmod tempor incididunt ut labore et dolore magna aliqua. Utenim ad minim veniam, quis nostrud exercitation ullamco laborisnisi ut aliquip ex ea commodo consequat',
    },
    {
      img: 'assets/img/profiles/avatar-03.jpg',
      Name: 'Valerie L. Ellis',
      rating: '(5.0)',
      para: '  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed doeiusmod tempor incididunt ut labore et dolore magna aliqua. Utenim ad minim veniam, quis nostrud exercitation ullamco laborisnisi ut aliquip ex ea commodo consequat.',
    },
    {
      img: 'assets/img/profiles/avatar-04.jpg',
      Name: 'Laverne Marier',
      rating: '(5.0)',
      para: '  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed doeiusmod tempor incididunt ut labore et dolore magna aliqua. Utenim ad minim veniam, quis nostrud exercitation ullamco laborisnisi ut aliquip ex ea commodo consequat.',
    },
    {
      img: 'assets/img/profiles/avatar-06.jpg',
      Name: 'Sydney Salmons',
      rating: '(5.0)',
      para: '  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed doeiusmod tempor incididunt ut labore et dolore magna aliqua. Utenim ad minim veniam, quis nostrud exercitation ullamco laborisnisi ut aliquip ex ea commodo consequat.',
    },
    {
      img: 'assets/img/profiles/avatar-07.jpg',
      Name: 'Lucas Moquin',
      rating: '(5.0)',
      para: '  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed doeiusmod tempor incididunt ut labore et dolore magna aliqua. Utenim ad minim veniam, quis nostrud exercitation ullamco laborisnisi ut aliquip ex ea commodo consequat.',
    },
  ];
  public recommendedCar = [
    {
      img: 'assets/img/cars/car-01.jpg',
      text: '$400/day',
      carModel: 'Toyota Camry SE 350',
      heading: 'Listed By',
      name: 'Venis Darren',
      carDetail1: 'Auto',
      carDetail2: '10 KM',
      carDetail3: 'Petrol',
      carDetail4: 'Power',
      carDetail5: '2018',
      carDetail6: '5 Persons',
      title: 'Rent Now',
    },
    {
      img: 'assets/img/cars/car-02.jpg',
      text: '$400/day',
      carModel: 'Toyota Camry SE 350',
      heading: 'Listed By',
      name: 'Venis Darren',
      carDetail1: 'Auto',
      carDetail2: '10 KM',
      carDetail3: 'Petrol',
      carDetail4: 'Power',
      carDetail5: '2018',
      carDetail6: '5 Persons',
      title: 'Rent Now',
    },
    {
      img: 'assets/img/cars/car-03.jpg',
      text: '$400/day',
      carModel: 'Toyota Camry SE 350',
      heading: 'Listed By',
      name: 'Venis Darren',
      carDetail1: 'Auto',
      carDetail2: '10 KM',
      carDetail3: 'Petrol',
      carDetail4: 'Power',
      carDetail5: '2018',
      carDetail6: '5 Persons',
      title: 'Rent Now',
    },
  ];
  public testimonial = [
    {
      img: 'assets/img/profiles/avatar-02.jpg',
      Name: 'Rabien Ustoc',
      rating: '(5.0)',
      para: ' Renting a car from Dreams rent made my vacation so much smoother! The process was quick and easy, the car was clean and well-maintained, and the staff were friendly and helpful.',
    },
    {
      img: 'assets/img/profiles/avatar-03.jpg',
      Name: 'Valerie L. Ellis',
      rating: '(5.0)',
      para: 'As a frequent business traveller, I rely on Dreams rent for all my needs. Their wide selection of vehicles, convenient locations, and competitive prices make them my go-to choice every time. Plus, their customer service is top-notch!',
    },
    {
      img: 'assets/img/profiles/avatar-04.jpg',
      Name: 'Laverne Marier',
      rating: '(5.0)',
      para: 'Renting a car from Dreams rent made our family vacation unforgettable and top-notch customer service. The spacious SUV we rented comfortably fit our family and all our luggage, and it was a smooth ride throughout our trip.',
    },
    {
      img: 'assets/img/profiles/avatar-06.jpg',
      Name: 'Sydney Salmons',
      rating: '(5.0)',
      para: 'As a frequent business traveller, I rely on Dreams rent for all my needs. Their wide selection of vehicles, convenient locations, and competitive prices make them my go-to choice every time. Plus, their customer service is top-notch!',
    },
    {
      img: 'assets/img/profiles/avatar-07.jpg',
      Name: 'Lucas Moquin',
      rating: '(5.0)',
      para: 'Renting a car from Dreams rent made our family vacation unforgettable and top-notch customer service. The spacious SUV we rented comfortably fit our family and all our luggage, and it was a smooth ride throughout our trip.',
    },
  ];
  public carTypes = [
    {
      img: 'assets/img/cars/mp-vehicle-01.png',
      heading: 'Crossover',
      cars: '35 Cars',
    },
    {
      img: 'assets/img/cars/mp-vehicle-02.png',
      heading: 'Sports Coupe',
      cars: '45 Cars',
    },
    {
      img: 'assets/img/cars/mp-vehicle-03.png',
      heading: 'Sedan',
      cars: '15 Cars',
    },
    {
      img: 'assets/img/cars/mp-vehicle-04.png',
      heading: 'Pickup',
      cars: '17 Cars',
    },
    {
      img: 'assets/img/cars/mp-vehicle-05.png',
      heading: 'Family MPV',
      cars: '24 Cars',
    },
  ];
  public vehicleGrid = [
    {
      carName: 'Toyota',
      img1: 'assets/img/cars/car-01.jpg',
      img2: 'assets/img/profiles/avatar-0.jpg',
      carModel: 'Toyota Camry SE 350',
      rating: '(5.0)',
      carDetail1: 'Auto',
      carDetail2: '10 KM',
      carDetail3: 'Petrol',
      carDetail4: 'Power',
      carDetail5: '2018',
      carDetail6: '5 Persons',
      country: 'Germany',
      price: '$400',
      heading: '/ Day',
      text: 'Rent Now',
      like: false,
    },
    {
      carName: 'KIA',
      img1: 'assets/img/cars/car-02.jpg',
      img2: 'assets/img/profiles/avatar-02.jpg',
      carModel: 'Kia Soul 2016',
      rating: '(5.0)',
      carDetail1: 'Auto',
      carDetail2: '22 KM',
      carDetail3: 'Petrol',
      carDetail4: 'Diesel',
      carDetail5: '2016',
      carDetail6: '5 Persons',
      country: 'Belgium',
      price: '$80',
      heading: '/ Day',
      text: 'Rent Now',
      like: false,
    },
    {
      carName: 'Audi',
      img1: 'assets/img/cars/car-03.jpg',
      img2: 'assets/img/profiles/avatar-03.jpg',
      carModel: 'Audi A3 2019 new',
      rating: '(5.0)',
      carDetail1: 'Manual',
      carDetail2: '10 KM',
      carDetail3: 'Petrol',
      carDetail4: 'Power',
      carDetail5: '2019',
      carDetail6: '4 Persons',
      country: 'Newyork, USA',
      price: '$45',
      heading: '/ Day',
      text: 'Rent Now',
      like: false,
    },
    {
      carName: 'Ferrai',
      img1: 'assets/img/cars/car-04.jpg',
      img2: 'assets/img/profiles/avatar-04.jpg',
      carModel: 'Ferrari 458 MM Speciale',
      rating: '(5.0)',
      carDetail1: 'Manual',
      carDetail2: '14 KM',
      carDetail3: 'Diesel',
      carDetail4: 'Basic',
      carDetail5: '2022',
      carDetail6: '5 Persons',
      country: 'Newyork, USA',
      price: '$160',
      heading: '/ Day',
      text: 'Rent Now',
      like: false,
    },
    {
      carName: 'Chevrolet',
      img1: 'assets/img/cars/car-05.jpg',
      img2: 'assets/img/profiles/avatar-05.jpg',
      carModel: '2018 Chevrolet Camaro',
      rating: '(5.0)',
      carDetail1: 'Manual',
      carDetail2: '18 KM',
      carDetail3: 'Diesel',
      carDetail4: 'Power',
      carDetail5: '2018',
      carDetail6: '4 Persons',
      country: 'Germany',
      price: '$36',
      heading: '/ Day',
      text: 'Rent Now',
      like: false,
    },
    {
      carName: 'Acura',
      img1: 'assets/img/cars/car-06.jpg',
      img2: 'assets/img/profiles/avatar-06.jpg',
      carModel: 'Acura Sport Version',
      rating: '(5.0)',
      carDetail1: 'Auto',
      carDetail2: '12 KM',
      carDetail3: 'Diesel',
      carDetail4: 'Power',
      carDetail5: '2013',
      carDetail6: '5 Persons',
      country: 'Newyork, USA',
      price: '$30',
      heading: '/ Day',
      text: 'Rent Now',
      like: false,
    },
    {
      carName: 'Chevrolet',
      img1: 'assets/img/cars/car-07.jpg',
      img2: 'assets/img/profiles/avatar-07.jpg',
      carModel: 'Chevrolet Pick Truck 3.5L',
      rating: '(5.0)',
      carDetail1: 'Manual',
      carDetail2: '10 KM',
      carDetail3: 'Petrol',
      carDetail4: 'Power',
      carDetail5: '2012',
      carDetail6: '5 Persons',
      country: 'Spain',
      price: '$77',
      heading: '/ Day',
      text: 'Rent Now',
      like: false,
    },
    {
      carName: 'Toyota',
      img1: 'assets/img/cars/car-08.jpg',
      img2: 'assets/img/profiles/avatar-08.jpg',
      carModel: 'Toyota Tacoma 4WD',
      rating: '(5.0)',
      carDetail1: 'Auto',
      carDetail2: '22 miles',
      carDetail3: 'Diesel',
      carDetail4: 'Power',
      carDetail5: '2019',
      carDetail6: '5 Persons',
      country: 'Dallas, USA',
      price: '$30',
      heading: '/ Day',
      text: 'Rent Now',
      like: false,
    },
    {
      carName: 'Accura',
      img1: 'assets/img/cars/car-09.jpg',
      img2: 'assets/img/profiles/avatar-10.jpg',
      carModel: 'Acura RDX FWD',
      rating: '(5.0)',
      carDetail1: 'Auto',
      carDetail2: '42 miles',
      carDetail3: 'Petrol',
      carDetail4: 'Power',
      carDetail5: '2021',
      carDetail6: '5 Persons',
      country: 'Dallas, USA',
      price: '$80',
      heading: '/ Day',
      text: 'Rent Now',
      like: false,
    },
    {
      carName: 'KIA',
      img1: 'assets/img/cars/car-02.jpg',
      img2: 'assets/img/profiles/avatar-02.jpg',
      carModel: 'Kia Soul 2016',
      rating: '(5.0)',
      carDetail1: 'Auto',
      carDetail2: '22 KM',
      carDetail3: 'Petrol',
      carDetail4: 'Diesel',
      carDetail5: '2016',
      carDetail6: '5 Persons',
      country: 'Belgium',
      price: '$80',
      heading: '/ Day',
      text: 'Rent Now',
      like: false,
    },
  ];
  public vehicleDetails = [
    {
      img: 'assets/img/cars/slider-01.jpg',
    },
    {
      img: 'assets/img/cars/slider-02.jpg',
    },
    {
      img: 'assets/img/cars/slider-03.jpg',
    },
    {
      img: 'assets/img/cars/slider-04.jpg',
    },
    {
      img: 'assets/img/cars/slider-05.jpg',
    },
  ];
  public thumbnails1 = [
    {
      img: 'assets/img/profiles/avatar-11.jpg',
    },
    {
      img: 'assets/img/profiles/avatar-02.jpg',
    },
    {
      img: 'assets/img/profiles/avatar-03.jpg',
    },
    {
      img: 'assets/img/profiles/avatar-04.jpg',
    },
  ];
  public testimonials = [
    {
      name: 'Marian Hendriques',
      location: 'Dubai, Emirates',

      title: '“ From a Satisfied Business Traveler “',
      content: 'As a frequent business traveler, I rely on Dreams Rent for all my transportation needs. Their extensive fleet of vehicles, convenient locations, and competitive pricing make them my go-to choice every time. Plus, their friendly staff always go the extra mile to ensure a seamless rental experience.'
    },
    {
      name: 'Lyon Avenue',
      location: 'Derby, UK',

      title: '“ David\'s Urban Exploration “',
      content: 'As a frequent traveler, finding reliable bike rental services is crucial for me. I stumbled upon this website during my recent trip, and I\'m glad I did. The process of booking was seamless, and the prices were reasonable. The best part was the quality of the bikes; they were well-maintained and comfortable to ride.'
    },
    {
      name: 'Westfall Avenue',
      location: 'New York, USA',

      title: '“ Sarah\'s Adventure “',
      content: 'Absolutely loved my experience with Dreams Rent! Booking was a breeze; their website is user-friendly and intuitive. The bike I rented was in excellent condition, which made exploring the city a joy. What stood out the most was the exceptional customer service.'
    },
    {
      name: 'Saint Clair Street',
      location: 'Norwich, UK',

      title: '“ Edward\'s Scenic Ride “',
      content: 'From start to finish, renting a bike through this website was an absolute pleasure. The website interface was easy to navigate, and I could quickly find the perfect bike for my needs. When I arrived to pick up the bike, I was impressed by its excellent condition. It was evident that they take pride in maintaining their fleet.'
    }

  ];

  public thumbnails = [
    {
      img: 'assets/img/cars/slider-thum-01.jpg',
    },
    {
      img: 'assets/img/cars/slider-thum-02.jpg',
    },
    {
      img: 'assets/img/cars/slider-thum-03.jpg',
    },
    {
      img: 'assets/img/cars/slider-thum-04.jpg',
    },
    {
      img: 'assets/img/cars/slider-thum-05.jpg',
    },
  ];
  public gallery = [
    {
      img: 'assets/img/gallery/gallery-01.jpg',
      thumbImg: 'assets/img/gallery/gallery-thum-01.jpg',
    },
    {
      img: 'assets/img/gallery/gallery-02.jpg',
      thumbImg: 'assets/img/gallery/gallery-thum-02.jpg',
    },
    {
      img: 'assets/img/gallery/gallery-03.jpg',
      thumbImg: 'assets/img/gallery/gallery-thum-03.jpg',
    },
    {
      img: 'assets/img/gallery/gallery-04.jpg',
      thumbImg: 'assets/img/gallery/gallery-thum-04.jpg',
    },
    {
      img: 'assets/img/gallery/gallery-05.jpg',
      thumbImg: 'assets/img/gallery/gallery-thum-05.jpg',
    },
    {
      img: 'assets/img/gallery/gallery-06.jpg',
      thumbImg: 'assets/img/gallery/gallery-thum-06.jpg',
    },
    {
      img: 'assets/img/gallery/gallery-07.jpg',
      thumbImg: 'assets/img/gallery/gallery-thum-07.jpg',
    },
    {
      img: 'assets/img/gallery/gallery-08.jpg',
      thumbImg: 'assets/img/gallery/gallery-thum-08.jpg',
    },
    {
      img: 'assets/img/gallery/gallery-09.jpg',
      thumbImg: 'assets/img/gallery/gallery-thum-09.jpg',
    },
    {
      img: 'assets/img/gallery/gallery-10.jpg',
      thumbImg: 'assets/img/gallery/gallery-thum-10.jpg',
    },
    {
      img: 'assets/img/gallery/gallery-11.jpg',
      thumbImg: 'assets/img/gallery/gallery-thum-11.jpg',
    },
    {
      img: 'assets/img/gallery/gallery-12.jpg',
      thumbImg: 'assets/img/gallery/gallery-thum-12.jpg',
    },
  ];
  public interestedCars = [
    {
      carName: 'KIA',
      img1: 'assets/img/cars/car-02.jpg',
      img2: 'assets/img/profiles/avatar-02.jpg',
      carModel: 'Kia Soul 2016',
      rating: '(5.0)',
      carDetail1: 'Auto',
      carDetail2: '22 KM',
      carDetail3: 'Petrol',
      carDetail4: 'Diesel',
      carDetail5: '2016',
      carDetail6: '5 Persons',
      country: 'Belgium',
      price: '$80',
      heading: '/ Day',
      text: 'Rent Now',
      like: false,
    },
    {
      carName: 'Chevrolet',
      img1: 'assets/img/cars/car-05.jpg',
      img2: 'assets/img/profiles/avatar-05.jpg',
      carModel: '2018 Chevrolet Camaro',
      rating: '(5.0)',
      carDetail1: 'Manual',
      carDetail2: '18 KM',
      carDetail3: 'Diesel',
      carDetail4: 'Power',
      carDetail5: '2018',
      carDetail6: '4 Persons',
      country: 'Germany',
      price: '$36',
      heading: '/ Day',
      text: 'Rent Now',
      like: false,
    },
    {
      carName: 'Audi',
      img1: 'assets/img/cars/car-03.jpg',
      img2: 'assets/img/profiles/avatar-03.jpg',
      carModel: 'Audi A3 2019 new',
      rating: '(5.0)',
      carDetail1: 'Manual',
      carDetail2: '10 KM',
      carDetail3: 'Petrol',
      carDetail4: 'Power',
      carDetail5: '2019',
      carDetail6: '4 Persons',
      country: 'Newyork, USA',
      price: '$45',
      heading: '/ Day',
      text: 'Rent Now',
      like: false,
    },
    {
      carName: 'Ferrai',
      img1: 'assets/img/cars/car-04.jpg',
      img2: 'assets/img/profiles/avatar-04.jpg',
      carModel: 'Ferrari 458 MM Speciale',
      rating: '(5.0)',
      carDetail1: 'Manual',
      carDetail2: '14 KM',
      carDetail3: 'Diesel',
      carDetail4: 'Basic',
      carDetail5: '2022',
      carDetail6: '5 Persons',
      country: 'Newyork, USA',
      price: '$160',
      heading: '/ Day',
      text: 'Rent Now',
      like: false,
    },
    {
      carName: 'Chevrolet',
      img1: 'assets/img/cars/car-05.jpg',
      img2: 'assets/img/profiles/avatar-05.jpg',
      carModel: '2018 Chevrolet Camaro',
      rating: '(5.0)',
      carDetail1: 'Manual',
      carDetail2: '18 KM',
      carDetail3: 'Diesel',
      carDetail4: 'Power',
      carDetail5: '2018',
      carDetail6: '4 Persons',
      country: 'Germany',
      price: '$36',
      heading: '/ Day',
      text: 'Rent Now',
      like: false,
    },
    {
      carName: 'Acura',
      img1: 'assets/img/cars/car-06.jpg',
      img2: 'assets/img/profiles/avatar-06.jpg',
      carModel: 'Acura Sport Version',
      rating: '(5.0)',
      carDetail1: 'Auto',
      carDetail2: '12 KM',
      carDetail3: 'Diesel',
      carDetail4: 'Power',
      carDetail5: '2013',
      carDetail6: '5 Persons',
      country: 'Newyork, USA',
      price: '$30',
      heading: '/ Day',
      text: 'Rent Now',
      like: false,
    },
  ];
}
