import { Component, Input, OnInit } from '@angular/core';




@Component({
  selector: 'app-education-data',
  templateUrl: './education-data.component.html',
  styleUrls: ['./education-data.component.css']
})
export class EducationDataComponent implements OnInit{
  
 @Input() educationData: any;

  constructor(){

  }
  
  ngOnInit(): void {
    
  }

  styles(): { [klass: string]: any; }|null|undefined {
    var institutionString: string = this.educationData.institution;
    if(institutionString.includes("Salle")){
      return {
        'background-image': 'url("./../../../assets/salle.png")',
        'background-size': 'cover'
      }
    }
    if(institutionString.includes("Interamericano")){
      return {
        'background-image': 'url("./../../../assets/colegioInteramericano.png")',
        'background-size': 'cover'
      }
    }
    if(institutionString.includes("Angular")){
      return {
        'background-image': 'url("./../../../assets/angular.png")',
        'background-size': 'cover'
      }
    }
    if(institutionString.includes("Sena")){
      return {
        'background-image': 'url("./../../../assets/sena.png")',
        'background-size': 'cover'
      }
    }
    if(institutionString.includes("Udemy")){
      return {
        'background-image': 'url("./../../../assets/udemy.png")',
        'background-size': 'cover'
      }
    }
    if(institutionString.includes("KOE")){
      return {
        'background-image': 'url("./../../../assets/koe.png")',
        'background-size': 'cover'
      }
    }
    if(institutionString.includes("Coursera")){
      return {
        'background-image': 'url("./../../../assets/coursera.png")',
        'background-size': 'cover'
      }
    }
    return undefined;
    }

    descargar() {
      var titleString: String = this.educationData.title;
      if(titleString.includes("Bachiller Academico")){
        var name:string = "./../../../assets/certificates/Bachiller Academico.jpg"
        const downloadlink = document.createElement("a");
        const fileName = "Bachiller Academico.jpg"
        downloadlink.href = name;
        downloadlink.download = fileName;
        downloadlink.click();
      }
      if(titleString.includes("Ingeniero de Diseño y Automatización Electrónica")){
        var name:string = "./../../../assets/certificates/Ingeniero de Diseño y Automatización Electrónica.jpg"
        const downloadlink = document.createElement("a");
        const fileName = "Ingeniero de Diseño y Automatización Electrónica.jpg"
        downloadlink.href = name;
        downloadlink.download = fileName;
        downloadlink.click();
      }
      if(titleString.includes("Create Serverless Applications")){
          var name:string = "./../../../assets/certificates/Create Serverless Applications.pdf"
          const downloadlink = document.createElement("a");
          const fileName = "Create Serverless Applications.pdf"
          downloadlink.href = name;
          downloadlink.download = fileName;
          downloadlink.click();
        }
        if(titleString.includes("Connect Your Services with Microsoft Azure Service Bus")){
          var name:string = "./../../../assets/certificates/Connect Your Services with Microsoft Azure Service Bus.pdf"
          const downloadlink = document.createElement("a");
          const fileName = "Connect Your Services with Microsoft Azure Service Bus.pdf"
          downloadlink.href = name;
          downloadlink.download = fileName;
          downloadlink.click();
        }
        if(titleString.includes("Data Storage in Microsoft Azure for Associate Developers")){
          var name:string = "./../../../assets/certificates/Data Storage in Microsoft Azure for Associate Developers.pdf"
          const downloadlink = document.createElement("a");
          const fileName = "Data Storage in Microsoft Azure for Associate Developers.pdf"
          downloadlink.href = name;
          downloadlink.download = fileName;
          downloadlink.click();
        }
        if(titleString.includes("Deploy a website with Azure Virtual Machines")){
          var name:string = "./../../../assets/certificates/Deploy a website with Azure Virtual Machines.pdf"
          const downloadlink = document.createElement("a");
          const fileName = "Deploy a website with Azure Virtual Machines.pdf"
          downloadlink.href = name;
          downloadlink.download = fileName;
          downloadlink.click();
        }
      }
}
