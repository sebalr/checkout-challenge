import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatTabsModule } from '@angular/material/tabs';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatCardModule,
    MatDividerModule,
    MatIconModule,
    MatTabsModule,
    MatToolbarModule
  ],
  exports: [
    MatCardModule,
    MatDividerModule,
    MatIconModule,
    MatTabsModule,
    MatToolbarModule
  ]
})
export class AngularMaterialModule { }
