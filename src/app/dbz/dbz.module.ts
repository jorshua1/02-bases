import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DbzComponent } from './pages/main-page.component';
import { ListComponent } from './components/list/list.component';
import { FormComponent } from './components/form/form.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [DbzComponent, ListComponent, FormComponent],
  exports: [DbzComponent],
  imports: [
    CommonModule,
    FormsModule
  ]
})
export class DbzModule {  }
