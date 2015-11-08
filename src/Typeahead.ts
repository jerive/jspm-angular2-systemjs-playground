import {Component, Input, Control, EventEmitter, CORE_DIRECTIVES, FORM_DIRECTIVES} from 'angular2/angular2';

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
        // console.log(new Rx.Observable());
        // console.log(this.searchText.valueChanges.toRx());
    }
}
