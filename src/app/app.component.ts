import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { UserService } from './user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit,OnDestroy {
  userActivated = false;
  private activatedSub: Subscription;
  constructor(private userService:UserService) {}

  ngOnInit() {
    this.activatedSub = this.userService.activatedEmitter.subscribe(didActivate =>{
      this.userActivated = didActivate;
    })

    // this.obs.subscribe(
    //   val=> { console.log(val) },
    //   error => { console.log("error")},
    //   () => {console.log("Completed")}
    //   )
  }

  ngOnDestroy(): void {
    this.activatedSub.unsubscribe();
  }


  // obs = new Observable(observer => {
  //   console.log('Observable starts');
  //   setTimeout(() => {
  //   observer.next('1');
  //   }, 1000);
  //   setTimeout(() => {
  //   observer.next('2');
  //   }, 2000);
  //   setTimeout(() => {
  //   observer.next('3');
  //   }, 3000);
  //   setTimeout(() => {
  //   observer.next('4');
  //   }, 4000);
  //   setTimeout(() => {
  //   observer.next('5');
  //   }, 5000);
  //   });

  
}
