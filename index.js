var images = [
    './images/yellow-tang.jpg', './images/mandarin-dragonette.jpg', './images/royal-gramma-basslet.jpg', './images/clownfish.jpg', './images/firefish.jpg', './images/lionfish.jpg', './images/pajama-cardinal.jpg', './images/watchman-goby.jpg', './images/wrass.jpg'
];
// Create a header
var header = document.createElement('h1');
header.setAttribute('id', 'header');
header.innerHTML = "Saltwater Aquarium Fish";

// Create a div for image and buttons
var gallery = document.createElement('div');
gallery.setAttribute('id', 'gallery');

// Create div for image
var img_div = document.createElement('div');
img_div.setAttribute('id', 'img-div');

// Add first image
var image = document.createElement('img');
image.setAttribute('id', 'image');
image.setAttribute('src', images[0]);

// Create prev and next button
// prev button
var prev = document.createElement('button');
prev.setAttribute('id', 'prev');
prev.setAttribute('onclick', 'prev_img()');
prev.innerHTML = '&lt;- prev';
// next button
var next = document.createElement('button');
next.setAttribute('id', 'next');
next.setAttribute('onclick', 'next_img()');
next.innerHTML = 'next -&gt;';

// Append everything onto container div
gallery.appendChild(header);
img_div.appendChild(image);
gallery.appendChild(img_div);
gallery.appendChild(prev);
gallery.appendChild(next);
document.getElementById('container').appendChild(gallery);

// additional variables
var img_counter = 0;
var prev_btn = document.getElementById('prev');
var next_btn = document.getElementById('next');
var image_src = document.getElementById('image').src;
var first_img = images[0];
var last_img = images[images.length - 1];

// On load, first image, disable prev button
disablePrev();

// functions
// if on first image, disable prev button
function disablePrev() {
    if (img_counter == 0) {
        prev_btn.disabled = true;
    } else {
        prev_btn.disabled = false;
    }
};
// if on last image, disable next button
function disableNext() {
    if (img_counter == images.length - 1) {
        next_btn.disabled = true;
    } else {
        next_btn.disabled = false;
    }
};
// onclick function to go one previous image
function prev_img() {
    img_counter--;
    document.getElementById('image').src = images[img_counter];
    // check if first image
    disablePrev();
    disableNext();
};
// onclick function to go to next image
function next_img() {
    img_counter++;
    document.getElementById('image').src = images[img_counter];
    // check if last image
    disableNext();
    disablePrev();
};