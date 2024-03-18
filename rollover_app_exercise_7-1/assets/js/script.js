"use strict";

const $ = selector => document.querySelector(selector);

document.addEventListener("DOMContentLoaded", () => {
    var image1 = $("#image1");
    var image2 = $("#image2");

    // preload images
    var links = $("#image_list").querySelectorAll("a");
    var images = [];
    for (let link of links) {
        var img = new Image();
        img.src = link.href;
        images.push(img);
    }
    // attach mouseover and mouseout events for each image
    for ( let link of links) {
        image1.addEventListener("mouseover", () => {
            image1.src = "assets/img/release.jpg";

        });
        image1.addEventListener("mouseout", () => {
            image1.src = "assets/img/hero.jpg";

        });
        image2.addEventListener("mouseover", () => {
            image2.src = "assets/img/deer.jpg";

        });
        image2.addEventListener("mouseout", () => {
            image2.src = "assets/img/bison.jpg";

        });           
    }

});
