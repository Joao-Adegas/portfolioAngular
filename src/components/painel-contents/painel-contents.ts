import { Component } from '@angular/core';
import { NavBar } from '../navbar/navbar';
import { AboutContainer } from '../about-container/about-container';
import { ProjectContent } from '../project-content/project-content';
import { AchivimentsContent } from '../achiviments-content/achiviments-content';
import { SkillsContent } from '../skills-content/skills-content';

@Component({
  selector: 'painel-contents',
  standalone:true,
  imports: [NavBar,AboutContainer,ProjectContent,AchivimentsContent,SkillsContent],
  templateUrl: './painel-contents.html',
  styleUrl: './painel-contents.sass'
})
export class PainelContents {
  sessaoAtiva:string = 'about'

  onSessaoMudou(sessao:string){
    this.sessaoAtiva = sessao;
  }

    mudarSessao(novaSessao: string) {
    this.sessaoAtiva = novaSessao;
  }

}
