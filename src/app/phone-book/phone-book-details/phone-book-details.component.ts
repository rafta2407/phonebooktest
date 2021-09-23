import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { of, Observable } from 'rxjs';
import { PhoneBookEntryService } from 'src/app/services/phone-book-entry.service';

@Component({
  selector: 'app-phone-book-details',
  templateUrl: './phone-book-details.component.html',
  styleUrls: ['./phone-book-details.component.scss']
})
export class PhoneBookDetailsComponent implements OnInit {


  entries$: Observable<any[]>;
  public bookId: number;

  constructor(private entryService: PhoneBookEntryService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.getEntries();
  }

  private getEntries(): void{
    this.bookId = Number(this.route.snapshot.paramMap.get('id'));
    this.entries$ = this.entryService.getEntriesForPhoneBook(this.bookId);
  }

}
