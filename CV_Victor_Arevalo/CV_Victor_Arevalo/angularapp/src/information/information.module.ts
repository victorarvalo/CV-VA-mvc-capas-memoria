import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { PersonalDataComponent } from './component/personal-data/personal-data.component';
import { SummaryComponent } from './component/summary/summary.component';
import { EducationDataComponent } from './component/education-data/education-data.component';
import { FullinformationComponent } from './component/fullinformation/fullinformation.component';
import { InformationRoutingModule } from './information-routing.module';
import { ExperienceDataComponent } from './component/experience-data/experience-data.component';
import { PersonalReferenceDataComponent } from './component/personal-reference-data/personal-reference-data.component';
import { ExperienDataListComponent } from './component/experien-data-list/experien-data-list.component';

import { MaterialModelModule } from './../app/material.model/material.model.module'

@NgModule({
  declarations: [PersonalDataComponent,
    SummaryComponent,
    EducationDataComponent,
    ExperienceDataComponent,
    PersonalReferenceDataComponent,
    FullinformationComponent,
    ExperienDataListComponent],
  imports: [
    CommonModule, BrowserModule, HttpClientModule, InformationRoutingModule,
    MaterialModelModule
  ]
})
export class InformationModule { }
