import { quantityCount } from "./quantityCount.js";

export const productPageUpdate = (data) => {
  console.log(data)
  const productContent = document.querySelector(".product-content");
  // images
  const imageContainer = document.createElement("div");
  imageContainer.className = "image-container";
  imageContainer.innerHTML = `
    <div class="product-page-big-img big-img">
      <img src="${data[0].images.gallery}" alt="${data[0].images.alt}">
    </div>
    <div class="product-page-thumbnails thumbnails">
      ${data[0].images.thumbnails[0] && Object.values(data[0].images.thumbnails[0]).map(thumbnail => `
      <img src="${thumbnail.img}" alt="${thumbnail.alt}">
    `).join('')}

    </div>
  `;

  /* 
   //////// LIGHTBOX ////////
  */

  const lightBox = document.createElement("div");
  lightBox.className = "light-box-modal hide";
  lightBox.innerHTML = `
    <div class="big-img light-box-modal-big-image">
      <span class="close-modal">x</span>
      <img src="${data[0].images.gallery}" alt="${data[0].images.alt}" />
    </div>
    <div class="thumbnails thumbnails-modal">
      ${data[0].images.thumbnails[0] && Object.values(data[0].images.thumbnails[0]).map(thumbnail => `
        <img src="${thumbnail.img}" alt="${thumbnail.alt}">
      `).join('')}
    </div>
  `;

  /* 
   //////// SLIDESHOW ////////
  */

  const productInfoContainer = document.createElement("div");
  productInfoContainer.className = "product-info";
  productInfoContainer.innerHTML = `
    <h2>${data[0].vendor}</h2>
    <h3>${data[0].name}</h3>
    <p>${data[0].description}</p>
    <div class="price-container">
      <div class="left-price">
        <span class="price">$${data[0].price.newPrice.toFixed(2)}</span>
        <span class="discount">${data[0].price.discount}%</span>
      </div>
      <div class="right-price">
        <span class="original-price">$${data[0].price.oldPrice.toFixed(2)}</span>
      </div>
    </div>
    <div class="quantity-atc-container">
      <div class="quantity">
        <button class="quantity-button-left" data-decrease>
          <svg xmlns="http://www.w3.org/2000/svg" width="12" height="4" viewBox="0 0 12 4" fill="none">
            <path d="M11.3571 3.33214C11.7134 3.33214 12 3.04554 12 2.68929V0.642857C12 0.286607 11.7134 0 11.3571 0H0.642857C0.286607 0 0 0.286607 0 0.642857V2.68929C0 3.04554 0.286607 3.33214 0.642857 3.33214H11.3571Z" fill="#FF7E1B"/>
            <mask id="mask0_0_301" style="mask-type:luminance" maskUnits="userSpaceOnUse" x="0" y="0" width="12" height="4">
              <path d="M11.3571 3.33214C11.7134 3.33214 12 3.04554 12 2.68929V0.642857C12 0.286607 11.7134 0 11.3571 0H0.642857C0.286607 0 0 0.286607 0 0.642857V2.68929C0 3.04554 0.286607 3.33214 0.642857 3.33214H11.3571Z" fill="white"/>
            </mask>
            <g mask="url(#mask0_0_301)">
            </g>
          </svg>
        </button>
        <input type="text" value="1">
        <button class="quantity-button-right" data-increase>
          <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12" fill="none">
            <path d="M12 7.02321V4.97679C12 4.62054 11.7134 4.33393 11.3571 4.33393H7.66607V0.642857C7.66607 0.286607 7.37946 0 7.02321 0H4.97679C4.62054 0 4.33393 0.286607 4.33393 0.642857V4.33393H0.642857C0.286607 4.33393 0 4.62054 0 4.97679V7.02321C0 7.37946 0.286607 7.66607 0.642857 7.66607H4.33393V11.3571C4.33393 11.7134 4.62054 12 4.97679 12H7.02321C7.37946 12 7.66607 11.7134 7.66607 11.3571V7.66607H11.3571C11.7134 7.66607 12 7.37946 12 7.02321Z" fill="black"/>
            <mask id="mask0_0_305" style="mask-type:luminance" maskUnits="userSpaceOnUse" x="0" y="0" width="12" height="12">
            <path d="M12 7.02321V4.97679C12 4.62054 11.7134 4.33393 11.3571 4.33393H7.66607V0.642857C7.66607 0.286607 7.37946 0 7.02321 0H4.97679C4.62054 0 4.33393 0.286607 4.33393 0.642857V4.33393H0.642857C0.286607 4.33393 0 4.62054 0 4.97679V7.02321C0 7.37946 0.286607 7.66607 0.642857 7.66607H4.33393V11.3571C4.33393 11.7134 4.62054 12 4.97679 12H7.02321C7.37946 12 7.66607 11.7134 7.66607 11.3571V7.66607H11.3571C11.7134 7.66607 12 7.37946 12 7.02321Z" fill="white"/>
            </mask>
            <g mask="url(#mask0_0_305)">
            <rect x="-0.857178" y="-0.857117" width="13.7143" height="13.7143" fill="#FF7E1B"/>
            </g>
            </svg>
        </button>
      </div>
      <button class="add-to-cart" data-add-to-cart><svg xmlns="http://www.w3.org/2000/svg" height="16" width="18" fill="#FFF" viewBox="0 0 576 512"><path d="M16 0H0V32H16 67.2l77.2 339.5 2.8 12.5H160 496h16V352H496 172.8l-14.5-64H496L566 64l10-32H542.5 100L95.6 12.5 92.8 0H80 16zm91.3 64H532.5l-60 192H151L107.3 64zM184 432a24 24 0 1 1 0 48 24 24 0 1 1 0-48zm0 80a56 56 0 1 0 0-112 56 56 0 1 0 0 112zm248-56a24 24 0 1 1 48 0 24 24 0 1 1 -48 0zm80 0a56 56 0 1 0 -112 0 56 56 0 1 0 112 0z"/></svg>
        <span>Add to cart</span>
      </button>
    </div>
  `;

  // appending images to the parent container
  productContent.appendChild(imageContainer);


  /* 
    /////// SLIDESHOW ////////
  */

    const slideshow = () => {
      const bigImage = document.querySelector(".product-page-big-img img");
      const thumbnailsData = data[0].images.thumbnails[0]; // Assuming thumbnails data is structured as mentioned
    
      const thumbnails = Object.values(thumbnailsData);
      let currentIndex = 0;
    
      const showImage = (index) => {
        bigImage.src = thumbnails[index].img;
        bigImage.alt = thumbnails[index].alt;
      };
    
      const showNextImage = () => {
        currentIndex = (currentIndex + 1) % thumbnails.length;
        showImage(currentIndex);
      };
    
      const showPrevImage = () => {
        currentIndex = (currentIndex - 1 + thumbnails.length) % thumbnails.length;
        showImage(currentIndex);
      };
    
      // Event listeners for previous and next buttons
      const prevButton = document.createElement("button");
      prevButton.className = "prev";
      prevButton.innerHTML = "&#10094;";
      prevButton.addEventListener("click", showPrevImage);
    
      const nextButton = document.createElement("button");
      nextButton.className = "next";
      nextButton.innerHTML = "&#10095;";
      nextButton.addEventListener("click", showNextImage);
    
      // Appending buttons to the image container
      imageContainer.appendChild(prevButton);
      imageContainer.appendChild(nextButton);
    };



  // lightbox
  document.body.appendChild(lightBox);
  // appending product info to the parent container
  productContent.appendChild(productInfoContainer);
  

  // product page - non lightbox
  const bigImage = document.querySelector(".product-page-big-img img");
  const thumbnailImages = document.querySelectorAll(".product-page-thumbnails img");
  thumbnailImages.forEach(image => {
    image.addEventListener("click", () => {
      bigImage.src = image.src;
    });
  });

  /* 
  ////////  LIGHTBOX  ////////
  */

const lightBoxModal = document.querySelector(".light-box-modal");
const lightBoxOverlay = document.querySelector(".overlay");
const lightBoxModalOpen = document.querySelector(".image-container .big-img");
const lightBoxClose = document.querySelector(".close-modal");

const modalLightBox = () => {
  if (lightBoxClose) {
    lightBoxClose.addEventListener("click", openOrCloseModal);
  }
  if (lightBoxModalOpen) {
    lightBoxModalOpen.addEventListener("click", openOrCloseModal);
  }
  if (lightBoxOverlay) {
    lightBoxOverlay.addEventListener("click", openOrCloseModal);
  }
  imageSwitch();
}

const openOrCloseModal = () => {
  lightBoxModal.classList.toggle("hide");
  lightBoxOverlay.classList.toggle("hide");
}

const imageSwitch = () => {
  const lightboxThumbnailImages = document.querySelectorAll(".thumbnails-modal img");
  const lightboxBigImage = document.querySelector(".light-box-modal-big-image img");
  lightboxThumbnailImages.forEach(lbImage => {
    lbImage.addEventListener("click", () => {
      lightboxBigImage.src = lbImage.src;
    })
  });
}

  // show the light box (desktop) or slideshow (mobile)
  const showLightBoxOrSlideshow = () => {
    if (window.innerWidth > 1024) {
      modalLightBox();
    } else {
      slideshow();
    }
  }


  // Call the quantityCount function
  quantityCount(data);
  // slideshow or lightbox
  showLightBoxOrSlideshow();
}