import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EventService {

  public url = 'http://localhost:3000';

  constructor(private http: HttpClient) { }

  // Add new Event
  public createEvent(eventInfo) {
    return this.http.post(`${this.url}/event/add`, eventInfo);
  }

  // Get all Events
  public getEventsList() {
    return this.http.get(`${this.url}/event`);
  }

  // Search Event
  public searchEvent(searchText) {
    return this.http.get(`${this.url}/event?search=${searchText}`);
  }

  // Search Suggestions
  public eventSearchSuggestion(searchText) {
    return this.http.get(`${this.url}/event/suggestion?search=${searchText}`);
  }

  // Get events types
  public getEventTypes() {
    return this.http.get(`${this.url}/event/types`);
  }

  // Get events types
  public filterEventsbyType(type) {
    return this.http.get(`${this.url}/event?type=${type}`);
  }

  // Get Events by company name
  public getEventsByCompany() {
    return this.http.get(`${this.url}/company/events`);
  }

  // Get single Event by ID
  getEventById(id) {
    return this.http.get(`${this.url}/event/${id}`);
  }
}
