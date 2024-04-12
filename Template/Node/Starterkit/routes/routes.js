const express = require('express');
const route = express.Router();
var bodyParser = require('body-parser');
var urlencodeParser = bodyParser.urlencoded({ extended: false });

const caption_show = 'true'; // [ false , true ]
const dark_navbar = 'false'; // [ false , true ]
const preset_theme = 'preset-1'; // [ preset-1 to preset-10 ]
const dark_layout = 'false'; // [ false , true , default ]
const rtl_layout = 'false'; // [ false , true ]
const box_container = 'false'; // [ false , true ]
const version = 'v1.0';

if (rtl_layout == "true") {
    var rtltemp = "rtl"
} else {
    var rtltemp = "ltr"
}

if (dark_layout == 'true') {
    var darklayouttemp = "dark"
} else {
    var darklayouttemp = "light"
}
if (dark_navbar == 'true') {
    var darknavbartemp = "dark"
} else {
    var darknavbartemp = "light"
}

const layoutsetup = {
    pc_caption_show: caption_show,
    pc_preset_theme: preset_theme,
    pc_dark_navbar: dark_navbar,
    pc_dark_layout: dark_layout,
    pc_rtl_layout: rtl_layout,
    pc_box_container: box_container,
    pc_theme_version: version,
    bodySetup: 'data-pc-preset="' + preset_theme + '" data-pc-sidebar-theme="' + darknavbartemp + '" data-pc-sidebar-caption="' + caption_show + '" data-pc-direction="' + rtltemp + '" data-pc-theme="' + darklayouttemp + '"',
};

// Contorller

const AuthController = require("../controllers/AuthController");

