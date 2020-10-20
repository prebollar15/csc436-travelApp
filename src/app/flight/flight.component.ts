import { Component, OnInit } from '@angular/core';

export class Itinerary{
  public originAirport: string;
  public destinationAirport: string;
  public flightDate: Date;
  public passengers: number;
}

@Component({
  selector: 'app-flight',
  templateUrl: './flight.component.html',
  styleUrls: ['./flight.component.css']
})
export class FlightComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  model = new Itinerary();

  Airport: string [] = [
    'ORD - O\'hare International',
    'SFO - San Fransisco',
    'DFW - Dallas/Fort Worth',
    'LAX - Los Angeles International',
    'ATL - Hartsfield-Jackson Atlanta',
    'JFK - John F. Kennedy International',
    'SEA - Seattle-Tacoma International',
    'MIA - Miami International'
  ];

  onSubmit(form): void {
    console.log(form.value);
  }

}
