/*ُSlideShow*/
let slideIndex = 1;
function setSlide(input,index)
{
    slideIndex = index;
    let item = document.querySelector(`#${input}`)
    let slide = [...document.querySelector('.slide').children];
    slide.forEach((elemnt)=>
        {
            elemnt.classList.remove('active')
        })
    item.classList.add('active')
}

setInterval(()=>
    {
        slideIndex +=1;
        if(slideIndex ==4)
            {
                slideIndex=1;
            }
        setSlide(`slide${slideIndex}` , slideIndex)
    },3000)
/*ُEnd of SlideShow*/
