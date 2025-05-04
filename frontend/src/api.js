import axios from 'axios'

const api = axios.create({
  baseURL: 'http://localhost:8000/api/',
})

export const getProducts = () => api.get('products/')
export const createOrder = (data) => api.post('orders/', data)
export const addOrderItem = (orderId, item) =>
  api.post(`orders/${orderId}/items/`, item)

export default api
