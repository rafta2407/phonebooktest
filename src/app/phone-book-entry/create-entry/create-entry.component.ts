import { ActivatedRoute, Router } from '@angular/router';
import { PhoneBookEntryService } from './../../services/phone-book-entry.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-create-entry',
  templateUrl: './create-entry.component.html',
  styleUrls: ['./create-entry.component.scss']
})
export class CreateEntryComponent implements OnInit {

  public form: FormGroup;
  private bookId: number;

  constructor(private service: PhoneBookEntryService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.initializeForm();
    this.bookId = Number(this.route.snapshot.paramMap.get('id'));
  }

  onSubmit(): void {
    const formName = this.form.get('name').value;
    const formPhoneNumber = this.form.get('phoneNumber').value;
    this.service.post({name: formName, phoneNumber: formPhoneNumber, phoneBookId: this.bookId }).subscribe(response => {
      console.log(response);
      this.router.navigate(['/phone-book/detail/', this.bookId]);
    });
  }

  private initializeForm(): void{
    this.form = new FormGroup({
      id: new FormControl(0),
      name: new FormControl('', Validators.required),
      phoneNumber: new FormControl('', Validators.required)
    });
  }

}
