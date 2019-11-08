import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NgZorroAntdModule, NZ_I18N, pt_BR } from 'ng-zorro-antd';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { registerLocaleData } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { DragDropModule } from '@angular/cdk/drag-drop';

import { MedicationComponent } from './medication/medication.component';

import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

import pt from '@angular/common/locales/pt';
import { MedicationListComponent } from './medication/medication-list/medication-list.component';
import { MedicationFormComponent } from './medication/medication-form/medication-form.component';
import { Util } from './common/util/util';
import { MedicationStorageFormComponent } from './medication/medication-storage-form/medication-storage-form.component';

registerLocaleData(pt);


export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}

const routes: Routes = [
  {
    path: '',
    component: MedicationComponent
  },
];

@NgModule({
  declarations: [
    AppComponent,
    MedicationComponent,
    MedicationListComponent,
    MedicationFormComponent,
    MedicationStorageFormComponent
  ],
  imports: [
    BrowserModule,
    NgZorroAntdModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(routes, { useHash: false }),
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    }),
    DragDropModule,
    ReactiveFormsModule
  ],
  providers: [
    {
      provide: NZ_I18N,
      useValue: pt_BR
    },
    Util
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
