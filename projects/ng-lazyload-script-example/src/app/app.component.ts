import {Component, OnInit} from '@angular/core';
import {NgLazyloadScriptService} from '../../../ng-lazyload-script/src/public-api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  constructor(private ngLazyScriptService: NgLazyloadScriptService) {
  }

  ngOnInit() {
    // Load the external script on the fly
    this.ngLazyScriptService.loadScript('http://ng-lazy-script.uapps.ch/example-script.js').subscribe(() => {
      const colorUtil = new ColorUtil('red-box');
      colorUtil.changeBackgroundColor('red');
    });
  }

}


