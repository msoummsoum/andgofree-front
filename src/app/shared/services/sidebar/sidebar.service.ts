import { Injectable, Renderer2, RendererFactory2 } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { routes } from '../../routes';
import { CommonService } from '../common/common.service';

@Injectable({
  providedIn: 'root'
})
export class SidebarService {
    private renderer: Renderer2;
    base = '';
  page = '';
  last = '';
  public toggleSidebar: BehaviorSubject<string> = new BehaviorSubject<string>(
    localStorage.getItem('sidebarPosition') || 'false'
  );
  public sideBarPosition: BehaviorSubject<string> = new BehaviorSubject<string>(
    localStorage.getItem('sideBarPosition') || 'false'
  );
  public themeColors: BehaviorSubject<string> = new BehaviorSubject<string>(
    localStorage.getItem('themeColor') || 'light-mode'
  );
  public toggleMobileSideBar: BehaviorSubject<string> =
    new BehaviorSubject<string>(
      localStorage.getItem('isMobileSidebar') || 'false'
    );
  public expandSideBar: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(
    false
  );
  public openSidebar(): void {
    // to set sidebar position app component html using "menu-opened" class
    if (localStorage.getItem('sidebarPosition')) {
      localStorage.removeItem('sidebarPosition');
      this.toggleSidebar.next('false');
    } else {
      localStorage.setItem('sidebarPosition', 'true');
      this.toggleSidebar.next('true');
    }
  }
  constructor(rendererFactory: RendererFactory2,private common: CommonService) {
    this.renderer = rendererFactory.createRenderer(null, null);
    this.common.base.subscribe((res: string) => {
      this.base = res;
    });
    this.common.page.subscribe((res: string) => {
      this.page = res;
    });
    this.common.last.subscribe((res: string) => {
      this.last = res;
    });
  }
  public closeSidebar(): void {
    //hide sidebar
    this.toggleSidebar.next('false');
    localStorage.removeItem('sidebarPosition');
  }
  public switchSideMenuPosition(): void {
    if (localStorage.getItem('sideBarPosition')) {
      this.sideBarPosition.next('false');
      this.expandSideBar.next(true);
      localStorage.removeItem('sideBarPosition');
    } else {
      this.sideBarPosition.next('true');
      this.expandSideBar.next(false);
      localStorage.setItem('sideBarPosition', 'true');
    }
  }

