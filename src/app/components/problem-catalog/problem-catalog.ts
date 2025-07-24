import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProblemItem } from '../problem-item/problem-item';
import { sampleProblems } from '../../../assets/samples/sampleProblems';

@Component({
  selector: 'problem-catalog',
  imports: [CommonModule, ProblemItem],
  templateUrl: './problem-catalog.html',
  styleUrl: './problem-catalog.scss'
})
export class ProblemCatalog {
  sampleProblems = sampleProblems;
}
