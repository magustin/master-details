import { Injectable } from '@angular/core';

@Injectable()

export class Logger {

    logs: string[] = []; // CAPTURE LOGS FOR TESTING

    log(message: string) {

        this.logs.push(message);
        console.log(message);
    }
}
