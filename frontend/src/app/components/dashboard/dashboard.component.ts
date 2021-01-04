import { Title } from '@angular/platform-browser';
import { Component, OnInit, Input } from '@angular/core';
import { DatePipe } from '@angular/common';
import { EventService } from '../../services/event.service';
import { EventsByCompany } from '../../data/event.model';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  public companyEvents: EventsByCompany[];

  constructor(
    private eventService: EventService,
    private datePipe: DatePipe,
    private titleService: Title) {
    // Page Title
    this.titleService.setTitle('Company Dashboard');
    }

  // Function to get events by company names
  public getEventsByCompany() {
    this.eventService.getEventsByCompany().subscribe((res: EventsByCompany[]) => {
      console.log(res);
      this.companyEvents = res;
    });
  }

  ngOnInit() {
    this.getEventsByCompany();
  }
}
