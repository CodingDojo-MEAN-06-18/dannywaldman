import { PetsComponent } from './pets.component';
import { ShowComponent } from './show/show.component';
import { NewComponent } from './new/new.component';
import { EditComponent } from './edit/edit.component';
import { ListComponent } from './list/list.component';

export const components: Array<any> = [
  PetsComponent,
  ShowComponent,
  NewComponent,
  EditComponent,
  ListComponent
];

export * from './pets.component';
export * from './show/show.component';
export * from './new/new.component';
export * from './edit/edit.component';
export * from './list/list.component';
