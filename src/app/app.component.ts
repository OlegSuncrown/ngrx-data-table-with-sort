import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { startWith } from 'rxjs/operators';
import { DataService } from './services/data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  data$!: Observable<any[]>;
  headerRow = ['Id', 'Name', 'Username', 'City'];
  columnWithSort = ['Name', 'City'];

  constructor(private dataService: DataService) {}

  ngOnInit() {
    this.data$ = this.dataService.getData().pipe(
      startWith(null)
    )
  }
}
