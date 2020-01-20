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
  }

  loadTextChangerAndChangeText() {
    // Load the external script on the fly
    this.ngLazyScriptService.loadScript('https://ng-lazy-script.uapps.ch/text-changer-util.js').subscribe(() => {
      const textChangerUtil = new TextChangerUtil('text-box-text-changer');
      textChangerUtil.changeText('A new text (set by text changer util which was lazy loaded)');
    });
  }

  loadTextAppenderAndChangeText() {
    // Load the external script on the fly
    this.ngLazyScriptService.loadScript('https://ng-lazy-script.uapps.ch/text-appender-util.js').subscribe(() => {
      const textChangerUtil = new TextAppenderUtil('text-box-text-appender');
      textChangerUtil.appendText('appended text');
    });
  }
}

