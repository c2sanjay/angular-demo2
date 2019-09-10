import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { contact } from '../model/contact';
import { ContactService } from '../services/contact.service';


@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.scss'],
  providers: [ContactService]

})
export class ContactFormComponent implements OnInit {
  myContact = 'Contact';
  // data: any;
  contactForm: FormGroup;
  _contact: contact;
  contactArray = [];
  _file: any;

  constructor(private fb: FormBuilder, private contservice: ContactService) {
    this.createContactForm();
    this._contact = new contact();
  }
  createContactForm() {
    this.contactForm = this.fb.group({

      userpic: new FormControl(null),
      name: ['', [Validators.required, Validators.minLength(4)]],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', Validators.required],
      message: ['', Validators.required]
    });
  }
  saveContactData() {

    const formData: any = new FormData();
    var msg: any;
    formData.append("uploads[]", this._file, this._file.name);
    formData.append("name", this.contactForm.value.name);
    formData.append("email", this.contactForm.value.email);
    formData.append("phone", this.contactForm.value.phone);
    formData.append("message", this.contactForm.value.message);

    this.contservice.SavecontactFormData(formData).subscribe(data => {

      this.getContactData();
      console.log(this.contactForm.value);

    })
  }

  getContactData() {
    this.contservice.getContact().subscribe(data => {
      this.contactArray = data;

      console.log(data);
    })
  }
  deleteContact(_id) {
    this.contservice.delContact(_id).subscribe(data => {
      this.getContactData();
      console.log('' + data);
    })
  }

  editContact(obj) {
    this.contactForm.patchValue(obj);
  }
  updateContactData() {
    this.contservice.updateContact(this.contactForm.value).subscribe(data => {
      this.getContactData();
      console.log('fasdf' + data);
    })
  }
  ngOnInit() {
    this.getContactData();

  }
  onSubmit() {
    console.log(JSON.stringify(this.contactForm.value));
  }
  onChange() {
    this.myContact = 'Contact Form';
  }
  fileChange(event) {
    this._file = event.target.files[0];
  }

}
