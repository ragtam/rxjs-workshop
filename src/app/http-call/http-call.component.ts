import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-http-call',
    templateUrl: './http-call.component.html',
    styleUrls: ['./http-call.component.scss'],
    standalone: true,
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class HttpCallComponent implements OnInit {
    constructor() {}

    ngOnInit(): void {}
}
