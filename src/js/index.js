const text = {
     headerLinksTitle: {ru: 'Ссылки:', en: 'Links:'},

     informationResumeNameTitle: {ru: 'Мое резюме:', en: 'My resume:'},

     informationResumeMainNameTitle: {ru: 'Имя:', en: 'Name:'},
     informationResumeMainNameText: {ru: 'Павел', en: 'Pavel'},

     informationResumeMainSurnameTitle: {ru: 'Фамилия:', en: 'Surname:'},
     informationResumeMainSurnameText: {ru: 'Атрашевский', en: 'Atrashevsky'},

     informationResumeMainPatronymicTitle: {ru: 'Отчество', en: 'Patronymic:'},
     informationResumeMainPatronymicText: {ru: 'Сергеевич', en: 'Sergeyevich'},

     informationResumeMainAgeTitle: {ru: 'Возраст', en: 'Age:'},
     informationResumeMainAgeText: {ru: '31год', en: '31years'},

     informationResumeMainPlaceTitle: {ru: 'Место рождения', en: 'Place of Birth'},
     informationResumeMainPlaceText: {ru: 'Могилев', en: 'Mogilev'},

     informationResumeMainCityTitle: {ru: 'Город проживания', en: 'City of residence'},
     informationResumeMainCityText: {ru: 'Минск', en: 'Minsk'},

     informationResumeMainNumberTitle: {ru: 'Контактный номер', en: 'Contact number'},
     informationResumeMainNumberText: {ru: '+375 29 123 81 51', en: '+375 29 123 81 51'},

     informationResumeMainMailTitle: {ru: 'Электронная почта', en: 'Email'},
     informationResumeMainMailText: {ru: 'atrasheuskipasha@gmail.com', en: 'atrasheuskipasha@gmail.com'},

     informationResumeDescriptionTitle: {ru: 'Обо мне', en: 'About me'},
     informationResumeDescriptionText: {ru: 
     `
     Я, Атрашевский Павел Сергеевич, родился 23 декабря 1991г. в городе Могилеве.
     В 2009 году окончил среднюю школу №15 в городе Могилеве.</br></br>
     С сентября 2009 года по июнь 2014 года – студент механического факультета Могилевского государственного университета продовольствия.
     Специальность по диплому – машины и аппараты пищевых производств, квалификация - инженер-механик. </br></br>
     С августа 2014 года по апрель 2015 года работал инженером-механиком в КПУП «Мозырские молочные продукты».</br></br>
     С апреля 2015 года по август 2016 года работал оператором пятого разряда в производстве пищевой продукции в КПУП «Мозырские молочные продукты».</br></br>
     С августа 2018 года по октябрь 2019 года работал программистом в компании ООО "Итиктори". </br></br>
     С января 2022 года по апрель 2022 года работал программистом в компании ООО "КлеверДев Софтваре".
     С последней работы имею положительную характеристику.
     `
     
     , en:

     `
     I am Atrashevsky Pavel Sergeevich, I was born on December 23, 1991. in the city of Mogilev.
     In 2009 I graduated from secondary school №15 in the city of Mogilev.</br></br>
     From September 2009 to June 2014 - I am a student of the mechanical faculty of the Mogilev State University of Food.
     Diploma specialty - food production machines and apparatuses, qualification - mechanical engineer. </br></br>
     From August 2014 to April 2015 I worked as a mechanical engineer at Mozyr dairy products company .</br></br>
     From April 2015 to August 2016 I worked as a fifth-class operator in the production of food products at Mozyr Dairy Products.</br></br>
     From August 2018 to October 2019 I worked as a software engineer at Itiktori LLC. </br></br>
     From January 2022 to April 2022 I worked as a software engineer at CleverDev Software LLC.
     I have a positive reference letter from my last job.          
     `
     },
     mainButton: {ru: 'Характеристика', en: 'Characteristic'},
     footerStart: {ru: 'Начало', en: 'start'},
     footerEnd: {ru: 'Конец', en: 'end'},
     footerLanguage: {ru: 'ru', en: 'en'},
     mainButtonPhoto: {ru: 'Мое фото', en: 'My photo'},
     sliderTitle: {ru: 'Мои фотографии', en: 'My photos'}
};


