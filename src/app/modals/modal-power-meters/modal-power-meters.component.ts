import { Component, OnInit,Input,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-modal-power-meters',
  templateUrl: './modal-power-meters.component.html',
  styleUrls: ['./modal-power-meters.component.scss']
})
export class ModalPowerMetersComponent implements OnInit {
  @Input() title = 'modal power';

  @Output() close = new EventEmitter<void>();
  constructor() { }

  ngOnInit() {
  }

}
