/**
 * Created by maciej on 20.03.17.
 */
import {Component} from "@angular/core";
@Component({
    selector: 'buildings',
    templateUrl: 'buildings.component.html'
})
export class BuildingsComponent {

    private filter: string = '';

    private buildingsList = [
        {"name": "Kopalnia Ferrum", "description": "Wydobywnie Ferrum"},
        {"name": "Kopalnia Urnium", "description": "Wydobywnie Ferrum"},
        {"name": "Fabryka Slicon'u", "description": "Wydobywnie Ferrum"},
        {"name": "Rafineria Hellium", "description": "Wydobywnie Ferrum"}
    ];

}