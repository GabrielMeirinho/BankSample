import { Component, Inject , OnInit } from '@angular/core';
import { AppService } from '../app.service';
import { FormGroup, FormControl, FormArray, Validators, NgForm} from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { FormsModule }   from '@angular/forms';
import { AngularFileUploaderModule } from 'angular-file-uploader';

@Component({
  selector: 'app-accounts-create',
  templateUrl: './accounts-create.component.html',
  styleUrls: ['./accounts-create.component.css']
})
export class AccountsCreateComponent implements OnInit {

  constructor(private service: AppService, private http : HttpClient) { }

  ngOnInit(): void {
  }

  afuConfig = {
    uploadAPI: {
      multiple: false,
      formatsAllowed: ".csv",
      maxSize: "1",
      url:"http://localhost:8000/account/file"
    }
  };

  account: any;

  readAndPostAccount(){
    console.log(this.accountForm.value)
    this.postAccount(this.createObjectAccount());
  }

  accountForm = new FormGroup({
    bankname: new FormControl('', [Validators.required, Validators.minLength(3)]),
    cardnumber: new FormControl('', [Validators.required]),
    expiredate: new FormControl('', [Validators.required])
  });

  fileForm = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.minLength(3)]),
    file: new FormControl('', [Validators.required]),
    fileSource: new FormControl('', [Validators.required])
  });

  /**
   * Write code on Method
   *
   * @return response()
   */
   get f(){
    return this.fileForm.controls;
  }

  onFileChange(event:any) {
    if (event.target.files.length > 0) {
      const file = event.target.files[0];
      this.fileForm.patchValue({
        fileSource: file
      });
    }
  } 

  postAccount(acc:any) {
    console.log("Function postAccount() called")
    console.log(this.createObjectAccount())
      this.http.post('http://localhost:8000/account', this.createObjectAccount(),  { headers: this.service.headers})
        .subscribe(res => {
          console.log(res);
          alert('Uploaded Successfully.');
        })
  }  
  

   /**
   * Write code on Method
   *
   * @return response()
   */
    submitFile(){
      console.log("Function submit() called")
      console.log(this.fileForm.value.fileSource)
      this.http.post('http://localhost:8000/account/file', { file : this.fileForm.value.fileSource })
        .subscribe(res => {
          console.log(res);
          alert('Uploaded Successfully.');
        })
    }


  createObjectAccount(){
    let extractedform = this.accountForm.value
    return '{ "bankname": '+ "\"" + extractedform.bankname + "\"" +  ' , "cardnumber": '+ "\"" + extractedform.cardnumber + "\"" +  ' , "expiredate": '+ "\"" +  extractedform.expiredate + "\"" + ' } '
  }  

}