  public switchMobileSideBarPosition(): void {
    if (localStorage.getItem('isMobileSidebar')) {
      this.toggleMobileSideBar.next('false');
      localStorage.removeItem('isMobileSidebar');
    } else {
      this.toggleMobileSideBar.next('true');
      localStorage.setItem('isMobileSidebar', 'true');
    }
  }
  public changeThemeColor(themeColors: string): void {
    this.themeColors.next(themeColors);
    localStorage.setItem('themeColor', themeColors);
    this.renderer.setAttribute(
      document.documentElement,
      'class', 
      themeColors === 'light-mode'
        ? 'light-mode'
        : 'dark-mode'
    );
  }
  public sidebarData = [
    {
      tittle:"Main",
      showAsTab: true,
      separateRoute: false,
      menu: [
            {
                menuValue: "Dashboard",
                icon: "layout-dashboard",
                route : routes.adminDashboard,
                base:'index',
                hasSubRoute: false,
                showSubRoute: false
            }
        ]
    },
    {
      tittle:"Bookings",
      showAsTab: true,
      separateRoute: false,
      menu: [
        {
            menuValue: "Reservations",
            icon: "files",
            base:'reservations',
            base1:'add-reservation',
            base2:'reservation-details',
            base3:'edit-reservation',
            route: routes.reservation,
            hasSubRoute: false,
            showSubRoute: false
        },
        {
            menuValue: "Calendar",
            icon: "calendar-bolt",
            base:'calendar',
            route: routes.calendar,
            hasSubRoute: false,
            showSubRoute: false
        },
        {
            menuValue: "Quotations",
            icon: "file-symlink",
            route: routes.quotation,
            base:'quotations',
            base1:'add-quotations',
            base2:'edit-quotations',
            base3:'quotation-details',
            hasSubRoute: false,
            showSubRoute: false
        },
        {
            menuValue: "Enquiries",
            icon: "mail",
            route: routes.enquiries,
            base:'enquiries',
            hasSubRoute: false,
            showSubRoute: false
        }
      ]
    },
    {
        tittle:"Manage",
        showAsTab: true,
        separateRoute: false,
        menu: [
            {
                menuValue: "Customers",
                icon: "users-group",
                route: routes.customers,
                base:'customers',
                base1:'customer-details',
                base2:'customers-companies',
                hasSubRoute: false,
                showSubRoute: false
            },
            {
                menuValue: "Drivers",
                icon: "user-bolt",
                route: routes.drivers,
                base:'drivers',
                hasSubRoute: false,
                showSubRoute: false 
            },
            {
                menuValue: "Locations",
                icon: "map-pin",
                route: routes.location,
                base:'locations',
                hasSubRoute: false,
                showSubRoute: false
            }
        ]
    },
    {
        tittle:"Rentals",
        showAsTab: true,
        separateRoute: false,
        menu: [
            {
                menuValue: "Car",
                icon: "car",
                base:'cars',
                base1:'add-car',
                base2:'edit-car',
                base3:'car-details',
                route: routes.cars,
                hasSubRoute: false,
                showSubRoute: false
            },
            {
                menuValue: "Car Attributes",
                hasSubRoute: true,
                showSubRoute: false,
                icon: "device-camera-phone",
                base:'car-attributes',
                subMenus: [
                    {
                        menuValue: "Brands",
                        route: routes.brands,
                        page:'brands'
                    },
                    {
                        menuValue: "Types",
                        route: routes.types,
                        page:'types'
                    },
                    {
                        menuValue: "Models",
                        route: routes.models,
                        page:'models'
                    },
                    {
                        menuValue: "Transmissions",
                        route: routes.transmissions,
                        page:'transmissions'
                    },
                    {
                        menuValue: "Fuels",
                        route: routes.fuel,
                        page:'fuel'
                    },
                    {
                        menuValue: "Colors",
                        route: routes.color,
                        page:'color'
                    },
                    {
                        menuValue: "Steering",
                        route: routes.steering,
                        page:'steering'
                    },
                    {
                        menuValue: "Seats",
                        route: routes.seats,
                        page:'seats'
                    },
                    {
                        menuValue: "Cylinders",
                        route: routes.cylinders,
                        page:'cylinders'
                    },
                    {
                        menuValue: "Doors",
                        route: routes.doors,
                        page:'doors'
                    },
                    {
                        menuValue: "Features",
                        route: routes.features,
                        page:'features'
                    },
                    {
                        menuValue: "Safty Features",
                        route: routes.safetyFeatures,
                        page:'safety-features'
                    }
                ]
            },
            {
                menuValue: "Extra Service",
                icon: "script-plus",
                route: routes.extraServices,
                base:'extra-services',
                hasSubRoute: false,
                showSubRoute: false
            },
            {
                menuValue: "Seasonal Pricing",
                icon: "file-dollar",
                route: routes.adminPricing,
                base:'pricing',
                hasSubRoute: false,
                showSubRoute: false
            },
            {
                menuValue: "Inspections",
                icon: "dice-6",
                route: routes.inspections,
                base:'inspections',
                hasSubRoute: false,
                showSubRoute: false
            },
            {
                menuValue: "Tracking",
                icon: "map-pin-pin",
                route: routes.tracking,
                base:'tracking',
                hasSubRoute: false,
                showSubRoute: false
            },
            {
                menuValue: "Maintenance",
                icon: "color-filter",
                route: routes.adminMaintenance,
                base:'maintenance',
                hasSubRoute: false,
                showSubRoute: false
            },
            {
                menuValue: "Reviews",
                icon: "star",
                route: routes.reviews,
                base:'reviews',
                hasSubRoute: false,
                showSubRoute: false
            }
        ]
    },
    {
        tittle:"Finance & Accounts",
        showAsTab: true,
        separateRoute: false,
        menu: [
            {
                menuValue: "Invoices",
                icon: "file-invoice",
                route: routes.invoices,
                base:'invoices',
                base1:'add-invoice',
                base2:'edit-invoice',
                base3:'invoice-details',
                hasSubRoute: false,
                showSubRoute: false
            },
            {
                menuValue: "Payments",
                icon: "credit-card",
                route: routes.payments,
                base:'payments',
                hasSubRoute: false,
                showSubRoute: false
            }
        ]
    },
    {
        tittle:"Others",
        showAsTab: true,
        separateRoute: false,
        menu: [
            {
                menuValue: "Messages",
                icon: "message",
                route: routes.chat,
                base:'chat',
                hasSubRoute: false,
                showSubRoute: false
            },
            {
                menuValue: "Coupons",
                icon: "discount-2",
                route: routes.coupons,
                base:'coupons',
                hasSubRoute: false,
                showSubRoute: false
            },
            {
                menuValue: "Newsletters",
                icon: "file-horizontal",
                route: routes.newsLetters,
                base:'newsletters',
                hasSubRoute: false,
                showSubRoute: false
            }
        ]
    },
    {
        tittle:"Cms",
        showAsTab: true,
        separateRoute: false,
        menu: [
            {
                menuValue: "Pages",
                icon: "file-invoice",
                route: routes.pages,
                base:'pages',
                base1:'add-pages',
                base2:'edit-pages',
                hasSubRoute: false,
                showSubRoute: false
            },
            {
                menuValue: "Menu Management",
                icon: "menu-2",
                base:'menu-management',
                base1:'edit-menu',
                route: routes.menuManagement,
                hasSubRoute: false,
                showSubRoute: false
            },
            {
                menuValue: "Blogs",
                hasSubRoute: true,
                showSubRoute: false,
                icon: "device-desktop-analytics",
                base:'blogs',
                subMenus: [
                    {
                        menuValue: "All Blogs",
                        route: routes.allBlogs,
                        page:'all-blogs',
                    },
                    {
                        menuValue: "Categories",
                        route: routes.blogCategories,
                        page:'blog-categories',
                    },
                    {
                        menuValue: "Comments",
                        route: routes.blogComments,
                        page:'blog-comments',
                    },
                    {
                        menuValue: "Blog Tags",
                        route: routes.blogTags,
                        page:'blog-tags', 
                    }
                ]
            },
            {
                menuValue: "Location",
                hasSubRoute: true,
                showSubRoute: false,
                base:'location',
                icon: "map",
                subMenus: [
                    {
                        menuValue: "Countries",
                        route: routes.countries,
                        page:'countries'
                    },
                    {
                        menuValue: "States",
                        route:routes.states,
                        page:'states'
                    },
                    {
                        menuValue: "Cities",
                        route: routes.city,
                        page:'city'
                    }
                ]
            },
            {
                menuValue: "Testimonials",
                icon: "brand-hipchat",
                route: routes.adminTestimonials,
                base:'testimonials',
                hasSubRoute: false,
                showSubRoute: false
            },
            {
                menuValue: "FAQ's",
                hasSubRoute: true,
                showSubRoute: false,
                icon: "question-mark",
                base:'faq',
                subMenus: [
                    {
                        menuValue: "FAQ's",
                        route: routes.faqList,
                        page:'faq-list',
                    },
                    {
                        menuValue: "FAQ Category",
                        route: routes.faqCategory,
                        page:'faq-category',
                    }
                ]
            }
        ]
    },
    {
        tittle:"Support",
        showAsTab: true,
        separateRoute: false,
        menu: [
            {
                menuValue: "Contact Messages",
                icon: "messages",
                route: routes.contactMessages,
                base:'contact-messages',
                hasSubRoute: false,
                showSubRoute: false
            },
            {
                menuValue: "Announcements",
                icon: "speakerphone",
                route: routes.announcements,
                base:'announcements',
                hasSubRoute: false,
                showSubRoute: false
            },
            {
                menuValue: "Tickets",
                icon: "ticket",
                route: routes.tickets,
                base:'tickets',
                base1:'ticket-details',
                hasSubRoute: false,
                showSubRoute: false
            }
        ]
    },
    {
        tittle:"User Management",
        showAsTab: true,
        separateRoute: false,
        menu: [
            {
                menuValue: "Users",
                icon: "user-circle",
                route: routes.users,
                base:'users',
                hasSubRoute: false,
                showSubRoute: false
            },
            {
                menuValue: "Roles & Permissions",
                icon: "user-shield",
                route: routes.rolesPermissions,
                base:'roles-permissions',
                base1:'permissions',
                hasSubRoute: false,
                showSubRoute: false
            }
        ]
    },
    {
        tittle:"Reports",
        showAsTab: true,
        separateRoute: false,
        menu: [
            {
                menuValue: "Income vs Expense",
                icon: "chart-histogram",
                route: routes.incomeReport,
                base:'income-report',
                hasSubRoute: false,
                showSubRoute: false
            },
            {
                menuValue: "Earnings",
                icon: "chart-line",
                route: routes.earningsReport,
                base:'earnings-report',
                hasSubRoute: false,
                showSubRoute: false
            },
            {
                menuValue: "Rentals",
                icon: "chart-infographic",
                route: routes.rentalReport,
                base:'rental-report',
                hasSubRoute: false,
                showSubRoute: false
            }
        ]
    },
    {
        tittle:"Authentication",
        showAsTab: true,
        separateRoute: false,
        menu: [
            {
                menuValue: "Login",
                icon: "login",
                route: routes.adminlogin,
                hasSubRoute: false,
                showSubRoute: false
            },
            {
                menuValue: "Forgot Password",
                icon: "help-triangle",
                route: routes.adminForgotPassword,
                hasSubRoute: false,
                showSubRoute: false
            },
            {
                menuValue: "Email Verification",
                icon: "mail-exclamation",
                route: routes.adminOtp,
                hasSubRoute: false,
                showSubRoute: false
            },
            {
                menuValue: "Reset Password",
                icon: "restore",
                route: routes.adminResetPassword,
                hasSubRoute: false,
                showSubRoute: false
            }
        ]
    },
    {
        tittle:"Settings & Configuration",
        showAsTab: true,
        separateRoute: false,
        menu: [
            {
                menuValue: "Account Settings",
                hasSubRoute: true,
                showSubRoute: false,
                base:'profile-settings',
                base1:'security-settings',
                base2:'notification-settings',
                base3:'integrations-settings',
                base4:'tracker-settings',
                icon: "user-cog",
                subMenus: [
                    {
                        menuValue: "Profile",
                        page:'profile-settings',
                        route: routes.profileSettings
                    },
                    {
                        menuValue: "Security",
                        page:'security-settings',
                        route: routes.securitySettings
                    },
                    {
                        menuValue: "Notifications",
                        page:'notifications-settings',
                        route: routes.notificationsSettings
                    },
                    {
                        menuValue: "Integrations",
                        page:'integrations-settings',
                        route: routes.integrationsSettings
                    },
                    {
                        menuValue: "Tracker",
                        page:'tracker-settings',
                        route: routes.trackerSettings
                    }
                ]
            },
            {
                menuValue: "Website Settings",
                hasSubRoute: true,
                showSubRoute: false,
                base:'company-settings',
                icon: "user-cog",
                subMenus: [
                    {
                        menuValue: "Company Settings",
                        page:'company-settings',
                        route: routes.companySettings
                    },
                    {
                        menuValue: "Localization",
                        page:'localization-settings',
                        route: routes.localizationSettings
                    },
                    {
                        menuValue: "Prefixes",
                        page:'prefixes-settings',
                        route: routes.prefixesSettings
                    },
                    {
                        menuValue: "SEO Setup",
                        page:'seo-setup',
                        route: routes.seoSetup
                    },
                    {
                        menuValue: "Language",
                        page:'language-setting',
                        // route: routes.langeuagSetting2
                    },
                    {
                        menuValue: "Maintenance Mode",
                        page:'maintenance-mode',
                        route: routes.maintenanceMode
                    },
                    {
                        menuValue: "Login & Register",
                        page:'login-setting',
                        route: routes.loginSetting
                    },
                    {
                        menuValue: "AI Configuration",
                        page:'ai-configuration',
                        route: routes.aiConfiguration
                    },
                    {
                        menuValue: "Plugin Managers",
                        page:'plugin-managers',
                        route: routes.pluginManagers
                    }
                ]
            },
            {
                menuValue: "Rental Settings",
                hasSubRoute: true,
                showSubRoute: false,
                base:'rental-settings',
                icon: "clock-cog",
                subMenus: [
                    {
                        menuValue: "Rental",
                        page:'rental-settings',
                        route: routes.rentalSettings
                    },
                    {
                        menuValue: "Insurance",
                        page:'insurance-settings',
                        route: routes.insuranceSettings
                    }
                ]
            },
            {
                menuValue: "App Settings",
                hasSubRoute: true,
                showSubRoute: false,
                base:'invoice-setting',
                icon: "device-mobile-cog",
                subMenus: [
                    {
                        menuValue: "Invoice Settings",
                        page:'invoice-setting',
                        route: routes.invoiceSetting
                    },
                    {
                        menuValue: "Invoice Templates",
                        page:'invoice-template',
                        route: routes.invoiceTemplate
                    },
                    {
                        menuValue: "Signatures",
                        page:'signatures-setting',
                        route: routes.signaturesSetting
                    },
                    {
                        menuValue: "Custom Fields",
                        page:'custom-fields',
                        route: routes.customFields
                    },
                ]
            },
            {
                menuValue: "System Settings",
                hasSubRoute: true,
                showSubRoute: false,
                base:'email-setting',
                icon: "device-desktop-cog",
                subMenus: [
                    {
                        menuValue: "Email Settings",
                        page:'email-setting',
                        route: routes.emailSetting
                    },
                    {
                        menuValue: "Email Templates",
                        page:'email-setting',
                        route: routes.emailTemplates
                    },
                    {
                        menuValue: "SMS Gateways",
                        page:'sms-gateways',
                        route: routes.smsGateways
                    },
                    {
                        menuValue: "GDPR Cookies",
                        page:'gdpr-cookies',
                        route: routes.gdprCookies
                    }
                ]
            },
            {
                menuValue: "Finance Settings",
                hasSubRoute: true,
                showSubRoute: false,
                base:'payment-methods',
                icon: "settings-dollar",
                subMenus: [
                    {
                        menuValue: "Payment Methods",
                        page:'payment-methods',
                        route: routes.paymentMethods
                    },
                    {
                        menuValue: "Bank Accounts",
                        page:'bank-accounts',
                        route: routes.bankAccounts
                    },
                    {
                        menuValue: "Tax Rates",
                        page:'tax-rates',
                        route: routes.taxRates
                    },
                    {
                        menuValue: "Currencies",
                        page:'currencies',
                        route: routes.currencies
                    }
                ]
            },
            {
                menuValue: "Other Settings",
                hasSubRoute: true,
                showSubRoute: false,
                base:'sitemap',
                icon: "settings-2",
                subMenus: [
                    {
                        menuValue: "Sitemap",
                        page:'sitemap',
                        route: routes.siteMap
                    },
                    {
                        menuValue: "Clear Cache",
                        page:'clear-cache',
                        route: routes.clearCache
                    },
                    {
                        menuValue: "Storage",
                        page:'storage',
                        route: routes.storage
                    },
                    {
                        menuValue: "Cronjob",
                        page:'cronjob',
                        route: routes.cronJob
                    },
                    {
                        menuValue: "System Backup",
                        page:'system-backup',
                        route: routes.systemBackup
                    },
                    {
                        menuValue: "Database Backup",
                        page:'database-backup',
                        route: routes.databaseBackup
                    },
                    {
                        menuValue: "System Update",
                        page:'system-update',
                        route: routes.systemUpdate
                    }
                ]
            }
        ]
    },
    {
        tittle:"UI Interface",
        showAsTab: true,
        separateRoute: false,
        menu: [
            {
                menuValue: "Base UI",
                hasSubRoute: true,
                showSubRoute: false,
                icon: "hierarchy",
                base:'base-ui',
                subMenus: [
                    {
                        menuValue: "Alerts",
                        page:'ui-alerts',
                        route: routes.alert
                    },
                    {
                        menuValue: "Accordion",
                        page:'ui-accordion',
                        route: routes.accordions
                    },
                    {
                        menuValue: "Avatar",
                        page:'ui-avatar',
                        route: routes.avatar
                    },
                    {
                        menuValue: "Badges",
                        page:'ui-badges',
                        route: routes.badges
                    },
                    {
                        menuValue: "Border",
                        page:'ui-borders',
                        route: routes.border
                    },
                    {
                        menuValue: "Buttons",
                        page:'ui-buttons',
                        route: routes.buttons
                    },
                    {
                        menuValue: "Button Group",
                        page:'ui-buttons-group',
                        route: routes.buttonGroup
                    },
                    {
                        menuValue: "Breadcrumb",
                        page:'ui-breadcrumb',
                        route: routes.breadcrumb
                    },
                    {
                        menuValue: "Card",
                        page:'ui-cards',
                        route: routes.cards
                    },
                    {
                        menuValue: "Carousel",
                        page:'ui-carousel',
                        route: routes.carousel
                    },
                    {
                        menuValue: "Colors",
                        page:'ui-colors',
                        route:routes.colors
                    },
                    {
                        menuValue: "Dropdowns",
                        page:'ui-dropdowns',
                        route: routes.dropDown
                    },
                    {
                        menuValue: "Grid",
                        page:'ui-grid',
                        route: routes.grid
                    },
                    {
                        menuValue: "Images",
                        page:'ui-images',
                        route: routes.images
                    },
                    {
                        menuValue: "Lightbox",
                        page:'ui-lightbox',
                        route: routes.lightBox
                    },
                    {
                        menuValue: "Media",
                        page:'ui-media',
                        route: routes.media
                    },
                    {
                        menuValue: "Modals",
                        page:'ui-modals',
                        route: routes.modal
                    },
                    {
                        menuValue: "Offcanvas",
                        page:'ui-offcanvas',
                        route: routes.offcanvas
                    },
                    {
                        menuValue: "Pagination",
                        page:'ui-pagination',
                        route: routes.pagination
                    },
                    {
                        menuValue: "Popovers",
                        page:'ui-popovers',
                        route:routes.popover
                    },
                    {
                        menuValue: "Progress",
                        page:'ui-progress',
                        route: routes.progressBars
                    },
                    {
                        menuValue: "Placeholders",
                        page:'ui-placeholders',
                        route: routes.placeholder
                    },
                    {
                        menuValue: "Spinner",
                        page:'ui-spinner',
                        route: routes.spinner
                    },
                    {
                        menuValue: "Tabs",
                        page:'ui-nav-tabs',
                        route: routes.tabs
                    },
                    {
                        menuValue: "Toasts",
                        page:'ui-toasts',
                        route: routes.toasts
                    },
                    {
                        menuValue: "Tooltips",
                        page:'ui-tooltips',
                        route: routes.tooltip
                    },
                    {
                        menuValue: "Typography",
                        page:'ui-typography',
                        route: routes.typography
                    },
                    {
                        menuValue: "Video",
                        page:'ui-video',
                        route: routes.video
                    },
                    {
                        menuValue: "Sortable",
                        page:'ui-sortable',
                        route: routes.uiSortable
                    },
                ]
            },
            {
                menuValue: "Advanced UI",
                hasSubRoute: true,
                showSubRoute: false,
                base:'advanced-ui',
                icon: "whirl",
                subMenus: [
                    {
                        menuValue: "Ribbon",
                        page:'ui-ribbon',
                        route: routes.ribbon
                    },
                    {
                        menuValue: "Clipboard",
                        page:'ui-clipboard',
                        route: routes.clipboards
                    },
                    {
                        menuValue: "Drag & Drop",
                        page:'ui-drag-drop',
                        route: routes.dragDrop
                    },
                    {
                        menuValue: "Rating",
                        page:'ui-rating',
                        route: routes.rating
                    },
                    {
                        menuValue: "Text Editor",
                        page:'ui-text-editor',
                        route: routes.textEditor
                    },
                    {
                        menuValue: "Counter",
                        page:'ui-counter',
                        route: routes.counter
                    },
                    {
                        menuValue: "Scrollbar",
                        page:'ui-scrollbar',
                        route: routes.scrollbar
                    },
                    {
                        menuValue: "Timeline",
                        page:'ui-timeline',
                        route: routes.timeline
                    }
                ]
            },
            {
                menuValue: "Forms",
                icon: "forms",
                hasSubRouteTwo: true,
                base:'forms',
                showSubRoute: false,
                subMenus: [
                    {
                        menuValue: "Form Elements",
                        page:'form-elements',
                        customSubmenuTwo: true,
                        hasSubRoute: true,
                        showSubRoute: false,
                        subMenusTwo: [
                        {
                            menuValue: "Basic Inputs",                        
                            route: routes.formBasicInputs,

                            hasSubRoute: false,
                            showSubRoute: false
                        },
                        {
                            menuValue: "Checkbox & Radios",                        
                            route: routes.formCheckboxRadios,
                            hasSubRoute: false,
                            showSubRoute: false
                        },
                        {
                            menuValue: "Input Groups",                        
                            route: routes.formInputsGroups,
                            hasSubRoute: false,
                            showSubRoute: false
                        },
                        {
                            menuValue: "Grid & Gutters",                        
                            route: routes.formGridGutters,
                            hasSubRoute: false,
                            showSubRoute: false
                        },
                        {
                            menuValue: "Form Select",                        
                            route: routes.formSelect,
                            hasSubRoute: false,
                            showSubRoute: false
                        },
                        {
                            menuValue: "Input Masks",                        
                            route: routes.formMask,
                            hasSubRoute: false,
                            showSubRoute: false
                        },
                        {
                            menuValue: "File Uploads",                        
                            route: routes.formFileUpload,
                            hasSubRoute: false,
                            showSubRoute: false
                        }
                        ]
                    },
                    {
                        menuValue: "Layouts",
                        customSubmenuTwo: true,
                        "active_link1": "/admin-template/forms/form-horizontal",
                        "active_link2": "/admin-template/forms/form-vertical",
                        "active_link3": "/admin-template/forms/form-floating-labels",
                        hasSubRoute: true,
                        showSubRoute: false,
                        subMenusTwo: [
                        {
                            menuValue: "Horizontal Form",                        
                            route: routes.formHorizontal,
                            hasSubRoute: false,
                            showSubRoute: false
                        },
                        {
                            menuValue: "Vertical Form",                        
                            route: routes.formVertical,
                            hasSubRoute: false,
                            showSubRoute: false
                        },
                        {
                            menuValue: "Floating Labels",                        
                            route: routes.formFloatingLabels,
                            hasSubRoute: false,
                            showSubRoute: false
                        }
                        ]
                    },
                    {
                        menuValue: "Form Validation",
                        route: routes.formValidation,
                        hasSubRoute: false,
                        showSubRoute: false
                    },
                    {
                        menuValue: "Select2",
                        route: routes.formSelect,
                        hasSubRoute: false,
                        showSubRoute: false,
                        customSubmenuTwo: false
                    },
                    {
                        menuValue: "Form Wizard",
                        route: routes.formWizard,
                        hasSubRoute: false,
                        showSubRoute: false,
                        customSubmenuTwo: false
                    },
                    {
                        menuValue: "Form Picker",
                        route: routes.formPickers,
                        hasSubRoute: false,
                        showSubRoute: false,
                        customSubmenuTwo: false
                    }
                ]
            },
            {
                menuValue: "Tables",
                icon: "table",
                hasSubRoute: true,
                base:'table',
                showSubRoute: false,
                subMenus: [
                    {
                        menuValue: "Basic Tables",
                        route: routes.basictables,
                        page:'tables-basic',
                        hasSubRoute: false,
                        showSubRoute: false
                    },
                    {
                        menuValue: "Data Table",
                        route: routes.datatables,
                        page:'data-tables',
                        hasSubRoute: false,
                        showSubRoute: false
                    }
                ]
            },
            {
                menuValue: "Charts",
                icon: "chart-pie-3",
                hasSubRoute: true,
                base:'charts',
                showSubRoute: false,
                subMenus: [
                    {
                        menuValue: "Apex Charts",
                        route: routes.apexChart,
                        page:'apex-charts',
                        hasSubRoute: false,
                        showSubRoute: false
                    },
                    {
                        menuValue: "Prime NG Charts",
                        hasSubRoute: false,
                        showSubRoute: false,
                        route: routes.ngTwoCharts,
                        page:'prime-ng',
                        subRoutes: []
                    }
                ]
            },
            {
                menuValue: "Icons",
                icon: "icons",
                hasSubRoute: true,
                showSubRoute: false,
                base:'icon',
                subMenus: [
                  {
                    menuValue: "Fontawesome Icons",
                    route: routes.fontawesome,
                    page:'icon-fontawesome',
                    hasSubRoute: false,
                    showSubRoute: false
                  },
                  {
                    menuValue: "Tabler Icons",
                    route: routes.tabler,
                    page:'icon-tabler',
                    hasSubRoute: false,
                    showSubRoute: false
                  },
                  {
                    menuValue: "Bootstrap Icons",
                    route: routes.bootstrap,
                    page:'icon-bootstrap',
                    hasSubRoute: false,
                    showSubRoute: false
                  },
                  {
                    menuValue: "Remix Icons",
                    route: routes.remix,
                    page:'icon-remix',
                    hasSubRoute: false,
                    showSubRoute: false
                  },
                  {
                    menuValue: "Feather Icons",
                    route: routes.feather,
                    page:'icon-feather',
                    hasSubRoute: false,
                    showSubRoute: false
                  },
                  {
                    menuValue: "Ionic Icons",
                    route: routes.ionic,
                    page:'icon-ionic',
                    hasSubRoute: false,
                    showSubRoute: false
                  },
                  {
                    menuValue: "Material Icons",
                    route:routes.material,
                    page:'icon-material',
                    hasSubRoute: false,
                    showSubRoute: false
                  },
                  {
                    menuValue: "Pe7 Icons",
                    route: routes.pe7,
                    page:'icon-pe7',
                    hasSubRoute: false,
                    showSubRoute: false
                  },
                  {
                    menuValue: "Simpleline Icons",
                    route: routes.simpleLine,
                    page:'icon-simpleline',
                    hasSubRoute: false,
                    showSubRoute: false
                  },
                  {
                    menuValue: "Themify Icons",
                    route: routes.themify,
                    page:'icon-themify',
                    hasSubRoute: false,
                    showSubRoute: false
                  },
                  {
                    menuValue: "Weather Icons",
                    route: routes.weather,
                    page:'icon-weather',
                    hasSubRoute: false,
                    showSubRoute: false
                  },
                  {
                    menuValue: "TypIcon Icons",
                    route: routes.typicon,
                    page:'icon-typicon',
                    hasSubRoute: false,
                    showSubRoute: false
                  },
                  {
                    menuValue: "Flag Icons",
                    route: routes.flag,
                    page:'icon-flag',
                    hasSubRoute: false,
                    showSubRoute: false
                  }
                ]
            },
            {
                menuValue: "Maps",
                icon: "map-2",
                hasSubRoute: true,
                base:'maps',
                showSubRoute: false,
                subMenus: [
                    {
                        menuValue: "Leaflet",
                        route: routes.leaflet,
                        page:'leaflets',
                        hasSubRoute: false,
                        showSubRoute: false
                    }
                ]
            }
        ]
    }
];
}
