import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { MedicationService } from './medication.service';

@Component({
  selector: 'app-medication',
  templateUrl: './medication.component.html',
  styleUrls: ['./medication.component.css']
})

export class MedicationComponent implements OnInit {

  @ViewChild('medicationForm', {static: false}) medicationForm;
  @ViewChild('storageForm', {static: false}) storageForm;

  medicationList: any[];

  constructor(private medicationService: MedicationService) {this.findAll(); }

  ngOnInit() {
    this.findAll();
  }

  findAll() {
    this.medicationService.notify.subscribe((result) => {
      this.populateItems();
    });
    this.populateItems();
  }

  populateItems() {
    this.medicationService.findAll().subscribe(res => {
      this.medicationList = res;
    }, err => {
      console.log(err);
    });
  }

  addMedication() {
    this.medicationForm.addMedication();
  }

  onEditClick(item) {
    this.medicationForm.editMedication(item);
  }

  onMovimentClick(item) {
    this.storageForm.editStorage(item);
  }

}
