import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';


import { AppComponent } from './app.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductDetailsComponent } from './product-details/product-details.component';

import { Logger } from './services/logger.service';

// ROUTES
const appRoutes: Routes = [
    
    { path: '', redirectTo: 'product-list', pathMatch: 'full' },
    { path: 'product-list', component: ProductListComponent },
    { path: 'product-details/:id', component: ProductDetailsComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    ProductDetailsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true })
  ],
  providers: [Logger],
  bootstrap: [AppComponent]
})
export class AppModule { }
