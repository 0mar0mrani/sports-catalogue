import {sanity} from '../sanity.js'

export default async function Product() {

   let productResults = []; 
   let currentCategory = 'pants';
   let currentBrand = 'Adidas';

   const productList = document.querySelector('.product-list__results');

   async function fetchProducts() {
      const categoryQuery = `${currentCategory !== '' ? '&& category->.name == $category' : ''}`
      const brandQuery = `${currentBrand !== '' ? '&& brand->.name == $brand' : ''}`
      const query = `*[_type == 'product' ${categoryQuery} ${brandQuery}]`;

      const params = {
         category: currentCategory,
         brand: currentBrand,
      }

      productResults = await sanity.fetch(query, params);
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

	await fetchProducts();
   renderProducts();
}