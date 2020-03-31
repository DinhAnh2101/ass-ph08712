import { Component, OnInit } from '@angular/core';
import { Product } from '../Product';
// import { ProductService } from '../product.service';
@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {
selected: Product;
products: Product[];

  constructor(
    // private productService: ProductService
  ) { 
    console.log('constructor')
  }

  ngOnInit(): void {
    // this.getProducts();
  }
 
  // getProducts(){
  //  this.getProducts().subscribe(data => {
  //    console.log(data);
  //    this.products = data;
  //   });
  // }
  // removeItem(id){
  //  this.removeProduct(id).subscribe(response => {
  //    this.products = this.products.filter(product => product.id != response.id);
  //  })
    // this.products = this.products.filter(product => product.id != id);
  }

