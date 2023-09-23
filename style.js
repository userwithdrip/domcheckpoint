document.addEventListener("DOMContentLoaded", function () {
    const plusButtons = document.querySelectorAll(".plus");
    const minusButtons = document.querySelectorAll(".minus");
    const numberInputs = document.querySelectorAll(".number");
    const priceElements = document.querySelectorAll(".price span");
    const checkoutButton = document.querySelector(".total");
    const removeButtons = document.querySelectorAll(".remove"); // Select all "Remove Item" buttons

    // Initial price values for each item (you can customize this as needed)
    const prices = [12500, 15000, 20000]; // Example prices for three items

    function updatePriceAndTotal() {
        let totalPrice = 0;
        numberInputs.forEach((input, index) => {
            const quantity = parseInt(input.value);
            const totalPriceForItem = prices[index] * quantity;
            priceElements[index].textContent = totalPriceForItem.toFixed(2) + ' fcfa';
            totalPrice += totalPriceForItem;
        });
        checkoutButton.textContent = totalPrice.toFixed(2) + ' fcfa';
    }

    plusButtons.forEach((plusButton, index) => {
        plusButton.addEventListener("click", function () {
            // Increment the value in the input
            numberInputs[index].value = parseInt(numberInputs[index].value) + 1;
            updatePriceAndTotal();
        });
    });

    minusButtons.forEach((minusButton, index) => {
        minusButton.addEventListener("click", function () {
            // Decrement the value in the input, but not below the minimum value of 1
            if (parseInt(numberInputs[index].value) > 1) {
                numberInputs[index].value = parseInt(numberInputs[index].value) - 1;
                updatePriceAndTotal();
            }
        });
    });

    numberInputs.forEach((input, index) => {
        input.addEventListener("input", function () {
            // Ensure the input value is a positive integer
            const value = parseInt(input.value);
            if (!isNaN(value) && value >= 1) {
                updatePriceAndTotal();
            }
        });
    });

    // Add event listeners for the "Remove Item" buttons
    removeButtons.forEach((removeButton, index) => {
        removeButton.addEventListener("click", function () {
            // Remove the corresponding item and update the prices and total
            removeButton.parentElement.remove(); // Remove the item container
            prices.splice(index, 1); // Remove the price for this item
            updatePriceAndTotal();
        });
    });

    // Initial call to update the price and checkout total
    updatePriceAndTotal();
});

