import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'emp-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DialogComponent implements OnInit
{

  constructor() { }

  ngOnInit(): void
  {
  }

}
