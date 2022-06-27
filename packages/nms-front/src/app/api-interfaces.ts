export type { CreateResourceDto, UpdateResourceDto } from 'api/src/nms/dtos/resource';
export type { CreatePlanetDto, UpdatePlanetDto } from 'api/src/nms/dtos/planet';
export type { CreateGalaxyDto, UpdateGalaxyDto } from 'api/src/nms/dtos/galaxy';
export type { CreateGalaxyRegionDto, UpdateGalaxyRegionDto } from 'api/src/nms/dtos/region';
export type { CreateStarSystemDto, UpdateStarSystemDto } from 'api/src/nms/dtos/star-system';

export interface IResource {
  id: number;
  name: string;
  symbol: string;
  group?: string;
  rarity?: string;
  baseValue?: string;
  // planets: IPlanet[]; Lejta!
}
