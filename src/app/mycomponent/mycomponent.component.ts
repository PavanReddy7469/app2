import { Component } from '@angular/core';

@Component({
  selector: 'app-mycomponent',
  standalone: true,
  imports: [],
  templateUrl: './mycomponent.component.html',
  styleUrl: './mycomponent.component.css'
})
export class MycomponentComponent {
  message: string = 'This is My component';
  buttonDisabled: boolean = false;

}
