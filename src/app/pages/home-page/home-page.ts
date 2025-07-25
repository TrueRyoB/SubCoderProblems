import { Component } from '@angular/core';
import { AppHeader } from '../../components/app-header/app-header';
import { AppFooter } from '../../components/app-footer/app-footer';
import { AdProfile } from '../../components/ad-profile/ad-profile';
import { ProblemCatalog } from '../../components/problem-catalog/problem-catalog';

@Component({
  selector: 'app-home-page',
  imports: [AppHeader, AppFooter, AdProfile, ProblemCatalog],
  templateUrl: './home-page.html',
  styleUrl: './home-page.scss'
})
export class HomePage {
}
