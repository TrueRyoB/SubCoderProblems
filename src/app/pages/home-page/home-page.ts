import { Component } from '@angular/core';
import { AppHeader } from '../../components/app-header/app-header';
import { AppFooter } from '../../components/app-footer/app-footer';
import { AdProfile } from '../../components/ad-profile/ad-profile';

@Component({
  selector: 'app-home-page',
  imports: [AppHeader, AppFooter, AdProfile],
  templateUrl: './home-page.html',
  styleUrl: './home-page.scss'
})
export class HomePage {
 //WANT: できれば週番号とsectionの意味の明示などをする(貢献rankerシステムである説明ページに飛ぶなど)
 //TODO: usernameとmessage(truncated)をデータベースから取得して、ad-profileに渡す
}
