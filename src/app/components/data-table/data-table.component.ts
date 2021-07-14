import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-data-table',
  templateUrl: './data-table.component.html',
  styleUrls: ['./data-table.component.scss']
})
export class DataTableComponent implements OnInit {
  @Input() data!: any[];
  @Input() headerRow!: string[];
  @Input() columnWithSort!: string[];
  
  constructor() { }

  ngOnInit(): void {
    console.log(this.data)
  }
}
