<template>
  <div class="checkout-wrapper">
    <div class="checkout-container">
      <h2 class="checkout-title">Checkout</h2>

      <form @submit.prevent="placeOrder">
        <div class="form-group">
          <label for="name">Name</label>
          <input type="text" id="name" v-model="order.name" required />
        </div>

        <div class="form-group">
          <label for="address">Shipping Address</label>
          <textarea id="address" v-model="order.address" required></textarea>
        </div>

        <div class="form-group">
          <label for="email">Email</label>
          <input type="email" id="email" v-model="order.email" required />
        </div>

        <div class="form-group">
          <label for="payment">Payment Method</label>
          <select v-model="order.payment" required>
            <option value="credit-card">Credit Card</option>
            <option value="paypal">PayPal</option>
          </select>
        </div>

        <button type="submit" class="submit-button">Place Order</button>
      </form>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const order = ref({
  name: '',
  address: '',
  email: '',
  payment: 'credit-card',
})

const placeOrder = () => {
  // Submit order logic here
  console.log(order.value)
}
</script>

<style scoped>
.checkout-wrapper {
  display: flex;
  justify-content: center;
  padding: 2rem;
}

.checkout-container {
  max-width: 600px;
  width: 100%;
  background: white;
  padding: 2rem;
  border-radius: 10px;
  box-shadow: 0 0 10px #ccc;
}

.checkout-title {
  font-size: 28px;
  margin-bottom: 1.5rem;
  text-align: center;
}

.form-group {
  margin-bottom: 1rem;
}

label {
  display: block;
  font-weight: bold;
  margin-bottom: 0.5rem;
}

input, textarea, select {
  width: 100%;
  padding: 0.75rem;
  border: 1px solid #ccc;
  border-radius: 8px;
}

.submit-button {
  padding: 1rem 2rem;
  background-color: #28a745;
  color: white;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  width: 100%;
}

.submit-button:hover {
  background-color: #218838;
}

@media (max-width: 768px) {
  .checkout-container {
    padding: 1rem;
  }

  .submit-button {
    width: 100%;
  }

  input, textarea, select {
    font-size: 0.9rem;
  }
}
</style>
