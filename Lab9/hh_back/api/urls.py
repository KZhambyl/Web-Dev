from django.urls import path
from . import views

urlpatterns = [
    path('companies/', views.companies, name='companies'),
    path('companies/<int:id>/', views.company_detail, name='company_detail'),
    path('companies/<int:id>/vacancies/', views.company_vacancies, name='vacancies_of_company'),
    path('vacancies/', views.vacancies, name='vacancies'),
    path('vacancies/<int:id>/', views.vacancy_detail, name='vacancy_detail'),
    path('vacancies/top_ten/', views.top_ten_vacancies, name='top_ten_vacancies'),
    path('company_post/', views.company_post.as_view(), name = 'company_post'),
    path('vacancy_post/', views.vacancy_post.as_view(), name = 'vacancy_post'),

]

# /api/companies - List of all Companies
# /api/companies/<int:id>/ - Get one Company
# /api/companies/<int:id>/vacancies/ - List of Vacancies by Company
# /api/vacancies/ - List of all Vacancies
# /api/vacancies/<int:id>/ - Get one Vacancy
# /api/vacancies/top_ten/ - List of top 10 vacancies sorted by decreasing salary