module.exports = function (route) {
    route.use((req, res, next) => {
        var uemail = req.session.useremail;
        const allowUrls = ["/login", "/auth-validate", "/register", "/signup", "/forgotpassword", "/sendforgotpasswordlink", "/resetpassword", "/error", "/changepassword"];
        if (allowUrls.indexOf(req.path) !== -1) {
            if (uemail != null && uemail != undefined) {
                return res.redirect('/');
            }

        } else if (!uemail) {
            return res.redirect('/login');
        }
        next();
    })


    // Index pages
    route.get("/", (req, res) => {
        res.render("index", { layout: 'layout/layout-landing', title: 'index',  ...layoutsetup });
    });
    route.get("/index", (req, res) => {
        res.render("dashboard/index", {  title: 'index',  ...layoutsetup });
    });
    route.get("/dashboard/index", (req, res) => {
        res.render("dashboard/index", { title: 'Dashboard', ...layoutsetup });
    });
    route.get("/dashboard/affiliate-dashboard", (req, res) => {
        res.render("dashboard/affiliate-dashboard", { title: 'Affiliate Dashboard', ...layoutsetup });
    });
   
    // Widget

    route.get("/widget/w_statistics", (req, res) => {
        res.render("widget/w_statistics", { title: 'Statistics Widgets', ...layoutsetup });
    });
    route.get("/widget/w_user", (req, res) => {
        res.render("widget/w_user", { title: 'User Widgets', ...layoutsetup });
    });
    route.get("/widget/w_data", (req, res) => {
        res.render("widget/w_data", { title: 'Data Widget', ...layoutsetup });
    });
    route.get("/widget/w_chart", (req, res) => {
        res.render("widget/w_chart", { title: 'Chart Widget', ...layoutsetup });
    });

    // elements

    route.get("/elements/bc_alert", (req, res) => {
        res.render("elements/bc_alert", { title: 'Alert', layout: 'layout/layout-component', ...layoutsetup });
    });
    route.get("/elements/bc_button", (req, res) => {
        res.render("elements/bc_button", { title: 'Button', layout: 'layout/layout-component', ...layoutsetup });
    });
    route.get("/elements/bc_badges", (req, res) => {
        res.render("elements/bc_badges", { title: 'Badges', layout: 'layout/layout-component', ...layoutsetup });
    });
    route.get("/elements/bc_breadcrumb", (req, res) => {
        res.render("elements/bc_breadcrumb", { title: 'Breadcrumb', layout: 'layout/layout-component', ...layoutsetup });
    });
    route.get("/elements/bc_card", (req, res) => {
        res.render("elements/bc_card", { title: 'Card', layout: 'layout/layout-component', ...layoutsetup });
    });
    route.get("/elements/bc_color", (req, res) => {
        res.render("elements/bc_color", { title: 'Color', layout: 'layout/layout-component', ...layoutsetup });
    });
    route.get("/elements/bc_collapse", (req, res) => {
        res.render("elements/bc_collapse", { title: 'Collapse', layout: 'layout/layout-component', ...layoutsetup });
    });
    route.get("/elements/bc_carousel", (req, res) => {
        res.render("elements/bc_carousel", { title: 'Carousel', layout: 'layout/layout-component', ...layoutsetup });
    });
    route.get("/elements/bc_dropdowns", (req, res) => {
        res.render("elements/bc_dropdowns", { title: 'Dropdown', layout: 'layout/layout-component', ...layoutsetup });
    });
    route.get("/elements/bc_offcanvas", (req, res) => {
        res.render("elements/bc_offcanvas", { title: 'Offcanvas', layout: 'layout/layout-component', ...layoutsetup });
    });
    route.get("/elements/bc_pagination", (req, res) => {
        res.render("elements/bc_pagination", { title: 'Pagination', layout: 'layout/layout-component', ...layoutsetup });
    });
    route.get("/elements/bc_progress", (req, res) => {
        res.render("elements/bc_progress", { title: 'Progress', layout: 'layout/layout-component', ...layoutsetup });
    });
    route.get("/elements/bc_list-group", (req, res) => {
        res.render("elements/bc_list-group", { title: 'List Group', layout: 'layout/layout-component', ...layoutsetup });
    });
    route.get("/elements/bc_modal", (req, res) => {
        res.render("elements/bc_modal", { title: 'Modal', layout: 'layout/layout-component', ...layoutsetup });
    });
    route.get("/elements/bc_spinner", (req, res) => {
        res.render("elements/bc_spinner", { title: 'Spinner', layout: 'layout/layout-component', ...layoutsetup });
    });
    route.get("/elements/bc_tabs", (req, res) => {
        res.render("elements/bc_tabs", { title: 'Tabs', layout: 'layout/layout-component', ...layoutsetup });
    });
    route.get("/elements/bc_tooltip-popover", (req, res) => {
        res.render("elements/bc_tooltip-popover", { title: 'Tabs', layout: 'layout/layout-component', ...layoutsetup });
    });
    route.get("/elements/bc_toasts", (req, res) => {
        res.render("elements/bc_toasts", { title: 'Tost', layout: 'layout/layout-component', ...layoutsetup });
    });
    route.get("/elements/bc_typography", (req, res) => {
        res.render("elements/bc_typography", { title: 'Typography', layout: 'layout/layout-component', ...layoutsetup });
    });
    route.get("/elements/bc_extra", (req, res) => {
        res.render("elements/bc_extra", { title: 'Utilities', layout: 'layout/layout-component', ...layoutsetup });
    });
    
    // advance ui
    
    route.get("/elements/ac_alert", (req, res) => {
        res.render("elements/ac_alert", { title: 'Sweet alert', layout: 'layout/layout-component', ...layoutsetup });
    });
    route.get("/elements/ac_datepicker-component", (req, res) => {
        res.render("elements/ac_datepicker-component", { title: 'DatePicker', layout: 'layout/layout-component', ...layoutsetup });
    });
    route.get("/elements/ac_lightbox", (req, res) => {
        res.render("elements/ac_lightbox", { title: 'LightBox', layout: 'layout/layout-component', ...layoutsetup });
    });
    route.get("/elements/ac_modal", (req, res) => {
        res.render("elements/ac_modal", { title: 'Advance Modal', layout: 'layout/layout-component', ...layoutsetup });
    });
    route.get("/elements/ac_notification", (req, res) => {
        res.render("elements/ac_notification", { title: 'Notification', layout: 'layout/layout-component', ...layoutsetup });
    });
    route.get("/elements/ac_rangeslider", (req, res) => {
        res.render("elements/ac_rangeslider", { title: 'Range Slider', layout: 'layout/layout-component', ...layoutsetup });
    });
    route.get("/elements/ac_slider", (req, res) => {
        res.render("elements/ac_slider", { title: 'Slider', layout: 'layout/layout-component', ...layoutsetup });
    });
    route.get("/elements/ac_syntax_highlighter", (req, res) => {
        res.render("elements/ac_syntax_highlighter", { title: 'Syntax Highlighter', layout: 'layout/layout-component', ...layoutsetup });
    });
    route.get("/elements/ac_tour", (req, res) => {
        res.render("elements/ac_tour", { title: 'Tour', layout: 'layout/layout-component', ...layoutsetup });
    });
    route.get("/elements/ac_treeview", (req, res) => {
        res.render("elements/ac_treeview", { title: 'Treeview', layout: 'layout/layout-component', ...layoutsetup });
    });
    
//
    route.get("/elements/animation", (req, res) => {
        res.render("elements/animation", { title: 'Animation', ...layoutsetup });
    });
    // icon routes
    route.get("/elements/icon-feather", (req, res) => {
        res.render("elements/icon-feather", { title: 'Feather Icon Pack', ...layoutsetup });
    });
    route.get("/elements/icon-fontawesome", (req, res) => {
        res.render("elements/icon-fontawesome", { title: 'Font Awesome Icon Pack', ...layoutsetup });
    });
    route.get("/elements/icon-material", (req, res) => {
        res.render("elements/icon-material", { title: 'Material Icon Pack', ...layoutsetup });
    });
    route.get("/elements/icon-tabler", (req, res) => {
        res.render("elements/icon-tabler", { title: 'Tabler Icon set', ...layoutsetup });
    });
    route.get("/elements/icon-phosphor", (req, res) => {
        res.render("elements/icon-phosphor", { title: 'Phosphor Icon set', ...layoutsetup });
    });
    route.get("/elements/icon-custom", (req, res) => {
        res.render("elements/icon-custom", { title: 'Custom Icon set', ...layoutsetup });
    });

    // form routes
    route.get("/forms/form_elements", (req, res) => {
        res.render("forms/form_elements", { title: 'Form Elements', ...layoutsetup });
    });
    route.get("/forms/form_floating", (req, res) => {
        res.render("forms/form_floating", { title: 'Form Floating', ...layoutsetup });
    });
    route.get("/forms/form2_basic", (req, res) => {
        res.render("forms/form2_basic", { title: 'Form Option', ...layoutsetup });
    });
    route.get("/forms/form2_input_group", (req, res) => {
        res.render("forms/form2_input_group", { title: 'Form Input Group', ...layoutsetup });
    });
    route.get("/forms/form2_checkbox", (req, res) => {
        res.render("forms/form2_checkbox", { title: 'Form Checkbox', ...layoutsetup });
    });
    route.get("/forms/form2_radio", (req, res) => {
        res.render("forms/form2_radio", { title: 'Radio', ...layoutsetup });
    });
    route.get("/forms/form2_switch", (req, res) => {
        res.render("forms/form2_switch", { title: 'Switch', ...layoutsetup });
    });
    route.get("/forms/form2_megaoption", (req, res) => {
        res.render("forms/form2_megaoption", { title: 'Mega Option', ...layoutsetup });
    });
    route.get("/forms/form2_datepicker", (req, res) => {
        res.render("forms/form2_datepicker", { title: 'Date Picker', ...layoutsetup });
    });
    route.get("/forms/form2_daterangepicker", (req, res) => {
        res.render("forms/form2_daterangepicker", { title: 'Date Range Picker', ...layoutsetup });
    });
    route.get("/forms/form2_timepicker", (req, res) => {
        res.render("forms/form2_timepicker", { title: 'TimePicker', ...layoutsetup });
    });
    route.get("/forms/form2_choices", (req, res) => {
        res.render("forms/form2_choices", { title: 'Choices', ...layoutsetup });
    });
    route.get("/forms/form2_rating", (req, res) => {
        res.render("forms/form2_rating", { title: 'Rating', ...layoutsetup });
    });
    route.get("/forms/form2_recaptcha", (req, res) => {
        res.render("forms/form2_recaptcha", { title: 'Recaptcha', ...layoutsetup });
    });
    route.get("/forms/form2_inputmask", (req, res) => {
        res.render("forms/form2_inputmask", { title: 'Inputmask', ...layoutsetup });
    });
    route.get("/forms/form2_clipboard", (req, res) => {
        res.render("forms/form2_clipboard", { title: 'Clipboard', ...layoutsetup });
    });
    route.get("/forms/form2_clipboard", (req, res) => {
        res.render("forms/form2_clipboard", { title: 'Clipboard', ...layoutsetup });
    });
    route.get("/forms/form2_nouislider", (req, res) => {
        res.render("forms/form2_nouislider", { title: 'NoUiSlider', ...layoutsetup });
    });
    route.get("/forms/form2_switchjs", (req, res) => {
        res.render("forms/form2_switchjs", { title: 'NoUiSlider', ...layoutsetup });
    });
    route.get("/forms/form2_typeahead", (req, res) => {
        res.render("forms/form2_typeahead", { title: 'TypeAhead', ...layoutsetup });
    });
    route.get("/forms/form2_tinymce", (req, res) => {
        res.render("forms/form2_tinymce", { title: 'TinyMCE', ...layoutsetup });
    });
    route.get("/forms/form2_quill", (req, res) => {
        res.render("forms/form2_quill", { title: 'Quill Editor', ...layoutsetup });
    });
    route.get("/forms/editor-classic", (req, res) => {
        res.render("forms/editor-classic", { title: 'Classic Editor', ...layoutsetup });
    });
    route.get("/forms/editor-document", (req, res) => {
        res.render("forms/editor-document", { title: 'Editor Document', ...layoutsetup });
    });
    route.get("/forms/editor-inline", (req, res) => {
        res.render("forms/editor-inline", { title: 'Editor Inline', ...layoutsetup });
    });
    route.get("/forms/editor-balloon", (req, res) => {
        res.render("forms/editor-balloon", { title: 'Balloon CkEditor', ...layoutsetup });
    });
    route.get("/forms/form2_markdown", (req, res) => {
        res.render("forms/form2_markdown", { title: 'Balloon CkEditor', ...layoutsetup });
    });
    route.get("/forms/form2_lay-default", (req, res) => {
        res.render("forms/form2_lay-default", { title: 'Simple Form Layout', ...layoutsetup });
    });
    route.get("/forms/form2_lay-multicolumn", (req, res) => {
        res.render("forms/form2_lay-multicolumn", { title: 'Multi Form Layouts', ...layoutsetup });
    });
    route.get("/forms/form2_lay-actionbars", (req, res) => {
        res.render("forms/form2_lay-actionbars", { title: 'Action Bars', ...layoutsetup });
    });
    route.get("/forms/form2_lay-stickyactionbars", (req, res) => {
        res.render("forms/form2_lay-stickyactionbars", { title: 'Sticky Action Bar', ...layoutsetup });
    });
    route.get("/forms/file-upload", (req, res) => {
        res.render("forms/file-upload", { title: 'File Upload', ...layoutsetup });
    });
    route.get("/forms/form2_flu-uppy", (req, res) => {
        res.render("forms/form2_flu-uppy", { title: 'Uppy File Upload', ...layoutsetup });
    });
    route.get("/forms/form2_wizard", (req, res) => {
        res.render("forms/form2_wizard", { title: 'Wizard', ...layoutsetup });
    });
    route.get("/forms/form-validation", (req, res) => {
        res.render("forms/form-validation", { title: 'Form Validation', ...layoutsetup });
    });
    route.get("/forms/image_crop", (req, res) => {
        res.render("forms/image_crop", { title: 'Image Cropper', ...layoutsetup });
    });
    route.get("/table/tbl_bootstrap", (req, res) => {
        res.render("table/tbl_bootstrap", { title: 'Bootstrap Basic Table', ...layoutsetup });
    });
    route.get("/table/tbl_sizing", (req, res) => {
        res.render("table/tbl_sizing", { title: 'Sizing', ...layoutsetup });
    });
    route.get("/table/tbl_border", (req, res) => {
        res.render("table/tbl_border", { title: 'Border Bootstrap Table', ...layoutsetup });
    });
    route.get("/table/tbl_styling", (req, res) => {
        res.render("table/tbl_styling", { title: 'Styling', ...layoutsetup });
    });
    route.get("/table/tbl_dt-simple", (req, res) => {
        res.render("table/tbl_dt-simple", { title: 'Basic initialization', ...layoutsetup });
    });
    route.get("/table/tbl_dt-dynamic-import", (req, res) => {
        res.render("table/tbl_dt-dynamic-import", { title: 'Dynamic Import', ...layoutsetup });
    });
    route.get("/table/tbl_dt-render-column-cells", (req, res) => {
        res.render("table/tbl_dt-render-column-cells", { title: 'Dynamic Import', ...layoutsetup });
    });
    route.get("/table/tbl_dt-column-manipulation", (req, res) => {
        res.render("table/tbl_dt-column-manipulation", { title: 'Column Manipulation Bootstrap Table', ...layoutsetup });
    });
    route.get("/table/tbl_dt-datetime-sorting", (req, res) => {
        res.render("table/tbl_dt-datetime-sorting", { title: 'Column Manipulation Bootstrap Table', ...layoutsetup });
    });
    route.get("/table/tbl_dt-methods", (req, res) => {
        res.render("table/tbl_dt-methods", { title: 'Table Methods', ...layoutsetup });
    });
    route.get("/table/tbl_dt-add-rows", (req, res) => {
        res.render("table/tbl_dt-add-rows", { title: 'Add Rows Bootstrap Table', ...layoutsetup });
    });
    route.get("/table/tbl_dt-fetch-api", (req, res) => {
        res.render("table/tbl_dt-fetch-api", { title: 'Fetch Api', ...layoutsetup });
    });
    route.get("/table/tbl_dt-filters", (req, res) => {
        res.render("table/tbl_dt-filters", { title: 'Filters Bootstrap Table', ...layoutsetup });
    });
    route.get("/table/tbl_dt-export", (req, res) => {
        res.render("table/tbl_dt-export", { title: 'Export Bootstrap Table', ...layoutsetup });
    });
    route.get("/table/dt_advance", (req, res) => {
        res.render("table/dt_advance", { title: 'Export Bootstrap Table', ...layoutsetup });
    });
    route.get("/table/dt_styling", (req, res) => {
        res.render("table/dt_styling", { title: 'Export Bootstrap Table', ...layoutsetup });
    });
    route.get("/table/dt_api", (req, res) => {
        res.render("table/dt_api", { title: 'API Initialization', ...layoutsetup });
    });
    route.get("/table/dt_plugin", (req, res) => {
        res.render("table/dt_plugin", { title: 'Plug-ins', ...layoutsetup });
    });
    route.get("/table/dt_sources", (req, res) => {
        res.render("table/dt_sources", { title: 'Sources Data', ...layoutsetup });
    });
    route.get("/table/dt_ext_autofill", (req, res) => {
        res.render("table/dt_ext_autofill", { title: 'AutoFill', ...layoutsetup });
    });
    route.get("/table/dt_ext_basic_buttons", (req, res) => {
        res.render("table/dt_ext_basic_buttons", { title: 'Button Extension', ...layoutsetup });
    });
    route.get("/table/dt_ext_export_buttons", (req, res) => {
        res.render("table/dt_ext_export_buttons", { title: 'Export Button', ...layoutsetup });
    });
    route.get("/table/dt_ext_col_reorder", (req, res) => {
        res.render("table/dt_ext_col_reorder", { title: 'Export Button', ...layoutsetup });
    });
    route.get("/table/dt_ext_fixed_columns", (req, res) => {
        res.render("table/dt_ext_fixed_columns", { title: 'Fixed Columns', ...layoutsetup });
    });
    route.get("/table/dt_ext_fixed_header", (req, res) => {
        res.render("table/dt_ext_fixed_header", { title: 'FixedHeader', ...layoutsetup });
    });
    route.get("/table/dt_ext_key_table", (req, res) => {
        res.render("table/dt_ext_key_table", { title: 'KeyTable', ...layoutsetup });
    });
    route.get("/table/dt_ext_responsive", (req, res) => {
        res.render("table/dt_ext_responsive", { title: 'Responsive DataTable', ...layoutsetup });
    });
    route.get("/table/dt_ext_row_reorder", (req, res) => {
        res.render("table/dt_ext_row_reorder", { title: 'RowReorder', ...layoutsetup });
    });
    route.get("/table/dt_ext_scroller", (req, res) => {
        res.render("table/dt_ext_scroller", { title: 'Scroller', ...layoutsetup });
    });
    route.get("/table/dt_ext_select", (req, res) => {
        res.render("table/dt_ext_select", { title: 'Select', ...layoutsetup });
    });
    route.get("/chart/chart-apex", (req, res) => {
        res.render("chart/chart-apex", { title: 'Apex Charts', ...layoutsetup });
    });
    route.get("/chart/chart-peity", (req, res) => {
        res.render("chart/chart-peity", { title: 'Peity Charts', ...layoutsetup });
    });
    route.get("/chart/map-vector", (req, res) => {
        res.render("chart/map-vector", { title: 'Vector Map', ...layoutsetup });
    });
    route.get("/chart/map-gmap", (req, res) => {
        res.render("chart/map-gmap", { title: 'Sample Page', ...layoutsetup });
    });

//apps
    route.get("/application/calendar", (req, res) => {
        res.render("application/calendar", { title: 'Calendar', ...layoutsetup });
    });
    route.get("/application/chat", (req, res) => {
        res.render("application/chat", { title: 'Chat', ...layoutsetup });
    });
    route.get("/application/gallery-grid", (req, res) => {
        res.render("application/gallery-grid", { title: 'Gallery', ...layoutsetup });
    });
    route.get("/application/gallery-masonry", (req, res) => {
        res.render("application/gallery-masonry", { title: 'Gallery', ...layoutsetup });
    });
    route.get("/application/ecom_product", (req, res) => {
        res.render("application/ecom_product", { title: 'Products', ...layoutsetup });
    });
    route.get("/application/ecom_product-details", (req, res) => {
        res.render("application/ecom_product-details", { title: 'Products Details', ...layoutsetup });
    });
    route.get("/application/ecom_product-list", (req, res) => {
        res.render("application/ecom_product-list", { title: 'Products List', ...layoutsetup });
    });
    route.get("/application/ecom_product-add", (req, res) => {
        res.render("application/ecom_product-add", { title: 'Add New Product', ...layoutsetup });
    });
    route.get("/application/ecom_checkout", (req, res) => {
        res.render("application/ecom_checkout", { title: 'Add New Product', ...layoutsetup });
    });
    route.get("/application/mail", (req, res) => {
        res.render("application/mail", { title: 'E-Mail', ...layoutsetup });
    });
    route.get("/application/account-profile", (req, res) => {
        res.render("application/account-profile", { title: 'Account Profile 1', ...layoutsetup });
    });
    route.get("/application/social-media", (req, res) => {
        res.render("application/social-media", { title: 'Social Media', ...layoutsetup });
    });
    route.get("/application/user-card", (req, res) => {
        res.render("application/user-card", { title: 'User Card', ...layoutsetup });
    });
    route.get("/application/user-list", (req, res) => {
        res.render("application/user-list", { title: 'User List', ...layoutsetup });
    });
    route.get("/application/team", (req, res) => {
        res.render("application/team", { title: 'Team', ...layoutsetup });
    });
    route.get("/application/invoice-list", (req, res) => {
        res.render("application/invoice-list", { title: 'Invoice List', ...layoutsetup });
    });
    route.get("/application/invoice-create", (req, res) => {
        res.render("application/invoice-create", { title: 'Invoice create', ...layoutsetup });
    });
    route.get("/application/invoice-view", (req, res) => {
        res.render("application/invoice-view", { title: 'Invoice View', ...layoutsetup });
    });

    //auth
    route.get("/pages/login-v1", (req, res) => {
        res.render("pages/login-v1", { title: 'Login 1', layout: 'layout/layout-auth', ...layoutsetup });
    });
    route.get("/pages/register-v1", (req, res) => {
        res.render("pages/register-v1", { title: 'Register 1', layout: 'layout/layout-auth', ...layoutsetup });
    });
    route.get("/pages/forgot-password-v1", (req, res) => {
        res.render("pages/forgot-password-v1", { title: 'Forgot Password 1', layout: 'layout/layout-auth', ...layoutsetup });
    });
    route.get("/pages/reset-password-v1", (req, res) => {
        res.render("pages/reset-password-v1", { title: 'Reset Password ', layout: 'layout/layout-auth', ...layoutsetup });
    });
    route.get("/pages/code-verification-v1", (req, res) => {
        res.render("pages/code-verification-v1", { title: 'Code Verification', layout: 'layout/layout-auth', ...layoutsetup });
    });
    
    
    route.get("/pages/login-v2", (req, res) => {
        res.render("pages/login-v2", { title: 'Login 2', layout: 'layout/layout-auth', ...layoutsetup });
    });
    route.get("/pages/register-v2", (req, res) => {
        res.render("pages/register-v2", { title: 'Register 2', layout: 'layout/layout-auth', ...layoutsetup });
    });
    route.get("/pages/forgot-password-v2", (req, res) => {
        res.render("pages/forgot-password-v2", { title: 'Forgot Password 2', layout: 'layout/layout-auth', ...layoutsetup });
    });
    route.get("/pages/reset-password-v2", (req, res) => {
        res.render("pages/reset-password-v2", { title: 'Reset Password 2', layout: 'layout/layout-auth', ...layoutsetup });
    });
    route.get("/pages/code-verification-v2", (req, res) => {
        res.render("pages/code-verification-v2", { title: 'Code Verification 2', layout: 'layout/layout-auth', ...layoutsetup });
    });
    route.get("/pages/error-404", (req, res) => {
        res.render("pages/error-404", { title: '404', layout: 'layout/layout-auth', ...layoutsetup });
    });
    route.get("/pages/connection-lost", (req, res) => {
        res.render("pages/connection-lost", { title: 'Connection Lost', layout: 'layout/layout-auth',  ...layoutsetup });
    });
    route.get("/pages/under-construction", (req, res) => {
        res.render("pages/under-construction", { title: 'Under Construction', layout: 'layout/layout-auth',  ...layoutsetup });
    });
    route.get("/pages/coming-soon", (req, res) => {
        res.render("pages/coming-soon", { title: 'Coming Soon', layout: 'layout/layout-auth',  ...layoutsetup });
    });
    route.get("/pages/contact-us", (req, res) => {
        res.render("pages/contact-us", { title: 'Contact US',  ...layoutsetup });
    });
    route.get("/pages/landing", (req, res) => {
        res.render("pages/landing", { title: 'Landing', layout: 'layout/layout-landing2', ...layoutsetup });
    });
    route.get("/pages/loading", (req, res) => {
        res.render("pages/loading", { title: 'Loading',  ...layoutsetup });
    });
    route.get("/pages/search-page", (req, res) => {
        res.render("pages/search-page", { title: 'Search Page',  ...layoutsetup });
    });
    route.get("/pages/contact-search", (req, res) => {
        res.render("pages/contact-search", { title: 'Contact Search Page',  ...layoutsetup });
    });
    route.get("/pages/settings", (req, res) => {
        res.render("pages/settings", { title: 'Settings',  ...layoutsetup });
    });
    
    route.get("/other/sample-page", (req, res) => {
        res.render("other/sample-page", { title: 'Sample Page',  ...layoutsetup });
    });

    route.get("/demo/layout-compact", (req, res) => {
        res.render("demo/layout-compact", { title: 'Compact', layout: 'layout/layout-compact',  ...layoutsetup });
    });
    route.get("/demo/layout-horizontal", (req, res) => {
        res.render("demo/layout-horizontal", { title: 'Horizontal', layout: 'layout/layout-horizontal',  ...layoutsetup });
    });
    route.get("/demo/layout-2", (req, res) => {
        res.render("demo/layout-2", { title: 'Creative', layout: 'layout/layout-2',  ...layoutsetup });
    });
    route.get("/demo/layout-tab", (req, res) => {
        res.render("demo/layout-tab", { title: 'Tab', layout: 'layout/layout-tab',  ...layoutsetup });
    });
    route.get("/demo/layout-vertical", (req, res) => {
        res.render("demo/layout-vertical", { title: 'Vertical', ...layoutsetup });
    });
    
    
    route.get("/pages/login-modal", (req, res) => {
        res.render("pages/login-modal", { title: 'Login Modal',  ...layoutsetup });
    });


    // Auth
    route.get('/login', (req, res, next) => {
        res.render('auth/login', { title: 'Login', ...layoutsetup, layout: 'layout/layout-auth', 'message': req.flash('message'), error: req.flash('error') })
    })

    // validate login form
    route.post("/auth-validate", AuthController.validate)

    // logout
    route.get("/logout", AuthController.logout);

    route.get('/register', (req, res, next) => {
        res.render('auth/register', { title: 'Register', ...layoutsetup, layout: 'layout/layout-auth', 'message': req.flash('message'), 'error': req.flash('error') })
    })

    // validate register form
    route.post("/signup", AuthController.signup)


    route.get('/forgotpassword', (req, res, next) => {
        res.render('auth/forgotpassword', { title: 'Forgot password', ...layoutsetup, layout: 'layout/layout-auth', message: req.flash('message'), error: req.flash('error') })
    })

    // send forgot password link on user email
    route.post("/sendforgotpasswordlink", AuthController.forgotpassword)

    // reset password
    route.get("/resetpassword", AuthController.resetpswdview);
    // Change password
    route.post("/changepassword", AuthController.changepassword);

    //500
    route.get('/error', (req, res, next) => {
        res.render('auth/auth-500', { title: '500 Error', ...layoutsetup, layout: 'layout/layout-auth' });
    })
}
