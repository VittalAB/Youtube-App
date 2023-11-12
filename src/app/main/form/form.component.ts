import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormControl, FormBuilder, Validators } from '@angular/forms';
import { FloatLabelType } from '@angular/material/form-field';
import { Router } from '@angular/router';
import { DownloadService } from 'services/download.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {
  hideRequiredControl = new FormControl(false);
  floatLabelControl = new FormControl('auto' as FloatLabelType);


  options = this._formBuilder.group({
    hideRequired: this.hideRequiredControl,
    floatLabel: this.floatLabelControl,
    url: new FormControl('', { validators: [Validators.required] }),
    media: new FormControl("", { validators: [Validators.required] }),
    quality: new FormControl("", { validators: [Validators.required] })
  });

  constructor(private _formBuilder: FormBuilder,
    private http: HttpClient,
    private router: Router,
    private dService: DownloadService) { }

  getFloatLabelValue(): FloatLabelType {
    return this.floatLabelControl.value || 'auto';
  }



  submit() {
    console.log("Data submitted");

    console.log(this.options.getRawValue());

    const data = {
      url: this.options.getRawValue().url,
      media: this.options.getRawValue().media,
      quality: this.options.getRawValue().quality
    }
    console.log("data : -", data);

    this.options.reset({
      url: "",
      media: "",
      quality: ""
    })

    this.http.post("/submit_data", data).subscribe((res) => {
      console.log(res);
      this.dService.downloadStatus = true;
    })


    this.router.navigate(['result']);

    console.log("Page is redirected before this stmt.....");

  }
}
