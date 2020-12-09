/* Name-Sehajpreet Singh
ID- 124314204 */

const util = {
  dataBlock(element) {
    let newObj = {
      name: element.name,
      description: element.description,
      price: element.price,
      category: element.category,
      imageUrl: element.imageUrl
    };
    return newObj;
  },

  filterDataMen: function(elem) {
    let newArrMen = [];

    elem.forEach(element => {
      if (element.category === 'mens') {
        newArrMen.push(util.dataBlock(element));
      }
    });

    return newArrMen;
  },
  filterDataWoMen: function(elem) {
    let newArrWoMen = [];
    elem.forEach(element => {
      if (element.category === 'women') {
        newArrWoMen.push(util.dataBlock(element));
      }
    });

    return newArrWoMen;
  },

  displayMen: function(elem) {
    let selector = document.querySelector('#Men');
    let createDiv = document.createElement('div');
    createDiv.setAttribute('class', 'box');

    let createSpan = document.createElement('div');
    createSpan.setAttribute('class', 'title');
    createSpan.innerHTML = `${elem.name}`;
    createDiv.appendChild(createSpan);

    let createImg = document.createElement('img');
    createImg.setAttribute('class', 'imgLink');
    createImg.setAttribute('src', `${elem.imageUrl}`);
    createDiv.appendChild(createImg);

    let createDescription = document.createElement('div');
    createDescription.setAttribute('class', 'description');
    createDescription.innerHTML = `${elem.description}`;
    createDiv.appendChild(createDescription);

    let createPrice = document.createElement('div');
    createPrice.setAttribute('class', 'price');
    createPrice.innerHTML = '$' + `${elem.price}`;
    createDiv.appendChild(createPrice);

    selector.appendChild(createDiv);
  },
  displayMenALL: function(elem) {
    let newArr = util.filterDataMen(elem);
    newArr.forEach(element => {
      util.displayMen(element);
    });
  },
  displayWoMen: function(elem) {
    let selector = document.querySelector('#Women');
    let createDiv = document.createElement('div');
    createDiv.setAttribute('class', 'box');

    let createSpan = document.createElement('div');
    createSpan.setAttribute('class', 'title');
    createSpan.innerHTML = `${elem.name}`;
    createDiv.appendChild(createSpan);

    let createImg = document.createElement('img');
    createImg.setAttribute('class', 'imgLink');
    createImg.setAttribute('src', `${elem.imageUrl}`);
    createDiv.appendChild(createImg);

    let createDescription = document.createElement('div');
    createDescription.setAttribute('class', 'description');
    createDescription.innerHTML = `${elem.description}`;
    createDiv.appendChild(createDescription);

    let createPrice = document.createElement('div');
    createPrice.setAttribute('class', 'price');
    createPrice.innerHTML = '$' + `${elem.price}`;
    createDiv.appendChild(createPrice);

    selector.appendChild(createDiv);
  },
  displayWoMenALL: function(elem) {
    let newArr = util.filterDataWoMen(elem);
    newArr.forEach(element => {
      util.displayWoMen(element);
    });
  }
};
