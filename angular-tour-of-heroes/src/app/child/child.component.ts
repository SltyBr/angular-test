import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ChildComponent{
  
  constructor(private cd: ChangeDetectorRef) {}

  @Input() item = ''; // decorate the property with @Input()

  counter = 1;

  timer(){
    setInterval(()=>{
      this.counter++;
      this.cd.markForCheck;
    }, 1000);
  }


}
