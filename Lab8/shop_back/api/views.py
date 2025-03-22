from django.shortcuts import render, get_object_or_404
from django.http import HttpResponse, JsonResponse
from django.template import loader
from .models import Product,Category
from django.forms.models import model_to_dict

# Create your views here.
def products_list(request):
    products = Product.objects.all()
    producs_json = [model_to_dict(product) for product in products]
    return JsonResponse({'products':producs_json})

def product_detail(request, product_id):
    product = get_object_or_404(Product, pk=product_id)
    return JsonResponse(model_to_dict(product))

def categories_list(request):
    categories = Category.objects.all()
    categories_json = [model_to_dict(category) for category in categories]
    return JsonResponse({'categories':categories_json})

def category_detail(request, category_id):
    category = get_object_or_404(Category,pk=category_id)
    return JsonResponse(model_to_dict(category))

def category_products(request, category_id):
    products = Product.objects.filter(category = category_id)
    products_json = [model_to_dict(product) for product in products]
    return JsonResponse({'products':products_json})