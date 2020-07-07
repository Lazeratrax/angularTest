import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-home-page",
  templateUrl: "./home-page.component.html",
  styleUrls: ["./home-page.component.scss"],
})
export class HomePageComponent implements OnInit {
  modalIntroduction = false;
  modalPowerMeters = false;
  isTwenty = true;
  isNew = true;
  isOne = true;
  isTwo = true;

  items = [
    {
      title: "Quarq Shokwiz: An automated suspension local devide ",
      text: "Introducion and overview of the Quarq",
      isOne: true,
      isTwenty: true,
      isNew: true,
    },
    {
      title: "Quarq DZero",
      text: "introduction and overview of the Qurtz TyreWiz",
      isOne: true,
      isTwenty: true,
      isNew: false,
    },
    {
      title: "Margareth",
      text: "introduction and overview of the Qurtz Factory",
      isOne: true,
      isTwenty: true,
      isNew: false,
    },
    {
      title: "The heard of your bycilce",
      text: "introduction and overview of the Qurtz History",
      isOne: true,
      isTwenty: true,
      isNew: false,
    },
    {
      title: "QurQ: know your powers",
      text: "introduction and overview of the Qurtz History",
      isTwo: true,
      isTwenty: true,
      isNew: false,
    },
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
          return item.isNew == true;
        });
        break;
      case "tierOne":
        this.newItems = this.items.filter(function (item) {
          return item.isOne == true;
        });
        break;
      case "tierTwo":
        this.newItems = this.items.filter(function (item) {
          return item.isTwo == true;
        });
        break;
      default:
        return (this.newItems = this.items);
    }
  }
}
