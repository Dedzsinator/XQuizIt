"use strict";(self.webpackChunkxquizit=self.webpackChunkxquizit||[]).push([[592],{2070:(g,h,c)=>{c.d(h,{s:()=>v});var a=c(5861),r=c(9226),o=c(8867),u=c(5e3);let y=(()=>{class s{constructor(){}generateUUID(){let e=(new Date).getTime(),t="undefined"!=typeof performance&&performance.now&&1e3*performance.now()||0;return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,function(i){let n=16*Math.random();return e>0?(n=(e+n)%16|0,e=Math.floor(e/16)):(n=(t+n)%16|0,t=Math.floor(t/16)),("x"===i?n:3&n|8).toString(16)})}}return s.\u0275fac=function(e){return new(e||s)},s.\u0275prov=u.Yz7({token:s,factory:s.\u0275fac,providedIn:"root"}),s})();var x=c(8345);let v=(()=>{class s{constructor(e,t,i){this.fire=e,this.uid=t,this.localStorageService=i,this.userUid=""}setFireUsers(e){var t=this;return(0,a.Z)(function*(){const i=e;i.password="";const n=(0,r.JU)(t.fire,o.Z.Users,e.uid);yield(0,r.pl)(n,i,{merge:!0})})()}getFireUser(e){var t=this;return(0,a.Z)(function*(){const i=(0,r.JU)(t.fire,o.Z.Users,e);return yield(0,r.QT)(i)})()}createVocabulary(e){var t=this;return(0,a.Z)(function*(){const i=(0,r.JU)(t.fire,o.Z.Vocabularys,t.uid.generateUUID());yield(0,r.pl)(i,e,{merge:!0})})()}createFlashCardList(e){var t=this;return(0,a.Z)(function*(){const i=(0,r.JU)(t.fire,o.Z.FlashCardList,t.uid.generateUUID()),n=t.localStorageService.getItemInStorage("account");if(void 0!==n.uid){const d={name:e,uid:n.uid};yield(0,r.pl)(i,d,{merge:!0})}})()}createFlashcard(e){var t=this;return(0,a.Z)(function*(){const i=(0,r.hJ)(t.fire,o.Z.FlashCards);yield(0,r.pl)((0,r.JU)(i),e,{merge:!0})})()}createCategory(e){var t=this;return(0,a.Z)(function*(){const i=(0,r.hJ)(t.fire,o.Z.Categorys);yield(0,r.pl)((0,r.JU)(i,e.category),e,{merge:!0})})()}createItem(e,t,i){var n=this;return(0,a.Z)(function*(){const d=(0,r.JU)(n.fire,o.Z.Categorys,e);t.push(i),yield(0,r.r7)(d,{item:t})})()}deleteRow(e,t){var i=this;return(0,a.Z)(function*(){const n=(0,r.JU)(i.fire,e,t);yield(0,r.oe)(n)})()}deleteFlashcardList(e){var t=this;return(0,a.Z)(function*(){yield t.deleteRow(o.Z.FlashCardList,e)})()}deleteFlashcard(e){var t=this;return(0,a.Z)(function*(){yield t.deleteRow(o.Z.FlashCards,e)})()}deleteCategory(e){var t=this;return(0,a.Z)(function*(){yield t.deleteRow(o.Z.Categorys,e)})()}deleteVocabulary(e){var t=this;return(0,a.Z)(function*(){console.log("id",e),yield t.deleteRow(o.Z.Vocabularys,e)})()}deleteItem(e,t){var i=this;return(0,a.Z)(function*(){const n=(0,r.JU)(i.fire,o.Z.Categorys,e);yield(0,r.r7)(n,{item:t})})()}updateFlashcard(e,t){var i=this;return(0,a.Z)(function*(){const n=(0,r.JU)(i.fire,o.Z.FlashCards,e);yield(0,r.r7)(n,{isRight:t})})()}updateVocabulary(e,t){var i=this;return(0,a.Z)(function*(){const n=(0,r.JU)(i.fire,o.Z.Vocabularys,e);yield(0,r.pl)(n,t)})()}resetFlashcard(e){var t=this;return(0,a.Z)(function*(){const i=(0,r.IO)((0,r.hJ)(t.fire,o.Z.FlashCards),(0,r.ar)("uid","==",e));(0,r.PL)(i).then(n=>{n.forEach(function(){var d=(0,a.Z)(function*(f){f.data();const Z=(0,r.JU)(t.fire,o.Z.FlashCards,f.id);yield(0,r.r7)(Z,{isRight:!1})});return function(f){return d.apply(this,arguments)}}())}).catch(n=>console.log(n))})()}}return s.\u0275fac=function(e){return new(e||s)(u.LFG(r.gg),u.LFG(y),u.LFG(x.n))},s.\u0275prov=u.Yz7({token:s,factory:s.\u0275fac,providedIn:"root"}),s})()}}]);