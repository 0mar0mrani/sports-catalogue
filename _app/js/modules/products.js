import {sanity} from '../sanity.js'

export default function Product() {

   let productResults = []; 

   const productList = document.querySelector('.product-list__results');

   async function fetchProducts() {
      const query = `*[_type == 'product'] {
         _id,
         image,
         title,
         suggestedPrice, 

      }`;

      const params = {

      }

      productResults = await sanity.fetch(query, params);
		console.log(productResults)
   }

   function createProductListContainerDOM() {
      const productListContainer = document.createElement('div');
      productListContainer.className = 'product-list__container';

      for(const product of productResults) {
         const productListItem = document.createElement('div');
         const productTitle = document.createElement('p');
         const productImage = document.createElement('img');
         const productPrice = document.createElement('p');

         productListItem.className = 'product-list__item';
         productTitle.className = 'product-list__item-title';
         productImage.className = 'product-list__item-image';
         productPrice.className = 'product-list__item-price';


         productTitle.innerText = product.title;
         productImage.src = product.image;
         productPrice.innerText = product.suggestedPrice;


         productListContainer.appendChild(productListItem);
         productListItem.appendChild(productTitle);
         productListItem.appendChild(productImage);
         productListItem.appendChild(productPrice);
      }

      return productListContainer;
   }

   function renderProducts() {
      const productListContainer = createProductListContainerDOM();
      productList.innerHTML = '';
      productList.appendChild(productListContainer);
   }

	fetchProducts();
   renderProducts();
}