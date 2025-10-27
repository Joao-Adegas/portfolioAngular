import { Component, EventEmitter,Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { setActiveConsumer } from '@angular/core/primitives/signals';
interface NavLinks {
  id:string
  label:string
}

@Component({
  selector: 'navbar',
  standalone:true,
  imports: [CommonModule],
  templateUrl: './navbar.html',
  styleUrls: ['./navbar.sass']
})
export class NavBar {

  @Output() sessaoMudou = new EventEmitter<string>();
  sessaoAtiva: string = 'about';

  navLinks: NavLinks[] =[
    {id:'about',label:'About'},
    {id:'projects',label:'Projects'},
    {id:'achiviments',label:'Achiviments'},
    {id:'skills',label:'Skills'},
  ];

  mudarSessao(sessao:string){
    this.sessaoAtiva = sessao;
    this.sessaoMudou.emit(sessao);
  }

  get labelAtivo():string{
    return this.navLinks.find(link => link.id === this.sessaoAtiva)?.label || ''
  }
}
