import { LocalProductsService } from './../../shared/services/local/local-products.service';
import { ProductServiceService } from './../../shared/services/product-service.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.component.scss']
})
export class ProductPageComponent implements OnInit {
  productList = [];

  constructor(private productServiceService: ProductServiceService, private localProductService: LocalProductsService) { }

  ngOnInit(): void {
    const localProductsService = this.localProductService.getProducts();
    if(!localProductsService.length){
    this.productServiceService.getProducts().subscribe( (res: any) => {
      this.productList = res;
      this.localProductService.addProducts(res);
    })
    }else{
      this.productList = localProductsService;
    }

  }

}
