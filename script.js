/////////////////////////////////////////////////// Get the modal /////////////////////////////////////////////////
const modal = document.getElementById("myModal");

const btn = document.getElementById("modalBtn");

const closeModal = document.getElementsByClassName("close")[0];


// When the user clicks on the button, open the modal
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
closeModal.onclick = function() {
  modal.style.display = "none";
}


//////////////////////////////////////////////////// Shopping Cart portion of the site ////////////////////////////////////////////-
// this is element that makes the shopping cart appear ---------------------------------------------
let shoppingList = document.getElementById("cart-tab");


function showDiv() {
  shoppingList.style.display = "block";
};


function closeDiv() {
  shoppingList.style.display = "none";
};



////////////////////////////////////////////////// The adding and removing of items from the cart ////////////////////////////////////

// selecting all the "add to cart" buttons on main page
const carts = document.querySelectorAll('.item-add');

const removeFromCart = document.querySelectorAll('.item-remove');

const cartTotal = document.getElementById('cart-total');

// products on page needs to be an array ///////////////////
const products = [
    {
        name: 'Cleansing Tumeric & Oat Milk Bar',
        tag: '/images/tumeric_milk_bar.jpg',
        price: 10, 
        inCart: 0
    },
    {
      name: 'Oats and Shea',
      tag: '/images/oatmeal_soap-2.jpg',
      price: 10, 
      inCart: 0
    },
    {
      name: 'Castille',
      tag: '/images/Castile-Cold-Process-Soap.jpg',
      price: 10, 
      inCart: 0
    },
    {
      name: 'Coconut Bar',
      tag: '/images/coconut_oil_soap.jpg',
      price: 10, 
      inCart: 0
    }
];

// added a for loop to cycle through the array products when they are clicked //////
for (let i = 0; i < carts.length; i++) {
  carts[i].addEventListener('click', () => {
    cartNumbers();
  });

  removeFromCart[i].addEventListener('click', () => {
    removeCartNumbers();
  });
}


// this function adds and removes the cart number to the number counter at the top of the page with shopping list icon /////////////
function cartNumbers() {
  
  // 2.  when the key is referenced in .getItem, it retrieves the value associated with it. However, it retrieves it as a STRING and not a NUMBER (ex: displays as 1111111)
  let productNumbers = localStorage.getItem('cartNumbers');
  // 3. therefore, need to parseInt the string to convert to number ---- however now it won't go past 1 when clicked
  productNumbers = parseInt(productNumbers);

  // 1. set a key/value pair (can name key anything) into local storage, it is set as a STRING //////////////////////////////////////////
  localStorage.setItem('cartNumbers', 1);

   // 4. put 3. above into an if statement to set it as a number that increases with each click
  if (productNumbers) {
    localStorage.setItem('cartNumbers', productNumbers + 1);
    cartTotal.textContent = productNumbers + 1;
  } else {
    localStorage.setItem('cartNumbers', 1);
    cartTotal.textContent = 1;
  }

};

function removeCartNumbers() {
   let productNumbers = localStorage.getItem('cartNumbers');
   // product numbers loaded as a string, need this to change to a number to display /////////////
   productNumbers = parseInt(productNumbers);

   localStorage.setItem('cartNumbers', 1);
 
   // if there is a product already in local storage (from click) it removes number to cart, or it will go to zero. 
   if (productNumbers) {
     localStorage.setItem('cartNumbers', productNumbers - 1);
     cartTotal.textContent = productNumbers - 1;
   } else {
     localStorage.setItem('cartNumbers', 0);
     cartTotal.textContent = 0 ;
   }
}

//////////////////////////////// this is the picture slides portion of the site --------------------------------------------------
let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {

  let slides = document.getElementsByClassName("photoSlides");
  
  if (n > slides.length) {
    slideIndex = 1
  }
  if (n < 1) {
    slideIndex = slides.length
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  
  slides[slideIndex-1].style.display = "block";
}