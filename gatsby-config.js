module.exports = {
   siteMetadata: {
      title: `Gatsby Docs Starter`,
      description: `A documentation starter`,
      author: `@prvnbist`,
      menu: [
         { title: 'Introduction', link: '/docs/introduction' },
         {
            title: 'Recipe App',
            children: [
               { title: 'Overview', link: '/docs/recipe/overview' },
               { title: 'Create Recipe', link: '/docs/recipe/create' },
               { title: 'View Recipe', link: '/docs/recipe/view' }
            ]
         },
         {
            title: 'Store App',
            children: [
               { title: 'Overview', link: '/docs/store/overview' },
               { title: 'Type of Products', link: '/docs/store/product-type' },
               {
                  title: 'Inventory Product',
                  link: '/docs/store/inventory-product'
               },
               {
                  title: 'Simple Recipe Product',
                  link: '/docs/store/simple-recipe-product'
               },
               {
                  title: 'Combo Product',
                  link: '/docs/store/customizable-product'
               },
               {
                  title: 'Customizable Product',
                  link: '/docs/store/combo-product'
               },
               { title: 'Setup Menu', link: '/docs/store/setup-menu' }
            ]
         },
         {
            title: 'Inventory App',
            children: [
               { title: 'Overview', link: '/docs/inventory/overview' },
               { title: 'Supplier', link: '/docs/inventory/supplier' },
               {
                  title: 'Supplier Item',
                  link: '/docs/inventory/supplier-item'
               },
               {
                  title: 'Purchase Order',
                  link: '/docs/inventory/purchase-order'
               },
               { title: 'Work Order', link: '/docs/inventory/work-order' }
            ]
         },
         {
            title: 'Order App',
            children: [{ title: 'Overview', link: '/docs/order/overview' }]
         },
         {
            title: 'Safety App',
            children: [{ title: 'Overview', link: '/docs/safety/overview' }]
         },
         {
            title: 'Setting App',
            children: [
               { title: 'Overview', link: '/docs/setting/overview' },
               { title: 'Devices', link: '/docs/setting/devices' },
               { title: 'Master', link: '/docs/setting/master' },
               { title: 'Roles', link: '/docs/setting/roles' },
               { title: 'Users', link: '/docs/setting/users' },
               { title: 'Stations', link: '/docs/setting/stations' }
            ]
         },
         { title: 'Glossary', link: '/docs/glossary' }
      ]
   },
   plugins: [
      `gatsby-plugin-styled-components`,
      {
         resolve: 'gatsby-source-filesystem',
         options: {
            name: 'docs',
            path: `${__dirname}/src/docs`
         }
      },
      `gatsby-plugin-mdx`
   ]
}
