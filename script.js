
  
    // Cart data
    const cartItems = {
      item1: { quantity: 1, liked: false, price:80},
      item2: { quantity: 2, liked: false, price:80 },
      item3: { quantity: 1, liked: false, price:110}
    };

    // Update total price
    function updateTotal() 
    {  
      let total = 0;
      Object.keys(cartItems).forEach(itemKey => {
        total += cartItems[itemKey].quantity * cartItems[itemKey].price ; // Assuming each item costs $"item price"
  
      });
      document.getElementById('total').innerText = total.toFixed(2);
    }

    // Increase quantity
    function increaseQuantity(itemId) {
      cartItems[itemId].quantity++;
      document.getElementById(`quantity_${itemId}`).innerHTML = cartItems[itemId].quantity;
      updateTotal();
    }

    // Decrease quantity
    function decreaseQuantity(itemId) {
      if (cartItems[itemId].quantity > 0) {
        cartItems[itemId].quantity--;
        document.getElementById(`quantity_${itemId}`).innerText = cartItems[itemId].quantity;
        updateTotal();
      }
    }

    // Toggle like
    function toggleLike(itemId) {
      cartItems[itemId].liked = !cartItems[itemId].liked;
      const heartIcon = document.querySelector(`.${itemId}`);
      console.log(heartIcon)
      heartIcon.classList.toggle('fas', cartItems[itemId].liked);
      heartIcon.classList.toggle('far', !cartItems[itemId].liked);
    }

    // Delete item
    function deleteItem(itemId) {
      const itemElement = document.getElementById(itemId);
      itemElement.parentNode.removeChild(itemElement);
      delete cartItems[itemId];
      updateTotal();
    }

    // Initial total update
    updateTotal();
  