const sliderWidhMin = 1032;
let sliderWidhMinState;
let stateSlider = 0;

document.addEventListener('DOMContentLoaded', () => {
     const elements = {
          headerLinksTitle: document.querySelector('.header__links-title'),
          informationResumeNameTitle: document.querySelector('.information__resume-title'),
          informationResumeMainNameTitle: document.querySelector('.information__resume-main--name>span:nth-child(1)'),
          informationResumeMainNameText: document.querySelector('.information__resume-main--name>span:nth-child(2)'),
          informationResumeMainSurnameTitle: document.querySelector('.information__resume-main--surname>span:nth-child(1)'),
          informationResumeMainSurnameText: document.querySelector('.information__resume-main--surname>span:nth-child(2)'),
          informationResumeMainPatronymicTitle: document.querySelector('.information__resume-main--patronymic>span:nth-child(1)'),
          informationResumeMainPatronymicText: document.querySelector('.information__resume-main--patronymic>span:nth-child(2)'),
          informationResumeMainAgeTitle: document.querySelector('.information__resume-main--age>span:nth-child(1)'),
          informationResumeMainAgeText: document.querySelector('.information__resume-main--age>span:nth-child(2)'),
          informationResumeMainPlaceTitle: document.querySelector('.information__resume-main--place>span:nth-child(1)'),
          informationResumeMainPlaceText: document.querySelector('.information__resume-main--place>span:nth-child(2)'),
          informationResumeMainCityTitle: document.querySelector('.information__resume-main--city>span:nth-child(1)'),
          informationResumeMainCityText: document.querySelector('.information__resume-main--city>span:nth-child(2)'),
          informationResumeMainNumberTitle: document.querySelector('.information__resume-main--number>span:nth-child(1)'),
          informationResumeMainNumberText: document.querySelector('.information__resume-main--number>span:nth-child(2)'),
          informationResumeMainMailTitle: document.querySelector('.information__resume-main--mail>span:nth-child(1)'),
          informationResumeMainMailText: document.querySelector('.information__resume-main--mail>span:nth-child(2)'),
          informationResumeDescriptionTitle: document.querySelector('.information__resume-description>p:nth-child(1)'),
          informationResumeDescriptionText: document.querySelector('.information__resume-description>p:nth-child(2)'),
          mainButton: document.querySelector('.main-button-characteristic'),
          footerStart: document.querySelector('.footer__start'),
          footerEnd: document.querySelector('.footer__end'),
          footerLanguage: document.querySelector('.footer__language'),
          mainButtonPhoto: document.querySelector('.main-button-photo'),
          sliderTitle: document.querySelector('.slider-title>p')
     };

     const burgerButton = document.querySelector('.burger');

     const modal = document.querySelector('#modal');
     const modalCharacteristic = document.querySelector('#modal-characteristic');
     const closeModal = document.querySelector('#close-modal');
     const closeModalCharacteristic = document.querySelector('#close-modal-characteristic');
     const modalImage = document.querySelector('.modal__image>img');
     const modalCharacteristicImage = document.querySelector('.modal-characteristic__image>img');
     const photosNature = document.querySelectorAll('.photos__center-slide');

     const mainButtonCharacteristic = document.querySelector('.main-button-characteristic');
     const mainButtonPhoto = document.querySelector('.main-button-photo'); 

     const slider = document.querySelectorAll('.photos__center-slide');
     const dotsBlock = document.querySelector('.dots');
     const lengthSlider = document.querySelectorAll('.photos__center-slide').length;

     const about = document.querySelector('.about');
     const footerStart = document.querySelector('.footer__start');
     const footerEnd = document.querySelector('.footer__end');

     let sliderStep;

     if (window.innerWidth >= sliderWidhMin) {
          sliderWidhMinState = false;
          sliderStep = 3;
     } else {
          sliderWidhMinState = true;
          sliderStep = 2;
          makeSizeSmallSlide(photosNature, 50);
     }
     
     const numberSteps = Math.floor(lengthSlider/sliderStep);

     makeDots(1, numberSteps, dotsBlock);         
     const dots = document.querySelectorAll('.dots__item');

     document.querySelector('.photos__arrow-left svg').addEventListener('click', () => {
          prepareShiftSlider(slider, false, numberSteps);
          activeChangeDot(dots);
     })

     document.querySelector('.photos__arrow-right svg').addEventListener('click', () => {
          prepareShiftSlider(slider, true, numberSteps);
          activeChangeDot(dots);
     })

     Array.prototype.forEach.call(photosNature, el =>
               el.addEventListener('click', (el) => { 
               showModal(modal, modalImage, el);
     }));
     mainButtonCharacteristic.addEventListener('click',(el) => {
          showModal(modalCharacteristic, modalCharacteristicImage, el);
     });
     mainButtonPhoto.addEventListener('click',(el) => {
          showModal(modalCharacteristic, modalCharacteristicImage, el);
     }); 

     closeModal.addEventListener('click', () => {
          modal.style.display = 'none';
     });
     closeModalCharacteristic.addEventListener('click', () => {
          modalCharacteristic.style.display = 'none';
     })   

     footerStart.addEventListener('click', () => scrollAbout(true, about, about.scrollHeight, about.clientHeight));
     footerEnd.addEventListener('click', () => scrollAbout(false, about, about.scrollHeight, about.clientHeight));

     btnHandler(burgerButton, true, elements);
     burgerButton.addEventListener('click', () => btnHandler(burgerButton, false, elements));
})

