/**
 * Created by maciej on 23.03.17.
 */
import {AbstractEntity} from "./abstract.entity";
export class PlanetEntity extends AbstractEntity {
    name: string;
    imperialSystem: string;
    planetarySystem: string;
    race: string;
    climate: string;
    planetarySupport: number;
    groundControl: number;
    orbitalControl: number;
}