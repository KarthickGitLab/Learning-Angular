import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CartService } from '../cart.service';
import { products } from '../products';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  product: any;
  constructor(
    private route: ActivatedRoute,
    private cartService: CartService
  ) {}

  ngOnInit() {
    const params = this.route.snapshot.paramMap;
    const productIdFromRoute = Number(params.get('productId'));

    this.product = products.find(x => x.id == productIdFromRoute);
  }

  addToCart(product: any) {
    this.cartService.addCart(product);
    window.alert('Your Product has been updated to cart.');
  }
}
