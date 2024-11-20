<script setup>
import { RouterView } from "vue-router";
</script>

<template>
  <nav class="navbar">
    <div class="logo">MyWebsite</div>
    <ul class="nav-links">
      <!-- <li><a href="/">Home</a></li>
      <li><a href="/about">About</a></li>
      <li><a href="/service">Services</a></li>
      <li><a href="/contact">Contact</a></li> -->

      <RouterLink active-class="active" class="router" to="/">Home</RouterLink>
      <RouterLink active-class="active" class="router" to="/about">About</RouterLink>
      <RouterLink active-class="active" class="router" to="/service">service</RouterLink>
      <RouterLink active-class="active" class="router" to="/contact">contact</RouterLink>
    </ul>
    <div class="menu-toggle" id="mobile-menu">&#9776;</div>
  </nav>
</template>

<style scoped>
.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #007bff;
  padding: 10px 20px;
}

.logo {
  font-size: 24px;
  color: white;
  font-weight: bold;
}

.nav-links {
  list-style: none;
  display: flex;
}

.nav-links .router {
  margin-left: 20px;
}

.nav-links .router {
  text-decoration: none;
  color: white;
  font-size: 18px;
  transition: color 0.3s ease;
}

.nav-links .router:hover {
  color: #ffeb3b;
}

/* Mobile menu */
.menu-toggle {
  display: none;
  font-size: 24px;
  cursor: pointer;
  color: white;
}

.active{
  background-color: #007bff;
  color: white;
  border-radius: 50%;
  padding: 5px;
}
</style>
