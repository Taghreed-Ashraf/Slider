// ------------- get Element ------------
const imgs =Array.from( document.querySelectorAll(".main-item .pic"));
const lightBoxContaner = document.querySelector('.lightBox-Contaner');
const lightBoxItem = document.querySelector('.lightBox-item')
const close = document.getElementById('close');
const nextIcon = document.getElementById('next');
const prevIcon = document.getElementById('prev');

let currentIndex = 0;

// --------- get Src image --------------
for (let i=0 ; i<imgs.length ; i++)
{
  imgs[i].addEventListener('click' , function(e){
    currentIndex =  imgs.indexOf(e.target);
    let cureentSrc = e.target.src;
    lightBoxContaner.style.display = 'flex';
    lightBoxItem.style.backgroundImage = `url(${cureentSrc})`;
  })
}

// ------------- Close Slider -----------------
close.addEventListener('click' , closeSlider)

function closeSlider ()
{
  lightBoxContaner.style.display = 'none';
}
// ---------- Next Image ---------------
nextIcon.addEventListener('click' , getNextSlide)

function getNextSlide ()
{
  currentIndex++;
  if(currentIndex == imgs.length)
  {
    currentIndex = 0;
  }
  let cureentSrcPic = imgs[currentIndex].src;
  lightBoxItem.style.backgroundImage = `url(${cureentSrcPic})`;
}

// ------------- Previous Image ---------------
prevIcon.addEventListener('click' , getPrevSlide)

function getPrevSlide()
{
  currentIndex--;
  if (currentIndex<0)
  {
    currentIndex = imgs.length-1
  }
  let cureentSrcPic = imgs[currentIndex].src;
  lightBoxItem.style.backgroundImage = `url(${cureentSrcPic})`;
}

// ------------- event keyDown -------------
document.addEventListener('keydown' , function(e){
  if(e.key =='ArrowRight')
  {
    getNextSlide()
  }
  else if(e.key=='ArrowLeft')
  {
    getPrevSlide()
  }
  else if(e.key =='Escape')
  {
    closeSlider()
  }
})
