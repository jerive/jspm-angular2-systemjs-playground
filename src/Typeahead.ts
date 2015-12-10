import {Component, Input, Control, EventEmitter, CORE_DIRECTIVES, FORM_DIRECTIVES} from 'angular2/angular2';
import 'rxjs/add/operator/throttleTime';

@Component({
    directives: [CORE_DIRECTIVES, FORM_DIRECTIVES],
    selector: 'typeahead',
    template: `
        <input #auto type="text" [ng-form-control]="searchText" placeholder="Type to autocomplete" />
    `
})
export class Typeahead{
    @Input() from;
    public searchText:Control = new Control();

    constructor() {
        this.searchText.valueChanges.throttleTime(500).subscribe(x => console.log(x));
    }
}
