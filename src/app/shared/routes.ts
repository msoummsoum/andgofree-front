// export class  routes {
//   private static Url = '/';
//   static roles: string;


//   public static get baseUrl(): string {
//     return this.Url;
//   }
//   public static get homeNew(): string {
//     return this.baseUrl + '/index';
//   }
//   public static get home(): string {
//     return this.baseUrl + '/home';
//   }
//   public static get home2(): string {
//     return this.baseUrl + '/home-2';
//   }
//   public static get home3(): string {
//     return this.baseUrl + '/home-3';
//   }
//   public static get vehicleList(): string {
//     return this.baseUrl + '/vehicles/vehicle-list';
//   }
//   public static get vehicleMap(): string {
//     return this.baseUrl + '/vehicles/vehicle-map';
//   }
//   public static get vehicleDetails(): string {
//     return this.baseUrl + '/vehicles/vehicle-details';
//   }
//   public static get vehicleGrid(): string {
//     return this.baseUrl + '/vehicles/vehicle-grid';
//   }
//   public static get addvehicle(): string {
//     return this.baseUrl + '/vehicles/add-vehicle';
//   }
//   public static get aboutUs(): string {
//     return this.baseUrl + '/pages/about-us';
//   }
//   public static get register(): string {
//     return this.baseUrl + '/authentication/register';
//   }
//   public static get login(): string {
//     return this.baseUrl + '/authentication/login';
//   }
//   public static get forgotPassword(): string {
//     return this.baseUrl + '/authentication/forgot-password';
//   }
//   public static get resetPassword(): string {
//     return this.baseUrl + '/authentication/reset-password';
//   }
//   public static get bookingPayment(): string {
//     return this.baseUrl + '/booking/booking-payment';
//   }
//   public static get bookingList(): string {
//     return this.baseUrl + '/booking/booking-list';
//   }
//   public static get invoiceDetails(): string {
//     return this.baseUrl + '/booking/invoice-details';
//   }
//   public static get error404(): string {
//     return this.baseUrl + '/error/error404';
//   }
//   public static get error500(): string {
//     return this.baseUrl + '/error/error500';
//   }
//   public static get pricing(): string {
//     return this.baseUrl + '/pages/pricing';
//   }
//   public static get faq(): string {
//     return this.baseUrl + '/pages/faq';
//   }
//   public static get gallery(): string {
//     return this.baseUrl + '/pages/gallery';
//   }
//   public static get ourTeam(): string {
//     return this.baseUrl + '/pages/our-team';
//   }
//   public static get testimonial(): string {
//     return this.baseUrl + '/pages/testimonial';
//   }
//   public static get termsCondition(): string {
//     return this.baseUrl + '/pages/terms-condition';
//   }
//   public static get privacyPolicy(): string {
//     return this.baseUrl + '/pages/privacy-policy';
//   }
//   public static get maintenance(): string {
//     return this.baseUrl + '/pages/maintenance';
//   }
//   public static get blogList(): string {
//     return this.baseUrl + '/blog/blog-list';
//   }
//   public static get blogGrid(): string {
//     return this.baseUrl + '/blog/blog-grid';
//   }
//   public static get blogDetails(): string {
//     return this.baseUrl + '/blog/blog-details';
//   }
//   public static get contactUs(): string {
//     return this.baseUrl + '/pages/contact-us';
//   }
//   public static get comingSoon(): string {
//     return this.baseUrl + '/pages/coming-soon';
//   }
//   public static get user(): string {
//     return this.baseUrl + '/user';
//   }
//   public static get userPayment(): string {
//     return this.user + '/user-payment';
//   }
//   public static get userWallet(): string {
//     return this.user + '/user-wallet';
//   }
//   public static get userReview(): string {
//     return this.user + '/user-review';
//   }
//   public static get userWishlist(): string {
//     return this.user + '/user-wishlist';
//   }
//   public static get userSettings(): string {
//     return this.user + '/settings/user-settings';
//   }
//   public static get userPreference(): string {
//     return this.user + '/user-preferences';
//   }

