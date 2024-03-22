export const mobileNav = () => {
  openOrCloseMobileModal();
  window.addEventListener("resize", updateHeader);
}

const openOrCloseMobileModal = () => {
  const mobileNavOpen = document.querySelector("[data-mobile-nav-open]");
  const mobileNavClose = document.querySelector("[data-mobile-close]");
  const mobileNavContainer = document.querySelector(".mobile-nav-modal-container");
  const mobileNavOverlay = document.querySelector(".mobile-overlay");

  /* 
  removing the hide class from the mobile nav modal 
  when the user clicks on the hamburger button
  */ 
  if (mobileNavOpen) {
    mobileNavOpen.addEventListener("click", () => {
      mobileNavContainer.classList.remove("hide");
      mobileNavOverlay.classList.remove("hide");
    });
  }

  /* 
  adding the hide class to the mobile nav modal 
  when the user clicks on close button
  */ 

  if (mobileNavClose) {
    mobileNavClose.addEventListener("click", () => {
      mobileNavContainer.classList.add("hide");
      mobileNavOverlay.classList.add("hide");
    });
  }

  /* 
  adding the hide class to the mobile nav modal 
  when the user clicks on the mobile overlay
  */ 

  if (mobileNavOverlay) {
    mobileNavOverlay.addEventListener("click", () => {
      mobileNavContainer.classList.add("hide");
      mobileNavOverlay.classList.add("hide");
    });
  }
}

// changing the nav for mobile and desktop
const header = document.getElementById("header");
const desktopNavLinks = document.querySelector(".desktop-nav");
const desktopLogo = document.querySelector(".desktop-logo");
const mobileToggle = document.querySelector(".mobile-nav-engage");
const mobileLogo = document.querySelector(".mobile-logo");

function updateHeader() {
  if (window.innerWidth > 1024) {
    // Desktop view
    header.className = "desktop-header";
    desktopNavLinks.classList.remove("hide");
    desktopLogo.classList.remove("hide");
    mobileToggle.classList.add("hide");
    mobileLogo.classList.add("hide");
  } else {
    // Mobile view
    header.className = "mobile-header";
    desktopNavLinks.classList.add("hide");
    desktopLogo.classList.add("hide");
    mobileToggle.classList.remove("hide");
    mobileLogo.classList.remove("hide");
  }
}

updateHeader();