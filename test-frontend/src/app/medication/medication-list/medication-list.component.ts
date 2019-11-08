import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-medication-list',
  templateUrl: './medication-list.component.html',
  styleUrls: ['./medication-list.component.css']
})
export class MedicationListComponent implements OnInit {

  @Input() medicationList: any[];
  @Output() editClick = new EventEmitter();
  @Output() movimentClick = new EventEmitter();

  medicationListOrig: any[];
  searchValue = '';
  mapOfSort: { [key: string]: string | null } = {
    name: null,
    dosage: null,
    unit: null,
    initialAmount: null,
    currentAmount: null,
    average_price: null
  };
  sortName: string | null = null;
  sortValue: string | null = null;

  constructor() { }

  ngOnInit() {
  }

  onEditClick(item) {
    this.editClick.emit(item);
  }

  onMovimentClick(item) {
    this.movimentClick.emit(item);
  }

  reset(): void {
    this.searchValue = '';
    this.search();
  }

  sort(sortName: string, value: string): void {
    this.sortName = sortName;
    this.sortValue = value;
    for (const key of Object.keys(this.mapOfSort)) {
      this.mapOfSort[key] = key === sortName ? value : null;
    }
    this.search();
  }

  search(): void {
    if (!this.medicationListOrig) {
      this.medicationListOrig = this.medicationList;
    }

    const filterFunc = (item: { name: string; }) => {
      return (
        item.name.indexOf(this.searchValue) !== -1
      );
    };
    const data = this.medicationListOrig.filter((item: { name: string; }) => filterFunc(item));
    if (this.sortName && this.sortValue) {
      this.medicationList = data.sort((a, b) =>
        this.sortValue === 'ascend'
          ? a[this.sortName!] > b[this.sortName!]
            ? 1
            : -1
          : b[this.sortName!] > a[this.sortName!]
          ? 1
          : -1
      );
    } else {
      this.medicationList = data;
    }
  }

}
