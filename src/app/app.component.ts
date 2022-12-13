import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{
  title = 'DemoAngularProject';

  constructor(private router:Router){}

  data1:string='testing';

  queryparamroute(){
    this.router.navigate(['/routing/dixan'], { queryParams:  { id: '456' }});
  }
}
