export class Events {
  _id: string;
  eventName: string;
  contactEmail: string;
  companyName: string;
  eventImage: string;
  startDate: string;
  endDate: string;
  eventType: string;
  address: string;
  city: string;
  eventDesc: string;
  user: string;
}

export class EventTypes {
  _id: string;
  count: number;
}

export class EventsByCompany {
  _id: string;
  count: number;
  events: object;
}
