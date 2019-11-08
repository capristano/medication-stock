import { Component, OnInit, ViewChild } from '@angular/core';
import { NzDrawerRef } from 'ng-zorro-antd';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { Util } from 'src/app/common/util/util';
import { MedicationService } from '../medication.service';
import { Medication } from '../medication';

@Component({
  selector: 'app-medication-storage-form',
  templateUrl: './medication-storage-form.component.html',
  styleUrls: ['./medication-storage-form.component.css']
})
export class MedicationStorageFormComponent implements OnInit {

  @ViewChild('drawerData', { static: false }) drawerData: NzDrawerRef<any>;

  storageForm = this.formBuilder.group({
    id: new FormControl(null),
    amountQuarter1: new FormControl('', Validators.pattern('^[0-9\.,]*$')),
    priceQuarter1: new FormControl('', Validators.pattern('^[0-9\.,]*$')),
    amountQuarter2: new FormControl('', Validators.pattern('^[0-9\.,]*$')),
    priceQuarter2: new FormControl('', Validators.pattern('^[0-9\.,]*$')),
    amountQuarter3: new FormControl('', Validators.pattern('^[0-9\.,]*$')),
    priceQuarter3: new FormControl('', Validators.pattern('^[0-9\.,]*$')),
    amountQuarter4: new FormControl('', Validators.pattern('^[0-9\.,]*$')),
    priceQuarter4: new FormControl('', Validators.pattern('^[0-9\.,]*$'))
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
    this.storageForm.reset();
  }

  editStorage(item) {
    this.item = item;
    this.storageForm.get('id').setValue(item.id);
    this.storageForm.get('amountQuarter1').setValue(item.amountQuarter1);
    this.storageForm.get('priceQuarter1').setValue(item.priceQuarter1);
    this.storageForm.get('amountQuarter2').setValue(item.amountQuarter2);
    this.storageForm.get('priceQuarter2').setValue(item.priceQuarter2);
    this.storageForm.get('amountQuarter3').setValue(item.amountQuarter3);
    this.storageForm.get('priceQuarter3').setValue(item.priceQuarter3);
    this.storageForm.get('amountQuarter4').setValue(item.amountQuarter4);
    this.storageForm.get('priceQuarter4').setValue(item.priceQuarter4);

    this.drawerData.open();
  }

  onSave() {
    this.util.submitForm(this.storageForm);
    if (this.storageForm.valid && this.storageForm.dirty) {

      const id = this.storageForm.get('id').value;
      const medication = new Medication ();

      if (id !== null) {
        medication.id = parseInt(id, 0);

        medication.name = this.item.name;
        medication.dosage = this.item.dosage;
        medication.unitMeasurement = this.item.unitMeasurement;
        medication.initialAmount = this.item.initialAmount;

        medication.amountQuarter1 = this.storageForm.get('amountQuarter1').value;
        medication.priceQuarter1 = this.storageForm.get('priceQuarter1').value;
        medication.amountQuarter2 = this.storageForm.get('amountQuarter2').value;
        medication.priceQuarter2 = this.storageForm.get('priceQuarter2').value;
        medication.amountQuarter3 = this.storageForm.get('amountQuarter3').value;
        medication.priceQuarter3 = this.storageForm.get('priceQuarter3').value;
        medication.amountQuarter4 = this.storageForm.get('amountQuarter4').value;
        medication.priceQuarter4 = this.storageForm.get('priceQuarter4').value;

        this.medicationService.save(medication).subscribe(() => {
          this.medicationService.onNotify(true);
        }, err => {
          console.log(err);
        });
      }

      this.clearForm();
      this.onCloseDrawerData();
    }
  }

  onCloseDrawerData() {
    this.drawerData.close();
  }

}
