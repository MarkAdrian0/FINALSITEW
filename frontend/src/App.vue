<template>
  <div>
    <header class="site-header">
      <h1>ChillTech Store</h1>
      <nav>
        <router-link to="/">Home</router-link>
        <router-link to="/cart">Cart</router-link>
        <router-link to="/checkout">Checkout</router-link>
      </nav>
    </header>
    <main class="site-content">
      <router-view />
    </main>
  </div>
</template>

<style scoped>
.site-header {
  background-color: #007bff;
  color: white;
  padding: 1rem 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.site-header nav a {
  color: white;
  margin-left: 1rem;
  text-decoration: none;
  font-weight: bold;
}

.site-content {
  padding: 2rem;
}
</style>
