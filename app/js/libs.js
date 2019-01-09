const navLinkOne = document.getElementById('nav_link_one');
const navLinkTwo = document.getElementById('nav_link_two');
const navLinkThree = document.getElementById('nav_link_three');
const navLinkFour = document.getElementById('nav_link_four');
const body = document.getElementsByTagName('body');
const logo = document.getElementById('logo');
const adress = document.querySelector('.adress');

const navLinks = [navLinkOne, navLinkTwo, navLinkThree, navLinkFour];

//interate navLinks

navLinks.forEach(function(element){

  element.onmouseover = function(){
    event.target.style.fontWeight = "bold";
  }

  element.onmouseout = function(){
    event.target.style.fontWeight = "normal";
  }

})

//logo visibility

const logoVisibility = () =>{
logo.style.opacity = 1;
logo.style.transitionDuration = "8s";

}

window.addEventListener('load', logoVisibility);

//scroll effect

const group_two = document.querySelector('.group_two');
const critic = document.getElementById('critic');
const slogan = document.querySelector('.slogan');

//scroll event function
const scrolling = el =>{

  const isPartiallyVisibleBottom = el =>{
    const elementBoundary = el.getBoundingClientRect();//возвращает объект, который является объединением прямоугольников для этого объекта

    const top = elementBoundary.top;//считытваем значение свойства top, объекта elementBoundary
    const bottom = elementBoundary.bottom;//считытваем значение свойства bottom, объекта elementBoundary
    const height = elementBoundary.height;//считытваем значение свойства height, объекта elementBoundary
    return (top + height) > window.innerHeight &&  bottom < (height + window.innerHeight) ? true:false;//условие, когда элемент не виден или не полностью виден свеху или снизу
  }

  const isPartiallyVisibleTop = el =>{
    const elementBoundary = el.getBoundingClientRect();//возвращает объект, который является объединением прямоугольников для этого объекта

    const top = elementBoundary.top;//считытваем значение свойства top, объекта elementBoundary
    const bottom = elementBoundary.bottom;//считытваем значение свойства bottom, объекта elementBoundary
    const height = elementBoundary.height;//считытваем значение свойства height, объекта elementBoundary
    return bottom < height && (top + height) > 0 ? true:false;
  }

  const isFullyVisible = el =>{
    const elementBoundary = el.getBoundingClientRect();

    const top = elementBoundary.top;
    const bottom = elementBoundary.bottom;
    const height = elementBoundary.height;

    return top >= 0 && bottom <= window.innerHeight ? true:false;
  }

  isFullyVisible(el) || isPartiallyVisibleTop(el) || isPartiallyVisibleBottom(el) ?
    el.style.transform = 'translateX(0px)' : el.style.transform = 'translateX(100vw)';

  console.log('Partially visible top: ' + isPartiallyVisibleTop(el));
  console.log('Partially visible bottom: ' + isPartiallyVisibleBottom(el));
  console.log('Full visible: ' + isFullyVisible(el));
}

//Animation frame function

let isScrolling = false;

const throttleScroll = (el_one, el_two, el_three) => {
  if(isScrolling === false){
    window.requestAnimationFrame(function(){
      scrolling(el_one);
      scrolling(el_two);
      scrolling(el_three);
      isScrolling = false;
    })
    isScrolling = true;
  }
}

window.addEventListener('scroll', function(){
  throttleScroll(group_two, critic, slogan);
})

adress.addEventListener('click', event => {
  event.target.style.transform = 'translateZ(100px)';
});
adress.addEventListener('mouseout', event => {
  event.target.style.transform = 'translateZ(0px)';
});
