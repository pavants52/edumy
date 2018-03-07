import { Injectable } from '@angular/core';
declare var toastr: any;

@Injectable()

export class NotificationService {

    constructor() {
        toastr.options = {
            closeButton: true, progressBar: true,
            showMethod: 'slideDown', timeOut: 4000
        };
    }

    success(heading: string, message: string): void {
        toastr.success(message, heading);
    }

    error(heading: string, message: string): void {
        toastr.error(message, heading);
    }

    warning(heading: string, message: string): void {
        toastr.warning(message, heading);
    }

    info(heading: string, message: string): void {
        toastr.info(message, heading);
    }



}