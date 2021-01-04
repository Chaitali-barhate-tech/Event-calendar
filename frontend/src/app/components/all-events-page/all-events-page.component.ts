import { Title } from '@angular/platform-browser';
import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { EventService } from '../../services/event.service';
import { Events, EventTypes } from '../../data/event.model';
import { EventsListComponent } from '../events-list/events-list.component';

@Component({
  selector: 'app-all-events-page',
  templateUrl: './all-events-page.component.html',
  styleUrls: ['./all-events-page.component.scss']
})
export class AllEventsPageComponent implements OnInit, AfterViewInit {

  public allEvents: Events[];
  public searchEventForm: FormGroup;
  public eventfilterForm: FormGroup;
  public eventTypes: EventTypes[];
  public eventSuggestions: [];
  public showSuggestions = false;

  @ViewChild(EventsListComponent) eventList: EventsListComponent;

  constructor(private eventService: EventService, private titleService: Title) {
    // Page Title
    this.titleService.setTitle('All Events');
   }

  // viewchild
  ngAfterViewInit() {
    console.log(this.eventList);
  }

  // Function to show search suggestions
  public onSearchChange(value) {
    if (value.length > 1) {
      this.eventService.eventSearchSuggestion(value).subscribe((res: []) => {
        console.log(res);
        this.eventSuggestions = res;
        if (this.eventSuggestions.length > 0) {
          this.showSuggestions = true;
        } else {
          this.showSuggestions = false;
        }
      });
    } else {
      this.showSuggestions = false;
    }
  }

  // Funtion to create Filter form element
  public createEventFilterForm() {
    this.eventfilterForm = new FormGroup({
      filterType: new FormControl('', Validators.required)
    });
  }

  // Function to get all event types
  public getEventTypes() {
    this.eventService.getEventTypes().subscribe((res: EventTypes[]) => {
      this.eventTypes = res;
    });
  }

  // Function to filter events by type
  public filterEvent(type) {
    this.eventService.filterEventsbyType(type).subscribe((res: Events[]) => {
      this.allEvents = res;
    });
  }

  // Function to create event search form fields
  public eventSearchForm() {
    this.searchEventForm = new FormGroup({
      searchText: new FormControl('', Validators.required)
    });
  }

  // Function to submit search form
  public search(text) {
    if (this.searchEventForm.status === 'VALID') {
      this.eventService.searchEvent(text).subscribe((res: Events[]) => {
        this.allEvents = res;
      });
    }
  }

  // Function to get all Events List
  public showAllEvents() {
    this.eventService.getEventsList().subscribe((res: Events[]) => {
      this.allEvents = res;
    });
    this.eventfilterForm.get('filterType').setValue('');
    this.searchEventForm.get('searchText').setValue('');
  }

  ngOnInit() {
    this.createEventFilterForm();
    this.eventSearchForm();
    this.showAllEvents();
    this.getEventTypes();
  }

}
