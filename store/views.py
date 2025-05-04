from rest_framework import viewsets
from rest_framework.response import Response
from rest_framework.decorators import api_view
from django.http import HttpResponse
from .models import Product, Order, OrderItem
from .serializers import ProductSerializer, OrderSerializer

# Homepage view
@api_view(['GET'])
def home(request):
    return Response({"message": "Welcome to the E-Commerce API!"})

# Product API
class ProductViewSet(viewsets.ModelViewSet):
    queryset = Product.objects.all()
    serializer_class = ProductSerializer

# Order API
class OrderViewSet(viewsets.ModelViewSet):
    queryset = Order.objects.all()
    serializer_class = OrderSerializer
