import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { Country } from './Country';
import { Broadcaster } from '../../utilityApp/services/broadcaster';
import { MessageEvent } from '../../utilityApp/services/message_event';
declare var $: any;

@Injectable()

export class SharedService {

    constructor(private broadcaster: Broadcaster,
        private message_event: MessageEvent
    ) { }
    public sharedData = {}

    setData(key: string, data: any) {
        this.sharedData[key] = JSON.stringify(data);
    }

    setLoginFlag(key: string, data: any) {
        this.sharedData[key] = JSON.stringify(data);
    }

    getDataByKey(key: string): string {
        return this.sharedData[key];
    }

    getData() {
        return this.sharedData;
    }

    getCountries() {
        return [
            new Country(1, 'India', 91),
            new Country(2, 'Singapore', 64),
        ];
    }

    emitTypeBroadcast() {
        this.message_event.fire("kishor");
        console.log("called");
    }

}
