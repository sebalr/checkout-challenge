import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from 'src/app/core/components/header/header.component';
import { AngularMaterialModule } from 'src/app/shared/angular-material/angular-material.module';

@NgModule({
  declarations: [HeaderComponent],
  imports: [
    CommonModule,
    AngularMaterialModule,
  ],
  exports: [HeaderComponent]
})
export class CoreModule { }
