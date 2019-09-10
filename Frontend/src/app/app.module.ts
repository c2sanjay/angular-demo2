import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HttpClientJsonpModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { AppRoutingModule } from './app-routing.module';
import { FileSelectDirective } from 'ng2-file-upload';


//Services
import { RegisterService } from './services/register.service'
import { canActivateAuthGuard } from './guards/auth.guards';
import { CartService } from './services/cart.service';

//Components
import { AppComponent } from './app.component';
import { ProductComponent } from './product/product.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { GuardsComponent } from './guards/guards.component';
import { StudentComponent } from './student/student.component';
import { HeaderComponent } from './header/header.component';
import { BannerComponent } from './banner/banner.component';
import { FooterComponent } from './footer/footer.component';
import { BlogpostFeaturedComponent } from './blogpost-featured/blogpost-featured.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { CountryComponent } from './country/country.component';
// search module
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { AccordionModule } from "ngx-accordion";
import { ProductDetailsComponent } from './product-details/product-details.component';
import { CartComponent } from './cart/cart.component';
import { ProductAlertsComponent } from './product-alerts/product-alerts.component';
import { ProductListComponent } from './product-list/product-list.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { ShippingComponent } from './shipping/shipping.component';





@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    RegisterComponent,
    LoginComponent,
    GuardsComponent,
    StudentComponent,
    HeaderComponent,
    BannerComponent,
    FooterComponent,
    BlogpostFeaturedComponent,
    PageNotFoundComponent,
    ContactFormComponent,
    CountryComponent,
    ProductDetailsComponent,
    CartComponent,
    ProductAlertsComponent,
    ProductListComponent,
    TopBarComponent,
    ShippingComponent, FileSelectDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    HttpClientModule,
    ReactiveFormsModule,
    AppRoutingModule,
    Ng2SearchPipeModule,
    HttpClientJsonpModule,
    AccordionModule
  ],
  providers: [RegisterService, canActivateAuthGuard, CartService],
  bootstrap: [AppComponent]
})
export class AppModule { }
