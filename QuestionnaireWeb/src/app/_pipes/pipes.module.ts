import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GroupByPipe } from "./group-by.pipe";

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [ GroupByPipe ],
  exports: [ GroupByPipe ]
})
export class PipesModule {
  static forRoot() {
    return {
      ngModule: PipesModule,
      providers: [],
    };
  }
}
