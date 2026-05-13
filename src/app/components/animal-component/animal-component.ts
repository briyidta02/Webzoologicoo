import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AnimalService } from '../../services/animal-service';

@Component({
  selector: 'app-animal-component',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './animal-component.html',
  styleUrls: ['./animal-component.css']
})
export class AnimalComponent implements OnInit {

  animalList: any = [];

  constructor(private animalService: AnimalService) {}

  getAllAnimals() {
    this.animalService.getAllAnimalsData().subscribe((data: {}) => {
      this.animalList = data;
    });
  }

  ngOnInit(): void {
    this.getAllAnimals();
  }
}
