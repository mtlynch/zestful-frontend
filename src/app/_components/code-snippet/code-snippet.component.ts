import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-code-snippet',
  templateUrl: './code-snippet.component.html',
  styleUrls: ['./code-snippet.component.scss'],
})
export class CodeSnippetComponent implements OnInit {

  @Input()
  contents: string;

  constructor() { }

  ngOnInit() {
  }

}
