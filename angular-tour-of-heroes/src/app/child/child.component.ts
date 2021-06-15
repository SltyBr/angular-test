import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent implements OnInit, OnChanges {
  
  @Input() item = ''; // decorate the property with @Input()

  constructor() { }
  ngOnChanges(changes: SimpleChanges): void {
    console.log('ngOnChanges Child Component');
    
  }

  ngOnInit(): void {
    
  }

}
