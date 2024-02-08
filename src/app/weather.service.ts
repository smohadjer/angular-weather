import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Weather } from './weather';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  private apiUrl = 'https://api.openweathermap.org/data/2.5/weather';
  private apiKey = '8d473a65db1a9e8a4c542feb69eb6614';

  constructor(private http: HttpClient) {}

  getWeather(city: string): Observable<Weather> {
    const options = new HttpParams()
      .set('units', 'metric')
      .set('q', city)
      .set('appId', this.apiKey);
      const weather = this.http.get<Weather>(this.apiUrl, {
        params: options
      });
      return weather;
  }

  // does the same thing as getWeather without using Angular HttpParams
  // and HttpClient obervable
  getWeatherJS(city: string): Promise<Weather> {
    const url = new URL(this.apiUrl);
    url.searchParams.set('units', 'metric');
    url.searchParams.set('q', city);
    url.searchParams.set('appId', this.apiKey);
    const urlString = url.toString();
    return fetch(urlString).then(res => res.json());
  }
}
