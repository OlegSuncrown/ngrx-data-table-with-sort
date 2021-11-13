import { Component, OnInit } from '@angular/core';
import { DataService } from './services/data.service';
import { FormControl } from '@angular/forms';

// RxJs
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';

// NgRx
import { Store } from '@ngrx/store';
import { DataTableState } from './models/data-table';
import { setFilterBy } from './@ngrx/data-table';

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

  searchControl = new FormControl('')
  constructor(private dataService: DataService, private store: Store<DataTableState>) {}

  ngOnInit() {
    this.data$ = this.dataService.getData().pipe(
      startWith(null),
    );

    this.searchControl.valueChanges.pipe(
      map(query => query.toLowerCase())
    ).subscribe((query) => {
      console.log(query)
      this.store.dispatch(setFilterBy({ filters: { filterBy: ['name', 'city'], query } }));
    })
  }
}
