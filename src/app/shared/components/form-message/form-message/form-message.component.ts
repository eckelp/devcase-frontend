import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-form-message',
  templateUrl: './form-message.component.html',
  styleUrls: ['./form-message.component.css']
})
export class FormMessageComponent implements OnInit {

  @Input() text: string = '';

  constructor() { }

  ngOnInit() {
  }

}
