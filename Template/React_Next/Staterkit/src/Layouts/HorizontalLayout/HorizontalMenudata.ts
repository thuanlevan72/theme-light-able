const horizontalData = [
  {
    id: "navigation",
    label: "Navigation",
    dataPage: null,
    link: "#",
    submenu: [
      {
        id: "dashboard",
        label: "Dashboard",
        icon: "ph-duotone ph-gauge",
        link: "/dashboard",
        badge: "2",
        dataPage: "index"
      },
      {
        id: "dashboard",
        label: "Dashboard",
        icon: "ph-duotone ph-gauge",
        link: "#",
        badge: "2",
        dataPage: "index"
      },
    ]
  },
  {
    id: "widget",
    label: "Widgets",
    icon: "ph-duotone ph-chart-pie",
    dataPage: null,
    link: "#",
    submenu: [
      {
        id: "statistics",
        label: "Statistics",
        icon: "ph-duotone ph-projector-screen-chart",
        link: "#",
        dataPage: "w_statistics"
      },
      {
        id: "user",
        label: "User",
        icon: "ph-duotone ph-identification-card",
        link: "#",
        dataPage: "w_user"
      },
      {
        id: "data",
        label: "Data",
        icon: "ph-duotone ph-database",
        link: "#",
        dataPage: "w_data"
      },
      {
        id: "chart",
        label: "Chart",
        icon: "ph-duotone ph-chart-pie",
        link: "#",
        dataPage: "w_chart"
      }
    ]
  },
  {
    id: "uicomponent",
    label: "UI Components",
    icon: "ph-duotone ph-compass-tool",
    dataPage: null,
    link: "#",
    submenu: [
      {
        id: "components",
        label: "Components",
        icon: "ph-duotone ph-compass-tool",
        link: "/",
        dataPage: "components"
      },
      {
        id: "icons",
        label: "Icons",
        icon: "ph-duotone ph-flower-lotus",
        dataPage: null,
        link: "#",
        submenu: [
          {
            id: "iconfeather",
            label: "Feather",
            link: "#",
            dataPage: "icon-feather"
          },
          {
            id: "fontawesome",
            label: "Font Awesome 5",
            link: "#",
            dataPage: "icon-fontawesome"
          },
          {
            id: "iconmaterial",
            label: "Material",
            link: "#",
            dataPage: "icon-material"
          },
          {
            id: "icontabler",
            label: "Tabler",
            link: "#",
            dataPage: "icon-tabler"
          },
          {
            id: "icon-phosphor",
            label: "Phosphor",
            link: "#",
            dataPage: "icon-phosphor"
          },
          {
            id: "icon-custom",
            label: "Custom",
            link: "#",
            dataPage: "icon-custom"
          }
        ]
      }
    ]
  },
  {
    id: "form",
    label: "Forms",
    icon: "ph-duotone ph-textbox",
    dataPage: null,
    link: "#",
    submenu: [
      {
        id: "formelem",
        label: "Forms Elements",
        icon: "ph-duotone ph-textbox",
        dataPage: null,
        submenu: [
          {
            id: "formbasic",
            label: "Form Basic",
            link: "#",
            dataPage: "forms-form_elements"
          },
          {
            id: "formfloat",
            label: "Form Floating",
            link: "#",
            dataPage: "forms-form_floating"
          },
          {
            id: "formoption",
            label: "Form Options",
            link: "#",
            dataPage: "forms-form2_basic"
          },
          {
            id: "inputgroup",
            label: "Input Groups",
            link: "#",
            dataPage: "forms-form2_input_group"
          },
          {
            id: "checkbox",
            label: "Checkbox",
            link: "#",
            dataPage: "forms-form2_checkbox"
          },
          {
            id: "radio",
            label: "Radio",
            link: "#",
            dataPage: "forms-form2_radio"
          },
          {
            id: "switch",
            label: "Switch",
            link: "#",
            dataPage: "forms-form2_switch"
          },
          {
            id: "megaoption",
            label: "Mega option",
            link: "#",
            dataPage: "forms-form2_megaoption"
          }
        ]
      },
      {
        id: "formplugin",
        label: "Forms Plugins",
        dataPage: null,
        icon: "ph-duotone ph-plug-charging",
        link: "#",
        submenu: [
          {
            id: "date",
            label: "Date",
            link: "#",
            dataPage: null,
            submenu: [
              {
                id: "datepicker",
                label: "Datepicker",
                link: "#",
                dataPage: "forms-form2_datepicker"
              },
              {
                id: "daterange",
                label: "Date Range Picker",
                link: "#",
                dataPage: "forms-form2_daterangepicker"
              },
              {
                id: "timepicker",
                label: "Timepicker",
                link: "#",
                dataPage: "forms-form2_timepicker"
              }
            ]
          },
          {
            id: "select",
            label: "Select",
            link: "#",
            dataPage: null,
            submenu: [
              {
                id: "choicejs",
                label: "Choices js",
                link: "#",
                dataPage: "forms-form2_choices"
              }
            ]
          },
          {
            id: "captcha",
            label: "Google reCaptcha",
            link: "#",
            dataPage: "forms-form2_recaptcha"
          },
          {
            id: "inputmask",
            label: "Input Masks",
            link: "#",
            dataPage: "forms-form2_inputmask"
          },
          {
            id: "clipboard",
            label: "Clipboard",
            link: "#",
            dataPage: "forms-form2_clipboard"
          },
          {
            id: "nouislider",
            label: "Nouislider",
            link: "#",
            dataPage: "forms-form2_nouislider"
          },
          {
            id: "bootstrapswitch",
            label: "Bootstrap Switch",
            link: "#",
            dataPage: "forms-form2_switchjs"
          },
          {
            id: "typehead",
            label: "Typeahead",
            link: "#",
            dataPage: "forms-form2_typeahead"
          }
        ]
      },
      {
        id: "textedit",
        label: "Text Editors",
        dataPage: null,
        icon: "ph-duotone ph-pen-nib",
        link: "#",
        submenu: [
          {
            id: "tinymce",
            label: "Tinymce",
            link: "#",
            dataPage: "forms-form2_tinymce"
          },
          {
            id: "quill",
            label: "Quill",
            link: "#",
            dataPage: "forms-form2_quill"
          },
          {
            id: "ckeditor",
            label: "CK editor",
            dataPage: null,
            link: "#",
            submenu: [
              {
                id: "classic",
                label: "classic",
                link: "#",
                dataPage: "forms-editor-classic"
              },
              {
                id: "document",
                label: "Document",
                link: "#",
                dataPage: "forms-editor-document"
              },
              {
                id: "inline",
                label: "Inline",
                link: "#",
                dataPage: "forms-editor-inline"
              },
              {
                id: "balloon",
                label: "Balloon",
                link: "#",
                dataPage: "forms-editor-balloon"
              }
            ]
          },
          {
            id: "markdown",
            label: "Markdown",
            link: "#",
            dataPage: "forms-form2_markdown"
          }
        ]
      },
      {
        id: "formlayout",
        label: "Form Layouts",
        dataPage: null,
        icon: "ph-duotone ph-windows-logo",
        link: "#",
        submenu: [
          {
            id: "layouts",
            label: "Layouts",
            link: "#",
            dataPage: "forms-form2_lay_default"
          },
          {
            id: "multicolumn",
            label: "Multicolumn",
            link: "#",
            dataPage: "forms-form2_lay_multicolumn"
          },
          {
            id: "actionbar",
            label: "Actionbars",
            link: "#",
            dataPage: "forms-form2_lay_actionbars"
          },
          {
            id: "stickyaction",
            label: "Sticky Action bars",
            link: "#",
            dataPage: "forms-form2_lay_stickyactionbars"
          }
        ]
      },
      {
        id: "fileupload",
        label: "File upload",
        dataPage: null,
        icon: "ph-duotone ph-cloud-arrow-up",
        link: "#",
        submenu: [
          {
            id: "dropzone",
            label: "Dropzone",
            link: "#",
            dataPage: "forms-file_upload"
          },
          {
            id: "uppy",
            label: "Uppy",
            link: "#",
            dataPage: "forms-form2_flu_uppy"
          }
        ]
      },
      {
        id: "validation",
        label: "Form Validation",
        icon: "ph-duotone ph-password",
        link: "#",
        dataPage: "forms-form_validation"
      },
      {
        id: "imagecropper",
        label: "Image cropper",
        icon: "ph-duotone ph-crop",
        link: "#",
        dataPage: "forms-image_crop"
      }
    ]
  },
  {
    id: "table",
    label: "Table",
    icon: "ph-duotone ph-table",
    dataPage: null,
    link: "#",
    submenu: [
      {
        id: "bootstraptable",
        label: "Bootstrap Table",
        dataPage: null,
        icon: "ph-duotone ph-table",
        link: "#",
        submenu: [
          {
            id: "basictable",
            label: "Basic table",
            link: "#",
            dataPage: "table-tbl_bootstrap"
          },
          {
            id: "sizingtable",
            label: "Sizing table",
            link: "#",
            dataPage: "table-tbl_sizing"
          },
          {
            id: "bordertable",
            label: "Border table",
            link: "#",
            dataPage: "table-tbl_border"
          },
          {
            id: "stylingtable",
            label: "Styling table",
            link: "#",
            dataPage: "table-tbl_styling"
          }
        ]
      },
      {
        id: "vanillatable",
        label: "Vanilla Table",
        dataPage: null,
        link: "#",
        icon: "ph-duotone ph-grid-nine",
        submenu: [
          {
            id: "basicinitialization",
            label: "Basic initialization",
            link: "#",
            dataPage: "table-tbl_dt_simple"
          },
          {
            id: "rendercolumn",
            label: "Render Column Cells",
            link: "#",
            dataPage: "table-tbl_dt_render_column_cells"
          },
          {
            id: "columnmanipulation",
            label: "Column Manipulation",
            link: "#",
            dataPage: "table-tbl_dt_column-manipulation"
          },
          {
            id: "datetime",
            label: "Datetime Sorting",
            link: "#",
            dataPage: "table-tbl_dt_datetime-sorting"
          },
          {
            id: "methos",
            label: "Methods",
            link: "#",
            dataPage: "table-tbl_dt_methods"
          },
          {
            id: "addrows",
            label: "Add Rows",
            link: "#",
            dataPage: "table-tbl_dt_add-rows"
          },
          {
            id: "fetchapi",
            label: "Fetch API",
            link: "#",
            dataPage: "table-tbl_dt_fetch-api"
          },
          {
            id: "filters",
            label: "Filters",
            link: "#",
            dataPage: "table-tbl_dt_filters"
          },
          {
            id: "export",
            label: "Export",
            link: "#",
            dataPage: "table-tbl_dt_export"
          }
        ]
      },
      {
        id: "datatable",
        label: "Data table",
        dataPage: null,
        link: "#",
        icon: "ph-duotone ph-text-columns",
        submenu: [
          {
            id: "advanceinitial",
            label: "Advance initialization",
            link: "#",
            dataPage: "table-dt_advance"
          },
          {
            id: "styling",
            label: "Styling",
            link: "#",
            dataPage: "table-dt_styling"
          },
          {
            id: "api",
            label: "API",
            link: "#",
            dataPage: "table-dt_api"
          },
          {
            id: "plugin",
            label: "Plug-in",
            link: "#",
            dataPage: "table-dt_plugin"
          },
          {
            id: "datasources",
            label: "Data sources",
            link: "#",
            dataPage: "table-dt_sources"
          }
        ]
      }
    ]
  },
  {
    id: "chartsmaps",
    label: "Charts & Maps",
    icon: "ph-duotone ph-chart-pie-slice",
    dataPage: null,
    link: "#",
    submenu: [
      {
        id: "charts",
        label: "Charts",
        dataPage: null,
        icon: "ph-duotone ph-chart-donut",
        link: "#",
        submenu: [
          {
            id: "apexchart",
            label: "Apex Chart",
            link: "#",
            dataPage: "chart-apex"
          }
        ]
      },
      {
        id: "maps",
        label: "Maps",
        dataPage: null,
        icon: "ph-duotone ph-map-trifold",
        link: "#",
        submenu: [
          {
            id: "vectormap",
            label: "Vector Map",
            link: "#",
            dataPage: "map-vector"
          }
        ]
      }
    ]
  },
  {
    id: "application",
    label: "Application",
    icon: "ph-duotone ph-buildings",
    dataPage: null,
    link: "#",
    submenu: [
      {
        id: "calendar",
        label: "Calendar",
        link: "#",
        icon: "ph-duotone ph-calendar-blank",
        dataPage: "calendar"
      },
      {
        id: "chat",
        label: "Chat",
        link: "#",
        icon: "ph-duotone ph-chats-circle",
        dataPage: "chat"
      },
      {
        id: "ecom",
        label: "E-commerce",
        link: "#",
        dataPage: null,
        icon: "ph-duotone ph-shopping-cart",
        submenu: [
          {
            id: "product",
            label: "Product",
            link: "#",
            dataPage: "ecom_product"
          },
          {
            id: "productdetails",
            label: "Product details",
            link: "#",
            dataPage: "ecom_product-details"
          },
          {
            id: "productlist",
            label: "Product List",
            link: "#",
            dataPage: "ecom_product-list"
          },
          {
            id: "addnewproduct",
            label: "Add New Product",
            link: "#",
            dataPage: "ecom_product-add"
          },
          {
            id: "checkout",
            label: "Checkout",
            link: "#",
            dataPage: "ecom_checkout"
          }
        ]
      },
      {
        id: "mail",
        label: "Mail",
        link: "#",
        icon: "ph-duotone ph-envelope-open",
        dataPage: "mail"
      },
      {
        id: "users",
        label: "Users",
        dataPage: null,
        icon: "ph-duotone ph-user-circle",
        link: "#",
        submenu: [
          {
            id: "accountprofile",
            label: "Account Profile",
            link: "#",
            dataPage: "account-profile"
          },
          {
            id: "socialmedia",
            label: "Social media",
            link: "#",
            dataPage: "social-media"
          },
          {
            id: "usercard",
            label: "User Card",
            link: "#",
            dataPage: "user-card"
          },
          {
            id: "userlist",
            label: "User List",
            link: "#",
            dataPage: "user-list"
          }
        ]
      },
      {
        id: "invoice",
        label: "Invoice",
        dataPage: null,
        icon: "ph-duotone ph-newspaper",
        link: "#",
        submenu: [
          {
            id: "invoicelist",
            label: "Invoice List",
            link: "#",
            dataPage: "invoice-list"
          },
          {
            id: "create",
            label: "Create",
            link: "#",
            dataPage: "invoice-create"
          },
          {
            id: "preview",
            label: "Preview",
            link: "#",
            dataPage: "invoice-view"
          }
        ]
      }
    ]
  },
  {
    id: "page",
    label: "Pages",
    dataPage: null,
    icon: "ph-duotone ph-devices",
    link: "#",
    submenu: [
      {
        id: "authentication",
        label: "Authentication",
        dataPage: null,
        icon: "ph-duotone ph-shield-checkered",
        link: "#",
        submenu: [
          {
            id: "auth1",
            label: "Authentication 1",
            dataPage: null,
            link: "#",
            submenu: [
              {
                id: "login",
                label: "Login",
                link: "#",
                dataPage: "pages-login-v1"
              },
              {
                id: "register",
                label: "Register",
                link: "#",
                dataPage: "pages-register-v1"
              },
              {
                id: "forgotpw",
                label: "Forgot Password",
                link: "#",
                dataPage: "pages-forgot-password-v1"
              },
              {
                id: "resetpw",
                label: "Reset Password",
                link: "#",
                dataPage: "pages-reset-password-v1"
              },
              {
                id: "codeverify",
                label: "Code Verification",
                link: "#",
                dataPage: "code-verification-v1"
              }
            ]
          },
          {
            id: "auth2",
            label: "Authentication 2",
            dataPage: null,
            link: "#",
            submenu: [
              {
                id: "login2",
                label: "Login",
                link: "#",
                dataPage: "pages-login-v2"
              },
              {
                id: "register2",
                label: "Register",
                link: "#",
                dataPage: "pages-register-v2"
              },
              {
                id: "forgotpw2",
                label: "Forgot Password",
                link: "#",
                dataPage: "pages-forgot-password-v2"
              },
              {
                id: "resetpw2",
                label: "Reset Password",
                link: "#",
                dataPage: "pages-reset-password-v2"
              },
              {
                id: "codeverify2",
                label: "Code Verification",
                link: "#",
                dataPage: "code-verification-v2"
              }
            ]
          },
          {
            id: "loginmodal",
            label: "Login Modal",
            link: "#",
            dataPage: "ui-loginmodal"
          },
        ]
      },
      {
        id: "maintenance",
        label: "Maintenance",
        dataPage: null,
        icon: "ph-duotone ph-wrench",
        link: "#",
        submenu: [
          {
            id: "er404",
            label: "Error 404",
            link: "#",
            dataPage: "error-404"
          },
          {
            id: "connectionlost",
            label: "Connection lost",
            link: "#",
            dataPage: "connection-lost"
          },
          {
            id: "underconstruction",
            label: "Under Construction",
            link: "#",
            dataPage: "under-construction"
          },
          {
            id: "comingsoon",
            label: "Coming soon",
            link: "#",
            dataPage: "coming-soon"
          }
        ]
      },
      {
        id: "contactus",
        label: "Contact Us",
        link: "#",
        icon: "ph-duotone ph-target",
        dataPage: "contactus"
      },
      {
        id: "landing",
        label: "Landing",
        link: "#",
        icon: "ph-duotone ph-rocket",
        dataPage: "landing"
      },
      {
        id: "loading",
        label: "Loading",
        link: "#",
        icon: "ph-duotone ph-fan",
        dataPage: "loading"
      },
      {
        id: "search",
        label: "Search",
        dataPage: null,
        icon: "ph-duotone ph-magnifying-glass",
        link: "/#",
        submenu: [
          {
            id: "search",
            label: "Search",
            link: "#",
            dataPage: "search",
          },
          {
            id: "contact_search",
            label: "Contact Search",
            link: "#",
            dataPage: "contact-search",
          },
        ]
      },
      {
        id: "setting",
        label: "Settings",
        icon : "ph-duotone ph-globe",
        link: "#",
        dataPage: "setting",
      },
    ]
  },

  {
    id: "other",
    label: "Other",
    dataPage: null,
    icon: "ph-duotone ph-suitcase",
    link: "#",
    submenu: [
      {
        id: "menulevels",
        label: "Menu levels",
        dataPage: null,
        icon: "ph-duotone ph-tree-structure",
        link: "#",
        submenu: [
          {
            id: "level2.1",
            label: "Level 2.1",
            dataPage: null,
            link: "#"
          },
          {
            id: "Level 2.2",
            label: "Level 2.2",
            dataPage: null,
            link: "#",
            submenu: [
              {
                id: "level3.1",
                label: "Level 3.1",
                link: "#",
                dataPage: "#3.1"
              },
              {
                id: "level3.2",
                label: "Level 3.2",
                link: "#",
                dataPage: "#3.2"
              },
              {
                id: "level3.3",
                label: "Level 3.3",
                dataPage: null,
                link: "#",
                submenu: [
                  {
                    id: "level4.1",
                    label: "Level 4.1",
                    link: "#",
                    dataPage: "#4.1"
                  },
                  {
                    id: "level4.2",
                    label: "Level 4.2",
                    link: "#",
                    dataPage: "#4.2"
                  }
                ]
              }
            ]
          },
          {
            id: "level2.3",
            label: "Level 2.3",
            dataPage: null,
            link: "#",
            submenu: [
              {
                id: "level3.1",
                label: "Level 3.1",
                link: "#",
                dataPage: "#3.1"
              },
              {
                id: "level3.2",
                label: "Level 3.2",
                link: "#",
                dataPage: "#3.2"
              },
              {
                id: "level3.3",
                label: "Level 3.3",
                dataPage: null,
                link: "#",
                submenu: [
                  {
                    id: "level4.1",
                    label: "Level 4.1",
                    link: "#",
                    dataPage: "#4.1"
                  },
                  {
                    id: "level4.2",
                    label: "Level 4.2",
                    link: "#",
                    dataPage: "#4.2"
                  }
                ]
              }
            ]
          }
        ]
      },
      {
        id: "samplepage",
        label: "Sample page",
        icon: "ph-duotone ph-desktop",
        link: "/other/sample-page",
        dataPage: "sample-page"
      }
    ]
  }
];

export { horizontalData };
