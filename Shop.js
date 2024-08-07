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

/*Special Offer*/
let passingTime = 70000;

function setTime()
{
    if(passingTime == 0) return;
    let h = Math.floor(passingTime/3600);
    let m = Math.floor((passingTime%3600)/60);
    let s = (passingTime%3600)%60
    document.querySelector('#hour').innerHTML = h
    document.querySelector('#min').innerHTML = m
    document.querySelector('#second').innerHTML = s
}

setInterval(()=>
    {
        passingTime -= 1;
        setTime()
    } , 1000)
/*End od Special Offer*/


