import { Component, Input, OnInit } from '@angular/core';

interface Button {
  label: string;
  link: string;
  type: 'btn-link' | 'btn-primary'
};

@Component({
  selector: 'app-section-header',
  templateUrl: './section-header.component.html',
  styleUrls: ['./section-header.component.scss']
})
export class SectionHeaderComponent implements OnInit {
  @Input() title = '';

  _button: Button = { label: '', link: '', type: 'btn-link'};

  @Input() set button(value: Partial<Button>) {
    this._button={...this._button, ...value};
  }
  constructor() { }



  ngOnInit(): void {
  }

}
