
// initialize variables connecting to defines class attributes
var lImage = document.querySelector('figure.images');
var sImage = document.querySelector('ul.thumbImages');

// initialize array for thumbnail images
var imgArray = [
	{'src' : 'images/flowers-pink-small.jpg'},
	{'src' : 'images/flowers-purple-small.jpg'},
	{'src' : 'images/flowers-red-small.jpg'},
	{'src' : 'images/flowers-white-small.jpg'},
	{'src' : 'images/flowers-yellow-small.jpg'}
    ];

// Setup the small images on screen
for(var i = 0; i < imgArray.length; i++) {
	var createLi = document.createElement('li');
	var newImage = document.createElement('img');
	newImage.setAttribute('src', imgArray[i].src);
	newImage.index = i;
	newImage.className = 'thumbnail';
	createLi.appendChild(newImage);
	sImage.appendChild(createLi);
}

// display the first large image to display
var slideIndex = 0;
currentSlide(slideIndex);

// Thumbnail clickable to change the image on display
sImage.onclick = function (event) {
	if(event.target && event.target.nodeName === 'IMG') {
		currentSlide(event.target.index);
	}
};

// Display an image on screen
function displayImage(img) {
	lImage.querySelector('img').setAttribute('src', img.getAttribute('src').replace('small', 'large'));
}

// declare and show the slide by the current slide index
function currentSlide(n) {
	showSlide(slideIndex = n);
}

// Setting the thumbnail selection and display bar
function showSlide(n) {
	var thumbImgs = document.querySelectorAll('img.thumbnail');
	if (n >= thumbImgs.length) {
		slideIndex = 0;
	}
	if (n < 0) {
		slideIndex = thumbImgs.length - 1;
	}
	thumbImgs[slideIndex].className += ' ';
	displayImage(thumbImgs[slideIndex]);
}

