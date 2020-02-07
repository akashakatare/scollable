import { Component } from '@angular/core';
import * as $ from 'jquery';
// declare const myTest: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'jqDemo1';
  // tslint:disable-next-line:use-lifecycle-interface
  ngOnInit() {
    // tslint:disable-next-line:no-string-literal
    /*setTimeout(() => {
      ($('#sortable') as any).sortable();
    }, 3000);*/
    // tslint:disable-next-line:no-string-literal
    // $('#sortable')['disableSelection']();
    //$('#sortable').sortable();
    //$('#sortable')['disableSelection']()
  }
}
