import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductComponent } from './product/product.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { canActivateAuthGuard } from './guards/auth.guards';
import { StudentComponent } from './student/student.component';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { BlogpostFeaturedComponent } from './blogpost-featured/blogpost-featured.component';
import { CountryComponent } from './country/country.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { CartComponent } from './cart/cart.component'
import { ShippingComponent } from './shipping/shipping.component';



const routes: Routes = [
  { path: 'Blogpost', component: BlogpostFeaturedComponent, canActivate: [canActivateAuthGuard] },
  { path: 'country', component: CountryComponent, canActivate: [canActivateAuthGuard] },
  { path: 'contact', component: ContactFormComponent, canActivate: [canActivateAuthGuard] },
  { path: 'register', component: RegisterComponent },
  { path: 'login', component: LoginComponent },
  { path: 'product', component: ProductComponent, canActivate: [canActivateAuthGuard] },
  { path: 'student', component: StudentComponent, canActivate: [canActivateAuthGuard] },
  { path: 'productList', component: ProductListComponent, canActivate: [canActivateAuthGuard] },
  { path: 'productList/:productId', component: ProductDetailsComponent },
  { path: 'cart', component: CartComponent },
  { path: 'shipping', component: ShippingComponent },
  { path: '', redirectTo: '', pathMatch: 'full' }, //route for home page
  { path: '*', component: PageNotFoundComponent }//route for  page not found,

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