//   public static get userBookingCancelled(): string {
//     return this.user + '/user-booking-cancelled';
//   }
//   public static get userBookingComplete(): string {
//     return this.user + '/user-booking-complete';
//   }
//   public static get userBookingInprogress(): string {
//     return this.user + '/user-booking-inprogress';
//   }
//   public static get userBookingUpcoming(): string {
//     return this.user + '/user-booking-upcoming';
//   }
//   public static get userBookings(): string {
//     return this.user + '/user-bookings';
//   }
//   public static get userDashboard(): string {
//     return this.user + '/user-dashboard';
//   }
//   public static get userIntegration(): string {
//     return this.user + '/settings/user-integration';
//   }
//   public static get userMessages(): string {
//     return this.user + '/user-messages';
//   }
//   public static get userReviews(): string {
//     return this.user + '/user-reviews';
//   }
//   public static get userNotification(): string {
//     return this.user + '/settings/user-notification';
//   }
//   public static get userPreferences(): string {
//     return this.user + '/settings/user-preferences';
//   }
//   public static get userSecurity(): string {
//     return this.user + '/settings/user-security';
//   }
//   public static get bookingAdon(): string {
//     return this.baseUrl + '/booking/booking-adon';
//   }
//   public static get bookingSuccess(): string {
//     return this.baseUrl + '/booking/booking-success';
//   }
//   public static get bookingDetails(): string {
//     return this.baseUrl + '/booking/booking-details';
//   }
//   public static get bookingCheckout(): string {
//     return this.baseUrl + '/booking/booking-checkout';
//   }
//   public static get bookingCalendar(): string {
//     return this.user + '/bookings-calendar';
//   }
//   public static get bookingCancelledCalendar(): string {
//     return this.user + '/booking-cancelled-callendar';
//   }
//   public static get bookingCompletedCalendar(): string {
//     return this.user + '/booking-complete-callendar';
//   }
//   public static get bookingUpcomingCalendar(): string {
//     return this.user + '/booking-upcoming-callendar';
//   }
//   public static get bookingInprogressCalendar(): string {
//     return this.user + '/booking-inprogress-callendar';
//   }


//   // ADMIN //
//   public static get admin(): string {
//     return this.Url +'/admin';
//   }
//   public static get adminDashboard(): string {
//     return this.admin + '/index';
//   }

//   //Booking
//   public static get bookings(): string {
//     return this.admin + '/bookings';
//   }
//   public static get reservation(): string {
//     return this.admin + '/reservations';
//   }
//   public static get addReservation(): string {
//     return this.admin + '/add-reservation';
//   }
//   public static get editReservation(): string {
//     return this.admin + '/edit-reservation';
//   }
//   public static get reservationDetails(): string {
//     return this.admin + '/reservation-details';
//   }
//   public static get calendar(): string {
//     return this.admin + '/calendar';
//   }
//   public static get quotation(): string {
//     return this.admin + '/quotations';
//   }
//   public static get addQuotation(): string {
//     return this.admin + '/add-quotations';
//   }
//   public static get editQuotation(): string {
//     return this.admin + '/edit-quotations';
//   }
//   public static get quotationDetails(): string {
//     return this.admin + '/quotation-details';
//   }
//   public static get enquiries(): string {
//     return this.admin + '/enquiries';
//   }

//   //Manage

//   public static get customers(): string {
//     return this.admin + '/customers';
//   }
//   public static get customersCompanies(): string {
//     return this.admin + '/customers-companies';
//   }
//   public static get customerDetails(): string {
//     return this.admin + '/customer-details';
//   }
//   public static get drivers(): string {
//     return this.admin + '/drivers';
//   }
//   public static get location(): string {
//     return this.admin + '/locations';
//   }

//   //Rentals
//   public static get companyDetails(): string {
//     return this.admin + '/company-details';
//   }
//   public static get cars(): string {
//     return this.admin + '/cars';
//   }
//   public static get addCar(): string {
//     return this.admin + '/add-car';
//   }
//   public static get editCar(): string {
//     return this.admin + '/edit-car';
//   }
//   public static get carDetails(): string {
//     return this.admin + '/car-details';
//   }
//   public static get extraServices(): string {
//     return this.admin + '/extra-services';
//   }
//   public static get adminPricing(): string {
//     return this.admin + '/pricing';
//   }
//   public static get inspections(): string {
//     return this.admin + '/inspections';
//   }
//   public static get tracking(): string {
//     return this.admin + '/tracking';
//   }
//   public static get adminMaintenance(): string {
//     return this.admin + '/maintenance';
//   }
//   public static get reviews(): string {
//     return this.admin + '/reviews';
//   }

