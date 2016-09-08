import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppHomeComponent } from './app-home.component';
import { CharacterListComponent } from './character-list.component';
import { CharacterDetailComponent } from './character-detail.component';
import { CharacterEditComponent } from './character-edit.component';
import { CharacterCollectionComponent } from './character-collection.component';
import { NotFoundComponent } from './not-found.component';

const appRoutes: Routes = [
  {
    path: '',
    component: AppHomeComponent,
  },
  {
    path: 'characters',
    component: CharacterListComponent
  },
  {
    path: 'collection',
    component: CharacterCollectionComponent
  },
  {
    path: 'character/:characterId',
    component: CharacterDetailComponent
  },
  {
    path: 'character/:characterId/:edit',
    component: CharacterDetailComponent
  },
  {
    path:'**',
    component:NotFoundComponent
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
