const normalize = menu => {
   let pages = []
   menu.map(node => {
      if (node.link) {
         return pages.push(node)
      }
      if (node.children && node.children.length > 0) {
         return node.children.map(page => pages.push(page))
      }
   })
   return pages
}

export default normalize
