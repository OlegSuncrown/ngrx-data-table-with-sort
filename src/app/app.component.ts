import { Component, OnInit } from '@angular/core';
import { DataService } from './services/data.service';

// RxJs
import { Observable } from 'rxjs';
import { startWith } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  data$!: Observable<any[]>;
  headerRow = [
    { displayName: 'ID', key: 'id', hasSort: false },
    { displayName: 'Name', key: 'name', hasSort: true },
    { displayName: 'Username', key: 'username', hasSort: false },
    { displayName: 'City', key: 'city', hasSort: true },
  ];

  constructor(private dataService: DataService) {}

  ngOnInit() {
    this.data$ = this.dataService.getData().pipe(
      startWith(null),
    );
  }
}
