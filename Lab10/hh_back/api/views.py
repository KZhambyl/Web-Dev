from rest_framework.response import Response
from .models import Company, Vacancy
from django.shortcuts import get_object_or_404
from rest_framework.views import APIView
from rest_framework.decorators import api_view, permission_classes
from .serializers import CompanySerializer,VacancySerializer
from rest_framework import generics

# Create your views here.

@api_view(['GET', 'POST'])
def companyList(request):
    if request.method == 'GET':
        companies = Company.objects.all()
        serializer = CompanySerializer(companies, many=True)
        return Response(serializer.data)
    elif request.method == 'POST':
        serializer = CompanySerializer(data = request.data)
        serializer.is_valid(raise_exception=True)
        serializer.save()
        return Response(serializer.data)

@api_view(['GET', 'PUT', 'DELETE'])
def company(request, company_id):
    if request.method == 'GET':
        company = get_object_or_404(Company, pk=company_id)
        return Response(CompanySerializer(company).data)
    
    elif request.method =='PUT':
        company = get_object_or_404(Company, pk=company_id)
        serializer = CompanySerializer(instance=company, data = request.data, partial=True)
        serializer.is_valid(raise_exception=True)
        serializer.save()
        return Response(serializer.data)

    elif request.method =='DELETE':
        company = get_object_or_404(Company, pk=company_id)
        company.delete()
        return Response({'message':'company is deleted'})
    
@api_view(['GET'])
def company_vacancies(request, company_id):
    vacancies = Vacancy.objects.filter(company=company_id)
    serializator = VacancySerializer(vacancies, many=True)
    return Response(serializator.data)

class vacancyView(APIView):
    def get(self,request, *args, **kwargs):
        pk = kwargs.get('vacancy_id')
        vacancy = get_object_or_404(Vacancy, pk=pk)
        serializer = VacancySerializer(vacancy)
        return Response(serializer.data)
    
    def put(self, request, *args, **kwargs):
        pk = kwargs.get('vacancy_id')
        vacancy = get_object_or_404(Vacancy, pk=pk)
        serializer = VacancySerializer(instance = vacancy, data=request.data, partial=True)
        serializer.is_valid(raise_exception=True)
        serializer.save()
        return Response(serializer.data)
    
    def delete(self, request, *args, **kwargs):
        pk = kwargs.get('vacancy_id')
        vacancy = get_object_or_404(Vacancy, pk=pk)
        vacancy.delete()
        return Response({'message':'vacancy deleted'})
    
class VacancyList(generics.ListCreateAPIView):
    queryset = Vacancy.objects.all()
    serializer_class = VacancySerializer
    lookup_field = 'vacancy_id'

class VacancyTopTen(APIView):
    def get(self, request):
        vacancies = Vacancy.objects.order_by('-salary')[:10]
        serializer = VacancySerializer(vacancies, many=True)
        return Response(serializer.data)



# /api/companies - List of all Companies
# /api/companies/<int:id>/ - Get one Company
# /api/companies/<int:id>/vacancies/ - List of Vacancies by Company
# /api/vacancies/ - List of all Vacancies
# /api/vacancies/<int:id>/ - Get one Vacancy
# /api/vacancies/top_ten/ - List of top 10 vacancies sorted by decreasing salary