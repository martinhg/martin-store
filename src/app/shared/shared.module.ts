import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Components
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';

// Directives
import { HighlightDirective } from './directives/highlight/highlight.directive';

// Pipes
import { ExponentialPipe } from './pipes/exponential/exponential.pipe';
import { RouterModule } from '@angular/router';
import { MaterialModule } from '../modules/material/material.module';

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    HighlightDirective,
    ExponentialPipe
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    HighlightDirective,
    ExponentialPipe
  ],
  imports: [
    CommonModule,
    RouterModule,
    MaterialModule
  ]
})
export class SharedModule { }
