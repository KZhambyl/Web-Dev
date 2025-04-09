import { Component, Inject, OnInit } from '@angular/core';
import { Company } from '../../models/company';
import { Vacancy } from '../../models/vacancy';
import { CompanyService } from '../../services/company.service';
import { NgFor, NgIf } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-company-list',
  imports: [NgFor, NgIf],
  templateUrl: './company-list.component.html',
  styleUrl: './company-list.component.css'
})
export class CompanyListComponent implements OnInit {
  companies: Company[] = []
  currentVacancies: Vacancy[] = []

  constructor(
    private companyService: CompanyService,
    private router: Router,
  ) {}

  ngOnInit(): void {
    this.loadCompanies()
  }

  loadCompanies(): void {
    this.companyService.getCompanies().subscribe((data) => {this.companies=data})
  }

  showVacancies(companyId: number):void {
    this.router.navigate(['/company', companyId])
  }
}
