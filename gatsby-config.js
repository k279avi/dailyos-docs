module.exports = {
   siteMetadata: {
      title: `Gatsby Docs Starter`,
      description: `A documentation starter`,
      author: `@prvnbist`,
      menu: [
         { title: 'Introduction', link: '/docs/introduction' },
         {
            title: 'File',
            children: [
               { title: 'Create File', link: '/docs/file/create' },
               { title: 'Delete File', link: '/docs/file/delete' },
               { title: 'Update File', link: '/docs/file/update' },
               { title: 'Read File', link: '/docs/file/read' },
               { title: 'Rename File', link: '/docs/file/rename' }
            ]
         },
         {
            title: 'Folder',
            children: [
               { title: 'Create Folder', link: '/docs/folder/create' },
               { title: 'Delete Folder', link: '/docs/folder/delete' },
               { title: 'Rename Folder', link: '/docs/folder/rename' }
            ]
         },
         {
            title: 'Git',
            children: [
               { title: 'Add and Commit', link: '/docs/git/add-and-commit' },
               {
                  title: 'Remove and Commit',
                  link: '/docs/git/remove-and-commit'
               }
            ]
         },
         {
            title: 'Types',
            children: [
               { title: 'File', link: '/docs/types/file' },
               { title: 'Folder', link: '/docs/types/folder' },
               {
                  title: 'Folder with Files',
                  link: '/docs/types/folder-with-files'
               },
               { title: 'Success', link: '/docs/types/success' },
               { title: 'Error', link: '/docs/types/error' },
               { title: 'Result', link: '/docs/types/result' },
               { title: 'Subscription', link: '/docs/types/subscription' },
               { title: 'Author', link: '/docs/types/author' },
               { title: 'Commit', link: '/docs/types/commit' },
               { title: 'Committer', link: '/docs/types/committer' }
            ]
         },
         {
            title: 'Queries',
            children: [
               { title: 'Get Commit', link: '/docs/queries/get-commit' },
               {
                  title: 'Get Commit Content',
                  link: '/docs/queries/get-commit-content'
               },
               {
                  title: 'Get Commit Log',
                  link: '/docs/queries/get-commit-log'
               },
               { title: 'Get Commits', link: '/docs/queries/get-commits' },
               { title: 'Get File', link: '/docs/queries/get-file' },
               { title: 'Get Files', link: '/docs/queries/get-files' },
               {
                  title: 'Get Folder with Files',
                  link: '/docs/queries/get-folder-with-files'
               },
               {
                  title: 'Get Nested Folders',
                  link: '/docs/queries/get-nested-folders'
               },
               { title: 'Open File', link: '/docs/queries/open-file' }
            ]
         },
         {
            title: 'Mutations',
            children: [
               { title: 'Create File', link: '/docs/mutations/create-file' },
               { title: 'Delete File', link: '/docs/mutations/delete-file' },
               { title: 'Draft File', link: '/docs/mutations/draft-file' },
               { title: 'Rename File', link: '/docs/mutations/rename-file' },
               { title: 'Update File', link: '/docs/mutations/update-file' },
               {
                  title: 'Create Folder',
                  link: '/docs/mutations/create-folder'
               },
               {
                  title: 'Rename Folder',
                  link: '/docs/mutations/rename-folder'
               },
               {
                  title: 'Delete Folder',
                  link: '/docs/mutations/delete-folder'
               },
               { title: 'Image Upload', link: '/docs/mutations/image-upload' },
               { title: 'Install App', link: '/docs/mutations/install-app' }
            ]
         }
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
