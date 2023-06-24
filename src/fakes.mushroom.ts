import { MushroomDto } from './modules/mushroom/application/dtos/mushroom.dto';

export const fakeMushroom = (): MushroomDto =>
  ({
    name: 'fakeName',
    species: 'fakeSpecies',
    edible: true,
  } as MushroomDto);
