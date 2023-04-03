import {sanity} from '../sanity.js'

export default async function Product() {
   let currentCategory = '';
   let currentBrand = '';
   let products = []; 
   let currentCategory = '';
   let currentBrand = '';
   
   const productList = document.querySelector('.product-list__results');
   const categoryDropdown = document.querySelector('#header__category');
   const brandDropdown = document.querySelector('#header__brand');
   
   categoryDropdown.addEventListener('change', handleCategoryDropdownChange);
   brandDropdown.addEventListener('change', handleBrandDropdownChange)

   async function handleCategoryDropdownChange() {
      const input = categoryDropdown.value; 
      currentCategory = input;
      await fetchProducts();
      renderProducts();
   }

   async function handleBrandDropdownChange() {
      const input = brandDropdown.value; 
      currentBrand = input;
      await fetchProducts();
      renderProducts();
   }

   async function fetchProducts() {
      const categoryQuery = `${currentCategory !== '' ? '&& category->.name == $category' : ''}`
      const brandQuery = `${currentBrand !== '' ? '&& brand->.name == $brand' : ''}`
      const query = `*[_type == 'product' ${categoryQuery} ${brandQuery}] {
         'title': name,
         'image': image.asset->url,
         'suggestedPrice': suggestedPrice
      }`;
      
      
      const params = {
         category: currentCategory,
         brand: currentBrand,
      }
      
      products = await sanity.fetch(query, params);
   }
   
   function createProductListContainerDOM() {
      const productListContainer = document.createElement('div');
      productListContainer.className = 'product-list__container';

      for(const product of products) {
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
         productPrice.innerText = `${product.suggestedPrice.number} ${product.suggestedPrice.currency}`;

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