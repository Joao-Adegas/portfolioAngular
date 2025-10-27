import { Component } from '@angular/core';

interface Contact{
  contact:string,
  icon?:string
  text:string
}

@Component({
  selector: 'assetPerfil',
  imports: [],
  templateUrl: './aside.html',
  styleUrl: './aside.sass'
})


export class Aside {
  contacts:Contact[] = [
    {contact:"Email",icon:"/assets/images/Email.png",text:"pedrojoao6378@gmail.com"},
    {contact:"Phone",icon:"/assets/images/smartphone.png",text:"+55 (19) 98278-3882"},    
    {contact:"Location",icon:"/assets/images/Location.png",text:"Hortôlandia/SP"},
  ]
}
