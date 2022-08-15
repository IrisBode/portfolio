import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, NgForm, Validators } from "@angular/forms";
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  endpoint: string;
  postData: any = {
    'name': 'name',
    'email': 'email',
    'message': 'message',
  };

  getform: FormGroup;
  constructor(private http: HttpClient) { 

  }

  ngOnInit(): void {
    this.endpoint = "https://iris-bode.developerakademie.net/portfolio/send_mail.php";
    this.getform = new FormGroup({
      'name': new FormControl(null, [Validators.required, Validators.minLength(3)]),
      'email': new FormControl(null, [Validators.required, Validators.email]),
      'message': new FormControl(null, [Validators.required, Validators.minLength(10)])
    })

  }

  sendEmail() {
    this.http.post(this.endpoint, this.postData)
      .subscribe(
        response => console.log(response),
        response => console.log(response)
      )
    console.log('ok')
  }

  submit() {
    console.log(this.getform.value);
    this.postData = this.getform.value;
    this.sendEmail();
    this.getform.reset();
  }
}
