import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'emp-loading-spinner',
  templateUrl: './loading-spinner.component.html',
  styleUrls: ['./loading-spinner.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LoadingSpinnerComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
