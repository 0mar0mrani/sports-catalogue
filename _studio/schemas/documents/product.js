export default {
   title: 'Product',
   name: 'product',
   type: 'document',
   fields: [
      {
         title: 'Name',
         name: 'name',
         type: 'string',
      },
      {
         title: 'Description',
         name: 'description',
         type: 'text',
      },
      {
         title: 'Brand',
         name: 'brand',
         type: 'reference',
         to: { type: 'brand' }
      },
      {
         title: 'Category',
         name: 'category',
         type: 'reference',
         to: { type: 'category' }
      },
      {
         title: 'Sizes',
         name: 'sizes',
         type: 'string',
         options: {
            list: [
               { title: 'XS', value: 'xs' }, 
               { title: 'S', value: 's' },
               { title: 'M', value: 'm' },
               { title: 'L', value: 'l' },
               { title: 'XL', value: 'xl' },
               { title: 'XXL', value: 'xxl' },
            ],
         },
      },
      {
         title: 'Suggested price',
         name: 'suggestedPrice',
         type: 'object',
         fields: [
            {
               title: 'Number',
               name: 'number',
               type: 'string',
            },
            {
               title: 'Currency',
               name: 'currency',
               type: 'string',
               options: {
                  list: [
                     { title: 'NOK', value: 'NOK' }, 
                     { title: 'USD', value: 'USD' },
                     { title: 'EUR', value: 'EUR' },
                  ],
               },
            },
         ],
         options: {
            columns: '2',
         },
      },
      {
         title: 'Image',
         name: 'image',
         type: 'image',
      },
      {
         title: 'Exclusive',
         name: 'exclusive',
         type: 'boolean',
         description: 'Set to true if product is only available through us'
      },
   ],
};
