import { Routes } from '@angular/router';
import { InitialComponent } from './initial/initial.component';
import { UpdateComponent } from './update/update.component';
export const routes: Routes = [
    {
      path: 'create',
      loadComponent: () => import('./registry/registry.component').then(m => m.RegistryComponent)
    },
    {
      path: 'read',
      loadComponent: () => import('./list/list.component').then(m => m.ListComponent)
    },
    { path: 'update',  component: UpdateComponent },
    { path: '', component: InitialComponent, pathMatch: 'full' }
  ];
