import { Component } from '@angular/core';

interface Worked{
  work:string,
  description:string
  icon:string
}

@Component({
  selector: 'about-container',
  imports: [],
  templateUrl: './about-container.html',
  styleUrl: './about-container.sass'
})
export class AboutContainer {
  works:Worked[] = [
    {work:"Mobile",description:"I have worked on developing mobile platforms with Flutter and React Native, integrating with APIs or Dart.",icon:"assets/images/mobile.png"},
    {work:"Web",description:"I have worked on developing responsive web pages with database integration and backend.",icon:"assets/images/local-na-rede-internet.png"},
    {work:"FrontEnd Development",description:"I am a fast learner of FrontEnd technologies, libraries, and frameworks such as Angular, React.js, and Tailwindcss.",icon:"assets/images/front-end.png"},
    {work:"BackEnd Development",description:"I really enjoy backend development in creating REST API logic, databases, and artificial intelligence.",icon:"assets/images/back.png"},
  ]
}
