import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './components/layout/layout.component';
import { BorderComponent } from './components/border/border.component';
import { AnimationsComponent } from './components/animations/animations.component';
import { DesignStyleComponent } from './components/design-style/design-style.component';
import { DarkmodeComponent } from './components/darkmode/darkmode.component';

const routes: Routes = [

  { path: '', component: LayoutComponent }, // Default route
  { path: 'borders', component: BorderComponent },
  { path: 'animation', component: AnimationsComponent },
  { path: 'design', component: DesignStyleComponent },
  { path: 'dark', component: DarkmodeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 

}
