from django.urls import path
from . import views

app_name = 'api'
urlpatterns = [
    path('products/', views.products_list, name='products_list'),
    path('products/<int:product_id>/', views.product_detail, name='product_detail'),
    path('categories/', views.categories_list, name='categories_list'),
    path('categories/<int:category_id>/', views.category_detail, name='category_detail'),
    path('categories/<int:category_id>/products/', views.category_products, name='category_products'),
]

# /api/products - List of all Products
# /api/products/<int:id>/ - Get one Product
# /api/categories/ - List of all Categories
# /api/categories/<int:id>/ - Get one Category
# /api/categories/<int:id>/products/ - List of Products by Category