import { Component } from '@angular/core';
import {  User } from 'src/store/model/article';
import { Store } from '@ngrx/store';
import { AddArticle, UpdateArticle } from 'src/store/action/article.actions';
import { UserState } from '../store/state/app.state';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ngrx-entity';
  public article:User={id:"1",title:"one",role:"category"};
	constructor(
    private store: Store<UserState>) {
}
  addEntity() {
 this.article.id="1";
 this.article.title="maccbi";
 this.article.role="sport";

    this.store.dispatch(new AddArticle(this.article));

  }
  addEntity2() {
    this.article.id="2";
    this.article.title="maccbi2";
    this.article.role="sport2";
   
       this.store.dispatch(new AddArticle(this.article));
   
     }
     update() {
      this.article.id="2";
      this.article.title="maccbi4";
      this.article.role="sport4";
     
         this.store.dispatch(new UpdateArticle({ article: {id: "2", changes: this.article}}) );
     
       }
}
