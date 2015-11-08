import 'reflect-metadata';
import 'bootstrap';
import 'bootstrap/css/bootstrap.min.css!css';

import {Component, bootstrap} from 'angular2/angular2';
import {Typeahead} from "./Typeahead";
import template from './main.html!text';

@Component({
    directives: [Typeahead],
    selector: 'my-app',
    template: template
})
class AppComponent { }

bootstrap(AppComponent);
