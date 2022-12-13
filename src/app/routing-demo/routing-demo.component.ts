import { Component, Input, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-routing-demo',
  templateUrl: './routing-demo.component.html',
  styleUrls: ['./routing-demo.component.css']
})
export class RoutingDemoComponent implements OnInit {

  constructor(
    private route: ActivatedRoute, // query parameter
    private router: Router,
  ) { }

  @Input() data: any;
  id: string='';
  name:any
  queryparam:any

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.queryparam=params
      this.id = this.queryparam['id']            // https:url/url?id=3498
    })
    this.name = this.route.snapshot.paramMap.get('name'); // http:url/name
  }
  goToItems() {
    this.router.navigate(['items'], { relativeTo: this.route });
  }
}

