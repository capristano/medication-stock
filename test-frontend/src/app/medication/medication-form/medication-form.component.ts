import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { NzDrawerRef } from 'ng-zorro-antd/drawer';
import { FormBuilder, Validators, FormControl } from '@angular/forms';
import { Util } from 'src/app/common/util/util';
import { MedicationService } from '../medication.service';
import { Medication } from '../medication';

@Component({
  selector: 'app-medication-form',
  templateUrl: './medication-form.component.html',
  styleUrls: ['./medication-form.component.css']
})
export class MedicationFormComponent implements OnInit {

  @ViewChild('drawerData', { static: false }) drawerData: NzDrawerRef<any>;

  medicationForm = this.formBuilder.group({
    id: new FormControl(null),
    name: new FormControl('', [Validators.required, Validators.maxLength(512)]),
    dosage: new FormControl('', Validators.pattern('^[0-9\.,]*$')),
    unitMeasurement: new FormControl('', Validators.maxLength(3)),
    initialAmount: new FormControl('', Validators.pattern('^[0-9]*$'))
  });

  private item = null;

  constructor(
    private formBuilder: FormBuilder,
    private util: Util,
    private medicationService: MedicationService
  ) { }

  ngOnInit() {
  }

  clearForm() {
    this.medicationForm.reset();
  }

  addMedication() {
    this.clearForm();
    this.drawerData.open();
  }

  editMedication(item) {
    this.item = item;

    this.medicationForm.get('id').setValue(item.id);
    this.medicationForm.get('name').setValue(item.name);
    this.medicationForm.get('dosage').setValue(item.dosage);
    this.medicationForm.get('unitMeasurement').setValue(item.unitMeasurement);
    this.medicationForm.get('initialAmount').setValue(item.initialAmount);
    this.drawerData.open();
  }

  onSave() {
    this.util.submitForm(this.medicationForm);
    if (this.medicationForm.valid && this.medicationForm.dirty) {

      const id = this.medicationForm.get('id').value;
      const medication = new Medication (
        this.medicationForm.get('name').value,
        this.medicationForm.get('dosage').value,
        this.medicationForm.get('unitMeasurement').value,
        this.medicationForm.get('initialAmount').value
      );

      if (id !== null) {
        medication.id = parseInt(id, 0);

        medication.amountQuarter1 = this.item.amountQuarter1;
        medication.priceQuarter1 = this.item.priceQuarter1;
        medication.amountQuarter2 = this.item.amountQuarter2;
        medication.priceQuarter2 = this.item.priceQuarter2;
        medication.amountQuarter3 = this.item.amountQuarter3;
        medication.priceQuarter3 = this.item.priceQuarter3;
        medication.amountQuarter4 = this.item.amountQuarter4;
        medication.priceQuarter4 = this.item.priceQuarter4;
      }

      this.medicationService.save(medication).subscribe(() => {
        this.medicationService.onNotify(true);
      }, err => {
        console.log(err);
      });

      this.clearForm();
      this.onCloseDrawerData();
    }
  }

  onCloseDrawerData() {
    this.drawerData.close();
  }

}
