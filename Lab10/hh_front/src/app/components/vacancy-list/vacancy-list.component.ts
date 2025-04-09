import { Component, OnInit } from '@angular/core';
import { Vacancy } from '../../models/vacancy';
import { ActivatedRoute } from '@angular/router';
import { CompanyService } from '../../services/company.service';
import { VacancyService } from '../../services/vacancy.service';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-vacancy-list',
  imports: [NgFor],
  templateUrl: './vacancy-list.component.html',
  styleUrl: './vacancy-list.component.css'
})
export class VacancyListComponent implements OnInit{
  vacancies: Vacancy[] = [];
  companyId: number = -1;

  constructor(
    private route: ActivatedRoute,
    private companyService: CompanyService,
    private vacancyService: VacancyService,
  ) {}

  ngOnInit(): void {
    this.companyId = +this.route.snapshot.paramMap.get('id')!;
    this.loadVacancies()
  }

  loadVacancies(): void {
    this.companyService.getCompanyVacancies(this.companyId).subscribe((data) => {
      this.vacancies = data
    })
  }

  deleteVacancy(vacancyId: number): void {
    this.vacancyService.deleteVacancy(vacancyId).subscribe((data) => {
      console.log(data)
    })
  }
}
