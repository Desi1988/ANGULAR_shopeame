import { ProductServiceService } from './../services/product-service.service';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-product-component',
  templateUrl: './product-component.component.html',
  styleUrls: ['./product-component.component.scss']
})
export class ProductComponentComponent implements OnInit {

  @Input() productList

  constructor(private productServiceService: ProductServiceService) { }
  ngOnInit(): void {

   
  }

}
