import { Component, OnInit } from '@angular/core';
import { keyboardsService, keyboard } from '../../servicios/keyboards.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-keyboards',
  templateUrl: './keyboards.component.html',
  styles: []
})
export class keyboardsComponent implements OnInit {


  keyboards: keyboard[] = [];
  constructor(private _keyboardsService: keyboardsService,
    private router: Router) {

  }

  ngOnInit() {
    this.keyboards = this._keyboardsService.getkeyboards();
    console.log(this.keyboards);
  }

  verkeyboard(i:number){
      this.router.navigate(['/keyboard',i]);
  }



}
