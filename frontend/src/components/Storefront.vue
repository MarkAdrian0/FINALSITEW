<template>
  <div class="storefront-wrapper">
    <div class="product-grid">
      <div class="product-card" v-for="product in products" :key="product.id">
        <img :src="product.image" alt="Product" class="product-image" />
        <div class="product-info">
          <h3 class="product-title">{{ product.name }}</h3>
          <p class="product-description">{{ product.description }}</p>
          <div class="product-price">₱{{ product.price }}</div>
          <button @click="addToCart(product)">Add to Cart</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { getProducts } from '../api'

// Initialize a reactive variable to hold the products
const products = ref([])

// Fetch the products when the component is mounted
onMounted(async () => {
  try {
    const response = await getProducts()
    products.value = response.data
  } catch (error) {
    console.error("Error fetching products:", error)
  }
})

// Function to add a product to the cart
const addToCart = (product) => {
  let cart = JSON.parse(localStorage.getItem('cart') || '[]')
  const existingProduct = cart.find(item => item.id === product.id)

  if (existingProduct) {
    existingProduct.quantity += 1
  } else {
    cart.push({ ...product, quantity: 1 })
  }

  localStorage.setItem('cart', JSON.stringify(cart))
}
</script>

<style scoped>
.storefront-wrapper {
  display: flex;
  justify-content: center;
  padding: 2rem;
}

.product-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 1.5rem;
  width: 100%;
}

.product-card {
  background-color: white;
  padding: 1rem;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  text-align: center;
}

.product-image {
  width: 100%;
  max-height: 200px;
  object-fit: cover;
  margin-bottom: 1rem;
  border-radius: 8px;
}

.product-info {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.product-title {
  font-size: 1.2rem;
  font-weight: bold;
  margin-bottom: 0.5rem;
}

.product-description {
  font-size: 1rem;
  color: #555;
  margin-bottom: 0.5rem;
}

.product-price {
  font-size: 1.2rem;
  color: #007bff;
  margin-bottom: 1rem;
}

button {
  padding: 0.5rem 1.5rem;
  background-color: #28a745;
  color: white;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  font-size: 1rem;
}

button:hover {
  background-color: #218838;
}

@media (max-width: 768px) {
  .product-card {
    padding: 1rem 0.5rem;
  }

  .product-title {
    font-size: 1rem;
  }

  .product-description {
    font-size: 0.9rem;
  }

  .product-price {
    font-size: 1rem;
  }
}
</style>
