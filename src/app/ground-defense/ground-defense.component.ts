/**
 * Created by maciej on 02.04.17.
 */
import {BuildingsService} from "../services/buildings.service";
import {Component, OnInit} from "@angular/core";
@Component({
    selector: 'ground-defense',
    templateUrl: 'ground-defense.component.html',
    providers: [BuildingsService]
})
export class GroundDefenseComponent implements OnInit {
    private isLoading: boolean = true;


    ngOnInit(): void {
    }
}