// ITERATION 1

function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');
  // Création des variables en cherchant leur emplacement dans le DOM
  const price = product.querySelector('.price span');
  const quantity = product.querySelector('.quantity input');
  const subtotal = product.querySelector('.subtotal span');
  // Calcul de prix * quantité
  let total = price.innerHTML * quantity.value;
  // Integration du résultat dans le DOM
  subtotal.innerHTML = total  
}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  // const singleProduct = document.querySelector('.product');
  // updateSubtotal(singleProduct);
  // end of test

  // ITERATION 2
  // Création des variables en cherchant leur emplacement dans le DOM
  const products = document.getElementsByClassName('product');
  const total = document.querySelector('#total-value span');
  const subtotals = document.querySelectorAll('.subtotal span');
  let totals = 0
  // on boucle pour calculer le subtotal de chaque ligne
  for (let i = 0 ; i < products.length ; i++){
    let prod = products[i]
    updateSubtotal(prod);
    totals += +(subtotals[i].innerHTML)
  }
  //ITERATION 3
  total.innerHTML = totals
}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);
  //... your code goes here
}

// ITERATION 5

function createProduct() {
  //... your code goes here
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  //... your code goes here
});
