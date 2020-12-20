import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'app-input',
    templateUrl: 'index.component.html',
    styleUrls: ['./index.component.scss']
})

export class InputComponent implements OnInit {

    @Input() label: string;
    @Input() name: string;
    @Input() inputType: string;

    constructor() { }

    ngOnInit() { }
}