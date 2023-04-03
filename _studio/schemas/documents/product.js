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
         type: 'array',
         of: [
            {
               type: 'reference',
               to: [{ type: 'size' }],
            },
         ],
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
