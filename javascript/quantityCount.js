export const quantityCount = (data) => {
  let quantityInput = document.querySelector('.quantity input');
  let count = 0;
  const decrease = document.querySelector("[data-decrease]");
  const increase = document.querySelector("[data-increase]");
  const quantity = data[0].inventory.quantity;

  if (quantityInput && decrease && increase) {
    decrease.addEventListener("click", () => {
      if (count > 1) {
        count--;
        quantityInput.value = count;
      }
    });

    increase.addEventListener("click", () => {
      if (count < quantity) {
        count++;
        quantityInput.value = count;
      }
    });
  }
  
  return count;
};