import { OrderService } from 'src/app/services/order/order.service';
import { Component } from '@angular/core';
import { AuthService } from 'src/app/services/auth/auth.service';
@Component({
  selector: 'app-kitchen-current',
  templateUrl: './kitchen-current.component.html',
  styleUrls: ['./kitchen-current.component.css']
})
export class KitchenCurrentComponent {
  role: string | null = null;
  ordersInProgress: any[] = []
  constructor(
    private authService: AuthService,
    private orderService: OrderService
    ) {}

  ngOnInit(): void {
    this.role = this.authService.getRole();
    this.orderService.getOrdersInProgress().subscribe((orders) => {
    this.ordersInProgress = orders;
    console.log(orders)
    });

 }
}
