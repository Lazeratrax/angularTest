import { Component, OnInit,Input,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-modal-intoduction',
  templateUrl: './modal-intoduction.component.html',
  styleUrls: ['./modal-intoduction.component.scss']
})
export class ModalIntoductionComponent implements OnInit {
  @Input() title = 'modal intro';

  @Output() close = new EventEmitter<void>();
  constructor() { }

  ngOnInit() {
  }

}
