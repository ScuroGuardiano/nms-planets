export type { CreateResourceDto, UpdateResourceDto } from 'api/dist/nms/dtos/resource';
export type { CreatePlanetDto, UpdatePlanetDto } from 'api/dist/nms/dtos/planet';
export type { CreateGalaxyDto, UpdateGalaxyDto } from 'api/dist/nms/dtos/galaxy';
export type { CreateGalaxyRegionDto, UpdateGalaxyRegionDto } from 'api/dist/nms/dtos/region';
export type { CreateStarSystemDto, UpdateStarSystemDto } from 'api/dist/nms/dtos/star-system';

export interface IResource {
  id: number;
  name: string;
  symbol: string;
  group?: string;
  rarity?: string;
  baseValue?: number;
  // planets: IPlanet[]; Lejta!
}
