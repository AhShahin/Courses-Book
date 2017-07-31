import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'my-browser-eve',
  templateUrl: './browser-eve.component.html',
  styleUrls: ['./browser-eve.component.css']
})
export class BrowserEveComponent implements OnInit {
  hoverSection: HTMLElement;

  ngOnInit() {
    this.hoverSection = document.getElementById('hover');
    this.hoverSection.addEventListener('mousemove', onMousemove);
    this.hoverSection.addEventListener('click', onClick);
  }

  unsubscribe() {
    console.log('called unsubscribe()');
    this.hoverSection.removeEventListener('mousemove', onMousemove);
  }
}

  function onMousemove(ev: MouseEvent) {
    console.log(ev);
}

  function onClick(ev: Event) {
    console.log("click", ev);
}


