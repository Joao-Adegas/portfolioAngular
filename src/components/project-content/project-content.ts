import { Component } from '@angular/core';

interface Project{
  name:string,
  description:string,
  image:string
  languages:string[],
  link:string,
  classification: "Mobile" | "Artificial Inteligence (API)" | "Web development"
}

@Component({
  selector: 'project-content',
  imports: [],
  templateUrl: './project-content.html',
  styleUrl: './project-content.sass'
})

export class ProjectContent {
 projects:Project[]  = [
  
  {name:"SmartCity",description:"SmartCity is a project that focus in manegement of sensors, histories and environments with dashboards and a complete CRUD by APIRest",image:"assets/images/SmartCity.png",languages:["Python","Django","React.js"],link:"https://github.com/Joao-Adegas/SmartCity",classification:"Web development"},

  {name:"SchoolSystem",description:"Containing a focus in Token by diferent users and a complete CRUD of the Teachers, subjects, rooms and  directors",image:"assets/images/SchoolSystem.png",languages:["Python","Django","React.js","Sass"],link:"https://github.com/Joao-Adegas/SchoolSystem",classification:"Web development"},
  
  {name:"TaskManager",description:"This project is appropriate by SAEP, so I acept a chalenge os the develop, with a focus in  learning in ARIA and acessibility.",image:"assets/images/TaskManager.png",languages:["FastFy","JavaScript","React.js","Scss"],link:"https://github.com/Joao-Adegas/TasksManager",classification:"Web development"},

  {name:"EightWays",description:"This project is appropriate by SAEP, so I acept a chalenge os the develop, with a focus in  learning in ARIA and acessibility.",image:"assets/images/EitchWeis.jpg",languages:["React Native","FastApi","Python"],link:"https://github.com/Joao-Adegas/EightWays",classification:"Mobile"},

 ] 
}
