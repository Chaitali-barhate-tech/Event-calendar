import { Title } from '@angular/platform-browser';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { EventService } from '../../services/event.service';
import {Events} from '../../data/event.model';

@Component({
  selector: 'app-event-detail',
  templateUrl: './event-detail.component.html',
  styleUrls: ['./event-detail.component.scss']
})
export class EventDetailComponent implements OnInit {
  public id: string;
  public eventInfo: Events;

  constructor(
    private eventService: EventService,
    private router: Router,
    private route: ActivatedRoute,
    private titleService: Title) {
    // Page Title
    this.titleService.setTitle('Event Details');
     }

  // Function to get Event Data
  public getEvent() {
    this.id = this.route.snapshot.paramMap.get('id');
    this.eventService.getEventById(this.id).subscribe((res: Events) => {
      this.eventInfo = res;
      console.log(res);
    });
  }

  ngOnInit() {
    this.getEvent();
  }

}
