import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { AccountService } from '../_services/account.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  @Output() cancelRegistered = new EventEmitter();
  model: any={};

  constructor(private accountService: AccountService) { }

  ngOnInit(): void {
   
  }

  register(): void {
    this.accountService.register(this.model).subscribe(result => {
      console.log(result)
      this.cancel();
    }, err => console.log(err));
  }

  cancel(){
    this.cancelRegistered.emit(false);
  }
}
