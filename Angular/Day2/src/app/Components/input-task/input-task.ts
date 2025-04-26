import { Component } from '@angular/core';
import { UppercaseLetterDirective } from '../../custom-directives/uppercase-letter';

@Component({
  selector: 'app-input-task',
  imports: [UppercaseLetterDirective],
  templateUrl: './input-task.html',
  styleUrl: './input-task.css',
})
export class InputTask {}
