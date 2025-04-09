from django.shortcuts import get_object_or_404
from django.http import JsonResponse
from .models import Company, Vacancy
from django.forms.models import model_to_dict
from rest_framework.views import APIView
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

class company_post(APIView):
    def post(self, request):
        new_company = Company.objects.create(
            name = request.data['name'],
            description = request.data['description'],
            city = request.data['city'],
            address = request.data['address']
        )
        return JsonResponse(model_to_dict(new_company))
    
    # Using serializer
    # def post(self, request):
    #     serializer = CompanySerializer(request.data)
    #     serializer.is_valid()
    #     serializer.save()
    #     return Response({'new_company': serializer.data})

class vacancy_post(APIView):
    def post(self, request):
        new_vacancy = Vacancy.objects.create(
            name = request.data['name'],
            description = request.data['description'],
            salary = request.data['salary'],
            company = request.data['company'],
        )
        return JsonResponse(model_to_dict(new_vacancy))
    
    # def post(self, request):
    #     serializer = VacancySerializer(request.data)
    #     serializer.is_valid()
    #     serializer.save()
    #     return JsonResponse(serializer.data)

# /api/companies - List of all Companies
# /api/companies/<int:id>/ - Get one Company
# /api/companies/<int:id>/vacancies/ - List of Vacancies by Company
# /api/vacancies/ - List of all Vacancies
# /api/vacancies/<int:id>/ - Get one Vacancy
# /api/vacancies/top_ten/ - List of top 10 vacancies sorted by decreasing salary