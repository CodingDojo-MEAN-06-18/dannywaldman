import { Component, OnInit, OnDestroy } from '@angular/core';
import { DataService } from '../data.service';
import { Product } from '../product';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  products: Array<Product> = [];

  constructor(private _service: DataService) { }

  ngOnInit() {
    this._service.products.subscribe(data => { this.products = data });
  }

  destroy = (product: Product): void => {
    this._service.destroy(product);
  }

}
