/**
 * Created by maciej on 19.03.17.
 */
import {Component} from "@angular/core";
import {Planet} from "../library/entities/planet";
@Component({
    selector: 'overview',
    templateUrl: 'overview.component.html'
})
export class OverviewComponent {

    private planet: Planet;

    constructor() {
        this.planet = new Planet();
        this.planet.name = "Planeta1";
        this.planet.imperialSystem = "Imperium kontraktowe";
        this.planet.planetarySystem = "Monarchia oświecona";
        this.planet.race = "Quarianie";
        this.planet.climate = "Tropikalny";
        this.planet.groundControl = 45;
        this.planet.orbitalControl = 15;
        this.planet.planetarySupport = 70;
    }
}