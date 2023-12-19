import { Component, AfterViewInit, OnInit, Renderer2 } from '@angular/core';
import { formatCurrency } from '@angular/common';
import { HttpClient } from '@angular/common/http';

declare const $: any;

@Component({
  selector: 'app-forex',
  templateUrl: './forex.component.html',
  styleUrls: ['./forex.component.css'],
})
export class ForexComponent implements OnInit, AfterViewInit {
  private _table1: any;

  constructor(private renderer: Renderer2, private http: HttpClient) {}

  ngAfterViewInit(): void {
    this.renderer.removeClass(document.body, 'sidebar-open');
    this.renderer.addClass(document.body, 'sidebar-closed');

    this._table1 = $('#table1').DataTable({
      columnDefs: [
        {
          targets: 2,
          className: 'text-right',
        },
      ],
    });
    this.getData();
  }
  ngOnInit(): void {}

  getData(): void {
    console.log('getData()');
    var url =
      'https://openexchangerates.org/api/latest.json?app_id=573e292650e04971b186fc6f16333fbb';

    this.http.get(url).subscribe((data: any) => {
      console.log(data);
      var rates = data.rates;
      console.log(rates);
      var idr = rates.IDR;
      var idr2 = formatCurrency(idr, 'en-US', '', 'USD');
      console.log('USD : ' + idr2);
      var row = [1, 'USD', idr2];
      this._table1.row.add(row);

      var SGD1 = rates.IDR / rates.SGD;
      var SGD2 = formatCurrency(SGD1, 'en-US', '', 'SGD');
      console.log('SGD : ' + SGD2);
      var row = [2, 'SGD', SGD2];
      this._table1.row.add(row);

      var BND1 = rates.IDR / rates.BND;
      var BND2 = formatCurrency(BND1, 'en-US', '', 'BND');
      console.log('BND : ' + BND2);
      var row = [3, 'BND', BND2];
      this._table1.row.add(row);

      var HKD1 = rates.IDR / rates.HKD;
      var HKD2 = formatCurrency(HKD1, 'en-US', '', 'HKD');
      console.log('HKD : ' + HKD2);
      var row = [4, 'HKD', HKD2];
      this._table1.row.add(row);

      var BTC1 = rates.IDR / rates.BTC;
      var BTC2 = formatCurrency(BTC1, 'en-US', '', 'BTC');
      console.log('BTC : ' + BTC2);
      var row = [5, 'BTC', BTC2];
      this._table1.row.add(row);

      var CNY1 = rates.IDR / rates.CNY;
      var CNY2 = formatCurrency(CNY1, 'en-US', '', 'CNY');
      console.log('CNY : ' + CNY2);
      var row = [6, 'CNY', CNY2];
      this._table1.row.add(row);

      var MYR1 = rates.IDR / rates.MYR;
      var MYR2 = formatCurrency(MYR1, 'en-US', '', 'MYR');
      console.log('MYR : ' + MYR2);
      var row = [7, 'MYR', MYR2];
      this._table1.row.add(row);

      var JPY1 = rates.IDR / rates.JPY;
      var JPY2 = formatCurrency(JPY1, 'en-US', '', 'JPY');
      console.log('JPY : ' + JPY2);
      var row = [8, 'JPY', JPY2];
      this._table1.row.add(row);

      var KRW1 = rates.IDR / rates.KRW;
      var KRW2 = formatCurrency(KRW1, 'en-US', '', 'KRW');
      console.log('KRW : ' + KRW2);
      var row = [9, 'KRW', KRW2];
      this._table1.row.add(row);

      var EUR1 = rates.IDR / rates.EUR;
      var EUR2 = formatCurrency(EUR1, 'en-US', '', 'EUR');
      console.log('EUR : ' + EUR2);
      var row = [10, 'EUR', EUR2];
      this._table1.row.add(row);

      this._table1.draw(false);
    });
  }
}
