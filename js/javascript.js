
window.onload = function () {

  // menu scroll


  // document.querySelector('.logo').addEventListener("click", function(){

  //   window.scrollTo({
  //     top: 2250,
  //     left: 0,
  //     behavior: "smooth"
  //   });

  // });



  let scText2 = document.querySelector('.middle_bottom');
  window.addEventListener('scroll', function () {

    if (this.scrollY > 800) {
      scText2.style.height = `${4 * this.scrollY / 10}px`;

    };

    if (this.scrollY > 1000) {

      document.querySelector('.middle_img').classList.add('fixed');
    } else {
      document.querySelector('.middle_img').classList.remove('fixed');

    }
  });


  // text animation
  const content = 'a long way';
  const text = document.querySelector('.text');
  let index = 0;

  function typing() {
    text.textContent += content[index++];
    if (index > content.length) {
      text.textContent = ""
      index = 0;
    }
  }

  setInterval(typing, 400)




  const pTag1 = document.querySelector('.first-parallel')
  const pTag2 = document.querySelector('.second-parallel')
  const pTag3 = document.querySelector('.third-parallel')


  const textArr1 = 'Step by step goes a long way Step by step goes a long way'.split(' ')
  const textArr2 = 'Faithfulness makes all things possible Faithfulness makes all things possible'.split(' ')
  const textArr3 = "Try your best rather than be the best Try your best rather than be the best".split(' ')


  let count1 = 0
  let count2 = 0
  let count3 = 0


  initTexts(pTag1, textArr1)
  initTexts(pTag2, textArr2)
  initTexts(pTag3, textArr3)


  function initTexts(element, textArray) {
    textArray.push(...textArray)
    for (let i = 0; i < textArray.length; i++) {
      element.innerText += `${textArray[i]}\u00A0\u00A0\u00A0\u00A0`
    }
  }

  function marqueeText(count, element, direction) {
    if (count > element.scrollWidth / 2) {
      element.style.transform = `translate3d(0, 0, 0)`
      count = 0
    }
    element.style.transform = `translate3d(${direction * count}px, 0, 0)`

    return count
  }

  function animate() {
    count1++
    count2++
    count3++


    count1 = marqueeText(count1, pTag1, -1)
    count2 = marqueeText(count2, pTag2, 1)
    count3 = marqueeText(count3, pTag3, -1)


    window.requestAnimationFrame(animate)
  }

  function scrollHandler() {
    count1 += 15
    count2 += 15
    count3 += 15

  }

  window.addEventListener('scroll', scrollHandler)
  animate();



  // work up down
  let clickCount = 1;
  let boxList = document.querySelector('.Work_wrapper');
  document.querySelector('.Work_down').addEventListener('click', function () {




    if (clickCount == 1) {
      boxList.style.top = `-${clickCount}00%`;
      clickCount += 1;
      console.log(clickCount);
    } else if (clickCount == 2) {
      boxList.style.top = `-${clickCount}00%`;
      clickCount += 1;
      console.log(clickCount);

    } else if (clickCount == 3) {
      boxList.style.top = `-${clickCount}00%`;
      clickCount += 1;
      console.log(clickCount);

    } else if (clickCount == 4) {
      boxList.style.top = `-0%`;
      clickCount = 1;
      console.log(clickCount);

    }
  });
  document.querySelector('.Work_up').addEventListener('click', function () {




    if (clickCount == 4) {

      boxList.style.top = `-${clickCount - 2}00%`;
      clickCount = 3;
      console.log(clickCount);
    } else if (clickCount == 3) {

      boxList.style.top = `-100%`;
      clickCount = 2;
      console.log(clickCount);

    } else if (clickCount == 2) {

      boxList.style.top = `-0%`;
      clickCount = 1;
      console.log(clickCount);
    } else if (clickCount == 1) {

      boxList.style.top = `-${clickCount + 2}00%`;
      clickCount = 4;
      console.log(clickCount);
    }


  });


  function logoSwitch() {

    $('.altLogo').each(function () {
      $(this).css('top',
        $('.startLogo').offset().top - $(this).closest('.row').offset().top
      );
    });
    $('.altLogo2').each(function () {
      $(this).css('top',
        $('.startLogo').offset().top - $(this).closest('.row').offset().top
      );


    });
    $('.altLogo3').each(function () {
      $(this).css('top',
        $('.startLogo').offset().top - $(this).closest('.row').offset().top
      );


    });
    $('.altLogo4').each(function () {
      $(this).css('top',
        $('.startLogo').offset().top - $(this).closest('.row').offset().top
      );


    });
  };

  window.addEventListener('scroll', function () { logoSwitch(); });

  logoSwitch();
};


window.addEventListener('scroll', function () {
  if (this.scrollY > 3500) {

    document.querySelector(".svg_arrow2").style.animationName = "ani";
    document.querySelector(".svg_arrow").style.animationName = "ani";
  } else if (this.scrollY < 3500) {


    document.querySelector(".svg_arrow").style.animationName = "ani2";
    document.querySelector(".svg_arrow2").style.animationName = "ani3";

  };



  window.addEventListener('scroll', function () {


    if (this.scrollY > 150) {

      document.querySelector(".svgline").style.animationName = "line";

    };


  });
});











