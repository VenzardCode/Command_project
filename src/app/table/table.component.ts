import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';


@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit{

  constructor(private httpService: HttpService) { }

  displayedColumns: string[] = ['name','birth_year', 'skin_color', 'gender'];
  dataSource!: any[];

  ngOnInit() {
    this.httpService.getPeople().subscribe(res => {

      this.dataSource = res.results
    })
    // this.httpService.getPlanets().subscribe(res => {
    //   this.dataSource += res.results
    // })
    // this.httpService.getSpecies().subscribe(res => {
    //   this.dataSource = res.results
    // })
  }


}
