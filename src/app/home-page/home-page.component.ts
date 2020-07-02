import { items } from "./itemsArr";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-home-page",
  templateUrl: "./home-page.component.html",
  styleUrls: ["./home-page.component.scss"],
})
export class HomePageComponent implements OnInit {
  //  this.items = items;

  items = [
    { title: "Quarq Shokwiz: An automated suspension local devide ", text: "Introducion and overview of the Quarq", tier: 1, newItem: true },
    { title: "Carl", text: "Sweden", tier: 2, newItem: false },
    { title: "Margareth", text: "England", tier: 1, newItem: false },
    { title: "Hege", text: "Norway", tier: 3, newItem: false },
  ];
  newItems = [];

  constructor() {}
  ngOnInit() {
    this.newItems = this.items;

  }

  btnNewItemsClick(n) {
    switch (n) {
      case "all":
        this.newItems = this.items;
        return this.newItems;
        break;
      case "new":
        this.newItems = this.items.filter(function (item) {
          return item.newItem == true;
        });
        break;
      case "tierOne":
        this.newItems = this.items.filter(function (item) {
          return item.tier == 1;
        });
        break;
      case "tierTwo":
        this.newItems = this.items.filter(function (item) {
          return item.tier == 2;
        });
        break;
      case "tierThree":
        this.newItems = this.items.filter(function (item) {
          return item.tier == 3;
        });
        break;
      default:
        return (this.newItems = this.items);
    }
  }
}
