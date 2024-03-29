import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { Weather } from '../weather';
import { WeatherService } from '../weather.service';
import { DecimalPipe } from '@angular/common';

@Component({
  selector: 'app-weather',
  standalone: true,
  imports: [
    MatCardModule,
    MatIconModule,
    MatInputModule,
    DecimalPipe
  ],
  templateUrl: './weather.component.html',
  styleUrl: './weather.component.css'
})
export class WeatherComponent {
  weather: Weather | undefined;

  constructor(private weatherService: WeatherService) {}

  search(city: string) {
    // Angular's approach to fetch weather using Observable
    //this.weatherService.getWeather(city).subscribe(weather => this.weather = weather);

    // JavaScript's approach to fetch weather using Promises
    this.weatherService.getWeatherJS(city).then(weather => this.weather = weather);
  }
}
