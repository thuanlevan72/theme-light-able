<script>
export default {
  data() {
    return {
      currentMode: 'light'
    };
  },
  methods: {
    
    changeMode(mode) {
            this.currentMode = mode;

      if (mode == "dark") {
        document.body.setAttribute("data-pc-theme", "dark");
        document.body.setAttribute("data-topbar", "dark");
        document.body.classList.remove("mode-auto");
      } else if (mode == "auto") {
        document.body.setAttribute("data-pc-theme", "light");
        document.body.setAttribute("data-topbar", "light");
        document.body.classList.add("mode-auto");
      } else {
        document.body.setAttribute("data-pc-theme", "light");
        document.body.setAttribute("data-topbar", "light");
        document.body.classList.remove("mode-auto");
      }
    },
    toggleMenu() {
      document.getElementById("navbarTogglerDemo01").classList.toggle("show");
    },
  }
}
</script>

<template>
  <BNav class="navbar navbar-expand-md navbar-light default">
    <div class="container">
      <a class="pc-navbar-brand" href="/">
        <img src="@/assets/images/logo-dark.svg" alt="logo" class="logo-lg">
      </a>
      <button @click="toggleMenu" class="navbar-toggler rounded" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarTogglerDemo01">
        <ul class="navbar-nav ms-auto mt-lg-0 mt-2 mb-2 mb-lg-0 align-items-start">
          <li class="nav-item px-1">
            <router-link class="nav-link" to="/dashboard">Dashboard</router-link>
          </li>
          <li class="nav-item px-1">
            <router-link class="nav-link" to="/components/alert">Components</router-link>
          </li>
          <li class="nav-item px-1">
            <a class="nav-link" href="https://moonthemes-3.gitbook.io/moon-able-bootstrap/" target="_blank">Documentation</a>
          </li>
        </ul>
        <ul class="navbar-nav mb-2 mb-lg-0 align-items-start">
          <BDropdown variant="link-secondary" class="card-header-dropdown pb-0 pe-2" toggle-class="text-reset dropdown-btn arrow-none" menu-class="dropdown-menu-end" aria-haspopup="true" :offset="{ alignmentAxis: -150, crossAxis: 0, mainAxis: 20 }">
            <template #button-content><span class="text-muted"><i :class="currentMode === 'dark' ? 'ph-duotone ph-moon' : (currentMode === 'light' ? 'ph-duotone ph-sun-dim text-warning' : 'ph-duotone ph-cpu')"></i></span>
            </template>
            <a href="#!" class="dropdown-item" @click="changeMode('dark')">
              <i class="ph-duotone ph-moon"></i>
              <span>Dark</span>
            </a>
            <a href="#!" class="dropdown-item" @click="changeMode('light')">
              <i class="ph-duotone ph-sun-dim"></i>
              <span>Light</span>
            </a>
            <a href="#!" class="dropdown-item" @click="changeMode('auto')">
              <i class="ph-duotone ph-cpu"></i>
              <span>Default</span>
            </a>
          </BDropdown>
          <li class="nav-item">
            <a href="https://themes.com/item/moon-able-bootstrap-admin-dashboard/" target="_blank" class="btn btn-primary">Get Light <i class="ph-duotone ph-arrow-square-out"></i></a>
          </li>
        </ul>
      </div>
    </div>
  </BNav>
</template>