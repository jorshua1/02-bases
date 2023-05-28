import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DbzComponent } from './pages/main-page.component';
import { ListComponent } from './components/list/list.component';



@NgModule({
  declarations: [DbzComponent, ListComponent],
  exports: [DbzComponent],
  imports: [
    CommonModule
  ]
})
export class DbzModule {  }
