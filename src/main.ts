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

const hr:any = window["hr"];

hr && hr.on("change", (fileName:string) => {
    if (fileName.indexOf("html") !== -1) {
        const newBody = document.createElement("body");
        newBody.appendChild(document.createElement("my-app"));
        document.body = newBody;

        bootstrap(AppComponent);
    }
});