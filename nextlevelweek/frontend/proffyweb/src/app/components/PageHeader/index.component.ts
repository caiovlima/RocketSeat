import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'app-pageheader',
    templateUrl: 'index.component.html',
    styleUrls: ['./index.component.scss']
})

export class PageHeaderComponent implements OnInit {
    @Input() title: string;
    @Input() description: string;

    constructor() { }

    ngOnInit() { }
}