const scrollAbout = (start, about, aboutScrollHeight, aboutClientHeight) => {     
     const sizeScrooll = aboutScrollHeight - aboutClientHeight;
     if (start) {
          about.scrollTop = 0;     
     } else {
          about.scrollTop = sizeScrooll;
     }
}    

const makeSizeSmallSlide = (photosNature, width) => {
     Array.prototype.forEach.call(photosNature, (el) => {
          el.classList.toggle('photos__center-slide--max');
     });     
}


const activeChangeDot = (dots) => {
     Array.prototype.forEach.call(dots, (el, number) => {
          if(el.classList.value.includes('dots__item-active')) {
               el.classList.toggle('dots__item-active');     
          }
          if (number === stateSlider) {
               el.classList.toggle('dots__item-active');
          }
     });
}    

const makeDots = (active, numberSteps, dotsBlock) => {
     const htmlForDot = `<div class="dots__item"></div>`;
     const htmlForDotActive = `<div class="dots__item dots__item-active"></div>`;
     let result = ``;
     for (let i = 1; i <= numberSteps; i++ ) {
          if ( i === active) {
               result += htmlForDotActive;
          } else {
               result += htmlForDot;
          }  
     }
     dotsBlock.innerHTML = result;
}

const shiftSlider = (slider, stateSlider) => {
     Array.prototype.forEach.call(slider, el => {
          el.style = `right: ${stateSlider*100}%`
     })
}

const prepareShiftSlider = (slider, shiftRight, numberSteps) => {
     if(shiftRight) {
          if(stateSlider < numberSteps - 1) {
               stateSlider += 1;
          }
     } else {
          if (stateSlider !== 0) {
               stateSlider -= 1;
          }
     }
     shiftSlider(slider, stateSlider)
}

const changeLanguage = (check, elements) => {
     const values = Object.keys(elements);
     if (check) {
          values.forEach(item => {
               elements[item].innerHTML = text[item].en;     
          })
     } else {
          values.forEach(item => {
               elements[item].innerHTML = text[item].ru;     
          })   
     }
}

const btnHandler = (btn, first, elements) => {
     if (!first) {
          btn.classList.toggle('burger-active');
     }
     const check = btn.classList.value.includes('active');
     changeLanguage(check, elements);
}

const showModal = (modal, modalImage, el) => {
     const url = el.target.attributes.maxImage.value;
     modal.style.display = 'flex';
     modalImage.setAttribute('src', url);
}





     