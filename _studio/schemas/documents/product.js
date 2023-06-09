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
                  default: 'm',
               },
            }
         ]
   
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
                     { title: 'NOK', value: 'nok' }, 
                     { title: 'USD', value: 'usd' },
                     { title: 'EUR', value: 'eur' },
                  ],
                  default: 'nok',
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
