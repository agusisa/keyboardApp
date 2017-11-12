import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { keyboardsService } from '../../servicios/keyboards.service';


@Component({
  selector: 'app-keyboard',
  templateUrl: './keyboard.component.html',
})
export class keyboardComponent {

  keyboard: any = {};

  constructor(private activatedRoute: ActivatedRoute,
              private _keyboardsService: keyboardsService

  ) {
    this.activatedRoute.params.subscribe(params => {
      console.log(params['id']);
      this.keyboard = this._keyboardsService.getKeyboard(params['id']);
    })
  }


}
