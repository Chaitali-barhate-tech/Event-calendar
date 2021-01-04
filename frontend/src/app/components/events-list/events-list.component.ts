import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import { DatePipe } from '@angular/common';
import { Events } from '../../data/event.model';

@Component({
  selector: 'app-events-list',
  templateUrl: './events-list.component.html',
  styleUrls: ['./events-list.component.scss']
})
export class EventsListComponent implements OnInit, OnChanges {

  public archivedEvents: Events[];
  public upcomingEvents: Events[];
  public today = new Date();
  public showUpcomingEvents = true;
  public noArchivedEvents = false;
  public noUpcomingEvents = false;

  @Input() eventsList: Events[];

  constructor(private datePipe: DatePipe) {
   }

  public changeTabs(tab) {
    if (tab === 'upcoming') {
      this.showUpcomingEvents = true;
    } else if (tab === 'previous') {
      this.showUpcomingEvents = false;
    }
  }

  // Function to sort by Date
  public eventsSorting() {
    this.archivedEvents = this.eventsList.filter(date => new Date(date.startDate) < this.today);
    this.upcomingEvents = this.eventsList.filter(date => new Date(date.startDate) >= this.today);

    if (this.upcomingEvents.length < 1) {
      this.noUpcomingEvents = true;
      this.showUpcomingEvents = false;
    } else {
      this.noUpcomingEvents = false;
    }
    if (this.archivedEvents.length < 1) {
      this.noArchivedEvents = true;
      this.showUpcomingEvents = true;
    } else {
      this.noArchivedEvents = false;
    }
  }

  ngOnChanges(changes: SimpleChanges) {
    const previousValue = changes['eventsList'].previousValue;
    const currentValue = changes['eventsList'].currentValue;
    // console.log('previousValue >> ', previousValue);
    // console.log('currentValue >> ', currentValue);
    if (this.eventsList) {
      this.eventsSorting();
    }
  }

  ngOnInit() {
  }
}