//   public static get carAttribute(): string {
//     return this.admin + '/car-attributes';
//   }
//   public static get brands(): string {
//     return this.carAttribute + '/brands';
//   }
//   public static get types(): string {
//     return this.carAttribute + '/types';
//   }
//   public static get models(): string {
//     return this.carAttribute + '/models';
//   }
//   public static get transmissions(): string {
//     return this.carAttribute + '/transmissions';
//   }
//   public static get fuel(): string {
//     return this.carAttribute + '/fuel';
//   }
//   public static get color(): string {
//     return this.carAttribute + '/color';
//   }
//   public static get steering(): string {
//     return this.carAttribute + '/steering';
//   }
//   public static get seats(): string {
//     return this.carAttribute + '/seats';
//   }
//   public static get cylinders(): string {
//     return this.carAttribute + '/cylinders';
//   }
//   public static get doors(): string {
//     return this.carAttribute + '/doors';
//   }
//   public static get features(): string {
//     return this.carAttribute + '/features';
//   }
//   public static get safetyFeatures(): string {
//     return this.carAttribute + '/safety-features';
//   }
//   public static get invoices(): string {
//     return this.admin + '/invoices';
//   }
//   public static get addInvoice(): string {
//     return this.admin + '/add-invoice';
//   }
//   public static get editInvoice(): string {
//     return this.admin + '/edit-invoice';
//   }
//   public static get adminInvoiceDetails(): string {
//     return this.admin + '/invoice-details';
//   }
//   public static get payments(): string {
//     return this.admin + '/payments';
//   }
//   public static get incomeReport(): string {
//     return this.admin + '/income-report';
//   }
//   public static get earningsReport(): string {
//     return this.admin + '/earnings-report';
//   }
//   public static get rentalReport(): string {
//     return this.admin + '/rental-report';
//   }
//     // Auth Routes
//     public static get adminlogin(): string {
//       return this.baseUrl + 'auth/login';
//     }
//     public static get adminForgotPassword(): string {
//       return this.baseUrl + 'auth/forgot-password';
//     }
//     public static get adminOtp(): string {
//       return this.baseUrl + 'auth/otp';
//     }
//     public static get adminResetPassword(): string {
//       return this.baseUrl + 'auth/reset-password';
//     }



//     public static get advancedUi(): string {
//       return this.admin + '/advanced-ui';
//     }
//     public static get ribbon(): string {
//       return this.advancedUi + '/ui-ribbon';
//     }
//     public static get clipboards(): string {
//       return this.advancedUi + '/ui-clipboard';
//     }
//     public static get dragDrop(): string {
//       return this.advancedUi + '/ui-drag-drop';
//     }
//     public static get rating(): string {
//       return this.advancedUi + '/ui-rating';
//     }
//     public static get textEditor(): string {
//       return this.advancedUi + '/ui-text-editor';
//     }
//     public static get counter(): string {
//       return this.advancedUi + '/ui-counter';
//     }
//     public static get scrollbar(): string {
//       return this.advancedUi + '/ui-scrollbar';
//     }
//     public static get notification(): string {
//       return this.advancedUi + '/notification';
//     }
//     public static get stickyNote(): string {
//       return this.advancedUi + '/sticky-note';
//     }
//     public static get timeline(): string {
//       return this.advancedUi + '/ui-timeline';
//     }
//     public static get uiSortable(): string {
//       return this.baseUi + '/ui-sortable';
//     }
//     public static get uiSwiper(): string {
//       return this.baseUi + '/ui-swiper';
//     }
//     public static get horizontal(): string {
//       return this.advancedUi + '/horizontal-timeline';
//     }
//     public static get charts(): string {
//       return this.admin + '/charts';
//     }
//     public static get colors(): string {
//       return this.baseUi + '/ui-colors';
//     }
//     public static get apexChart(): string {
//       return this.charts + '/apex-charts';
//     }
//     public static get ngTwoCharts(): string {
//       return this.charts + '/prime-ng';
//     }
//     public static get icon(): string {
//       return this.admin + '/icon';
//     }
//     public static get leaflet(): string {
//       return this.admin + '/maps/leaflets';
//     }
//     public static get fontawesome(): string {
//       return this.icon + '/icon-fontawesome';
//     }
//     public static get tabler(): string {
//       return this.icon + '/icon-tabler';
//     }
//     public static get remix(): string {
//       return this.icon + '/icon-remix';
//     }
//     public static get bootstrap(): string {
//       return this.icon + '/icon-bootstrap';
//     }
//     public static get feather(): string {
//       return this.icon + '/icon-feather';
//     }
//     public static get ionic(): string {
//       return this.icon + '/icon-ionic';
//     }
//     public static get material(): string {
//       return this.icon + '/icon-material';
//     }
//     public static get pe7(): string {
//       return this.icon + '/icon-pe7';
//     }
//     public static get themify(): string {
//       return this.icon + '/icon-themify';
//     }
//     public static get typicon(): string {
//       return this.icon + '/icon-typicon';
//     }
//     public static get weather(): string {
//       return this.icon + '/icon-weather';
//     }
//     public static get simpleLine(): string {
//       return this.icon + '/icon-simpleline';
//     }
//     public static get flag(): string {
//       return this.icon + '/icon-flag';
//     }
//     public static get baseUi(): string {
//       return this.admin + '/base-ui';
//     }
//     public static get alert(): string {
//       return this.baseUi + '/ui-alerts';
//     }
//     public static get accordions(): string {
//       return this.baseUi + '/ui-accordion';
//     }
//     public static get avatar(): string {
//       return this.baseUi + '/ui-avatar';
//     }
//     public static get badges(): string {
//       return this.baseUi + '/ui-badges';
//     }
//     public static get border(): string {
//       return this.baseUi + '/ui-borders';
//     }

