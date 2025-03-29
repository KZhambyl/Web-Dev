from django.shortcuts import get_object_or_404
from django.http import JsonResponse
from .models import Company, Vacancy
from django.forms.models import model_to_dict
# Create your views here.

def companies(request):
    companies = Company.objects.all()
    companies_json = [model_to_dict(company) for company in companies]
    return JsonResponse({'companies': companies_json})

def company_detail(request, id):
    company = get_object_or_404(Company, pk=id)
    return JsonResponse(model_to_dict(company))

def company_vacancies(request, id):
    vacancies = Vacancy.objects.filter(company = id)
    vacancies_json = [model_to_dict(vacancy) for vacancy in vacancies]
    return JsonResponse({'vacancies': vacancies_json})

def vacancies(request):
    vacancies = Vacancy.objects.all()
    vacancies_json = [model_to_dict(vacancy) for vacancy in vacancies]
    return JsonResponse({'vacancies':vacancies_json})

def vacancy_detail(request, id):
    vacancy = get_object_or_404(Vacancy, pk=id)
    return JsonResponse(model_to_dict(vacancy))

def top_ten_vacancies(request):
    vacancies = Vacancy.objects.order_by('-salary')[:10]
    vacancies_json = [model_to_dict(vacancy) for vacancy in vacancies]
    return JsonResponse({'vacancies': vacancies_json})

# /api/companies - List of all Companies
# /api/companies/<int:id>/ - Get one Company
# /api/companies/<int:id>/vacancies/ - List of Vacancies by Company
# /api/vacancies/ - List of all Vacancies
# /api/vacancies/<int:id>/ - Get one Vacancy
# /api/vacancies/top_ten/ - List of top 10 vacancies sorted by decreasing salary