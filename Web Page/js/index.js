var getBCN = function (className) {
    return document.getElementsByClassName(className);
}

var addClass =function (element, _className) {

    var className = element.className.split(' ');
    var classNameMap = {}

    for (var i=0; i<className.length; i++) {
        classNameMap[className[i]] = 1;
    }
    classNameMap[-className] = 1;
    
    className = [];

    for(i in classNameMap) {
        className.push(i);
    }
    element.className = className.join(' ');
}

var removeClass = function (element ,  _className) {

    var className = element.className.split(' ');
    var classNameMap = {}
    for(var i=0;i<className.length;i++){ 
      classNameMap[ className[i]] = 1;
    }
    delete classNameMap[-className];
    className = [];
    for(i in classNameMap){
      className.push(i);
    }
    element.className = className.join(' ');
}

window.onload = function  (argument) {
  
    addClass( getBCN('header')[0] , 'header-active-1' ) ;
  
    addClass( getBCN('screen-1-heading')[0] , 'screen-1-heading_animate_init' );
    addClass( getBCN('screen-1-phone')[0] , 'screen-1-phone_animate_init' );
    addClass( getBCN('screen-1-shadow')[0] , 'screen-1-shadow_animate_init' );
  
    // screen 2 init
    addClass( getBCN('screen-2-heading')[0] , 'screen-2-heading_animate_init' );
    addClass( getBCN('screen-2-subheading')[0] , 'screen-2-subheading_animate_init' );
    addClass( getBCN('screen-2-phone')[0] , 'screen-2-phone_animate_init' );
  
  
    addClass( getBCN('screen-3-heading')[0] , 'screen-3-heading_animate_init' );
    addClass( getBCN('screen-3-subheading')[0] , 'screen-3-subheading_animate_init' );
    addClass( getBCN('screen-3-phone')[0] , 'screen-3-phone_animate_init' );
    addClass( getBCN('screen-3-features')[0] , 'screen-3-features_animate_init' );
  
  
    addClass( getBCN('screen-4-heading')[0] , 'screen-4-heading_animate_init' );
    addClass( getBCN('screen-4-subheading')[0] , 'screen-4-subheading_animate_init' );
    addClass( getBCN('screen-4-type')[0] , 'screen-4-type_animate_init' );
  
  
  
    addClass( getBCN('screen-5-heading')[0] , 'screen-5-heading_animate_init' );
    addClass( getBCN('screen-5-subheading')[0] , 'screen-5-subheading_animate_init' );
    addClass( getBCN('screen-5-back')[0] , 'screen-5-back_animate_init' );
  
    setTimeout(function () {
  
      getBCN('screen-1-heading')[0].style.visibility='visible';
      getBCN('screen-1-phone')[0].style.visibility='visible';
      getBCN('screen-1-shadow')[0].style.visibility='visible';
  
      addClass( getBCN('screen-1-heading')[0] , 'screen-1-heading_animate_done' );
      addClass( getBCN('screen-1-phone')[0] , 'screen-1-phone_animate_done' );
      addClass( getBCN('screen-1-shadow')[0] , 'screen-1-shadow_animate_done' );
    },500)
  
  
  
    getBCN('header-nav-item-i-1')[0].onclick=function () {
      document.body.scrollTop = 0;
    }
    getBCN('header-nav-item-i-2')[0].onclick=function () {
      document.body.scrollTop = 1*800-60;
    }
    getBCN('header-nav-item-i-3')[0].onclick=function () {
      document.body.scrollTop = 2*800-60;
    }
    getBCN('header-nav-item-i-4')[0].onclick=function () {
      document.body.scrollTop = 3*800-60;
    }
  
    getBCN('header-nav-item-i-5')[0].onclick=function () {
      document.body.scrollTop = 4*800-60;
    }
  
    getBCN('header-nav')[0].onmouseout = function  () {
      getBCN('header-nav-item-tip')[0].style.left = '';
    }
    getBCN('header-nav-item-i-1')[0].onmouseover=function () {
      getBCN('header-nav-item-tip')[0].style.left = (0*100+20)+'px';
    }
    getBCN('header-nav-item-i-2')[0].onmouseover=function () {
      getBCN('header-nav-item-tip')[0].style.left = (1*100+20)+'px';
    }
    getBCN('header-nav-item-i-3')[0].onmouseover=function () {
      getBCN('header-nav-item-tip')[0].style.left = (2*100+20)+'px';
    }
    getBCN('header-nav-item-i-4')[0].onmouseover=function () {
      getBCN('header-nav-item-tip')[0].style.left = (3*100+20)+'px';
    }
    getBCN('header-nav-item-i-5')[0].onmouseover=function () {
      getBCN('header-nav-item-tip')[0].style.left = (4*100+20)+'px';
    }
  }
  
  
  
  
  window.onscroll = function () {
  
    var top  = document.body.scrollTop;
    if( top < 100 ){
      getBCN('header')[0].setAttribute('class','header header-active-1')
      removeClass( getBCN('header')[0] , 'header-status-black' );
    }else{
      addClass( getBCN('header')[0] , 'header-status-black' ) ;
    }
  
    if( top < 400 ){
      getBCN('outline')[0].style.opacity=0;
    }else{
      getBCN('outline')[0].style.opacity=1;
      getBCN('outline')[0].setAttribute('class','outline outline-active-1');
  
    }
  
    
  
    if(top>1*800-61){
      getBCN('header')[0].setAttribute('class','header header-status-black header-active-2');
  
      removeClass( getBCN('screen-2-heading')[0] , 'screen-2-heading_animate_init' );
      removeClass( getBCN('screen-2-subheading')[0] , 'screen-2-subheading_animate_init' );
      removeClass( getBCN('screen-2-phone')[0] , 'screen-2-phone_animate_init' );
  
      addClass( getBCN('screen-2-heading')[0] , 'screen-2-heading_animate_done' );
      addClass( getBCN('screen-2-subheading')[0] , 'screen-2-subheading_animate_done' );
      addClass( getBCN('screen-2-phone')[0] , 'screen-2-phone_animate_done' );
  
      getBCN('outline')[0].setAttribute('class','outline outline-active-2');
    }
  
    if(top>2*800-61){
      getBCN('header')[0].setAttribute('class','header header-status-black header-active-3');
  
      removeClass( getBCN('screen-3-heading')[0] , 'screen-3-heading_animate_init' );
      removeClass( getBCN('screen-3-subheading')[0] , 'screen-3-subheading_animate_init' );
      removeClass( getBCN('screen-3-phone')[0] , 'screen-3-phone_animate_init' );
      removeClass( getBCN('screen-3-features')[0] , 'screen-3-features_animate_init' );
  
      addClass( getBCN('screen-3-heading')[0] , 'screen-3-heading_animate_done' );
      addClass( getBCN('screen-3-subheading')[0] , 'screen-3-subheading_animate_done' );
      addClass( getBCN('screen-3-phone')[0] , 'screen-3-phone_animate_done' );
      addClass( getBCN('screen-3-features')[0] , 'screen-3-features_animate_done' );
  
      getBCN('outline')[0].setAttribute('class','outline outline-active-3');
    }
    if(top>3*800-61){
      getBCN('header')[0].setAttribute('class','header header-status-black header-active-4');
  
  
      removeClass( getBCN('screen-4-heading')[0] , 'screen-4-heading_animate_init' );
      removeClass( getBCN('screen-4-subheading')[0] , 'screen-4-subheading_animate_init' );
      removeClass( getBCN('screen-4-type')[0] , 'screen-4-type_animate_init' );
  
  
      addClass( getBCN('screen-4-heading')[0] , 'screen-4-heading_animate_done' );
      addClass( getBCN('screen-4-subheading')[0] , 'screen-4-subheading_animate_done' );
      addClass( getBCN('screen-4-type')[0] , 'screen-4-type_animate_done' );
  
      getBCN('outline')[0].setAttribute('class','outline outline-active-4');
  
  
    }
    if(top>4*800-61){
      getBCN('header')[0].setAttribute('class','header header-status-black header-active-5');
  
  
      removeClass( getBCN('screen-5-heading')[0] , 'screen-5-heading_animate_init' );
      removeClass( getBCN('screen-5-subheading')[0] , 'screen-5-subheading_animate_init' );
      removeClass( getBCN('screen-5-back')[0] , 'screen-5-back_animate_init' );
  
  
      addClass( getBCN('screen-5-heading')[0] , 'screen-5-heading_animate_done' );
      addClass( getBCN('screen-5-subheading')[0] , 'screen-5-subheading_animate_done' );
      addClass( getBCN('screen-5-back')[0] , 'screen-5-back_animate_done' );
  
      getBCN('outline')[0].setAttribute('class','outline outline-active-5');
  
    }
  }