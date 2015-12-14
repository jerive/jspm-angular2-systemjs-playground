import {Component, Input} from 'angular2/core';
import {CORE_DIRECTIVES, FORM_DIRECTIVES, Control} from 'angular2/common';
import 'rxjs/add/operator/throttleTime';

@Component({
    directives: [CORE_DIRECTIVES, FORM_DIRECTIVES],
    selector: 'typeahead',
    template: `
        <input #auto type="text" [ngFormControl]="searchText" placeholder="Type to autocomplete" />
    `
})
export class Typeahead{
    @Input() from;
    public searchText:Control = new Control();

    constructor() {
        this.searchText.valueChanges.throttleTime(500).subscribe(x => console.log(x));
    }
}
