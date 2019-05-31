import { SearchPageComponent } from './search-page/search-page.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BuyAndSellFormComponent } from './buy-and-sell-form/buy-and-sell-form.component';

const routes: Routes = [
  { path: '', redirectTo: 'search-page', pathMatch: 'full'},
  { path: 'search-page', component: SearchPageComponent },
  { path: 'buy/:symbol', component: BuyAndSellFormComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
