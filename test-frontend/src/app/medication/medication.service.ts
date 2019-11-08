import { Injectable } from '@angular/core';
import { MainService } from '../service/main.service';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MedicationService {

  private prefixPath = '/medication';

  notify: Subject<boolean> = new Subject<boolean>();
  onNotify(event) {
    this.notify.next(true);
  }

  constructor(private mainService: MainService) {}

  findOne(id: number): Observable<any> {
    const path = this.prefixPath + '/findOne/' + id;
    return this.mainService.get(path);
  }

  findAll(): Observable<any> {
    const path = this.prefixPath + '/findAll';
    return this.mainService.get(path);
  }

  delete(id: number): Observable<any> {
    const path = this.prefixPath + '/delete/' + id;
    return this.mainService.delete(path);
  }

  save(params: any): Observable<any> {
    const path = this.prefixPath + '/save';
    return this.mainService.put(path, params);
  }

}
