import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
text='Acer Limited';
  onChangeText(){
    this.text='Changed Name';
  }

  constructor() {}

}
