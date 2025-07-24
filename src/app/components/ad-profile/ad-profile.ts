import { Component, ElementRef, ViewChild } from '@angular/core';
import { UserSettings } from '../../models/user-settings.model';
import { sampleUserSettings } from '../../../assets/samples/sampleUserSettings';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'ad-profile',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './ad-profile.html',
  styleUrl: './ad-profile.scss'
})
export class AdProfile {
  user : UserSettings = sampleUserSettings;
  isHovered : boolean = false;
  isLocked : boolean = false;

 //WANT: できれば週番号とsectionの意味の明示などをする(貢献rankerシステムである説明ページに飛ぶなど)

 onMouseEnter() {
  this.isHovered = true;
 }
 onMouseLeave() {
  this.isHovered = false;
 }
 onClick() {
  this.isLocked = !this.isLocked;
 }
}
