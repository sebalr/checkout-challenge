import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatTabsModule } from '@angular/material/tabs';
import { MatToolbarModule } from '@angular/material/toolbar';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatCardModule,
    MatTabsModule,
    MatToolbarModule
  ],
  exports: [
    MatCardModule,
    MatTabsModule,
    MatToolbarModule
  ]
})
export class AngularMaterialModule { }
