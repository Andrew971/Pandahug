import {TweenMax} from 'gsap'

const duration = 0.5;

export default {

  show(target){
    console.log(target)
    TweenMax.staggerTo(target, 1, {opacity:1}, duration);
    // TweenMax
    // .from(target, duration, {
    //   opacity:0,
    //   onComplete(){
    //   cb()
    // },ease:Elastic.easeOut.config(0.25,1),})
},

  hide(target) {

    TweenMax.staggerTo(target, 1, {opacity:0}, duration);

  }
}
