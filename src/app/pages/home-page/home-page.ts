import { Component } from '@angular/core';
import { AppHeader } from '../../components/app-header/app-header';
import { AppFooter } from '../../components/app-footer/app-footer';

@Component({
  selector: 'app-home-page',
  imports: [AppHeader, AppFooter],
  templateUrl: './home-page.html',
  styleUrl: './home-page.scss'
})
export class HomePage {

}
