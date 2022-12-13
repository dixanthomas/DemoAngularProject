import { NgModule } from '@angular/core';
import { ResolveFn, RouterModule, Routes } from '@angular/router';
import { ApiDemoComponent } from './api-demo/api-demo.component';
import { HomeComponent } from './home/home.component';
import { ObservableDemoComponent } from './observable-demo/observable-demo.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { RoutingChildAComponent } from './routing-child-a/routing-child-a.component';
import { RoutingChildBComponent } from './routing-child-b/routing-child-b.component';
import { RoutingDemoComponent } from './routing-demo/routing-demo.component';

const resolvedChildATitle: ResolveFn<string> = () => Promise.resolve('child a');

const routes: Routes = [
  { path: 'observer', component: ObservableDemoComponent },
  { path: 'home', component: HomeComponent },
  {
    path: 'routing/:name', component: RoutingDemoComponent,
    children:
      [
        { path: 'child/a', title: resolvedChildATitle, component: RoutingChildAComponent },
        { path: 'child/b', title: 'Child B', component: RoutingChildBComponent },
        { path: '**', title: 'Not Found', component: PagenotfoundComponent },
      ]
  },
  { path: 'apidemo', component: ApiDemoComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: '**', component: PagenotfoundComponent },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
