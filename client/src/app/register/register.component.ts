import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { AccountService } from '../_services/account.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  @Output() cancelRegistered = new EventEmitter();
  model: any={};

  constructor(private accountService: AccountService,
    private toastr: ToastrService) { }

  ngOnInit(): void {
   
  }

  register(): void {
    this.accountService.register(this.model).subscribe(result => {
      console.log(result)
      this.cancel();
    }, error => this.toastr.error(error.error));
  }

  cancel(){
    this.cancelRegistered.emit(false);
  }
}
