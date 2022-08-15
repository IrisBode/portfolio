import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }


  openImprint() {
    document.getElementById('imprint').classList.remove('d-none');
    document.getElementById('legalnotice').classList.add('d-none');
  }

  closeImprint() {
    document.getElementById('imprint').classList.add('d-none');

  }

  openLegalnotice() {
    document.getElementById('legalnotice').classList.remove('d-none');
    document.getElementById('imprint').classList.add('d-none');
  }

  closeLegalnotice() {
    document.getElementById('legalnotice').classList.add('d-none');
  }

}
