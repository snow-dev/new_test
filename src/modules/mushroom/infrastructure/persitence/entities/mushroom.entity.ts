import { Column, Entity } from 'typeorm';

@Entity('mushrooms')
export class MushroomEntity {
  @Column({
    type: 'varchar',
    name: 'name',
  })
  name: string;

  @Column({
    type: 'varchar',
    name: 'species',
  })
  species: string;

  @Column({
    type: 'varchar',
    name: 'boolean',
  })
  edible: boolean;
}
