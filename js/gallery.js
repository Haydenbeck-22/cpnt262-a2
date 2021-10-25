//Use strict JS
"use strict";

//Array of images as objects
const imageList = [
  {
    id: 1,
    title: "Nissan R34 GTR",
    description: "A Skyline GTR driving on the street at night",
    width: 400,
    height: 267,
    pathURL: "img01.jpg",
    linkURL: "https://en.wikipedia.org/wiki/Nissan_RB_engine",
    credit: "https://unsplash.com/photos/e9uOssEwwjo",
    creditURL: "https://unsplash.com/@rc_scout",
  },
  {
    id: 2,
    title: "Mazda FD RX-7",
    description: "An Rx-7 FD parked on the side of a street",
    width: 267,
    height: 400,
    pathURL: "img02.jpg",
    linkURL: "https://en.wikipedia.org/wiki/Mazda_Wankel_engine",
    creditURL: "https://unsplash.com/photos/K0mf6Hd3Ehc",
    credit: "https://unsplash.com/@greenxiii",
  },
  {
    id: 3,
    title: "Toyota Supra MK4",
    description: "Cinematic shot of a MK4 Supra",
    width: 400,
    height: 267,
    pathURL: "img03.jpg",
    linkURL: "https://en.wikipedia.org/wiki/Toyota_JZ_engine",
    credit: "https://unsplash.com/photos/Lrfuy93_hAc",
    creditURL: "https://unsplash.com/@visualsbyroyalz",
  },
  {
    id: 4,
    title: "Nissan S14",
    description: "A Nissan S14 in a parking garage",
    width: 266,
    height: 400,
    pathURL: "img04.jpg",
    linkURL: "https://en.wikipedia.org/wiki/Nissan_SR20DET",
    credit: "https://unsplash.com/photos/7dLJQrzAbdU",
    creditURL: "https://unsplash.com/@sichpicsss",
  },
  {
    id: 5,
    title: "Honda S2000",
    description: "A black Honda S2000 parked infront of a building",
    width: 333,
    height: 500,
    pathURL: "img05.jpg",
    linkURL: "https://en.wikipedia.org/wiki/Honda_F20C_engine",
    credit: "https://unsplash.com/photos/qr2bakjpmRc",
    creditURL: "https://unsplash.com/@simopics_",
  },
  {
    id: 6,
    title: "Nissan R33 GTR",
    description: "A white R33 GTR parked infront of a scenic background",
    width: 333,
    height: 500,
    pathURL: "img06.jpg",
    linkURL: "https://en.wikipedia.org/wiki/Nissan_RB_engine",
    credit: "https://unsplash.com/photos/qttIqS6II34",
    creditURL: "https://unsplash.com/@jakobnoahrosen",
  },
  {
    id: 7,
    title: "Mazda FB RX-7",
    description: "A white FB RX-7 parked infront of a scenic sunset",
    width: 320,
    height: 400,
    pathURL: "img07.jpg",
    linkURL: "https://en.wikipedia.org/wiki/Mazda_Wankel_engine#12A",
    credit: "https://unsplash.com/photos/iJ1cgltAE8U",
    creditURL: "https://unsplash.com/@solbrigkevin",
  },
  {
    id: 8,
    title: "Mitsubishi Lancer Evo",
    description: "A red Lancer Evo parked in the snow",
    width: 400,
    height: 267,
    pathURL: "img08.jpg",
    linkURL: "https://en.wikipedia.org/wiki/Mitsubishi_Sirius_engine",
    credit: "https://unsplash.com/photos/9OUv-fdqEI4",
    creditURL: "https://unsplash.com/@mattebalza",
  },
  {
    id: 9,
    title: "Subaru WRX STI",
    description: "A black WRX STI parked infront of construction equipment",
    width: 400,
    height: 267,
    pathURL: "img09.jpg",
    linkURL: "https://en.wikipedia.org/wiki/Subaru_EJ_engine",
    credit: "https://unsplash.com/photos/XfJ2MYcbkRk",
    creditURL: "https://unsplash.com/@ryking32",
  },
];

//Create HTML output

let output = "";

imageList.forEach(function (imageId) {
  output += `<figure>
<a href="${imageId.credit}">   
<img src="assets/images/${imageId.pathURL}" alt="${imageId.description}" width="${imageId.width}" height="${imageId.height}"></a>
<figcaption>${imageId.title}</figcaption>
<figcaption><a href="${imageId.linkURL}">Engine Details</a></figcaption>
<figcaption><a href="${imageId.creditURL}">Photographer</a></figcaption>
<figcaption><a href="${imageId.credit}">Original Image</a></figcaption>
</figure>
`;
});

const gallery = document.querySelector(".gallery");
gallery.innerHTML = output;
console.log(output);
