import { FormControl, FormGroup, Validators } from '@angular/forms';
import { PhoneBookService } from './../../services/phone-book.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-create-phone-book',
  templateUrl: './create-phone-book.component.html',
  styleUrls: ['./create-phone-book.component.scss']
})
export class CreatePhoneBookComponent implements OnInit {

  public form: FormGroup;
  constructor(private phoneBookService: PhoneBookService) { }

  ngOnInit(): void {
    this.initializeForm();
  }

  onSubmit(): void{
    const formName = this.form.get('name').value;
    this.phoneBookService.post({name: formName, id: 0 }).subscribe(console.log);
  }

  private initializeForm(): void{
    this.form = new FormGroup({
      id: new FormControl(0),
      name: new FormControl('', Validators.required)
    });
  }

}
