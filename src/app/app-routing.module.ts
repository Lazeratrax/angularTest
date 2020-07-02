import { NgModule } from "@angular/core";
import { RouterModule, Routes, PreloadAllModules } from "@angular/router";
import { HomePageComponent } from "./home-page/home-page.component";

const routes:Routes = [
  { path: "", component: HomePageComponent, pathMatch: "full" },
  // LAZY LOAD
  // старая запись {path: 'about', loadChildren: './about-page/about-page.module#AboutPageModule'}
  {
    path: "about",
    loadChildren: () =>
      import("./about-page/about-page.module").then(
        (m) => m.AboutPageModule
      ),
  },
] 
//  preloadingStrategy: PreloadAllModules - загрузка всех lazy loads
// сразу в фоновом режиме после всех скриптов главной страницы
@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      preloadingStrategy: PreloadAllModules
    })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
