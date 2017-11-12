import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { keyboardsService } from '../../servicios/keyboards.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search.result',
  templateUrl: './searchResult.component.html',
})
export class SearchResultComponent implements OnInit {

  keyboards: any[] = []
  searchTerm: string;

  constructor(private activatedRoute: ActivatedRoute,
    private _keyboardsSevices: keyboardsService,
    private router: Router) {
  }

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      this.searchTerm = params['searchTerm'];
      this.keyboards = this._keyboardsSevices.buscarkeyboards(params['searchTerm']);
    });
  }
  verkeyboard(i: string) {
    this.router.navigate(['/keyboard', this._keyboardsSevices.getkeyboardsPos(i)]);
  }

}
