/**
 * Created by maciej on 19.03.17.
 */
import {Component} from "@angular/core";
@Component({
    selector: 'overview',
    templateUrl: 'overview.component.html'
})
export class OverviewComponent {

    private planetName;

    constructor( ) {
        this.planetName = "Planeta1";
    }
}