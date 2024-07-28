import { Component } from '@angular/core';
import { SefeLinkDirective } from '../sefe-link.directive';

@Component({
  selector: 'app-learning-resources',
  templateUrl: './learning-resources.component.html',
  styleUrl: './learning-resources.component.css',
  standalone: true,
  imports: [SefeLinkDirective]
})
export class LearningResourcesComponent {}
