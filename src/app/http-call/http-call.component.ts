import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-http-call',
    templateUrl: './http-call.component.html',
    styleUrls: ['./http-call.component.scss'],
    standalone: true,
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class HttpCallComponent {
    constructor() {}

    // 1. make http call by button click
    // 2. display return value in paragraph below the button
}
