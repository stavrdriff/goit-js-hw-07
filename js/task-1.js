'use sctrict'

const categoriesListLength = () => {
  const categoriesList = document.getElementById('categories');
  const itemsArr = [...categoriesList.querySelectorAll('.item')];
  // const itemsArr = [...categoriesList.children];

  console.log(`Number of categories: ${itemsArr.length}`);

  itemsArr.forEach(item => {
    const itemTitle = item.querySelector('h2').textContent;
    const subArr = [...item.querySelectorAll('li')];
    
    console.log(`Category: ${itemTitle}`);
    console.log(`Elements: ${subArr.length}`);
  });
}

categoriesListLength();