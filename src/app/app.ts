import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Aside } from '../components/aside/aside'
import { NavBar } from '../components/navbar/navbar'
import { PainelContents } from '../components/painel-contents/painel-contents';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Aside,PainelContents],
  templateUrl: './app.html',
  styleUrl: './app.sass'
})
export class App {

}