//     public static get buttons(): string {
//       return this.baseUi + '/ui-buttons';
//     }
//     public static get buttonGroup(): string {
//       return this.baseUi + '/ui-buttons-group';
//     }
//     public static get breadcrumb(): string {
//       return this.baseUi + '/ui-breadcrumb';
//     }
//     public static get cards(): string {
//       return this.baseUi + '/ui-cards';
//     }
//     public static get carousel(): string {
//       return this.baseUi + '/ui-carousel';
//     }
//     public static get dropDown(): string {
//       return this.baseUi + '/ui-dropdowns';
//     }
//     public static get grid(): string {
//       return this.baseUi + '/ui-grid';
//     }
//     public static get images(): string {
//       return this.baseUi + '/ui-images';
//     }
//     public static get lightBox(): string {
//       return this.baseUi + '/ui-lightbox';
//     }
//     public static get media(): string {
//       return this.baseUi + '/ui-media';
//     }
//     public static get modal(): string {
//       return this.baseUi + '/ui-modals';
//     }
//     public static get offcanvas(): string {
//       return this.baseUi + '/ui-offcanvas';
//     }
//     public static get pagination(): string {
//       return this.baseUi + '/ui-pagination';
//     }
//     public static get placeholder(): string {
//       return this.baseUi + '/ui-placeholders';
//     }
//     public static get popover(): string {
//       return this.baseUi + '/ui-popovers';
//     }
//     public static get progressBars(): string {
//       return this.baseUi + '/ui-progress';
//     }
//     public static get rangeSlider(): string {
//       return this.baseUi + '/ui-rangeslider';
//     }
//     public static get spinner(): string {
//       return this.baseUi + '/ui-spinner';
//     }
//     public static get tabs(): string {
//       return this.baseUi + '/ui-nav-tabs';
//     }
//     public static get sweetAlert(): string {
//       return this.baseUi + '/ui-sweetalerts';
//     }
//     public static get toasts(): string {
//       return this.baseUi + '/ui-toasts';
//     }
//     public static get tooltip(): string {
//       return this.baseUi + '/ui-tooltips';
//     }
//     public static get typography(): string {
//       return this.baseUi + '/ui-typography';
//     }
//     public static get video(): string {
//       return this.baseUi + '/ui-video';
//     }
//     public static get tables(): string {
//       return this.baseUrl + '/tables';
//     }
//     public static get basictables(): string {
//       return this.admin + '/table/tables-basic';
//     }
//     public static get datatables(): string {
//       return this.admin + '/table/data-tables';
//     }
//     public static get forms(): string {
//       return this.admin + '/forms';
//     }
//     public static get formBasicInputs(): string {
//       return this.forms + '/form-elements/form-basic-inputs';
//     }
//     public static get formInputsGroups(): string {
//       return this.forms + '/form-elements/form-input-groups';
//     }
//     public static get formHorizontal(): string {
//       return this.forms + '/layouts/form-horizontal';
//     }
//     public static get formVertical(): string {
//       return this.forms + '/layouts/form-vertical';
//     }
//     public static get formMask(): string {
//       return this.forms + '/form-elements/form-mask';
//     }
//     public static get formValidation(): string {
//       return this.forms + '/form-validation';
//     }
//     public static get formSelect(): string {
//       return this.forms + '/form-elements/form-select';
//     }
//     public static get formFileUpload(): string {
//       return this.forms + '/form-elements/form-fileupload';
//     }
//     public static get formCheckboxRadios(): string {
//       return this.forms + '/form-elements/form-checkbox-radios';
//     }
//     public static get formWizard(): string {
//       return this.forms + '/form-wizard';
//     }
//     public static get formPickers(): string {
//       return this.forms + '/form-pickers';
//     }
//     public static get formElements(): string {
//       return this.forms + '/form-elements';
//     }
//     public static get formGridGutters(): string {
//       return this.forms + '/form-elements/form-grid-gutters';
//     }
//     public static get formSelect2(): string {
//       return this.forms + '/form-select-2';
//     }
//     public static get formFloatingLabels(): string {
//       return this.forms + '/layouts/form-floating-labels';
//     }
//   //settings
//   public static get setting(): string {
//     return this.admin + '/setting';
//   }
//   public static get profileSettings(): string {
//     return this.setting + '/profile-settings';
//   }
//   public static get securitySettings(): string {
//     return this.setting + '/security-settings';
//   }
//   public static get notificationsSettings(): string {
//     return this.setting + '/notifications-settings';
//   }
//   public static get integrationsSettings(): string {
//     return this.setting + '/integrations-settings';
//   }
//   public static get trackerSettings(): string {
//     return this.setting + '/tracker-settings';
//   }
//   public static get rentalSettings(): string {
//     return this.setting + '/rental-settings';
//   }
//   public static get insuranceSettings(): string {
//     return this.setting + '/insurance-settings';
//   }
//   public static get companySettings(): string {
//     return this.setting + '/company-settings';
//   }
//   public static get localizationSettings(): string {
//     return this.setting + '/localization-settings';
//   }
//   public static get prefixesSettings(): string {
//     return this.setting + '/prefixes-settings';
//   }
//   public static get seoSetup(): string {
//     return this.setting + '/seo-setup';
//   }
//   public static get loginSetting(): string {
//     return this.setting + '/login-setting';
//   }
//   public static get aiConfiguration(): string {
//     return this.setting + '/ai-configuration';
//   }
//   public static get pluginManagers(): string {
//     return this.setting + '/plugin-managers';
//   }
//   public static get maintenanceMode(): string {
//     return this.setting + '/maintenance-mode';
//   }
//   public static get languageSetting(): string {
//     return this.setting + '/language-setting';
//   }
//   public static get langeuagSetting2(): string {
//     return this.setting + '/language-setting2';
//   }
//   public static get invoiceSetting(): string {
//     return this.setting + '/invoice-setting';
//   }
//   public static get invoiceTemplate(): string {
//     return this.setting + '/invoice-template';
//   }
//   public static get signaturesSetting(): string {
//     return this.setting + '/signatures-setting';
//   }
//   public static get customFields(): string {
//     return this.setting + '/custom-fields';
//   }
//   public static get emailSetting(): string {
//     return this.setting + '/email-setting';
//   }
//   public static get emailTemplates(): string {
//     return this.setting + '/email-templates';
//   }
//   public static get smsGateways(): string {
//     return this.setting + '/sms-gateways';
//   }
//   public static get gdprCookies(): string {
//     return this.setting + '/gdpr-cookies';
//   }
//   public static get paymentMethods(): string {
//     return this.setting + '/payment-methods';
//   }
//   public static get bankAccounts(): string {
//     return this.setting + '/bank-accounts';
//   }
//   public static get taxRates(): string {
//     return this.setting + '/tax-rates';
//   }
//   public static get currencies(): string {
//     return this.setting + '/currencies';
//   }
//   public static get siteMap(): string {
//     return this.setting + '/sitemap';
//   }
//   public static get clearCache(): string {
//     return this.setting + '/clear-cache';
//   }
//   public static get storage(): string {
//     return this.setting + '/storage';
//   }
//   public static get cronJob(): string {
//     return this.setting + '/cronjob';
//   }
//   public static get systemBackup(): string {
//     return this.setting + '/system-backup';
//   }
//   public static get databaseBackup(): string {
//     return this.setting + '/database-backup';
//   }
//   public static get systemUpdate(): string {
//     return this.setting + '/system-update';
//   }
//   public static get users(): string {
//     return this.admin + '/users';
//   }
//   public static get rolesPermissions(): string {
//     return this.admin + '/roles-permissions';
//   }
//   public static get permissions(): string {
//     return this.admin + '/permissions';
//   }
//   public static get contactMessages(): string {
//     return this.admin + '/contact-messages';
//   }
//   public static get announcements(): string {
//     return this.admin + '/announcements';
//   }
//   public static get tickets(): string {
//     return this.admin + '/tickets';
//   }
//   public static get ticketDetails(): string {
//     return this.admin + '/ticket-details';
//   }
//   public static get pages(): string {
//     return this.admin + '/pages';
//   }
//   public static get addPages(): string {
//     return this.admin + '/add-pages';
//   }
//   public static get editPages(): string {
//     return this.admin + '/edit-pages';
//   }
//   public static get menuManagement(): string {
//     return this.admin + '/menu-management';
//   }
//   public static get editMenu(): string {
//     return this.admin + '/edit-menu';
//   }
//   public static get blogs(): string {
//     return this.admin + '/blogs';
//   }
//   public static get allBlogs(): string {
//     return this.blogs + '/all-blogs';
//   }
//   public static get adminblogDetails(): string {
//     return this.blogs + '/blog-details';
//   }
//   public static get addBlog(): string {
//     return this.blogs + '/add-blog';
//   }
//   public static get editBlog(): string {
//     return this.blogs + '/edit-blog';
//   }
//   public static get blogCategories(): string {
//     return this.blogs + '/blog-categories';
//   }
//   public static get blogComments(): string {
//     return this.blogs + '/blog-comments';
//   }
//   public static get blogTags(): string {
//     return this.blogs + '/blog-tags';
//   }
//   public static get locations(): string {
//     return this.admin + '/location';
//   }
//   public static get countries(): string {
//     return this.locations + '/countries';
//   }
//   public static get states(): string {
//     return this.locations + '/states';
//   }
//   public static get city(): string {
//     return this.locations + '/city';
//   }
//   public static get admintestimonials(): string {
//     return this.admin + '/testimonials';
//   }
//   public static get adminfaq(): string {
//     return this.admin + '/faq';
//   }
//   public static get faqList(): string {
//     return this.adminfaq + '/faq-list';
//   }
//   public static get faqCategory(): string {
//     return this.adminfaq + '/faq-category';
//   }
//   public static get newsLetters(): string {
//     return this.admin + '/newsletters';
//   }
//   public static get chat(): string {
//     return this.admin + '/chat';
//   }
//   public static get coupons(): string {
//     return this.admin + '/coupons';
//   }
// }
export const routes={
  //Admin Auth
  adminlogin:'/auth/login',
  adminResetPassword:'/auth/reset-password',
  adminOtp:'/auth/otp',
  adminForgotPassword:'/auth/forgot-password',

  //Admin Pages
  adminDashboard:'/admin/index',

  //Bookings
  bookings: '/admin/bookings',
  reservation: '/admin/reservations',
  addReservation: '/admin/add-reservation',
  editReservation: '/admin/edit-reservation',
  reservationDetails: '/admin/reservation-details',
  calendar: '/admin/calendar',
  quotation: '/admin/quotations',
  addQuotation: '/admin/add-quotations',
  editQuotation: '/admin/edit-quotations',
  quotationDetails: '/admin/quotation-details',
  enquiries: '/admin/enquiries',
  invoiceDetails:'/admin/invoice-details',

  //Manage
  customers: '/admin/customers',
  customersCompanies: '/admin/customers-companies',
  customerDetails: '/admin/customer-details',
  drivers: '/admin/drivers',
  location: '/admin/locations',

  companyDetails: '/admin/company-details',
  cars: '/admin/cars',
  addCar: '/admin/add-car',
  editCar: '/admin/edit-car',
  carDetails: '/admin/car-details',
  extraServices: '/admin/extra-services',
  adminPricing: '/admin/pricing',
  inspections: '/admin/inspections',
  tracking: '/admin/tracking',
  adminMaintenance: '/admin/maintenance',
  reviews: '/admin/reviews',

  // Car Attribute Sub-Routes
  carAttribute: '/admin/car-attributes',
  brands: '/admin/car-attributes/brands',
  types: '/admin/car-attributes/types',
  models: '/admin/car-attributes/models',
  transmissions: '/admin/car-attributes/transmissions',
  fuel: '/admin/car-attributes/fuel',
  color: '/admin/car-attributes/color',
  steering: '/admin/car-attributes/steering',
  seats: '/admin/car-attributes/seats',
  cylinders: '/admin/car-attributes/cylinders',
  doors: '/admin/car-attributes/doors',
  features: '/admin/car-attributes/features',
  safetyFeatures: '/admin/car-attributes/safety-features',

  // Invoices & Reports
  invoices: '/admin/invoices',
  addInvoice: '/admin/add-invoice',
  editInvoice: '/admin/edit-invoice',
  adminInvoiceDetails: '/admin/invoice-details',
  payments: '/admin/payments',
  incomeReport: '/admin/income-report',
  earningsReport: '/admin/earnings-report',
  rentalReport: '/admin/rental-report',


  // Settings
  setting: '/admin/setting',
  profileSettings: '/admin/setting/profile-settings',
  securitySettings: '/admin/setting/security-settings',
  notificationsSettings: '/admin/setting/notifications-settings',
  integrationsSettings: '/admin/setting/integrations-settings',
  trackerSettings: '/admin/setting/tracker-settings',
  rentalSettings: '/admin/setting/rental-settings',
  insuranceSettings: '/admin/setting/insurance-settings',
  companySettings: '/admin/setting/company-settings',
  localizationSettings: '/admin/setting/localization-settings',
  prefixesSettings: '/admin/setting/prefixes-settings',
  seoSetup: '/admin/setting/seo-setup',
  loginSetting: '/admin/setting/login-setting',
  aiConfiguration: '/admin/setting/ai-configuration',
  pluginManagers: '/admin/setting/plugin-managers',
  maintenanceMode: '/admin/setting/maintenance-mode',
  languageSetting: '/admin/setting/language-setting',
  languageSetting2: '/admin/setting/language-setting2',
  invoiceSetting: '/admin/setting/invoice-setting',
  invoiceTemplate: '/admin/setting/invoice-template',
  signaturesSetting: '/admin/setting/signatures-setting',
  customFields: '/admin/setting/custom-fields',
  emailSetting: '/admin/setting/email-setting',
  emailTemplates: '/admin/setting/email-templates',
  smsGateways: '/admin/setting/sms-gateways',
  gdprCookies: '/admin/setting/gdpr-cookies',
  paymentMethods: '/admin/setting/payment-methods',
  bankAccounts: '/admin/setting/bank-accounts',
  taxRates: '/admin/setting/tax-rates',
  currencies: '/admin/setting/currencies',
  siteMap: '/admin/setting/sitemap',
  clearCache: '/admin/setting/clear-cache',
  storage: '/admin/setting/storage',
  cronJob: '/admin/setting/cronjob',
  systemBackup: '/admin/setting/system-backup',
  databaseBackup: '/admin/setting/database-backup',
  systemUpdate: '/admin/setting/system-update',

  // Users & Roles
  users: '/admin/users',
  rolesPermissions: '/admin/roles-permissions',
  permissions: '/admin/permissions',

  // Communication
  contactMessages: '/admin/contact-messages',
  announcements: '/admin/announcements',
  tickets: '/admin/tickets',
  ticketDetails: '/admin/ticket-details',

  // CMS
  pages: '/admin/pages',
  addPages: '/admin/add-pages',
  editPages: '/admin/edit-pages',
  menuManagement: '/admin/menu-management',
  editMenu: '/admin/edit-menu',

  // Blogs
  blogs: '/admin/blogs',
  allBlogs: '/admin/blogs/all-blogs',
  adminblogDetails: '/admin/blogs/blog-details',
  addBlog: '/admin/blogs/add-blog',
  editBlog: '/admin/blogs/edit-blog',
  blogCategories: '/admin/blogs/blog-categories',
  blogComments: '/admin/blogs/blog-comments',
  blogTags: '/admin/blogs/blog-tags',

  // Locations
  locations: '/admin/location',
  countries: '/admin/location/countries',
  states: '/admin/location/states',
  city: '/admin/location/city',

  // Testimonials & FAQ
  adminTestimonials: '/admin/testimonials',
  adminFaq: '/admin/faq',
  faqList: '/admin/faq/faq-list',
  faqCategory: '/admin/faq/faq-category',

  // Marketing & Engagement
  newsLetters: '/admin/newsletters',
  chat: '/admin/chat',
  coupons: '/admin/coupons',

  //UI Interface

  //baseUI
  alert: '/admin/base-ui/ui-alerts',
  accordions: '/admin/base-ui/ui-accordion',
  avatar: '/admin/base-ui/ui-avatar',
  badges: '/admin/base-ui/ui-badges',
  border: '/admin/base-ui/ui-borders',
  buttons: '/admin/base-ui/ui-buttons',
  buttonGroup: '/admin/base-ui/ui-buttons-group',
  breadcrumb: '/admin/base-ui/ui-breadcrumb',
  cards: '/admin/base-ui/ui-cards',
  colors: '/admin/base-ui/ui-colors',
  carousel: '/admin/base-ui/ui-carousel',
  dropDown: '/admin/base-ui/ui-dropdowns',
  grid: '/admin/base-ui/ui-grid',
  images: '/admin/base-ui/ui-images',
  lightBox: '/admin/base-ui/ui-lightbox',
  media: '/admin/base-ui/ui-media',
  modal: '/admin/base-ui/ui-modals',
  offcanvas: '/admin/base-ui/ui-offcanvas',
  pagination: '/admin/base-ui/ui-pagination',
  placeholder: '/admin/base-ui/ui-placeholders',
  popover: '/admin/base-ui/ui-popovers',
  progressBars: '/admin/base-ui/ui-progress',
  rangeSlider: '/admin/base-ui/ui-rangeslider',
  spinner: '/admin/base-ui/ui-spinner',
  tabs: '/admin/base-ui/ui-nav-tabs',
  sweetAlert: '/admin/base-ui/ui-sweetalerts',
  toasts: '/admin/base-ui/ui-toasts',
  tooltip: '/admin/base-ui/ui-tooltips',
  typography: '/admin/base-ui/ui-typography',
  video: '/admin/base-ui/ui-video',
  uiSortable: '/admin/base-ui/ui-sortable',

  // Advanced UI Routes
  ribbon: '/admin/advanced-ui/ui-ribbon',
  clipboards: '/admin/advanced-ui/ui-clipboard',
  dragDrop: '/admin/advanced-ui/ui-drag-drop',
  rating: '/admin/advanced-ui/ui-rating',
  textEditor: '/admin/advanced-ui/ui-text-editor',
  counter: '/admin/advanced-ui/ui-counter',
  scrollbar: '/admin/advanced-ui/ui-scrollbar',
  notification: '/admin/advanced-ui/notification',
  stickyNote: '/admin/advanced-ui/sticky-note',
  timeline: '/admin/advanced-ui/ui-timeline',
  horizontal: '/admin/advanced-ui/horizontal-timeline',


    // Forms
  formBasicInputs: '/admin/forms/form-basic-inputs',
  formInputsGroups: '/admin/forms/form-input-groups',
  formHorizontal: '/admin/forms/layouts/form-horizontal',
  formVertical: '/admin/forms/layouts/form-vertical',
  formMask: '/admin/forms/form-mask',
  formValidation: '/admin/forms/form-validation',
  formSelect: '/admin/forms/form-select',
  formFileUpload: '/admin/forms/form-fileupload',
  formCheckboxRadios: '/admin/forms/form-checkbox-radios',
  formWizard: '/admin/forms/form-wizard',
  formPickers: '/admin/forms/form-pickers',
  formElements: '/admin/forms',
  formGridGutters: '/admin/forms/form-grid-gutters',
  formSelect2: '/admin/forms/form-select-2',
  formFloatingLabels: '/admin/forms/layouts/form-floating-labels',

  //Table
   basictables: '/admin/table/tables-basic',
  datatables: '/admin/table/data-tables',

  //Chart
   apexChart: '/admin/charts/apex-charts',
  ngTwoCharts: '/admin/charts/prime-ng',

   // Icons
  tabler: '/admin/icon/icon-tabler',
  remix: '/admin/icon/icon-remix',
  bootstrap: '/admin/icon/icon-bootstrap',
  feather: '/admin/icon/icon-feather',
  ionic: '/admin/icon/icon-ionic',
  material: '/admin/icon/icon-material',
  pe7: '/admin/icon/icon-pe7',
  themify: '/admin/icon/icon-themify',
  typicon: '/admin/icon/icon-typicon',
  weather: '/admin/icon/icon-weather',
  simpleLine: '/admin/icon/icon-simpleline',
  flag: '/admin/icon/icon-flag',
  fontawesome: '/admin/icon/icon-fontawesome',
  //map
  leaflet:'/admin/maps/leaflets',

  //FrontEnd Pages
  index: '/index',
  home: '/index-2',
  home2: '/index-4',
  home3: '/index-3',

  vehicleList: '/vehicles/vehicle-list',
  vehicleMap: '/vehicles/vehicle-map',
  vehicleDetails: '/vehicles/vehicle-details',
  vehicleGrid: '/vehicles/vehicle-grid',
  addVehicle: '/vehicles/add-vehicle',

  aboutUs: '/pages/about-us',
  register: '/authentication/register',
  login: '/authentication/login',
  forgotPassword: '/authentication/forgot-password',
  resetPassword: '/authentication/reset-password',

  bookingPayment: '/booking/booking-payment',
  bookingList: '/booking/booking-list',
  // invoiceDetails: '/booking/invoice-details',
  bookingAdon: '/booking/booking-adon',
  bookingSuccess: '/booking/booking-success',
  bookingDetails: '/booking/booking-details',
  bookingCheckout: '/booking/booking-checkout',

  error404: '/error/error404',
  error500: '/error/error500',

  pricing: '/pages/pricing',
  faq: '/pages/faq',
  gallery: '/pages/gallery',
  ourTeam: '/pages/our-team',
  testimonial: '/pages/testimonial',
  termsCondition: '/pages/terms-condition',
  privacyPolicy: '/pages/privacy-policy',
  maintenance: '/pages/maintenance',
  contactUs: '/pages/contact-us',
  comingSoon: '/pages/coming-soon',

  blogList: '/blog/blog-list',
  blogGrid: '/blog/blog-grid',
  blogDetails: '/blog/blog-details',

  user: '/user',
  userPayment: '/user/user-payment',
  userWallet: '/user/user-wallet',
  userReview: '/user/user-review',
  userWishlist: '/user/user-wishlist',
  userSettings: '/user/settings/user-settings',
  userPreference: '/user/user-preferences',
  userBookingCancelled: '/user/user-booking-cancelled',
  userBookingComplete: '/user/user-booking-complete',
  userBookingInprogress: '/user/user-booking-inprogress',
  userBookingUpcoming: '/user/user-booking-upcoming',
  userBookings: '/user/user-bookings',
  userDashboard: '/user/user-dashboard',
  userIntegration: '/user/settings/user-integration',
  userMessages: '/user/user-messages',
  userReviews: '/user/user-reviews',
  userNotification: '/user/settings/user-notification',
  userPreferences: '/user/settings/user-preferences',
  userSecurity: '/user/settings/user-security',

  bookingCalendar: '/user/bookings-calendar',
  bookingCancelledCalendar: '/user/booking-cancelled-calendar',
  bookingCompletedCalendar: '/user/booking-complete-calendar',
  bookingUpcomingCalendar: '/user/booking-upcoming-calendar',
  bookingInprogressCalendar: '/user/booking-inprogress-calendar',


}
