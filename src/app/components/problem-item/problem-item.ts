import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProblemDetail } from '../../models/problem-detail.model';
import { Input } from '@angular/core';

@Component({
  selector: 'problem-item',
  imports: [CommonModule],
  templateUrl: './problem-item.html',
  styleUrl: './problem-item.scss'
})

export class ProblemItem {
  @Input() problem!: ProblemDetail;
}
