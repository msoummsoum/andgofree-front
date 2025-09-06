import { Routes } from '@angular/router';
import { UserBookingCancelledComponent } from './features/user/user-booking-cancelled/user-booking-cancelled.component';
import { UserWalletComponent } from './features/user/user-wallet/user-wallet.component';


export const routes: Routes = [
    
    {
      path: '',
      redirectTo: 'index',
      pathMatch: 'full'
    },
  //Admin Authentication
    {
      path: 'auth',
      loadComponent: () => import('./admin-auth/auth.component').then(m => m.Auth), 
      children: [
        {
          path: 'login',
          loadComponent: () => import('./admin-auth/login/login.component').then(m => m.LoginCompoment)
        },
        {
          path: 'forgot-password',
          loadComponent: () => import('./admin-auth/forgot-password/forgot-password.component').then(m => m.ForgotPasswordComponent)
        },
        {
          path: 'otp',
          loadComponent: () => import('./admin-auth/otp/otp.component').then(m => m.OtpComponent)
        },
        {
          path: 'reset-password',
          loadComponent: () => import('./admin-auth/reset-password/reset-password.component').then(m => m.ResetPasswordComponent)
        },
      ],
    },

  //Admin Components
    {
      path: 'admin',
      loadComponent: () => import('./admin/admin.component').then(m => m.AdminComponent),
      children: [
        { path: '', loadComponent: () => import('./admin/dashboard/dashboard.component').then(m => m.DashboardComponent) },
        { path: 'index', loadComponent: () => import('./admin/dashboard/dashboard.component').then(m => m.DashboardComponent) },
        //bookings
          { path: 'reservations', loadComponent: () => import('./admin/bookings/reservations/reservations.component').then(m => m.ReservationsComponent) },
          { path: 'add-reservation', loadComponent: () => import('./admin/bookings/add-reservation/add-reservation.component').then(m => m.AddReservationComponent) },
          { path: 'reservation-details', loadComponent: () => import('./admin/bookings/reservation-details/reservation-details.component').then(m => m.ReservationDetailsComponent) },
          { path: 'edit-reservation', loadComponent: () => import('./admin/bookings/edit-reservation/edit-reservation.component').then(m => m.EditReservationComponent) },
          { path: 'calendar', loadComponent: () => import('./admin/bookings/calendar/calendar.component').then(m => m.CalendarComponent) },
          { path: 'quotations', loadComponent: () => import('./admin/bookings/quotations/quotations.component').then(m => m.QuotationsComponent) },
          { path: 'add-quotations', loadComponent: () => import('./admin/bookings/add-quotations/add-quotations.component').then(m => m.AddQuotationsComponent) },
          { path: 'edit-quotations', loadComponent: () => import('./admin/bookings/edit-quotations/edit-quotations.component').then(m => m.EditQuotationsComponent) },
          { path: 'quotation-details', loadComponent: () => import('./admin/bookings/quotation-details/quotation-details.component').then(m => m.QuotationDetailsComponent) },
          { path: 'enquiries', loadComponent: () => import('./admin/bookings/enquiries/enquiries.component').then(m => m.EnquiriesComponent) },
        //Manage
          { path: 'customers', loadComponent: () => import('./admin/manage/customers/customers.component').then(m => m.CustomersComponent) },
          { path: 'customer-details', loadComponent: () => import('./admin/manage/customer-details/customer-details.component').then(m => m.CustomerDetailsComponent) },
          { path: 'company-details', loadComponent: () => import('./admin/manage/company-details/company-details.component').then(m => m.CompanyDetailsComponent) },
          { path: 'customers-companies', loadComponent: () => import('./admin/manage/customers-companies/customers-companies.component').then(m => m.CustomersCompaniesComponent) },
          { path: 'drivers', loadComponent: () => import('./admin/manage/drivers/drivers.component').then(m => m.DriversComponent) },
          { path: 'locations', loadComponent: () => import('./admin/manage/locations/locations.component').then(m => m.LocationsComponent) },
        //Rental
          { path: 'cars', loadComponent: () => import('./admin/rentals/cars/cars.component').then(m => m.CarsComponent) },
          { path: 'add-car', loadComponent: () => import('./admin/rentals/add-car/add-car.component').then(m => m.AddCarComponent) },
          { path: 'edit-car', loadComponent: () => import('./admin/rentals/edit-car/edit-car.component').then(m => m.EditCarComponent) },
          { path: 'car-details', loadComponent: () => import('./admin/rentals/car-details/car-details.component').then(m => m.CarDetailsComponent) }, 
          { path: 'extra-services', loadComponent: () => import('./admin/rentals/extra-services/extra-services.component').then(m => m.ExtraServicesComponent) },
          { path: 'pricing', loadComponent: () => import('./admin/rentals/pricing/pricing.component').then(m => m.PricingComponent) },
          { path: 'inspections', loadComponent: () => import('./admin/rentals/inspections/inspections.component').then(m => m.InspectionsComponent) },
          { path: 'tracking', loadComponent: () => import('./admin/rentals/tracking/tracking.component').then(m => m.TrackingComponent) },
          { path: 'maintenance', loadComponent: () => import('./admin/rentals/maintenance/maintenance.component').then(m => m.MaintenanceComponent) },
          { path: 'reviews', loadComponent: () => import('./admin/rentals/reviews/reviews.component').then(m => m.ReviewsComponent) },
          { path: 'car-attributes',
            loadComponent: () => import('./admin/rentals/car-attributes/car-attributes.component').then(m => m.CarAttributesComponent), 
            children:[
                { path: 'brands', loadComponent: () => import('./admin/rentals/car-attributes/brands/brands.component').then(m => m.BrandsComponent) },
                { path: 'types', loadComponent: () => import('./admin/rentals/car-attributes/types/types.component').then(m => m.TypesComponent) },
                { path: 'models', loadComponent: () => import('./admin/rentals/car-attributes/models/models.component').then(m => m.ModelsComponent) },
                { path: 'transmissions', loadComponent: () => import('./admin/rentals/car-attributes/transmissions/transmissions.component').then(m => m.TransmissionsComponent) },
                { path: 'fuel', loadComponent: () => import('./admin/rentals/car-attributes/fuel/fuel.component').then(m => m.FuelComponent) },
                { path: 'color', loadComponent: () => import('./admin/rentals/car-attributes/color/color.component').then(m => m.ColorComponent) },
                { path: 'steering', loadComponent: () => import('./admin/rentals/car-attributes/steering/steering.component').then(m => m.SteeringComponent) },
                { path: 'seats', loadComponent: () => import('./admin/rentals/car-attributes/seats/seats.component').then(m => m.SeatsComponent) },
                { path: 'cylinders', loadComponent: () => import('./admin/rentals/car-attributes/cylinders/cylinders.component').then(m => m.CylindersComponent) },
                { path: 'doors', loadComponent: () => import('./admin/rentals/car-attributes/doors/doors.component').then(m => m.DoorsComponent) },
                { path: 'features', loadComponent: () => import('./admin/rentals/car-attributes/features/features.component').then(m => m.FeaturesComponent) }, 
                { path: 'safety-features', loadComponent: () => import('./admin/rentals/car-attributes/safety-features/safety-features.component').then(m => m.SafetyFeaturesComponent) }
              ]
          },
        //Finance
          { path: 'invoices', loadComponent: () => import('./admin/finance/invoices/invoices.component').then(m => m.InvoicesComponent) },
          { path: 'invoice-details', loadComponent: () => import('./admin/finance/invoice-details/invoice-details.component').then(m => m.InvoiceDetailsComponent) },
          { path: 'add-invoice', loadComponent: () => import('./admin/finance/add-invoice/add-invoice.component').then(m => m.AddInvoiceComponent) },
          { path: 'edit-invoice', loadComponent: () => import('./admin/finance/edit-invoice/edit-invoice.component').then(m => m.EditInvoiceComponent) },
          { path: 'payments', loadComponent: () => import('./admin/finance/payments/payments.component').then(m => m.PaymentsComponent) },
        //others
          { path: 'chat', loadComponent: () => import('./admin/others/chat/chat.component').then(m => m.ChatComponent) },
          { path: 'coupons', loadComponent: () => import('./admin/others/coupons/coupons.component').then(m => m.CouponsComponent) },
          { path: 'newsletters', loadComponent: () => import('./admin/others/newsletters/newsletters.component').then(m => m.NewslettersComponent) },
        //cms
          { path: 'pages', loadComponent: () => import('./admin/cms/pages/pages.component').then(m => m.PagesComponent) }, 
          { path: 'add-pages', loadComponent: () => import('./admin/cms/add-pages/add-pages.component').then(m => m.AddPagesComponent) },
          { path: 'edit-pages', loadComponent: () => import('./admin/cms/edit-pages/edit-pages.component').then(m => m.EditPagesComponent) },
          { path: 'menu-management', loadComponent: () => import('./admin/cms/menu-management/menu-management.component').then(m => m.MenuManagementComponent) }, 
          { path: 'edit-menu', loadComponent: () => import('./admin/cms/edit-menu/edit-menu.component').then(m => m.EditMenuComponent) },
          { path: 'testimonials', loadComponent: () => import('./admin/cms/testimonials/testimonials.component').then(m => m.TestimonialsComponent) },
          { path: 'faq', loadComponent: () => import('./admin/cms/faq/faq.component').then(m => m.FaqComponent),
            children : [
              { path: 'faq-list', loadComponent: () => import('./admin/cms/faq/faq-list/faq-list.component').then(m => m.FaqListComponent) },
              { path: 'faq-category', loadComponent: () => import('./admin/cms/faq//faq-category/faq-category.component').then(m => m.FaqCategoryComponent) },
            ]
          },
          { path: 'blogs', loadComponent: () => import('./admin/cms/blogs/blogs.component').then(m => m.BlogsComponent),
            children : [
                    { path: 'all-blogs', loadComponent: () => import('./admin/cms/blogs/all-blogs/all-blogs.component').then(m => m.AllBlogsComponent) },
                    { path: 'add-blog', loadComponent: () => import('./admin/cms/blogs/add-blog/add-blog.component').then(m => m.AddBlogComponent) },
                    { path: 'edit-blog', loadComponent: () => import('./admin/cms/blogs/edit-blog/edit-blog.component').then(m => m.EditBlogComponent) },
                    { path: 'blog-categories', loadComponent: () => import('./admin/cms/blogs/blog-categories/blog-categories.component').then(m => m.BlogCategoriesComponent) },
                    { path: 'blog-comments', loadComponent: () => import('./admin/cms/blogs/blog-comments/blog-comments.component').then(m => m.BlogCommentsComponent) },
                    { path: 'blog-details', loadComponent: () => import('./admin/cms/blogs/blog-details/blog-details.component').then(m => m.BlogDetailsComponent) },
                    { path: 'blog-tags', loadComponent: () => import('./admin/cms/blogs/blog-tags/blog-tags.component').then(m => m.BlogTagsComponent) },
                  ]
          },
          { path: 'location', loadComponent: () => import('./admin/cms/locations/locations.component').then(m => m.LocationsComponent),
              children:[
                { path: 'countries', loadComponent: () => import('./admin/cms/locations/countries/countries.component').then(m => m.CountriesComponent) },
                { path: 'states', loadComponent: () => import('./admin/cms/locations/states/states.component').then(m => m.StatesComponent) },
                { path: 'city', loadComponent: () => import('./admin/cms/locations/city/city.component').then(m => m.CityComponent) }
              ]
          },
          //support
            { path: 'contact-messages', loadComponent: () => import('./admin/support/contact-messages/contact-messages.component').then(m => m.ContactMessagesComponent) },
            { path: 'announcements', loadComponent: () => import('./admin/support/announcements/announcements.component').then(m => m.AnnouncementsComponent) },
            { path: 'tickets', loadComponent: () => import('./admin/support/tickets/tickets.component').then(m => m.TicketsComponent) },
            { path: 'ticket-details', loadComponent: () => import('./admin/support/ticket-details/ticket-details.component').then(m => m.TicketDetailsComponent) },
          //user-management
            { path: 'users', loadComponent: () => import('./admin/user-management/users/users.component').then(m => m.UsersComponent) },
            { path: 'roles-permissions', loadComponent: () => import('./admin/user-management/roles-permissions/roles-permissions.component').then(m => m.RolesPermissionsComponent) },
            { path: 'permissions', loadComponent: () => import('./admin/user-management/permissions/permissions.component').then(m => m.PermissionsComponent) },
        //Reports
            { path: 'income-report', loadComponent: () => import('./admin/reports/income-report/income-report.component').then(m => m.IncomeReportComponent) },
            { path: 'earnings-report', loadComponent: () => import('./admin/reports/earnings-report/earnings-report.component').then(m => m.EarningsReportComponent) },
            { path: 'rental-report', loadComponent: () => import('./admin/reports/rental-report/rental-report.component').then(m => m.RentalReportComponent) },
        //Settings
            { path: 'setting', loadComponent: () => import('./admin/settings/settings.component').then(m => m.SettingsComponent),
              children:[
                  { path: 'profile-settings', loadComponent: () => import('./admin/settings/account-settings/profile-settings/profile-settings.component').then(m => m.ProfileSettingsComponent) },
                  { path: 'security-settings', loadComponent: () => import('./admin/settings/account-settings/security-settings/security-settings.component').then(m => m.SecuritySettingsComponent) }, 
                  { path: 'notifications-settings', loadComponent: () => import('./admin/settings/account-settings/notifications-settings/notifications-settings.component').then(m => m.NotificationsSettingsComponent) },
                  { path: 'integrations-settings', loadComponent: () => import('./admin/settings/account-settings/integrations-settings/integrations-settings.component').then(m => m.IntegrationsSettingsComponent) },
                  { path: 'tracker-settings', loadComponent: () => import('./admin/settings/account-settings/tracker-settings/tracker-settings.component').then(m => m.TrackerSettingsComponent) },
                  { path: 'rental-settings', loadComponent: () => import('./admin/settings/rental-settings/rental-settings/rental-settings.component').then(m => m.RentalSettingsComponent) },
                  { path: 'insurance-settings', loadComponent: () => import('./admin/settings/rental-settings/insurance-settings/insurance-settings.component').then(m => m.InsuranceSettingsComponent) },
                  { path: 'company-settings', loadComponent: () => import('./admin/settings/website-settings/company-settings/company-settings.component').then(m => m.CompanySettingsComponent) },
                  { path: 'localization-settings', loadComponent: () => import('./admin/settings/website-settings/localization-settings/localization-settings.component').then(m => m.LocalizationSettingsComponent) }, 
                  { path: 'prefixes-settings', loadComponent: () => import('./admin/settings/website-settings/prefixes-settings/prefixes-settings.component').then(m => m.PrefixesSettingsComponent) },
                  { path: 'seo-setup', loadComponent: () => import('./admin/settings/website-settings/seo-setup/seo-setup.component').then(m => m.SeoSetupComponent) },
                  { path: 'login-setting', loadComponent: () => import('./admin/settings/website-settings/login-setting/login-setting.component').then(m => m.LoginSettingComponent) },
                  { path: 'ai-configuration', loadComponent: () => import('./admin/settings/website-settings/ai-configuration/ai-configuration.component').then(m => m.AiConfigurationComponent) },
                  { path: 'plugin-managers', loadComponent: () => import('./admin/settings/website-settings/plugin-managers/plugin-managers.component').then(m => m.PluginManagersComponent) },
                  { path: 'maintenance-mode', loadComponent: () => import('./admin/settings/website-settings/maintenance-mode/maintenance-mode.component').then(m => m.MaintenanceModeComponent) },
                  { path: 'language-setting', loadComponent: () => import('./admin/settings/website-settings/language-setting/language-setting.component').then(m => m.LanguageSettingComponent) },
                  { path: 'language-setting2', loadComponent: () => import('./admin/settings/website-settings/language-setting2/language-setting2.component').then(m => m.LanguageSetting2Component) },
                  { path: 'invoice-setting', loadComponent: () => import('./admin/settings/app-settings/invoice-setting/invoice-setting.component').then(m => m.InvoiceSettingComponent) },
                  { path: 'invoice-template', loadComponent: () => import('./admin/settings/app-settings/invoice-template/invoice-template.component').then(m => m.InvoiceTemplateComponent) },
                  { path: 'signatures-setting', loadComponent: () => import('./admin/settings/app-settings/signatures-setting/signatures-setting.component').then(m => m.SignaturesSettingComponent) },
                  { path: 'custom-fields', loadComponent: () => import('./admin/settings/app-settings/custom-fields/custom-fields.component').then(m => m.CustomFieldsComponent) },
                  { path: 'email-setting', loadComponent: () => import('./admin/settings/system-settings/email-setting/email-setting.component').then(m => m.EmailSettingComponent) },
                  { path: 'email-templates', loadComponent: () => import('./admin/settings/system-settings/email-templates/email-templates.component').then(m => m.EmailTemplatesComponent) },
                  { path: 'sms-gateways', loadComponent: () => import('./admin/settings/system-settings/sms-gateways/sms-gateways.component').then(m => m.SmsGatewaysComponent) },
                  { path: 'gdpr-cookies', loadComponent: () => import('./admin/settings/system-settings/gdpr-cookies/gdpr-cookies.component').then(m => m.GdprCookiesComponent) },
                  { path: 'payment-methods', loadComponent: () => import('./admin/settings/finance-settings/payment-methods/payment-methods.component').then(m => m.PaymentMethodsComponent) },
                  { path: 'bank-accounts', loadComponent: () => import('./admin/settings/finance-settings/bank-accounts/bank-accounts.component').then(m => m.BankAccountsComponent) },
                  { path: 'tax-rates', loadComponent: () => import('./admin/settings/finance-settings/tax-rates/tax-rates.component').then(m => m.TaxRatesComponent) },
                  { path: 'currencies', loadComponent: () => import('./admin/settings/finance-settings/currencies/currencies.component').then(m => m.CurrenciesComponent) },
                  { path: 'sitemap', loadComponent: () => import('./admin/settings/others-settings/sitemap/sitemap.component').then(m => m.SitemapComponent) },
                  { path: 'clear-cache', loadComponent: () => import('./admin/settings/others-settings/clear-cache/clear-cache.component').then(m => m.ClearCacheComponent) },
                  { path: 'storage', loadComponent: () => import('./admin/settings/others-settings/storage/storage.component').then(m => m.StorageComponent) },
                  { path: 'cronjob', loadComponent: () => import('./admin/settings/others-settings/cronjob/cronjob.component').then(m => m.CronjobComponent) },
                  { path: 'system-backup', loadComponent: () => import('./admin/settings/others-settings/system-backup/system-backup.component').then(m => m.SystemBackupComponent) },
                  { path: 'database-backup', loadComponent: () => import('./admin/settings/others-settings/database-backup/database-backup.component').then(m => m.DatabaseBackupComponent) },
                  { path: 'system-update', loadComponent: () => import('./admin/settings/others-settings/system-update/system-update.component').then(m => m.SystemUpdateComponent) },
                ]
            },
            //UI interface
            {
          path: 'base-ui',loadComponent: () =>import('./admin/ui-interface/base-ui/base-ui.component').then((m) => m.BaseUiComponent),
          children: [
            {path: 'ui-spinner',loadComponent: () =>import('./admin/ui-interface/base-ui/ui-spinner/ui-spinner.component').then((m) => m.UiSpinnerComponent),},
        {path: 'ui-rangeslider',loadComponent: () =>import('./admin/ui-interface/base-ui/ui-rangeslider/ui-rangeslider.component').then((m) => m.UiRangesliderComponent),},
        {path: 'ui-progress',loadComponent: () =>import('./admin/ui-interface/base-ui/ui-progress/ui-progress.component').then((m) => m.UiProgressComponent),},
        {path: 'ui-video',loadComponent: () =>import('./admin/ui-interface/base-ui/ui-video/ui-video.component').then((m) => m.UiVideoComponent),},
        {
          path: 'ui-typography',
          loadComponent: () =>
            import('./admin/ui-interface/base-ui/ui-typography/ui-typography.component').then((m) => m.UiTypographyComponent),},
        {
          path: 'ui-carousel',
          loadComponent: () =>
            import('./admin/ui-interface/base-ui/ui-carousel/ui-carousel.component').then((m) => m.UiCarouselComponent),},
        {
          path: 'ui-cards',
          loadComponent: () =>import('./admin/ui-interface/base-ui/ui-cards/ui-cards.component').then((m) => m.UiCardsComponent),},
        {
          path: 'ui-buttons-group',
          loadComponent: () =>
            import('./admin/ui-interface/base-ui/ui-buttons-group/ui-buttons-group.component').then((m) => m.UiButtonsGroupComponent),},
        {
          path: 'ui-buttons',
          loadComponent: () =>
            import('./admin/ui-interface/base-ui/ui-buttons/ui-buttons.component').then((m) => m.UiButtonsComponent),},
        {
          path: 'ui-breadcrumb',
          loadComponent: () =>
            import('./admin/ui-interface/base-ui/ui-breadcrumb/ui-breadcrumb.component').then((m) => m.UiBreadcrumbComponent),},
        {
          path: 'ui-borders',
          loadComponent: () =>
            import('./admin/ui-interface/base-ui/ui-borders/ui-borders.component').then((m) => m.UiBordersComponent),},
        {
          path: 'ui-badges',
          loadComponent: () =>import('./admin/ui-interface/base-ui/ui-badges/ui-badges.component').then((m) => m.UiBadgesComponent),},
        {
          path: 'ui-accordion',
          loadComponent: () =>
            import('./admin/ui-interface/base-ui/ui-accordion/ui-accordion.component').then((m) => m.UiAccordionComponent),},
        {
          path: 'ui-alerts',
          loadComponent: () =>import('./admin/ui-interface/base-ui/ui-alerts/ui-alerts.component').then((m) => m.UiAlertsComponent),},
        {
          path: 'ui-avatar',
          loadComponent: () =>import('./admin/ui-interface/base-ui/ui-avatar/ui-avatar.component').then((m) => m.UiAvatarComponent),},
        {
          path: 'ui-popovers',
          loadComponent: () =>
            import('./admin/ui-interface/base-ui/ui-popovers/ui-popovers.component').then((m) => m.UiPopoversComponent),},
        {
          path: 'ui-placeholders',
          loadComponent: () =>
            import('./admin/ui-interface/base-ui/ui-placeholders/ui-placeholders.component').then((m) => m.UiPlaceholdersComponent),},
        {
          path: 'ui-pagination',
          loadComponent: () =>
            import('./admin/ui-interface/base-ui/ui-pagination/ui-pagination.component').then((m) => m.UiPaginationComponent),},
        {
          path: 'ui-offcanvas',
          loadComponent: () =>
            import('./admin/ui-interface/base-ui/ui-offcanvas/ui-offcanvas.component').then((m) => m.UiOffcanvasComponent),},
        {
          path: 'ui-nav-tabs',
          loadComponent: () =>
            import('./admin/ui-interface/base-ui/ui-nav-tabs/ui-nav-tabs.component').then((m) => m.UiNavTabsComponent),},
        {
          path: 'ui-modals',
          loadComponent: () =>import('./admin/ui-interface/base-ui/ui-modals/ui-modals.component').then((m) => m.UiModalsComponent),},
        {
          path: 'ui-media',
          loadComponent: () =>import('./admin/ui-interface/base-ui/ui-media/ui-media.component').then((m) => m.UiMediaComponent),},
        {
          path: 'ui-lightbox',
          loadComponent: () =>
            import('./admin/ui-interface/base-ui/ui-lightbox/ui-lightbox.component').then((m) => m.UiLightboxComponent),},
        {
          path: 'ui-images',
          loadComponent: () =>import('./admin/ui-interface/base-ui/ui-images/ui-images.component').then((m) => m.UiImagesComponent),},
        {
          path: 'ui-grid',
          loadComponent: () =>import('./admin/ui-interface/base-ui/ui-grid/ui-grid.component').then((m) => m.UiGridComponent),},
        {
          path: 'ui-tooltips',
          loadComponent: () =>
            import('./admin/ui-interface/base-ui/ui-tooltips/ui-tooltips.component').then((m) => m.UiTooltipsComponent),},
        {
          path: 'ui-toasts',
          loadComponent: () =>import('./admin/ui-interface/base-ui/ui-toasts/ui-toasts.component').then((m) => m.UiToastsComponent),},
        {
          path: 'ui-dropdowns',
          loadComponent: () =>
            import('./admin/ui-interface/base-ui/ui-dropdowns/ui-dropdowns.component').then((m) => m.UiDropdownsComponent),},

        {
          path: 'ui-colors',
          loadComponent: () =>import('./admin/ui-interface/base-ui/ui-colors/ui-colors.component').then((m) => m.UiColorsComponent),},
        {
          path: 'ui-sortable',
          loadComponent: () =>
            import('./admin/ui-interface/base-ui/ui-sortable/ui-sortable.component').then((m) => m.UiSortableComponent),},
      ],
              },
              //advanced ui
              {path: 'advanced-ui',loadComponent: () =>import('./admin/ui-interface/advanced-ui/advanced-ui.component').then((m) => m.AdvancedUiComponent),
                children:[
    
                  {
                      path: 'ui-timeline',
                      loadComponent: () =>
                        import('./admin/ui-interface/advanced-ui/ui-timeline/ui-timeline.component').then((c) => c.UiTimelineComponent),
                    },
                    {
                      path: 'ui-text-editor',
                      loadComponent: () =>
                        import('./admin/ui-interface/advanced-ui/ui-text-editor/ui-text-editor.component').then((c) => c.UiTextEditorComponent),
                    },
                    {
                      path: 'ui-scrollbar',
                      loadComponent: () =>
                        import('./admin/ui-interface/advanced-ui/ui-scrollbar/ui-scrollbar.component').then((c) => c.UiScrollbarComponent),
                    },
                    {
                      path: 'ui-ribbon',
                      loadComponent: () =>
                        import('./admin/ui-interface/advanced-ui/ui-ribbon/ui-ribbon.component').then((c) => c.UiRibbonComponent),
                    },
                    {
                      path: 'ui-rating',
                      loadComponent: () =>
                        import('./admin/ui-interface/advanced-ui/ui-rating/ui-rating.component').then((c) => c.UiRatingComponent),
                    },
                    {
                      path: 'ui-drag-drop',
                      loadComponent: () =>
                        import('./admin/ui-interface/advanced-ui/ui-drag-drop/ui-drag-drop.component').then((c) => c.UiDragDropComponent),
                    },
                    {
                      path: 'ui-counter',
                      loadComponent: () =>
                        import('./admin/ui-interface/advanced-ui/ui-counter/ui-counter.component').then((c) => c.UiCounterComponent),
                    },
                    {
                      path: 'ui-clipboard',
                      loadComponent: () =>
                        import('./admin/ui-interface/advanced-ui/ui-clipboard/ui-clipboard.component').then((c) => c.UiClipboardComponent),
                    },
                    {
                      path: 'ui-stickynote',
                      loadComponent: () =>
                        import('./admin/ui-interface/advanced-ui/ui-stickynote/ui-stickynote.component').then((c) => c.UiStickynoteComponent),
                    },

                ]
              },
              //Forms
              {path: 'forms',loadComponent: () =>import('./admin/ui-interface/forms/forms.component').then((m) => m.FormsComponent),
                  children: [
                    {
                      path: 'form-basic-inputs',
                      loadComponent: () =>
                        import('./admin/ui-interface/forms/form-elements/form-basic-inputs/form-basic-inputs.component').then(
                          m => m.FormBasicInputsComponent
                        ),
                    },
                    {
                      path: 'form-checkbox-radios',
                      loadComponent: () =>
                        import('./admin/ui-interface/forms/form-elements/form-checkbox-radios/form-checkbox-radios.component').then(
                          m => m.FormCheckboxRadiosComponent
                        ),
                    },
                    {
                      path: 'form-grid-gutters',
                      loadComponent: () =>
                        import('./admin/ui-interface/forms/form-elements/form-grid-gutters/form-grid-gutters.component').then(
                          m => m.FormGridGuttersComponent
                        ),
                    },
                    {
                      path: 'form-fileupload',
                      loadComponent: () =>
                        import('./admin/ui-interface/forms/form-elements/form-fileupload/form-fileupload.component').then(
                          m => m.FormFileuploadComponent
                        ),
                    },
                    {
                      path: 'form-input-groups',
                      loadComponent: () =>
                        import('./admin/ui-interface/forms/form-elements/form-input-groups/form-input-groups.component').then(
                          m => m.FormInputGroupsComponent
                        ),
                    },
                    {
                      path: 'form-select',
                      loadComponent: () =>
                        import('./admin/ui-interface/forms/form-elements/form-select/form-select.component').then(
                          m => m.FormSelectComponent
                        ),
                    },
                    {
                      path: 'form-mask',
                      loadComponent: () =>
                        import('./admin/ui-interface/forms/form-elements/form-mask/form-mask.component').then(
                          m => m.FormMaskComponent
                        ),
                    },
                    {
                      path: 'layouts/form-floating-labels',
                      loadComponent: () =>
                        import('./admin/ui-interface/forms/layouts/form-floating-labels/form-floating-labels.component').then(
                          m => m.FormFloatingLabelsComponent
                        ),
                    },
                    {
                      path: 'layouts/form-horizontal',
                      loadComponent: () =>
                        import('./admin/ui-interface/forms/layouts/form-horizontal/form-horizontal.component').then(
                          m => m.FormHorizontalComponent
                        ),
                    },
                    {
                      path: 'layouts/form-vertical',
                      loadComponent: () =>
                        import('./admin/ui-interface/forms/layouts/form-vertical/form-vertical.component').then(
                          m => m.FormVerticalComponent
                        ),
                    },
                    {
                      path: 'form-validation',
                      loadComponent: () =>
                        import('./admin/ui-interface/forms/form-validation/form-validation.component').then(
                          m => m.FormValidationComponent
                        ),
                    },
                    {
                      path: 'form-wizard',
                      loadComponent: () =>
                        import('./admin/ui-interface/forms/form-wizard/form-wizard.component').then(
                          m => m.FormWizardComponent
                        ),
                    },
                    {
                      path: 'form-pickers',
                      loadComponent: () =>
                        import('./admin/ui-interface/forms/form-pickers/form-pickers.component').then(
                          m => m.FormPickersComponent
                        ),
                    },
                  ],
              },
              //Tables
              {path: 'table', loadComponent: () => import('./admin/ui-interface/table/table.component').then((m) => m.TableComponent),
                children:[
                  { path: 'tables-basic', loadComponent: () => import('./admin/ui-interface/table/tables-basic/tables-basic.component').then((m) => m.TablesBasicComponent),},
                  { path: 'data-tables', loadComponent: () => import('./admin/ui-interface/table/data-tables/data-tables.component').then((m) => m.DataTablesComponent),}
                ]
              },
              //Icon
              { path: 'icon', loadComponent: () => import('./admin/ui-interface/icons/icons.component').then((m) => m.IconsComponent),
                children: [
                    { path: 'icon-fontawesome', loadComponent: () => import('./admin/ui-interface/icons/icon-fontawesome/icon-fontawesome.component').then((m) => m.IconFontawesomeComponent),},
                    { path: 'icon-feather', loadComponent: () => import('./admin/ui-interface/icons/icon-feather/icon-feather.component').then((m) => m.IconFeatherComponent),},
                    { path: 'icon-ionic', loadComponent: () => import('./admin/ui-interface/icons/icon-ionic/icon-ionic.component').then( (m) => m.IconIonicComponent ),},
                    { path: 'icon-material', loadComponent: () => import('./admin/ui-interface/icons/icon-material/icon-material.component').then( (m) => m.IconMaterialComponent ),},
                    { path: 'icon-pe7', loadComponent: () => import('./admin/ui-interface/icons/icon-pe7/icon-pe7.component').then((m) => m.IconPe7Component),},
                    { path: 'icon-simpleline', loadComponent: () => import('./admin/ui-interface/icons/icon-simpleline/icon-simpleline.component').then( (m) => m.IconSimplelineComponent ),},
                    { path: 'icon-themify', loadComponent: () => import('./admin/ui-interface/icons/icon-themify/icon-themify.component').then( (m) => m.IconThemifyComponent ),},
                    { path: 'icon-weather', loadComponent: () => import('./admin/ui-interface/icons/icon-weather/icon-weather.component').then( (m) => m.IconWeatherComponent ),},
                    { path: 'icon-typicon', loadComponent: () => import('./admin/ui-interface/icons/icon-typicon/icon-typicon.component').then( (m) => m.IconTypiconComponent ),},
                    { path: 'icon-flag',loadComponent: () =>import('./admin/ui-interface/icons/icon-flag/icon-flag.component').then((m) => m.IconFlagComponent),},
                    { path: 'icon-bootstrap', loadComponent: () => import('./admin/ui-interface/icons/icon-bootstrap/icon-bootstrap.component').then(m => m.IconBootstrapComponent) },
                    { path: 'icon-remix', loadComponent: () => import('./admin/ui-interface/icons/icon-remix/icon-remix.component').then(m => m.IconRemixComponent) },
                    { path: 'icon-tabler', loadComponent: () => import('./admin/ui-interface/icons/icon-tabler/icon-tabler.component').then(m => m.IconTablerComponent) },
      ],
              },
              //Charts
              { path: 'charts',loadComponent: () => import('./admin/ui-interface/charts/charts.component').then((m) => m.ChartsComponent),
                children:[
                  { path: 'prime-ng', loadComponent: () => import('./admin/ui-interface/charts/prime-ng/prime-ng.component').then((m) => m.PrimeNgComponent),},
                  { path: 'apex-charts', loadComponent: () => import('./admin/ui-interface/charts/chart-apex/chart-apex.component').then((m) => m.ChartApexComponent),},
                ]
              },
              //Maps
              { path: 'maps', loadComponent: () => import('./admin/ui-interface/maps/maps.component').then(m => m.MapsComponent),
                children:[
                  { path: 'leaflets', loadComponent: () => import('./admin/ui-interface/maps/leaflet/leaflet.component').then(m => m.LeafletComponent)}
                ]
              },
            ],
    },

  //FrontEnd Authentication
    { path: 'authentication', loadComponent: () => import('./authentication/authentication.component').then((m) => m.AuthenticationComponent),
            children:[
              { path: 'login', loadComponent: () => import('./authentication/login/login.component').then((m) => m.LoginComponent),},
              { path: 'register', loadComponent: () => import('./authentication/register/register.component').then((m) => m.RegisterComponent),},
              { path: 'forgot-password', loadComponent: () => import('./authentication/forgot-password/forgot-password.component').then((m) => m.ForgotPasswordComponent ),},
              { path: 'reset-password', loadComponent: () => import('./authentication/reset-password/reset-password.component').then((m) => m.ResetPasswordComponent),},
            ]
    },

  //FrontEnd Components
    { path: '', loadComponent: () => import('./features/features.component').then((m) => m.FeaturesComponent),
      children:[
        //Vehicle
          { path: 'vehicles', loadComponent: () => import('./features/listings/listings.component').then((m) => m.VehiclesComponent),
            children:[
                { path: 'add-vehicle', loadComponent: () => import('./features/listings/add-listing/add-listing.component').then((m) => m.AddListingComponent )},
            ]
          }
        
          { path: '', loadComponent: () => import('./features/home/home.component').then((m) => m.HomeComponent),
            children:[
              { path: '', loadComponent: () => import('./features/home/home-new/home-new.component').then((m) => m.HomeNewComponent),},
              { path: 'index', loadComponent: () => import('./features/home/home-new/home-new.component').then((m) => m.HomeNewComponent),},
              { path: 'index-2', loadComponent: () => import('./features/home/home1/home1.component').then((m) => m.Home1Component),},
              { path: 'index-4', loadComponent: () => import('./features/home/home2/home2.component').then((m) => m.Home2Component),},
              { path: 'index-3', loadComponent: () => import('./features/home/home3/home3.component').then((m) => m.Home3Component),},
            ]
          },
          //Listing
          { path: 'listings', loadComponent: () => import('./features/listings/listings.component').then((m) => m.VehiclesComponent),
            children:[
                { path: 'listing-details', loadComponent: () => import('./features/listings/listing-details/listing-details.component').then((m) => m.ListingDetailsComponent),},
                { path: 'listing-grid', loadComponent: () => import('./features/listings/listing-grid/listing-grid.component').then((m) => m.ListingGridComponent),},
                { path: 'listing-list', loadComponent: () => import('./features/listings/listing-list/listing-list.component').then((m) => m.ListingListComponent ),},
                { path: 'listing-map', loadComponent: () => import('./features/listings/listing-map/listing-map.component').then((m) => m.ListingMapComponent),},
                { path: 'add-listing', loadComponent: () => import('./features/listings/add-listing/add-listing.component').then((m) => m.AddListingComponent )},
            ]
          },
          //Blog
          { path: 'blog', loadComponent: () => import('./features/blog/blog.component').then((m) => m.BlogComponent),
            children:[
                { path: 'blog-details', loadComponent: () => import('./features/blog/blog-details/blog-details.component').then((m) => m.BlogDetailsComponent),},
                { path: 'blog-grid', loadComponent: () => import('./features/blog/blog-grid/blog-grid.component').then((m) => m.BlogGridComponent),},
                { path: 'blog-list', loadComponent: () => import('./features/blog/blog-list/blog-list.component').then((m) => m.BlogListComponent ),},
            ]
          },
          //Booking
          { path: 'booking', loadComponent: () => import('./features/booking/booking.component').then((m) => m.BookingComponent),
              children: [
                { path: 'booking-payment', loadComponent: () => import('./features/booking/booking-payment/booking-payment.component').then((m) => m.BookingPaymentComponent),},
                { path: 'booking-list', loadComponent: () => import('./features/booking/booking-list/booking-list.component').then((m) => m.BookingListComponent),},
                { path: 'invoice-details', loadComponent: () => import('./features/booking/invoice-details/invoice-details.component').then((m) => m.InvoiceDetailsComponent),},
                { path: 'booking-checkout', loadComponent: () => import('./features/booking/booking-checkout/booking-checkout.component').then(m => m.BookingCheckoutComponent) },
                { path: 'booking-success', loadComponent: () => import('./features/booking/booking-success/booking-success.component').then(m => m.BookingSuccessComponent) },
                { path: 'booking-adon', loadComponent: () => import('./features/booking/booking-adon/booking-adon.component').then(m => m.BookingAdonComponent) },
                { path: 'booking-details', loadComponent: () => import('./features/booking/booking-details/booking-details.component').then(m => m.BookingDetailsComponent) },
              ],
          },
          //Error
          { path: 'error', loadComponent: () => import('./features/error/error.component').then((m) => m.ErrorComponent,),
              children: [
                { path: 'error404', loadComponent: () => import('./features/error/error404/error404.component').then((m) => m.Error404Component), },
                { path: 'error500', loadComponent: () => import('./features/error/error500/error500.component').then((m) => m.Error500Component),},
              ],
            },
          //Pages
          { path: 'pages', loadComponent: () => import('./features/pages/pages.component').then((m) => m.PagesComponent,),
              children: [
                  { path: 'terms-condition', loadComponent: () => import('./features/pages/terms-condition/terms-condition.component').then((m) => m.TermsConditionComponent),},
                    { path: 'maintenance', loadComponent: () => import('./features/pages/maintenance/maintenance.component').then((m) => m.MaintenanceComponent),},
                    { path: 'coming-soon', loadComponent: () => import('./features/pages/coming-soon/coming-soon.component').then((m) => m.ComingSoonComponent ),},
                    { path: 'contact-us', loadComponent: () => import('./features/pages/contact-us/contact-us.component').then((m) => m.ContactUsComponent),},
                    { path: 'testimonial', loadComponent: () => import('./features/pages/testimonial/testimonial.component').then((m) => m.TestimonialComponent ),},
                    { path: 'gallery', loadComponent: () => import('./features/pages/gallery/gallery.component').then((m) => m.GalleryComponent),},
                    { path: 'privacy-policy', loadComponent: () => import('./features/pages/privacy-policy/privacy-policy.component').then((m) => m.PrivacyPolicyComponent),},
                    { path: 'about-us', loadComponent: () => import('./features/pages/about-us/about-us.component').then((m) => m.AboutUsComponent),},
                    { path: 'pricing', loadComponent: () => import('./features/pages/pricing/pricing.component').then((m) => m.PricingComponent),},
                    { path: 'our-team', loadComponent: () => import('./features/pages/our-team/our-team.component').then((m) => m.OurTeamComponent),},
                    { path: 'faq',loadComponent: () => import('./features/pages/faq/faq.component').then((m) => m.FaqComponent),},
              ],
            },
            //Users
              { path: 'user', loadComponent: () => import('./features/user/user.component').then((m) => m.UserComponent),
                children:[
                  {
                    path: 'user-booking-cancelled',loadComponent: () => import('./features/user/user-booking-cancelled/user-booking-cancelled.component').then((m) => m.UserBookingCancelledComponent)
                  },
                  {
                    path: 'user-wallet',loadComponent: () => import('./features/user/user-wallet/user-wallet.component').then((m) => m.UserWalletComponent)
                  },
                  {
                    path: 'user-wishlist',loadComponent: () => import('./features/user/user-wishlist/user-wishlist.component').then((m) => m.UserWishlistComponent)
                  },
                  {
                    path: 'user-payment',loadComponent: () => import('./features/user/user-payment/user-payment.component').then((m) => m.UserPaymentComponent)
                  },
                  {
                    path: 'user-review',loadComponent: () => import('./features/user/user-reviews/user-reviews.component').then((m) => m.UserReviewsComponent)
                  },

                  {
                    path: 'user-booking-complete',loadComponent: () => import('./features/user/user-booking-complete/user-booking-complete.component').then((m) => m.UserBookingCompleteComponent)
                  },
                  {
                    path: 'user-booking-inprogress',loadComponent: () => import('./features/user/user-booking-inprogress/user-booking-inprogress.component').then((m) => m.UserBookingInprogressComponent)
                  },
                  {
                    path: 'user-booking-upcoming',loadComponent: () => import('./features/user/user-booking-upcoming/user-booking-upcoming.component').then((m) => m.UserBookingUpcomingComponent)
                  },
                  {
                    path: 'user-bookings',loadComponent: () => import('./features/user/user-bookings/user-bookings.component').then((m) => m.UserBookingsComponent)
                  },
                  {
                    path: 'user-dashboard',loadComponent: () => import('./features/user/user-dashboard/user-dashboard.component').then((m) => m.UserDashboardComponent)
                  },

                  {
                    path: 'user-messages',loadComponent: () => import('./features/user/user-messages/user-messages.component').then((m) => m.UserMessagesComponent)
                  },
                  {
                    path: 'booking-cancelled-calendar',loadComponent: () => import('./features/user/booking-cancelled-calendar/booking-cancelled-calendar.component').then((m) => m.BookingCancelledCalendarComponent)
                  },
                  {
                    path: 'booking-complete-calendar',loadComponent: () => import('./features/user/booking-complete-calendar/booking-complete-calendar.component').then((m) => m.BookingCompleteCalendarComponent)
                  },
                  {
                    path: 'booking-inprogress-calendar',loadComponent: () => import('./features/user/booking-inprogress-calendar/booking-inprogress-calendar.component').then((m) => m.BookingInprogressCalendarComponent)
                  },
                  {
                    path: 'booking-upcoming-calendar',loadComponent: () => import('./features/user/booking-upcoming-calendar/booking-upcoming-calendar.component').then((m) => m.BookingUpcomingCalendarComponent)
                  },
                  {
                    path: 'bookings-calendar',loadComponent: () => import('./features/user/bookings-calendar/bookings-calendar.component').then((m) => m.BookingsCalendarComponent)
                  },
                  { path: 'settings', loadComponent: () => import('./features/user/settings/settings.component').then((m) => m.SettingsComponent),
                    children:[
                        {
                          path: 'user-integration',loadComponent: () => import('./features/user/settings/user-integration/user-integration.component').then((m) => m.UserIntegrationComponent)
                        },
                        {
                          path: 'user-preferences',loadComponent: () => import('./features/user/settings/user-preferences/user-preferences.component').then((m) => m.UserPreferencesComponent)
                        },
                        {
                          path: 'user-notification',loadComponent: () => import('./features/user/settings/user-notification/user-notification.component').then((m) => m.UserNotificationComponent)
                        },
                        {
                          path: 'user-security',loadComponent: () => import('./features/user/settings/user-security/user-security.component').then((m) => m.UserSecurityComponent)
                        },
                        {
                          path: 'user-settings',loadComponent: () => import('./features/user/settings/user-settings/user-settings.component').then((m) => m.UserSettingsComponent)
                        },
                    ]
                  },
                ]
              }
        
      ]
    },


];
