from django.urls import path
from . import views

urlpatterns = [
    path('companies/', views.companyList, name='companies'),
    path('companies/<int:company_id>/', views.company, name='company_detail'),
    path('companies/<int:company_id>/vacancies/', views.company_vacancies, name='vacancies_of_company'),
    path('vacancies/', views.VacancyList.as_view(), name='vacancies'),
    path('vacancies/<int:vacancy_id>/', views.vacancyView.as_view(), name='vacancy_detail'),
    path('vacancies/top_ten/', views.VacancyTopTen.as_view(), name='top_ten_vacancies'),
]

# /api/companies - List of all Companies
# /api/companies/<int:id>/ - Get one Company
# /api/companies/<int:id>/vacancies/ - List of Vacancies by Company
# /api/vacancies/ - List of all Vacancies
# /api/vacancies/<int:id>/ - Get one Vacancy
# /api/vacancies/top_ten/ - List of top 10 vacancies sorted by decreasing salary