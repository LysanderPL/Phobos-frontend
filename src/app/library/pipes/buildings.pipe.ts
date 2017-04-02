/**
 * Created by maciej on 23.03.17.
 */
import {Pipe} from "@angular/core";

@Pipe({
    name: 'BuildingsPipe'
})
export class BuildingsPipe {

    transform(value, args?): boolean {
        return value.filter(buildingsList => {
            if (args == '' || args == null) return true;
            return buildingsList.name.search(args) >= 0 || buildingsList.name.toUpperCase().search(args) >= 0 || buildingsList.name.toLowerCase().search(args) >= 0;
        });
    }

}