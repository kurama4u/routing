import { Component } from '@angular/core';
import { ProfileService } from './profile.service';

interface PROFOBJ {
    name: string;
    job: string;
    city: string;
    id: string;
}

@Component({
    selector: 'app-post',
    templateUrl: './post.component.html',
    styleUrls: ['./post.component.css']
})


export class PostComponent{
    profObj: PROFOBJ = {
        name:   '', 
        job:    '', 
        city:   '', 
        id:     ''
    };
    constructor(private profile: ProfileService){

    }

    anyFunct(): void {
      this.profile.saveProf().subscribe(res => this.profObj=res);
  }
}