export default [
    {
        path: "/",
        name: "live-preview",
        meta: { title: "Live Preview" },
        component: () => import("../views/live-preview/pages/index.vue"),
    },
    {
        path: "/landing",
        name: "landing",
        meta: { title: "Landing Preview" },
        component: () => import("../views/live-preview/pages/landing.vue"),
    },
    {
        path: "/layout/horizontal",
        name: "Horizontal Layout",
        meta: { title: "Horizontal Layout" },
        component: () => import("../layout/horizontal.vue"),
    },
    {
        path: "/layout/compact",
        name: "Compact Layout",
        meta: { title: "Compact Layout" },
        component: () => import("../layout/compact.vue"),
    },
    {
        path: "/layout/layout-2",
        name: "layout-2 Layout",
        meta: { title: "Layout-2 Layout" },
        component: () => import("../layout/layout-2.vue"),
    },
    {
        path: "/layout/tab",
        name: "Tab Layout",
        meta: { title: "Tab Layout" },
        component: () => import("../layout/tab.vue"),
    },
    {
        path: "/dashboard",
        name: "dashboard",
        meta: { title: "Home" },
        component: () => import("../views/live-preview/dashboard.vue"),
    },

    {
        path: "/sample-page",
        name: "sample-page",
        meta: { title: "sampl Page" },
        component: () => import("../views/live-preview/other/sample-page.vue"),
    },
    {
        path: "/setting",
        name: "setting",
        meta: { title: "Setting" },
        component: () => import("../views/live-preview/ui-kit/setting.vue"),
    },
    {
        path: "/plans",
        name: "plans",
        meta: { title: "Plans" },
        component: () => import("../views/live-preview/ui-kit/plans.vue"),
    },
    {
        path: "/login-modal",
        name: "login modal",
        meta: { title: "Login Modal" },
        component: () => import("../views/live-preview/ui-kit/login-modal.vue"),
    },
    {
        path: "/search-page",
        name: "search page",
        meta: { title: "Search Page" },
        component: () => import("../views/live-preview/ui-kit/search-page.vue"),
    },
    {
        path: "/affiliate-dashboard",
        name: "affiliate dashboard",
        meta: { title: "Affiliate Dashboard" },
        component: () => import("../views/live-preview/ui-kit/affiliate-dashboard.vue"),
    },
    {
        path: "/gallery-1",
        name: "gallery-1",
        meta: { title: "Gallery" },
        component: () => import("../views/live-preview/ui-kit/gallery.vue"),
    },
    {
        path: "/team",
        name: "team",
        meta: { title: "Team" },
        component: () => import("../views/live-preview/ui-kit/team.vue"),
    },
    {
        path: "/loading",
        name: "loading",
        meta: { title: "Loading" },
        component: () => import("../views/live-preview/ui-kit/loading.vue"),
    },
    {
        path: "/contact-search",
        name: "contact-search",
        meta: { title: "Contact Search" },
        component: () => import("../views/live-preview/ui-kit/contact-search.vue"),
    },
    {
        path: "/contact-us",
        name: "contact-us",
        meta: { title: "Contact Us" },
        component: () => import("../views/live-preview/ui-kit/contact-us.vue"),
    },

    // Widget
    {
        path: "/statistics",
        name: "statistics",
        meta: { title: "Statistics Widget" },
        component: () => import("../views/live-preview/widget/statistics.vue"),
    },
    {
        path: "/user",
        name: "user",
        meta: { title: "User Widget" },
        component: () => import("../views/live-preview/widget/user.vue"),
    },
    {
        path: "/data",
        name: "data",
        meta: { title: "Data Widget" },
        component: () => import("../views/live-preview/widget/data.vue"),
    },
    {
        path: "/chart",
        name: "chart",
        meta: { title: "Chart Widget" },
        component: () => import("../views/live-preview/widget/chart.vue"),
    },
    {
        path: "/animation",
        name: "animation",
        meta: { title: "Animation" },
        component: () => import("../views/live-preview/elements/animation.vue"),
    },
    // Components
    {
        path: "/feather",
        name: "feather",
        meta: { title: "Feather icon" },
        component: () => import("../views/live-preview/icon/feather.vue"),
    },
    {
        path: "/tabler",
        name: "tabler",
        meta: { title: "Tabler icon" },
        component: () => import("../views/live-preview/icon/tabler.vue"),
    },
    {
        path: "/phosphor",
        name: "phosphor",
        meta: { title: "Phosphor" },
        component: () => import("../views/live-preview/icon/phosphor.vue"),
    },

    // Forms
    {
        path: "/form-element",
        name: "form-element",
        meta: { title: "Form Element" },
        component: () => import("../views/live-preview/form/element/basic.vue"),
    },
    {
        path: "/floating",
        name: "floating",
        meta: { title: "Floating" },
        component: () => import("../views/live-preview/form/element/floating.vue"),
    },
    {
        path: "/form-option",
        name: "form-option",
        meta: { title: "Form Option" },
        component: () => import("../views/live-preview/form/element/options.vue"),
    },
    {
        path: "/input-group",
        name: "input-group",
        meta: { title: "Input Group" },
        component: () => import("../views/live-preview/form/element/input-group.vue"),
    },
    {
        path: "/checkbox",
        name: "checkbox",
        meta: { title: "Checkbox" },
        component: () => import("../views/live-preview/form/element/checkbox.vue"),
    },
    {
        path: "/radio",
        name: "radio",
        meta: { title: "Radio" },
        component: () => import("../views/live-preview/form/element/radio.vue"),
    },
    {
        path: "/switch",
        name: "switch",
        meta: { title: "Switch" },
        component: () => import("../views/live-preview/form/element/switch.vue"),
    },
    {
        path: "/mega-option",
        name: "mega-option",
        meta: { title: "Mega Option" },
        component: () => import("../views/live-preview/form/element/mega-option.vue"),
    },
    {
        path: "/layouts",
        name: "layouts",
        meta: { title: "Layouts" },
        component: () => import("../views/live-preview/form/layout/layout.vue"),
    },
    {
        path: "/multicolumn",
        name: "multicolumn",
        meta: { title: "Multicolumn" },
        component: () => import("../views/live-preview/form/layout/multicolumn.vue"),
    },
    {
        path: "/actionbars",
        name: "actionbars",
        meta: { title: "Actionbars" },
        component: () => import("../views/live-preview/form/layout/actionbars.vue"),
    },
    {
        path: "/sticky-action",
        name: "sticky-action",
        meta: { title: "Sticky Action" },
        component: () => import("../views/live-preview/form/layout/sticky-action.vue"),
    },
    {
        path: "/dropzone",
        name: "dropzone",
        meta: { title: "Dropzone" },
        component: () => import("../views/live-preview/form/upload/dropzone.vue"),
    },
    {
        path: "/form2_wizard",
        name: "Wizard",
        meta: { title: "Wizard" },
        component: () => import("../views/live-preview/form/wizard/wizard.vue"),
    },

    {
        path: "/validation",
        name: "validation",
        meta: { title: "Form Validation" },
        component: () => import("../views/live-preview/form/validation.vue"),
    },
    {
        path: "/image-croper",
        name: "image-croper",
        meta: { title: "Image Cropper" },
        component: () => import("../views/live-preview/form/image-croper.vue"),
    },

    // Tables
    {
        path: "/basic-table",
        name: "basic-table",
        meta: { title: "Basic Table" },
        component: () => import("../views/live-preview/table/bootstrap/basic.vue"),
    },
    {
        path: "/sizing-table",
        name: "sizing-table",
        meta: { title: "Sizing Table" },
        component: () => import("../views/live-preview/table/bootstrap/sizing.vue"),
    },
    {
        path: "/border-table",
        name: "border-table",
        meta: { title: "Border Table" },
        component: () => import("../views/live-preview/table/bootstrap/border.vue"),
    },
    {
        path: "/styling-table",
        name: "styling-table",
        meta: { title: "Styling Table" },
        component: () => import("../views/live-preview/table/bootstrap/styling.vue"),
    },
    {
        path: "/basic",
        name: "basic",
        meta: { title: "Basic Initialization" },
        component: () => import("../views/live-preview/table/vanila/basic.vue"),
    },
    {
        path: "/dynamic-import",
        name: "dynamic import",
        meta: { title: "Dynamic Import" },
        component: () => import("../views/live-preview/table/vanila/dynamic.vue"),
    },
    {
        path: "/column-cells",
        name: "column cells",
        meta: { title: "Column Cells" },
        component: () => import("../views/live-preview/table/vanila/column.vue"),
    },
    {
        path: "/datetime-sorting",
        name: "datetime sorting",
        meta: { title: "Datetime Sorting" },
        component: () => import("../views/live-preview/table/vanila/datetime.vue"),
    },
    {
        path: "/method",
        name: "method",
        meta: { title: "Method" },
        component: () => import("../views/live-preview/table/vanila/method.vue"),
    },
    {
        path: "/row",
        name: "row",
        meta: { title: "Add Row" },
        component: () => import("../views/live-preview/table/vanila/row.vue"),
    },
    {
        path: "/api",
        name: "api",
        meta: { title: "Fetch APi" },
        component: () => import("../views/live-preview/table/vanila/api.vue"),
    },
    {
        path: "/filter",
        name: "filter",
        meta: { title: "Filter" },
        component: () => import("../views/live-preview/table/vanila/filter.vue"),
    },
    {
        path: "/export",
        name: "export",
        meta: { title: "Export" },
        component: () => import("../views/live-preview/table/vanila/export.vue"),
    },

    // Charts & maps
    {
        path: "/apexchart",
        name: "apexchart",
        meta: { title: "Apex Chart" },
        component: () => import("../views/live-preview/charts&map/apexchart/apexchart.vue"),
    },
    {
        path: "/maps",
        name: "maps",
        meta: { title: "Maps" },
        component: () => import("../views/live-preview/charts&map/map.vue"),
    },

    // Apllication
    {
        path: "/calendar",
        name: "calendar",
        meta: { title: "Calendar" },
        component: () => import("../views/live-preview/application/calendar/index.vue"),
    },
    {
        path: "/chat",
        name: "chat",
        meta: { title: "Chat" },
        component: () => import("../views/live-preview/application/chat.vue"),
    },
    {
        path: "/gallery-grid",
        name: "gallery-grid",
        meta: { title: "gallery" },
        component: () => import("../views/live-preview/application/gallery-grid.vue"),
    },
    {
        path: "/gallery-masonry",
        name: "gallery-masonry",
        meta: { title: "gallery-masonry" },
        component: () => import("../views/live-preview/application/gallery-masonry.vue"),
    },

    // E-commerce
    {
        path: "/product",
        name: "product",
        meta: { title: "Product" },
        component: () => import("../views/live-preview/application/e-commerce/product.vue"),
    },
    {
        path: "/add-product",
        name: "add-product",
        meta: { title: "Add New Product" },
        component: () => import("../views/live-preview/application/e-commerce/add-product.vue"),
    },
    {
        path: "/product-details",
        name: "product-details",
        meta: { title: "product Details" },
        component: () => import("../views/live-preview/application/e-commerce/product-details.vue"),
    },
    {
        path: "/product-list",
        name: "product-list",
        meta: { title: "Product List" },
        component: () => import("../views/live-preview/application/e-commerce/product-list.vue"),
    },
    {
        path: "/checkout",
        name: "checkout",
        meta: { title: "Checkout" },
        component: () => import("../views/live-preview/application/e-commerce/checkout.vue"),
    },
    {
        path: "/mail",
        name: "mail",
        meta: { title: "Mail" },
        component: () => import("../views/live-preview/application/mail.vue"),
    },
    {
        path: "/plans",
        name: "plans",
        meta: { title: "plans" },
        component: () => import("../views/live-preview/application/plans.vue"),
    },

    // Users
    {
        path: "/account-profile",
        name: "account-profile",
        meta: { title: "Account Profile" },
        component: () => import("../views/live-preview/application/users/account-profile.vue"),
    },
    {
        path: "/social-media",
        name: "social-media",
        meta: { title: "Social Media" },
        component: () => import("../views/live-preview/application/users/social-media.vue"),
    },
    {
        path: "/user-card",
        name: "user-card",
        meta: { title: "User Card" },
        component: () => import("../views/live-preview/application/users/user-card.vue"),
    },
    {
        path: "/user-list",
        name: "user-list",
        meta: { title: "User List" },
        component: () => import("../views/live-preview/application/users/user-list.vue"),
    },

    // Invoice
    {
        path: "/invoice-list",
        name: "invoice-list",
        meta: { title: "Invoice List" },
        component: () => import("../views/live-preview/application/invoice/invoice-list.vue"),
    },
    {
        path: "/create",
        name: "create",
        meta: { title: "Create" },
        component: () => import("../views/live-preview/application/invoice/create.vue"),
    },
    {
        path: "/preview",
        name: "preview",
        meta: { title: "Preview" },
        component: () => import("../views/live-preview/application/invoice/preview.vue"),
    },

    // Auth 1
    {
        path: "/login-v1",
        name: "login-v1",
        meta: { title: "Login" },
        component: () => import("../views/live-preview/pages/auth1/login.vue"),
    },
    {
        path: "/register-v1",
        name: "register-v1",
        meta: { title: "Register" },
        component: () => import("../views/live-preview/pages/auth1/register.vue"),
    },
    {
        path: "/forgot-password-v1",
        name: "forgot-password-v1",
        meta: { title: "Forgot Password" },
        component: () => import("../views/live-preview/pages/auth1/forgot-password.vue"),
    },
    {
        path: "/reset-password-v1",
        name: "reset-password-v1",
        meta: { title: "Reset Password" },
        component: () => import("../views/live-preview/pages/auth1/reset-password.vue"),
    },
    {
        path: "/code-verification-v1",
        name: "code-verification-v1",
        meta: { title: "code-verification" },
        component: () => import("../views/live-preview/pages/auth1/code-verification.vue"),
    },

    // Auth 2
    {
        path: "/login-v2",
        name: "login-v2",
        meta: { title: "Login" },
        component: () => import("../views/live-preview/pages/auth2/login.vue"),
    },
    {
        path: "/register-v2",
        name: "register-v2",
        meta: { title: "Register" },
        component: () => import("../views/live-preview/pages/auth2/register.vue"),
    },
    {
        path: "/forgot-password-v2",
        name: "forgot-password-v2",
        meta: { title: "Forgot Password" },
        component: () => import("../views/live-preview/pages/auth2/forgot-password.vue"),
    },
    {
        path: "/reset-password-v2",
        name: "reset-password-v2",
        meta: { title: "Reset Password" },
        component: () => import("../views/live-preview/pages/auth2/reset-password.vue"),
    },
    {
        path: "/code-verification-v2",
        name: "code-verification-v2",
        meta: { title: "code-verification" },
        component: () => import("../views/live-preview/pages/auth2/code-verification.vue"),
    },

    // maintanance
    {
        path: "/error-404",
        name: "error-404",
        meta: { title: "404" },
        component: () => import("../views/live-preview/pages/maintenance/error-404.vue"),
    },
    {
        path: "/connection-lost",
        name: "connection-lost",
        meta: { title: "Connection Lost" },
        component: () => import("../views/live-preview/pages/maintenance/connection-lost.vue"),
    },
    {
        path: "/under-construction",
        name: "under-construction",
        meta: { title: "Under Construction" },
        component: () => import("../views/live-preview/pages/maintenance/under-construction.vue"),
    },
    {
        path: "/comming-soon",
        name: "comming-soon",
        meta: { title: "Comming Soon" },
        component: () => import("../views/live-preview/pages/maintenance/comming-soon.vue"),
    },

    // Components
    {
        path: "/components/",
        name: "alert",
        meta: { title: "Alert" },
        component: () => import("../views/components/basic/alert.vue"),
    },
    {
        path: "/components/alert",
        name: "alerts",
        meta: { title: "Alerts" },
        component: () => import("../views/components/basic/alert.vue"),
    },
    {
        path: "/components/button",
        name: "button",
        meta: { title: "Button" },
        component: () => import("../views/components/basic/button.vue"),
    },
    {
        path: "/components/badges",
        name: "badges",
        meta: { title: "Badges" },
        component: () => import("../views/components/basic/badges.vue"),
    },
    {
        path: "/components/breadcrumb",
        name: "breadcrumb",
        meta: { title: "Breadcrumb" },
        component: () => import("../views/components/basic/breadcrumb.vue"),
    },
    {
        path: "/components/cards",
        name: "cards",
        meta: { title: "Cards" },
        component: () => import("../views/components/basic/cards.vue"),
    },
    {
        path: "/components/color",
        name: "color",
        meta: { title: "Color" },
        component: () => import("../views/components/basic/color.vue"),
    },
    {
        path: "/components/collapse",
        name: "collapse",
        meta: { title: "Collapse" },
        component: () => import("../views/components/basic/collapse.vue"),
    },
    {
        path: "/components/carousel",
        name: "carousel",
        meta: { title: "Carousel" },
        component: () => import("../views/components/basic/carousel.vue"),
    },
    {
        path: "/components/dropdown",
        name: "dropdown",
        meta: { title: "Dropdown" },
        component: () => import("../views/components/basic/dropdown.vue"),
    }, {
        path: "/components/offcanvas",
        name: "offcanvas",
        meta: { title: "Offcanvas" },
        component: () => import("../views/components/basic/offcanvas.vue"),
    },
    {
        path: "/components/pagination",
        name: "pagination",
        meta: { title: "Pagination" },
        component: () => import("../views/components/basic/pagination.vue"),
    },
    {
        path: "/components/progress",
        name: "progress",
        meta: { title: "Progress" },
        component: () => import("../views/components/basic/progress.vue"),
    },
    {
        path: "/components/list-group",
        name: "list-group",
        meta: { title: "List-group" },
        component: () => import("../views/components/basic/list-group.vue"),
    },
    {
        path: "/components/b-modal",
        name: "b-modal",
        meta: { title: "Modal" },
        component: () => import("../views/components/basic/modal.vue"),
    },
    {
        path: "/components/spinner",
        name: "spinner",
        meta: { title: "Spinner" },
        component: () => import("../views/components/basic/spinner.vue"),
    },
    {
        path: "/components/tabs-pills",
        name: "tabs&pills",
        meta: { title: "Tabs&pills" },
        component: () => import("../views/components/basic/tabs-pills.vue"),
    },
    {
        path: "/components/tooltip",
        name: "tooltip",
        meta: { title: "Tooltip" },
        component: () => import("../views/components/basic/tooltip.vue"),
    },
    {
        path: "/components/toasts",
        name: "toasts",
        meta: { title: "Toasts" },
        component: () => import("../views/components/basic/toasts.vue"),
    },
    {
        path: "/components/typograbhy",
        name: "typograbhy",
        meta: { title: "Typograbhy" },
        component: () => import("../views/components/basic/typograbhy.vue"),
    },
    {
        path: "/components/other",
        name: "other",
        meta: { title: "Other" },
        component: () => import("../views/components/basic/other.vue"),
    },

    // Advance Components
    {
        path: "/components/sweet-alert",
        name: "sweet-alert",
        meta: { title: "Sweet Alert" },
        component: () => import("../views/components/advance/sweet-alert.vue"),
    },
    {
        path: "/components/datepicker",
        name: "datepicker",
        meta: { title: "Datepicker" },
        component: () => import("../views/components/advance/datepicker.vue"),
    },
    {
        path: "/components/lightbox",
        name: "lightbox",
        meta: { title: "Lightbox" },
        component: () => import("../views/components/advance/lightbox.vue"),
    },
    {
        path: "/components/a-modal",
        name: "a-modal",
        meta: { title: "Modal" },
        component: () => import("../views/components/advance/modal.vue"),
    },
    {
        path: "/components/rangeslider",
        name: "rangeslider",
        meta: { title: "Rangeslider" },
        component: () => import("../views/components/advance/rangeslider.vue"),
    },
    {
        path: "/components/slider",
        name: "slider",
        meta: { title: "Slider" },
        component: () => import("../views/components/advance/slider.vue"),
    },
    {
        path: "/components/highlighter",
        name: "highlighter",
        meta: { title: "Highlighter" },
        component: () => import("../views/components/advance/highlighter.vue"),
    },
    {
        path: "/components/tour",
        name: "tour",
        meta: { title: "Tour" },
        component: () => import("../views/components/advance/tour.vue"),
    },
    {
        path: "/components/tree-view",
        name: "tree-view",
        meta: { title: "Tree view" },
        component: () => import("../views/components/advance/tree-view.vue"),
    },
]