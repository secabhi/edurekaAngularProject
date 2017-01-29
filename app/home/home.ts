import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
    selector: 'home',
    templateUrl: 'app/home/home.html'
})
export class HomeComponent {
    model: any
    name:string;age:string;designation:string;salary:string;
    ass_name:string;
    ass_age:string;
    ass_designation:string;
    ass_salary:string;
    constructor() {
        this.model = [];
    }

    assign_value(){
      this.ass_name = "Abhishek";
      this.ass_age = "25";
      this.ass_designation = "Software engineer";
      this.ass_salary = "140000"
    }

    addrecord(){
        this.model.push({"name":this.name,"age":this.age,"designation":this.designation,"salary":this.salary})
        this.name = "";
        this.age = "";
        this.designation = "";
        this.salary = "";
    }
}