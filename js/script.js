var navMain = document.querySelector('.header-top');
var navToggle = document.querySelector('.header-top__toggle');
var wrapper = document.querySelector('product__quantity-selection');
var countInput = document.getElementById('count');
var butM = document.getElementById('minus');
var butP = document.getElementById('plus');
var units = countInput.value.replace(/\d/g, '');
var descrCat = document.querySelector('.categories__description');
var descrToggle = document.querySelector('.categories__description-toggle');
var meteringCat = document.querySelector('.categories__metering');
var meteringToggle = document.querySelector('.categories__metering-toggle');
var deliveryCat = document.querySelector('.categories__delivery');
var deliveryToggle = document.querySelector('.categories__delivery-toggle');
var relatedProducts = document.querySelector('.site-content__related-products');
var relatedProductsToggle = document.querySelector('.site-content__related-products-toggle');
var media = "(min-width: 760px)"


navToggle.addEventListener('click', function() {
	if (navMain.classList.contains('header-top--closed')) {
		navMain.classList.remove('header-top--closed');
		navMain.classList.add('header-top--opened');
	} else {
		navMain.classList.add('header-top--closed');
		navMain.classList.remove('header-top--opened');
	}
});

butP.onclick = function(){
    countInput.value = parseInt(countInput.value)+1+units;
};
butM.onclick = function(){
    if(parseInt(countInput.value) > 1) {
        countInput.value = parseInt(countInput.value)-1+units;
    }
};

descrToggle.addEventListener('click', function() {
	if (descrCat.classList.contains('categories__description--closed')) {
		descrCat.classList.remove('categories__description--closed');
		descrCat.classList.add('categories__description--opened');
	} else {
		descrCat.classList.add('categories__description--closed');
		descrCat.classList.remove('categories__description--opened');
	}
});

meteringToggle.addEventListener('click', function() {
	if (meteringCat.classList.contains('categories__metering--closed')) {
		meteringCat.classList.remove('categories__metering--closed');
		meteringCat.classList.add('categories__metering--opened');
	} else {
		meteringCat.classList.add('categories__metering--closed');
		meteringCat.classList.remove('categories__metering--opened');
	}
});

deliveryToggle.addEventListener('click', function() {
	if (deliveryCat.classList.contains('categories__delivery--closed')) {
		deliveryCat.classList.remove('categories__delivery--closed');
		deliveryCat.classList.add('categories__delivery--opened');
	} else {
		deliveryCat.classList.add('categories__delivery--closed');
		deliveryCat.classList.remove('categories__delivery--opened');
	}
});

relatedProductsToggle.addEventListener('click', function() {
	if (relatedProducts.classList.contains('site-content__related-products--closed')) {
		relatedProducts.classList.remove('site-content__related-products--closed');
		relatedProducts.classList.add('site-content__related-products--opened');
	} else {
		relatedProducts.classList.add('site-content__related-products--closed');
		relatedProducts.classList.remove('site-content__related-products--opened');
	}
});

window.onresize = function () {
	if(window.matchMedia(media).matches) {
    relatedProducts.classList.add('site-content__related-products--opened');
		relatedProducts.classList.remove('site-content__related-products--closed');
  } else {
	  relatedProducts.classList.remove('site-content__related-products--opened');
		relatedProducts.classList.add('site-content__related-products--closed');
  };
};

window.onload = function () {
	if(innerWidth > 760) {
    relatedProducts.classList.add('site-content__related-products--opened');
  } else {
	  relatedProducts.classList.add('site-content__related-products--closed');
  };
};
