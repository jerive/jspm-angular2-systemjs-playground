import "zone.js";
import "reflect-metadata";
import "bootstrap";
import "bootstrap/css/bootstrap.min.css!css";

import {Component} from "angular2/core";
import {bootstrap} from "angular2/platform/browser";
import {Typeahead} from "./Typeahead";
import template from "./main.html!text";

@Component({
    directives: [Typeahead],
    selector: "my-app",
    template: template
})
class AppComponent {
    public plop(s:string) {
        console.log(s);
    }
}

bootstrap(AppComponent);
