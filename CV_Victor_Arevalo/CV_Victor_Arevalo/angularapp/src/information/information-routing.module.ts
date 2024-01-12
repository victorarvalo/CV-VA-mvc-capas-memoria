import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { PersonalDataComponent } from './component/personal-data/personal-data.component';
import { PersonalReferenceDataComponent } from './component/personal-reference-data/personal-reference-data.component';
import { FullinformationComponent } from './component/fullinformation/fullinformation.component';
import { ExperienDataListComponent } from './component/experien-data-list/experien-data-list.component';
import { SummaryDataListComponent } from './component/summary-data-list/summary-data-list.component';
import { EducationDataListComponent } from './component/education-data-list/education-data-list.component'

const routes: Routes = [
    {path:'PersonalData',component:PersonalDataComponent},
    {path:'SummaryListData',component:SummaryDataListComponent},
    {path:'EducationListData',component:EducationDataListComponent},
    {path:'ExperienceListData',component:ExperienDataListComponent},
    {path:'PersonalReference',component:PersonalReferenceDataComponent},
    {path:'FullInformation',component:FullinformationComponent}  
  ];
  
  @NgModule({
    declarations: [],
    imports: [
      CommonModule,
      RouterModule.forChild(routes)
    ],
    exports:[RouterModule]
  })
  export class InformationRoutingModule { }