const kebabcase = input => {
    return input
      .split(' ').join('-')
      .toLowerCase()
  }

  export default kebabcase