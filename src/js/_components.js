//burger
$('.burger').click(function(){
    $(this).toggleClass("active");
    $('.header__nav').toggleClass("active");
    $('.nav__content').toggleClass("active");
    $('.nav__back').toggleClass("active");
    $('.grey-back').toggleClass("active");
    $('body').toggleClass("hidden");
});

//nav-elem
$('.close-nav').click(function(){ 
    $('.burger').removeClass("active");
    $('.header__nav').removeClass("active");
    $('.nav__content').removeClass("active");
    $('.nav__back').removeClass("active");
    $('.grey-back').removeClass("active");
    $('body').removeClass("hidden");
});

//hidden-block
$('#btn-qual').click(function(){
    $($(this).data("target")).stop().slideToggle();
});

//input-tel
const phoneInputField = document.querySelector("#phone");
const phoneInput = window.intlTelInput(phoneInputField, {
    initialCountry: "ru",
    utilsScript:
    "https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/17.0.8/js/utils.js",
});

document.querySelector('#phone').addEventListener('input', 
    function(e){
    this.value = this.value.replace(/[^\d.]/g, '');
    }
)

const phoneInputField1 = document.querySelector("#phone1");
const phoneInput1 = window.intlTelInput(phoneInputField1, {
    initialCountry: "ru",
    utilsScript:
    "https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/17.0.8/js/utils.js",
});

document.querySelector('#phone1').addEventListener('input', 
    function(e){
    this.value = this.value.replace(/[^\d.]/g, '');
    }
)

//licences-slider
const sliderLicenses = new Carousel(document.querySelector("#slider-licenses"), {
    Dots: false,
});

//tabs
$('.tab__title').click(function(){
    $(this).toggleClass('active');
    $($(this).data("target")).stop().slideToggle();
});

//reviews-slider
const sliderReviews = new Carousel(document.querySelector("#slider-reviews"), {
    Dots: false,
});
$('.my-paroller').paroller();