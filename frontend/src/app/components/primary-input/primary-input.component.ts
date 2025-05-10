import { Component, Input } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

type InputTypes = "text" | "email" | "senha"

@Component({
  selector: 'app-primary-input',
  imports: [ReactiveFormsModule],
  templateUrl: './primary-input.component.html',
  styleUrl: './primary-input.component.scss'
})
export class PrimaryInputComponent {
  @Input() type: InputTypes = "text";
  @Input() formName: string = "";
  @Input() placehgolder: string = "";
}
