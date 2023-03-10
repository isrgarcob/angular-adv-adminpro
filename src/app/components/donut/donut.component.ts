import { Component, Input, Output, EventEmitter } from '@angular/core';

import { ChartData, LabelItem} from 'chart.js';

@Component({
  selector: 'app-donut',
  templateUrl: './donut.component.html',
  styles: [
  ]
})
export class DonutComponent {

  @Input() titulo: string = 'Sin titulo'
  @Input('data') datos: number[] = [10,20,30]
 
  // Doughnut
  @Input('labels') doughnutChartLabels: string[] = [ 'Label1', 'Label2', 'Label3' ];
  public doughnutChartData: ChartData<'doughnut'> = {
    labels: this.doughnutChartLabels,
    datasets: [
      { data: this.datos },
    ]
  };

  constructor() {
    console.log(this.doughnutChartLabels);
    console.log(this.doughnutChartData);
  }

}
