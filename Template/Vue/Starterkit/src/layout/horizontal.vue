<script>
import { ChevronRightIcon } from "@zhuowenli/vue-feather-icons";
import navCardBg from "@/assets/images/layout/nav-card-bg.svg"
import FooterComponents from "@/components/footer.vue"
import Rightbar from "@/components/right-bar.vue"

export default {
  data(){
    navCardBg
  },
  components: {
    ChevronRightIcon, Rightbar, FooterComponents
  },
  methods: {
    changeLayoutType(layoutType) {
      // Update the layout type in the store
      this.$store.commit('changeLayoutType', { layoutType });

      // Set the layout attribute based on the layout type
      document.body.setAttribute('data-pc-layout', layoutType);
    },
  },
  mounted() {
    document.body.setAttribute('data-pc-layout', "horizontal");
   
  }
}
</script>

<template>
  <nav class="pc-sidebar">
    <div class="navbar-wrapper">
      <div class="m-header">
        <a href="../dashboard" class="b-brand text-primary">
          <!-- ========   Change your logo from here   ============ -->
          <img src="../assets/images/logo-dark.svg" alt="logo image" class="logo-lg">
          <span class="badge bg-brand-color-2 rounded-pill ms-2 theme-version">v1.0</span>
        </a>
      </div>
      <div class="navbar-content">
        <ul class="pc-navbar">
          <li class="pc-item pc-hasmenu">
            <a class="pc-link">
              <span class="pc-mtext">Navigation</span>
              <span class="pc-arrow">
                <ChevronRightIcon></ChevronRightIcon>
              </span>
            </a>
            <ul class="pc-submenu">
              <li class="pc-item">
                <router-link to="/dashboard" class="pc-link">
                  <span class="pc-micon">
                    <i class="ph-duotone ph-gauge"></i>
                  </span>
                  <span class="pc-mtext">Dashboard</span>
                  <span class="pc-badge">2</span>
                </router-link>
              </li>
              <li class="pc-item pc-hasmenu">
                <a href="#!" class="pc-link"><span class="pc-micon">
                    <i class="ph-duotone ph-layout"></i></span><span class="pc-mtext">Layouts</span><span class="pc-arrow">
                    <ChevronRightIcon />
                  </span></a>
                <ul class="pc-submenu">
                  <li class="pc-item"><router-link class="pc-link" @click="changeLayoutType('horizontal')" to="/layout/horizontal">Horizontal</router-link></li>
                  <li class="pc-item"><router-link class="pc-link" to="/layout/layout-2">Layout-2</router-link></li>
                  <li class="pc-item"><router-link class="pc-link" @click="changeLayoutType('vertical')" to="/dashboard">Vertical</router-link></li>
                </ul>
              </li>
              <li class="pc-item pc-hasmenu">
                <a href="#!" class="pc-link">
                  <span class="pc-micon">
                    <i class="ph-duotone ph-scroll"></i>
                  </span>
                  <span class="pc-mtext">Ui-kit</span><span class="pc-arrow">
                    <ChevronRightIcon />
                  </span>
                </a>
                <ul class="pc-submenu">
                  <li class="pc-item" :class="{ 'active': $route.path === '/setting' }"><router-link class="pc-link" to="/setting">Settings</router-link>
                  </li>
                  <li class="pc-item" :class="{ 'active': $route.path === '/plans' }"><router-link class="pc-link" to="/plans">Plans</router-link></li>
                  <li class="pc-item" :class="{ 'active': $route.path === '/login-modal' }"><router-link class="pc-link" to="/login-modal">Login
                      Modal</router-link>
                  </li>
                  <li class="pc-item" :class="{ 'active': $route.path === '/search-page' }"><router-link class="pc-link" to="/search-page">Search
                      Page</router-link>
                  </li>
                  <li class="pc-item" :class="{ 'active': $route.path === '/affiliate-dashboard' }">
                    <router-link class="pc-link" to="/affiliate-dashboard">Affiliate
                      Dashboard</router-link>
                  </li>
                  <li class="pc-item" :class="{ 'active': $route.path === '/gallery-1' }"><router-link class="pc-link" to="/gallery-1">Gallery</router-link>
                  </li>
                  <li class="pc-item" :class="{ 'active': $route.path === '/team' }"><router-link class="pc-link" to="/team">Team</router-link></li>
                  <li class="pc-item" :class="{ 'active': $route.path === '/loading' }"><router-link class="pc-link" to="/loading">Loading</router-link>
                  </li>
                  <li class="pc-item" :class="{ 'active': $route.path === '/contact-search' }">
                    <router-link class="pc-link" to="/contact-search">Contact
                      Search</router-link>
                  </li>
                  <li class="pc-item" :class="{ 'active': $route.path === '/contact-us' }"><router-link class="pc-link" to="/contact-us">Contact
                      Us</router-link>
                  </li>
                </ul>
              </li>
            </ul>
          </li>

          <!-- </li> -->
          <!-- </li> -->
          <li class="pc-item pc-hasmenu">
            <a class="pc-link">
              <i class="ph-duotone ph-chart-pie"></i>
              <span class="pc-mtext ms-2">Widget</span>
              <span class="pc-arrow">
                <ChevronRightIcon></ChevronRightIcon>
              </span>
            </a>
            <ul class="pc-submenu">
              <li class="pc-item" :class="{ 'active': this.$route.path === '/statistics' }">
                <router-link to="/statistics" class="pc-link">
                  <span class="pc-micon">
                    <i class="ph-duotone ph-projector-screen-chart"></i>
                  </span>
                  <span class="pc-mtext">Statistics</span>
                </router-link>
              </li>
              <li class="pc-item" :class="{ 'active': this.$route.path === '/user' }">
                <router-link to="/user" class="pc-link">
                  <span class="pc-micon">
                    <i class="ph-duotone ph-identification-card"></i>
                  </span>
                  <span class="pc-mtext">User</span>
                </router-link>
              </li>
              <li class="pc-item" :class="{ 'active': this.$route.path === '/data' }">
                <router-link to="/data" class="pc-link">
                  <span class="pc-micon">
                    <i class="ph-duotone ph-database"></i>
                  </span>
                  <span class="pc-mtext">Data</span>
                </router-link>
              </li>
              <li class="pc-item" :class="{ 'active': this.$route.path === '/chart' }">
                <router-link to="/chart" class="pc-link">
                  <span class="pc-micon">
                    <i class="ph-duotone ph-chart-pie"></i>
                  </span>
                  <span class="pc-mtext">Chart</span>
                </router-link>
              </li>
            </ul>
          </li>

          <li class="pc-item pc-hasmenu">
            <a class="pc-link">
              <i class="ph-duotone ph-compass-tool"></i>
              <span class="pc-mtext ms-2">Components</span>
              <span class="pc-arrow">
                <ChevronRightIcon></ChevronRightIcon>
              </span>
            </a>
            <ul class="pc-submenu">
              <li class="pc-item">
                <router-link to="/components/" class="pc-link" target="_blank"><span class="pc-micon">
                    <i class="ph-duotone ph-compass-tool"></i></span><span class="pc-mtext">Components</span></router-link>
              </li>
              <li class="pc-item pc-hasmenu">
                <a href="#!" class="pc-link"><span class="pc-micon">
                    <i class="ph-duotone ph-flower-lotus"></i></span><span class="pc-mtext">Icons</span><span class="pc-arrow">
                    <ChevronRightIcon />
                  </span></a>
                <ul class="pc-submenu">
                  <li class="pc-item" :class="{ 'active': $route.path === '/feather' }"><router-link class="pc-link" to="/feather">Feather</router-link></li>
                  <li class="pc-item" :class="{ 'active': $route.path === '/tabler' }"><router-link class="pc-link" to="/tabler">Tabler</router-link></li>
                  <li class="pc-item" :class="{ 'active': $route.path === '/phosphor ' }"><router-link class="pc-link" to="/phosphor">Phosphor</router-link>
                  </li>
                </ul>
              </li>
            </ul>
          </li>

          <li class="pc-item pc-hasmenu">
            <a class="pc-link">
              <i class="ph-duotone ph-textbox"></i>
              <span class="pc-mtext ms-2">Forms</span>
              <span class="pc-arrow">
                <ChevronRightIcon></ChevronRightIcon>
              </span>
            </a>
            <ul class="pc-submenu">
              <li class="pc-item pc-hasmenu">
                <a href="#!" class="pc-link">
                  <span class="pc-micon">
                    <i class="ph-duotone ph-textbox"></i>
                  </span>
                  <span class="pc-mtext">Forms Elements</span><span class="pc-arrow">
                    <ChevronRightIcon />
                  </span></a>
                <ul class="pc-submenu">
                  <li class="pc-item" :class="{ 'active': $route.path === '/form-element' }"><router-link class="pc-link" to="/form-element">Form
                      Basic</router-link>
                  </li>
                  <li class="pc-item" :class="{ 'active': $route.path === '/floating' }"><router-link class="pc-link" to="/floating">Form
                      Floating</router-link>
                  </li>
                  <li class="pc-item" :class="{ 'active': $route.path === '/form-option' }"><router-link class="pc-link" to="/form-option">Form
                      Options</router-link>
                  </li>
                  <li class="pc-item" :class="{ 'active': $route.path === '/input-group' }"><router-link class="pc-link" to="/input-group">Input
                      Groups</router-link>
                  </li>
                  <li class="pc-item" :class="{ 'active': $route.path === '/checkbox' }"><router-link class="pc-link" to="/checkbox">Checkbox</router-link>
                  </li>
                  <li class="pc-item" :class="{ 'active': $route.path === '/radio' }"><router-link class="pc-link" to="/radio">Radio</router-link></li>
                  <li class="pc-item" :class="{ 'active': $route.path === '/switch' }"><router-link class="pc-link" to="/switch">Switch</router-link></li>
                  <li class="pc-item" :class="{ 'active': $route.path === '/mega-option' }"><router-link class="pc-link" to="/mega-option">Mega
                      option</router-link>
                  </li>
                </ul>
              </li>
              <li class="pc-item pc-hasmenu">
                <a href="#!" class="pc-link">
                  <span class="pc-micon">
                    <i class="ph-duotone ph-windows-logo"></i>
                  </span>
                  <span class="pc-mtext">Form Layouts</span><span class="pc-arrow">
                    <ChevronRightIcon />
                  </span></a>
                <ul class="pc-submenu">
                  <li class="pc-item" :class="{ 'active': $route.path === '/layouts' }"><router-link class="pc-link" to="/layouts">Layouts</router-link>
                  </li>
                  <li class="pc-item" :class="{ 'active': $route.path === '/multicolumn' }"><router-link class="pc-link" to="/multicolumn">Multicolumn</router-link>
                  </li>
                  <li class="pc-item" :class="{ 'active': $route.path === '/actionbars' }"><router-link class="pc-link" to="/actionbars">Actionbars</router-link>
                  </li>
                  <li class="pc-item" :class="{ 'active': $route.path === '/sticky-action' }">
                    <router-link class="pc-link" to="/sticky-action">Sticky
                      Action
                      bars</router-link>
                  </li>
                </ul>
              </li>
              <li class="pc-item pc-hasmenu">
                <a href="#!" class="pc-link">
                  <span class="pc-micon">
                    <i class="ph-duotone ph-cloud-arrow-up"></i>
                  </span>
                  <span class="pc-mtext">File upload</span><span class="pc-arrow">
                    <ChevronRightIcon />
                  </span></a>
                <ul class="pc-submenu">
                  <li class="pc-item" :class="{ 'active': $route.path === '/dropzone' }"><router-link class="pc-link" to="/dropzone">Dropzone</router-link>
                  </li>
                </ul>
              </li>
              <li class="pc-item" :class="{ 'active': this.$route.path === '/validation' }">
                <router-link to="/validation" class="pc-link">
                  <span class="pc-micon">
                    <i class="ph-duotone ph-password"></i>
                  </span>
                  <span class="pc-mtext">Form Validation</span>
                </router-link>
              </li>
              <li class="pc-item" :class="{ 'active': this.$route.path === '/image-croper' }"><router-link to="/image-croper" class="pc-link">
                  <span class="pc-micon">
                    <i class="ph-duotone ph-crop"></i>
                  </span>
                  <span class="pc-mtext">Image cropper</span></router-link>
              </li>
            </ul>
          </li>

          <li class="pc-item pc-hasmenu">
            <a class="pc-link">
              <i class="ph-duotone ph-table"></i>
              <span class="pc-mtext ms-2">table</span>
              <span class="pc-arrow">
                <ChevronRightIcon></ChevronRightIcon>
              </span>
            </a>
            <ul class="pc-submenu">
              <li class="pc-item pc-hasmenu">
                <a href="#!" class="pc-link">
                  <span class="pc-micon">
                    <i class="ph-duotone ph-table"></i>
                  </span>
                  <span class="pc-mtext">Bootstrap Table</span><span class="pc-arrow">
                    <ChevronRightIcon />
                  </span></a>
                <ul class="pc-submenu">
                  <li class="pc-item" :class="{ 'active': $route.path === '/basic-table' }"><router-link class="pc-link" to="/basic-table">Basic
                      table</router-link>
                  </li>
                  <li class="pc-item" :class="{ 'active': $route.path === '/sizing-table' }"><router-link class="pc-link" to="/sizing-table">Sizing
                      table</router-link></li>
                  <li class="pc-item" :class="{ 'active': $route.path === '/border-table' }"><router-link class="pc-link" to="/border-table">Border
                      table</router-link></li>
                  <li class="pc-item" :class="{ 'active': $route.path === '/styling-table' }">
                    <router-link class="pc-link" to="/styling-table">Styling
                      table</router-link>
                  </li>
                </ul>
              </li>
              <li class="pc-item pc-hasmenu">
                <a href="#!" class="pc-link">
                  <span class="pc-micon">
                    <i class="ph-duotone ph-grid-nine"></i>
                  </span>
                  <span class="pc-mtext">Vanilla Table</span><span class="pc-arrow">
                    <ChevronRightIcon />
                  </span></a>
                <ul class="pc-submenu">
                  <li class="pc-item" :class="{ 'active': $route.path === '/basic' }"><router-link class="pc-link" to="/basic">Basic
                      initialization</router-link>
                  </li>
                  <li class="pc-item" :class="{ 'active': $route.path === '/dynamic import' }">
                    <router-link class="pc-link" to="/dynamic import">Dynamic
                      Import</router-link>
                  </li>
                  <li class="pc-item" :class="{ 'active': $route.path === '/column cells' }"><router-link class="pc-link" to="/column cells">Render
                      Column Cells</router-link></li>
                  <li class="pc-item" :class="{ 'active': $route.path === '/datetime sorting' }">
                    <router-link class="pc-link" to="/datetime sorting">Datetime
                      Sorting</router-link>
                  </li>
                  <li class="pc-item" :class="{ 'active': $route.path === '/method' }"><router-link class="pc-link" to="/method">Methods</router-link>
                  </li>
                  <li class="pc-item" :class="{ 'active': $route.path === '/row' }"><router-link class="pc-link" to="/row">Add
                      Rows</router-link>
                  </li>
                  <li class="pc-item" :class="{ 'active': $route.path === '/api' }"><router-link class="pc-link" to="/api">Fetch
                      API</router-link>
                  </li>
                  <li class="pc-item" :class="{ 'active': $route.path === '/filter' }"><router-link class="pc-link" to="/filter">Filters</router-link>
                  </li>
                  <li class="pc-item" :class="{ 'active': $route.path === '/export' }"><router-link class="pc-link" to="/export">Export</router-link></li>
                </ul>
              </li>
            </ul>
          </li>

          <li class="pc-item pc-hasmenu">
            <a class="pc-link">
              <i class="ph-duotone ph-chart-pie-slice"></i>
              <span class="pc-mtext ms-2">Charts &amp; Maps</span>
              <span class="pc-arrow">
                <ChevronRightIcon></ChevronRightIcon>
              </span>
            </a>
            <ul class="pc-submenu">
              <li class="pc-item pc-hasmenu">
                <a href="#!" class="pc-link">
                  <span class="pc-micon">
                    <i class="ph-duotone ph-chart-donut"></i>
                  </span>
                  <span class="pc-mtext">Charts</span><span class="pc-arrow">
                    <ChevronRightIcon />
                  </span></a>
                <ul class="pc-submenu">
                  <li class="pc-item" :class="{ 'active': $route.path === '/apexchart' }"><router-link class="pc-link" to="/apexchart">Apex
                      Chart</router-link>
                  </li>
                </ul>
              </li>
              <li class="pc-item pc-hasmenu">
                <a href="#!" class="pc-link">
                  <span class="pc-micon">
                    <i class="ph-duotone ph-map-trifold"></i>
                  </span>
                  <span class="pc-mtext">Maps</span><span class="pc-arrow">
                    <ChevronRightIcon />
                  </span></a>
                <ul class="pc-submenu">
                  <li class="pc-item" :class="{ 'active': $route.path === '/maps' }"><router-link class="pc-link" to="/maps">Google Map</router-link>
                  </li>
                </ul>
              </li>
            </ul>
          </li>

          <li class="pc-item pc-hasmenu">
            <a class="pc-link">
              <i class="ph-duotone ph-buildings"></i>
              <span class="pc-mtext ms-2">Application</span>
              <span class="pc-arrow">
                <ChevronRightIcon></ChevronRightIcon>
              </span>
            </a>
            <ul class="pc-submenu">
              <li class="pc-item" :class="{ 'active': this.$route.path === '/calendar' }">
                <router-link to="/calendar" class="pc-link">
                  <span class="pc-micon">
                    <i class="ph-duotone ph-calendar-blank"></i>
                  </span>
                  <span class="pc-mtext">Calendar</span></router-link>
              </li>
              <li class="pc-item" :class="{ 'active': this.$route.path === '/chat' }">
                <router-link to="/chat" class="pc-link">
                  <span class="pc-micon">
                    <i class="ph-duotone ph-chats-circle"></i>
                  </span>
                  <span class="pc-mtext">Chat</span></router-link>
              </li>
              <li class="pc-item" :class="{ 'active': this.$route.path === '/gallery-2' }">
                <router-link to="/gallery-2" class="pc-link">
                  <span class="pc-micon">
                    <i class="ph-duotone ph-image"></i>
                  </span>
                  <span class="pc-mtext">Gallery</span></router-link>
              </li>
              <li class="pc-item pc-hasmenu">
                <a href="#!" class="pc-link">
                  <span class="pc-micon">
                    <i class="ph-duotone ph-shopping-cart"></i>
                  </span>
                  <span class="pc-mtext">E-commerce</span><span class="pc-arrow">
                    <ChevronRightIcon />
                  </span></a>
                <ul class="pc-submenu">
                  <li class="pc-item" :class="{ 'active': $route.path === '/product' }"><router-link class="pc-link" to="/product">Product</router-link>
                  </li>
                  <li class="pc-item" :class="{ 'active': $route.path === '/product-details' }">
                    <router-link class="pc-link" to="/product-details">Product
                      details</router-link>
                  </li>
                  <li class="pc-item" :class="{ 'active': $route.path === '/product-list' }"><router-link class="pc-link" to="/product-list">Product
                      List</router-link></li>
                  <li class="pc-item" :class="{ 'active': $route.path === '/add-product' }"><router-link class="pc-link" to="/add-product">Add New
                      Product</router-link></li>
                  <li class="pc-item" :class="{ 'active': $route.path === '/checkout' }"><router-link class="pc-link" to="/checkout">Checkout</router-link>
                  </li>
                </ul>
              </li>
              <li class="pc-item" :class="{ 'active': this.$route.path === '/mail' }">
                <router-link to="/mail" class="pc-link">
                  <span class="pc-micon">
                    <i class="ph-duotone ph-envelope-open"></i>
                  </span>
                  <span class="pc-mtext">Mail</span></router-link>
              </li>
              <li class="pc-item pc-hasmenu">
                <a href="#!" class="pc-link">
                  <span class="pc-micon">
                    <i class="ph-duotone ph-user-circle"></i>
                  </span>
                  <span class="pc-mtext">Users</span><span class="pc-arrow">
                    <ChevronRightIcon />
                  </span></a>
                <ul class="pc-submenu">
                  <li class="pc-item" :class="{ 'active': $route.path === '/account-profile' }">
                    <router-link class="pc-link" to="/account-profile">Account
                      Profile</router-link>
                  </li>
                  <li class="pc-item" :class="{ 'active': $route.path === '/social-media' }"><router-link class="pc-link" to="/social-media">Social
                      media</router-link>
                  </li>
                  <li class="pc-item" :class="{ 'active': $route.path === '/user-card' }"><router-link class="pc-link" to="/user-card">User
                      Card</router-link>
                  </li>
                  <li class="pc-item" :class="{ 'active': $route.path === '/user-list' }"><router-link class="pc-link" to="/user-list">User
                      List</router-link>
                  </li>
                </ul>
              </li>
              <li class="pc-item pc-hasmenu">
                <a href="#!" class="pc-link">
                  <span class="pc-micon">
                    <i class="ph-duotone ph-newspaper"></i>
                  </span>
                  <span class="pc-mtext">Invoice</span><span class="pc-arrow">
                    <ChevronRightIcon />
                  </span></a>
                <ul class="pc-submenu">
                  <li class="pc-item" :class="{ 'active': $route.path === '/invoice-list' }"><router-link class="pc-link" to="/invoice-list">Invoice
                      List</router-link>
                  </li>
                  <li class="pc-item" :class="{ 'active': $route.path === '/create' }"><router-link class="pc-link" to="/create">Create</router-link></li>
                  <li class="pc-item" :class="{ 'active': $route.path === '/preview' }"><router-link class="pc-link" to="/preview">Preview</router-link>
                  </li>
                </ul>
              </li>
            </ul>
          </li>

          <li class="pc-item pc-hasmenu">
            <a class="pc-link">
              <i class="ph-duotone ph-devices"></i>
              <span class="pc-mtext ms-2">Pages</span>
              <span class="pc-arrow">
                <ChevronRightIcon></ChevronRightIcon>
              </span>
            </a>
            <ul class="pc-submenu">
              <li class="pc-item pc-hasmenu">
                <a href="#!" class="pc-link">
                  <span class="pc-micon">
                    <i class="ph-duotone ph-shield-checkered"></i>
                  </span>
                  <span class="pc-mtext">Authentication</span><span class="pc-arrow">
                    <ChevronRightIcon />
                  </span></a>
                <ul class="pc-submenu">
                  <li class="pc-item pc-hasmenu">
                    <a href="#!" class="pc-link">Authentication 1<span class="pc-arrow">
                        <ChevronRightIcon />
                      </span></a>
                    <ul class="pc-submenu">
                      <li class="pc-item"><router-link class="pc-link" target="_blank" to="/login-v1">Login</router-link>
                      </li>
                      <li class="pc-item"><router-link class="pc-link" target="_blank" to="/register-v1">Register</router-link>
                      </li>
                      <li class="pc-item"><router-link class="pc-link" target="_blank" to="/forgot-password-v1">Forgot
                          Password</router-link></li>
                      <li class="pc-item"><router-link class="pc-link" target="_blank" to="/reset-password-v1">reset
                          password</router-link> </li>
                      <li class="pc-item"><router-link class="pc-link" target="_blank" to="/code-verification-v1">code
                          verification</router-link></li>
                    </ul>
                  </li>
                  <li class="pc-item pc-hasmenu">
                    <a href="#!" class="pc-link">Authentication 2<span class="pc-arrow">
                        <ChevronRightIcon />
                      </span></a>
                    <ul class="pc-submenu">
                      <li class="pc-item"><router-link class="pc-link" target="_blank" to="/login-v2">Login</router-link>
                      </li>
                      <li class="pc-item"><router-link class="pc-link" target="_blank" to="/register-v2">Register</router-link>
                      </li>
                      <li class="pc-item"><router-link class="pc-link" target="_blank" to="/forgot-password-v2">Forgot
                          password</router-link> </li>
                      <li class="pc-item"><router-link class="pc-link" target="_blank" to="/reset-password-v2">reset
                          password</router-link> </li>
                      <li class="pc-item"><router-link class="pc-link" target="_blank" to="/code-verification-v2">code
                          verification</router-link></li>
                    </ul>
                  </li>
                </ul>
              </li>
              <li class="pc-item pc-hasmenu">
                <a href="#!" class="pc-link">
                  <span class="pc-micon">
                    <i class="ph-duotone ph-wrench"></i>
                  </span>
                  <span class="pc-mtext">Maintenance</span><span class="pc-arrow">
                    <ChevronRightIcon />
                  </span>
                </a>
                <ul class="pc-submenu">
                  <li class="pc-item"><router-link class="pc-link" target="_blank" to="/error-404">Error
                      404</router-link>
                  </li>
                  <li class="pc-item"><router-link class="pc-link" target="_blank" to="/connection-lost">Connection
                      lost</router-link></li>
                  <li class="pc-item"><router-link class="pc-link" target="_blank" to="/under-construction">Under
                      Construction</router-link></li>
                  <li class="pc-item"><router-link class="pc-link" target="_blank" to="/comming-soon">Coming
                      soon</router-link>
                  </li>
                </ul>
              </li>
              <li class="pc-item"><a href="../pages/landing.html" class="pc-link" target="_blank"><span class="pc-micon">
                    <i class="ph-duotone ph-rocket"></i> </span><span class="pc-mtext">Landing</span></a>
              </li>
            </ul>
          </li>
          <li class="pc-item pc-hasmenu">
            <a class="pc-link">
              <i class="ph-duotone ph-suitcase"></i>
              <span class="pc-mtext ms-2">Other</span>
              <span class="pc-arrow">
                <ChevronRightIcon></ChevronRightIcon>
              </span>
            </a>
            <ul class="pc-submenu">
              <li class="pc-item pc-hasmenu">
                <a href="#!" class="pc-link"><span class="pc-micon">
                    <i class="ph-duotone ph-tree-structure"></i> </span><span class="pc-mtext">Menu levels</span><span class="pc-arrow">
                    <ChevronRightIcon />
                  </span></a>
                <ul class="pc-submenu">
                  <li class="pc-item"><a class="pc-link" href="#!">Level 2.1</a></li>
                  <li class="pc-item pc-hasmenu">
                    <a href="#!" class="pc-link">Level 2.2<span class="pc-arrow">
                        <ChevronRightIcon />
                      </span></a>
                    <ul class="pc-submenu">
                      <li class="pc-item"><a class="pc-link" href="#!">Level 3.1</a></li>
                      <li class="pc-item"><a class="pc-link" href="#!">Level 3.2</a></li>
                      <li class="pc-item pc-hasmenu">
                        <a href="#!" class="pc-link">Level 3.3<span class="pc-arrow">
                            <ChevronRightIcon />
                          </span></a>
                        <ul class="pc-submenu">
                          <li class="pc-item"><a class="pc-link" href="#!">Level 4.1</a></li>
                          <li class="pc-item"><a class="pc-link" href="#!">Level 4.2</a></li>
                        </ul>
                      </li>
                    </ul>
                  </li>
                  <li class="pc-item pc-hasmenu">
                    <a href="#!" class="pc-link">Level 2.3<span class="pc-arrow">
                        <ChevronRightIcon />
                      </span></a>
                    <ul class="pc-submenu">
                      <li class="pc-item"><a class="pc-link" href="#!">Level 3.1</a></li>
                      <li class="pc-item"><a class="pc-link" href="#!">Level 3.2</a></li>
                      <li class="pc-item pc-hasmenu">
                        <a href="#!" class="pc-link">Level 3.3<span class="pc-arrow">
                            <ChevronRightIcon />
                          </span></a>
                        <ul class="pc-submenu">
                          <li class="pc-item"><a class="pc-link" href="#!">Level 4.1</a></li>
                          <li class="pc-item"><a class="pc-link" href="#!">Level 4.2</a></li>
                        </ul>
                      </li>
                    </ul>
                  </li>
                </ul>
              </li>
              <li class="pc-item" :class="{ 'active': this.$route.path === '/sample-page' }"><router-link to="/sample-page" class="pc-link">
                  <span class="pc-micon">
                    <i class="ph-duotone ph-desktop"></i>
                  </span>
                  <span class="pc-mtext">Sample page</span></router-link>
              </li>
            </ul>
          </li>
        </ul>
        <BCard no-body class="nav-action-card bg-brand-color-4">
          <!-- navCardBg -->
          <BCardBody style="background-image: url('@/assets/images/layout/nav-card-bg.svg')">
            <h5 class="text-dark">Help Center</h5>
            <p class="text-dark text-opacity-75">Please contact us for more questions.</p>
            <a href="https://phoenixcoded.support-hub.io/" class="btn btn-primary" target="_blank">Go to help Center</a>
          </BCardBody>
        </BCard>
      </div>
      <BCard no-body class="pc-user-card">
        <BCardBody>
          <div class="d-flex align-items-center">
            <div class="flex-shrink-0">
              <img src="../assets/images/user/avatar-1.jpg" alt="user-image" class="user-avtar wid-45 rounded-circle">
            </div>
            <div class="flex-grow-1 ms-3 me-2">
              <h6 class="mb-0">Jonh Smith</h6>
              <small>Administrator</small>
            </div>
            <div class="dropdown">
              <a href="#" class="btn btn-icon btn-link-secondary avtar arrow-none dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false" data-bs-offset="0,20">
                <i class="ph-duotone ph-windows-logo"></i>
              </a>
              <div class="dropdown-menu">
                <ul>
                  <li><a class="pc-user-links">
                      <i class="ph-duotone ph-user"></i>
                      <span>My Account</span>
                    </a></li>
                  <li><a class="pc-user-links">
                      <i class="ph-duotone ph-gear"></i>
                      <span>Settings</span>
                    </a></li>
                  <li><a class="pc-user-links">
                      <i class="ph-duotone ph-lock-key"></i>
                      <span>Lock Screen</span>
                    </a></li>
                  <li><a class="pc-user-links">
                      <i class="ph-duotone ph-power"></i>
                      <span>Logout</span>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </BCardBody>
      </BCard>
    </div>
  </nav>

  <div class="pc-container">
    <div class="pc-content">
      <!-- [ breadcrumb ] start -->
      <div class="page-header">
        <div class="page-block">
          <BRow class="align-items-center">
            <BCol md="12" class="col-md-12">
              <ul class="breadcrumb">
                <li class="breadcrumb-item"><a href="../dashboard">Home</a></li>
                <li class="breadcrumb-item"><a href="javascript: void(0)">Layout</a></li>
                <li class="breadcrumb-item" aria-current="page">Horizontal Layout</li>
              </ul>
            </BCol>
            <BCol md="12" class="col-md-12">
              <div class="page-header-title">
                <h2 class="mb-0">Horizontal Layout</h2>
              </div>
            </BCol>
          </BRow>
        </div>
      </div>
      <!-- [ breadcrumb ] end -->

      <!-- [ Main Content ] start -->
      <BRow>
        <!-- [ sample-page ] start -->
        <BCol sm="12">
          <BCard no-body>
            <BCardHeader>
              <h5>Hello card</h5>
            </BCardHeader>
            <BCardBody>
              <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                dolore magna
                aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                consequat. Duis
                aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                Excepteur sint occaecat
                cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
              </p>
            </BCardBody>
          </BCard>
          <BCard>
            <BCardHeader>
              <h5>Hello card</h5>
            </BCardHeader>
            <BCardBody>
              <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                dolore magna
                aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                consequat. Duis
                aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                Excepteur sint occaecat
                cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
              </p>
            </BCardBody>
          </BCard>
          <BCard>
            <BCardHeader>
              <h5>Hello card</h5>
            </BCardHeader>
            <BCardBody>
              <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                dolore magna
                aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                consequat. Duis
                aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                Excepteur sint occaecat
                cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
              </p>
            </BCardBody>
          </BCard>
          <BCard>
            <BCardHeader>
              <h5>Hello card</h5>
            </BCardHeader>
            <BCardBody>
              <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                dolore magna
                aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                consequat. Duis
                aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                Excepteur sint occaecat
                cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
              </p>
            </BCardBody>
          </BCard>
        </BCol>
        <!-- [ sample-page ] end -->
      </BRow>
      <!-- [ Main Content ] end -->
    </div>
  </div>
  <div class="pc-footer">
    <FooterComponents />
  </div>
  <Rightbar />
</template>