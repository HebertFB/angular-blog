import { Component, OnInit } from '@angular/core';
import { dataFake } from 'src/app/data/dataFake';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  result: {
    id: string,
    photoCover: string,
    contentTitle: string,
    contentDescription: string
  }[] = [];

  constructor() { }

  ngOnInit(): void {
    this.setValuesToComponent()
  }

  setValuesToComponent() {
    // Adicionando dados do dataFake no array
    dataFake.forEach((item) => {
      this.result.push({
        id: item?.id,
        photoCover: item.photo,
        contentTitle: item.title,
        contentDescription: item.description,
      });
    });
  }
}
