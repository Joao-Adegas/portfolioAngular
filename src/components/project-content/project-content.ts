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
  
  {name:"SmartCity",description:"SmartCity is a project that focus in manegement of sensors, histories and environments.",image:"assets/images/SmartCity.png",languages:["Python","JavaScript"],link:"https://github.com/Joao-Adegas/SmartCity",classification:"Web development"},

  {name:"SchoolSystem",description:"Containing a focus in Token by diferent users",image:"assets/images/SchoolSystem.png",languages:["Python","JavaScript","Sass"],link:"https://github.com/Joao-Adegas/SchoolSystem",classification:"Web development"},
  
  {name:"TaskManager",description:"A focus in learning in ARIA and acessibility.",image:"assets/images/TaskManager.png",languages:["Python","JavaScript","Scss"],link:"https://github.com/Joao-Adegas/TasksManager",classification:"Web development"},
 

 ] 
}
