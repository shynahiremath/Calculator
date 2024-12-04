import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { text } from 'stream/consumers';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrl: './calculator.component.css'
})
export class CalculatorComponent implements OnInit {

  inputStr: any;

  ngOnInit(): void {
    this.inputStr = new FormGroup({
      text : new FormControl()
    });
  }

  buttonClick(buttonElement: any) {
    console.log('Button clicked:', buttonElement.textContent);
    let buttonText = buttonElement.textContent;
    if (this.inputStr.controls.text.value != null) {
      this.inputStr.controls.text.setValue(
        this.inputStr.controls.text.value + buttonText
      );
    } else {
      this.inputStr.controls.text.setValue(buttonText);
    }
  }
  cleardisplay() {
    this.inputStr.controls.text.setValue("")
  }
  solve() {
    let result = eval(this.inputStr.controls.text.value)
    this.inputStr.controls.text.setValue(result)
  }
}
