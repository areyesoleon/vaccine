import { Injectable } from '@angular/core';

export interface ObjectEvent {
  event_category?: string;
  event_action?: string;
  event_label?: string;
  value?: number;
  page_path?: any;
}

declare let gtag: (type: string, eventName: string, event: ObjectEvent) => void;

@Injectable({
  providedIn: 'root'
})
export class GoogleAnalyticsService {

  private _disabled = false;

  constructor() { }

  addEvent(eventName: string, objectEvent: ObjectEvent) {
    if (!this._disabled) {
      gtag('event', eventName, objectEvent);
      gtag('config', 'AW-587538090', objectEvent);
    }
  }

  get disabled() {
    return this._disabled;
  }

  set disabled(flg: boolean) {
    this._disabled = flg;
  }
}
