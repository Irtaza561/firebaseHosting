const LeftToRight = () =>{
    var main = document.querySelector('.right');
    var windowHeight = window.innerHeight;
    var revealTop = main.getBoundingClientRect().top;
    var revealPoint = 200;
    if(revealPoint < windowHeight -revealTop){
        main.classList.add('leftToRight')
    } else{
        main.classList.add('leftToRight')
    }
}

window.addEventListener('scroll', LeftToRight )