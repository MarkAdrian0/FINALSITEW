<template>
  <div class="cart-wrapper">
    <div class="cart-container">
      <h2 class="cart-title">Your Cart</h2>

      <div v-if="cart.length === 0" class="empty-message">
        Your cart is empty.
      </div>

      <table v-else class="cart-table">
        <thead>
          <tr>
            <th>Product</th>
            <th>Qty</th>
            <th>Price</th>
            <th>Subtotal</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in cart" :key="item.id">
            <td>{{ item.name }}</td>
            <td>
              <input
                type="number"
                v-model.number="item.quantity"
                min="1"
                @change="updateCart"
                style="width: 60px;"
              />
            </td>
            <td>₱{{ item.price }}</td>
            <td>₱{{ (item.quantity * item.price).toFixed(2) }}</td>
            <td>
              <button @click="removeFromCart(item.id)">Remove</button>
            </td>
          </tr>
        </tbody>
      </table>

      <div v-if="cart.length > 0" class="cart-summary">
        <div><strong>Total:</strong> ₱{{ cartTotal }}</div>
        <router-link to="/checkout">
          <button class="checkout-button">Go to Checkout</button>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, computed } from 'vue'

// Initialize the cart as a reactive variable
const cart = ref([])

// Fetch the cart data from localStorage when the component is mounted
onMounted(() => {
  cart.value = JSON.parse(localStorage.getItem('cart') || '[]')
})

// Function to remove an item from the cart
const removeFromCart = (productId) => {
  cart.value = cart.value.filter(item => item.id !== productId)
  localStorage.setItem('cart', JSON.stringify(cart.value))
}

// Function to update the cart whenever a quantity changes
const updateCart = () => {
  localStorage.setItem('cart', JSON.stringify(cart.value))
}

// Compute the total amount in the cart
const cartTotal = computed(() =>
  cart.value.reduce((sum, item) => sum + item.quantity * item.price, 0).toFixed(2)
)
</script>

<style scoped>
.cart-wrapper {
  display: flex;
  justify-content: center;
  padding: 2rem;
}

.cart-container {
  max-width: 800px;
  width: 100%;
  background: white;
  padding: 2rem;
  border-radius: 10px;
  box-shadow: 0 0 10px #ccc;
}

.cart-title {
  font-size: 28px;
  margin-bottom: 1.5rem;
  text-align: center;
}

.cart-table {
  width: 100%;
  border-collapse: collapse;
  margin-bottom: 1rem;
}

.cart-table th,
.cart-table td {
  padding: 0.75rem;
  border-bottom: 1px solid #ddd;
  text-align: center;
}

.cart-summary {
  text-align: right;
  margin-top: 1rem;
}

.checkout-button {
  padding: 0.5rem 1.5rem;
  background-color: #28a745;
  color: white;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  margin-top: 1rem;
}

.checkout-button:hover {
  background-color: #218838;
}

.empty-message {
  text-align: center;
  color: #777;
}

@media (max-width: 768px) {
  .cart-container {
    padding: 1rem;
  }

  .cart-table {
    font-size: 0.9rem;
  }

  .checkout-button {
    width: 100%;
  }
}
</style>
