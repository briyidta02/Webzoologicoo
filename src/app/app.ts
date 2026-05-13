import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AnimalComponent } from './components/animal-component/animal-component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, AnimalComponent],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class App {
  protected readonly title = signal('Webzoologicoo');
  alias = "Briyid";
}