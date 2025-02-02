const cartBtn = document.getElementById("cart");
const cartModal = document.querySelector(".cart-modal");

// main cart function
export const cart = (data) => {
  addToCart(data);
}

// cart item modal
const toggleCartModal = () => {
  if (cartBtn) {
    cartBtn.addEventListener("click", () => {
      cartModal.classList.toggle("hide");
    });
  }
}
toggleCartModal();


// add to cart functionality
const addToCart = (data) => {
  const addToCartButton = document.querySelector("[data-add-to-cart]");
  const atcButtonText = document.querySelector(".add-to-cart span")

  if (addToCartButton) {
    addToCartButton.addEventListener("click", async () => {
      atcButtonText.innerText = 'Adding to Cart...';

      // Simulate adding to cart with a timeout
      await new Promise((resolve) => setTimeout(resolve, 3000));
      atcButtonText.innerText = "Added to cart";
      cartInfo(data);

      // show the cart modal
      cartModal.classList.remove("hide");

      // Wait for the modal to be displayed before hiding it
      await new Promise((resolve) => setTimeout(resolve, 4000));

      cartModal.classList.add("hide");
    });
  }
}

/* 
  /////// CART ITEMS ////////
*/

export const cartInfo = (data) => {
  const cartItemsContainer = document.querySelector(".cart-items-container");
  const checkoutButton = document.querySelector(".checkout");

  // Array to store cart items
  let cartItems = Array.from(document.querySelectorAll('.cart-item'));

  // Check if the product already exists in the cart
  const alreadyInCart = cartItems.some(cartItem => {
    const itemName = cartItem.querySelector('.cart-item-title').innerText;
    return itemName === data[0].name;
  });

  if (!alreadyInCart) {
    const cartItem = document.createElement("div");
    cartItem.className = "cart-item";
    cartItem.innerHTML = `
      <img src="${data[0].images.gallery}" alt="${data[0].images.alt}" loading="lazy" width="40" height="40">
      <div class="cart-item-details">
        <h5 class="cart-item-title">${data[0].name}</h5>
        <div class="cart-item-price-container">
          <h5 class="cart-item-price">$${data[0].price.newPrice.toFixed(2)} 
            <span class="cart-item-quantity">
            <strong></strong>
          </span>
          </h5>
        <h5 class="cart-item-total">$125.00</h5>
        <button class="cart-remove">
          <svg xmlns="http://www.w3.org/2000/svg" width="11" height="13" viewBox="0 0 14 16" fill="none">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M0 2.625V1.75C0 1.33438 0.334375 1 0.75 1H4.25L4.54375 0.415625C4.66875 0.159375 4.92812 0 5.2125 0H8.78438C9.06875 0 9.32812 0.159375 9.45625 0.415625L9.75 1H13.25C13.6656 1 14 1.33438 14 1.75V2.625C14 2.83125 13.8313 3 13.625 3H0.375C0.16875 3 0 2.83125 0 2.625ZM13 4.375V14.5C13 15.3281 12.3281 16 11.5 16H2.5C1.67188 16 1 15.3281 1 14.5V4.375C1 4.16875 1.16875 4 1.375 4H12.625C12.8313 4 13 4.16875 13 4.375ZM4 6C4.275 6 4.5 6.225 4.5 6.5V13.5C4.5 13.775 4.275 14 4 14C3.725 14 3.5 13.775 3.5 13.5V6.5C3.5 6.225 3.725 6 4 6ZM7.5 6.5C7.5 6.225 7.275 6 7 6C6.725 6 6.5 6.225 6.5 6.5V13.5C6.5 13.775 6.725 14 7 14C7.275 14 7.5 13.775 7.5 13.5V6.5ZM10 6C10.275 6 10.5 6.225 10.5 6.5V13.5C10.5 13.775 10.275 14 10 14C9.725 14 9.5 13.775 9.5 13.5V6.5C9.5 6.225 9.725 6 10 6Z" fill="#C3CAD9"/>
            <mask id="mask0_0_632" style="mask-type:luminance" maskUnits="userSpaceOnUse" x="0" y="0" width="14" height="16">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M0 2.625V1.75C0 1.33438 0.334375 1 0.75 1H4.25L4.54375 0.415625C4.66875 0.159375 4.92812 0 5.2125 0H8.78438C9.06875 0 9.32812 0.159375 9.45625 0.415625L9.75 1H13.25C13.6656 1 14 1.33438 14 1.75V2.625C14 2.83125 13.8313 3 13.625 3H0.375C0.16875 3 0 2.83125 0 2.625ZM13 4.375V14.5C13 15.3281 12.3281 16 11.5 16H2.5C1.67188 16 1 15.3281 1 14.5V4.375C1 4.16875 1.16875 4 1.375 4H12.625C12.8313 4 13 4.16875 13 4.375ZM4 6C4.275 6 4.5 6.225 4.5 6.5V13.5C4.5 13.775 4.275 14 4 14C3.725 14 3.5 13.775 3.5 13.5V6.5C3.5 6.225 3.725 6 4 6ZM7.5 6.5C7.5 6.225 7.275 6 7 6C6.725 6 6.5 6.225 6.5 6.5V13.5C6.5 13.775 6.725 14 7 14C7.275 14 7.5 13.775 7.5 13.5V6.5ZM10 6C10.275 6 10.5 6.225 10.5 6.5V13.5C10.5 13.775 10.275 14 10 14C9.725 14 9.5 13.775 9.5 13.5V6.5C9.5 6.225 9.725 6 10 6Z" fill="white"/>
            </mask>
            <g mask="url(#mask0_0_632)">
            </g>
            </svg>
        </button>
        </div>
      </div>
    </div>
    `

    cartItemsContainer.appendChild(cartItem);
    cartItems.push(cartItem);
    
    // remove item from cart
    const removeFromCart = cartItem.querySelector(".cart-remove");
    const emptyCartMessage = document.querySelector(".cart-empty-message");
    if (removeFromCart && cartItems.length >= 1) {
      // adding the class hide empty message
      emptyCartMessage.classList.add("hide");
      // showing the atc button
      checkoutButton.classList.remove("hide");

      removeFromCart.addEventListener("click", () => {
        cartItemsContainer.removeChild(cartItem);
        // Remove the item from the array
        cartItems = cartItems.filter(item => item !== cartItem);
        if (cartItems.length === 0) {
          emptyCartMessage.classList.remove("hide");
          // showing the atc button
          checkoutButton.classList.add("hide");
        }

        // auto closing the modal when an item is removed
        setTimeout(() => {
          const cartModal = document.querySelector(".cart-modal");
          cartModal.classList.add("hide");
        }, 7000);

      });

    }
  }
}
  
