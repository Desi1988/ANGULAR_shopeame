import { LocalProductsService } from './../../shared/services/local/local-products.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';


@Component({
  selector: 'app-management-page',
  templateUrl: './management-page.component.html',
  styleUrls: ['./management-page.component.scss']
})
export class ManagementPageComponent implements OnInit {

  formManagementPage;
  constructor(private formBuilder: FormBuilder, private localProductService: LocalProductsService ) { }

  ngOnInit(): void {
    this.formManagementPage =  this.formBuilder.group({
      name: ['Producto'],
      description: ['Descripción'],
      price: [''],
      image: [''],
      stars: ['']
    }); 
  }
  addProduct(){
    this.localProductService.addProducts([this.formManagementPage.value]);
  }
}

