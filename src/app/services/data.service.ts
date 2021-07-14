import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class DataService {
  URL = 'https://jsonplaceholder.typicode.com/users'

  constructor(private http: HttpClient) { }

  getData() {
    return this.http.get<any>(this.URL).pipe(
      map(data => {
        return data.map((item: any) => ({...item, city: item.address.city}))
      }),
    );
  }
}
