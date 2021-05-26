root.innerHTML += `
    <button id="sort-by-price">Sorteaza dupa pret</button>
`;

function sortPhones(sortType) {
    switch(sortType) {
        case "SORT_BY_PRICE":
            const localStorageProducts = getProducts();
            const sortedArray = localStorageProducts.sort((elem1, elem2) => {
                if (elem1.price < elem2.price) {
                    return -1;
                } else if (elem1.price > elem2.price) {
                    return 1;
                } else {
                    return 0;
                }
            });
            setProducts(sortedArray);
            renderProductList(sortedArray);
            break;
    }
}

function addSortingFunctionality() {
    const sortByPrice = document.querySelector('#sort-by-price');
    sortByPrice.addEventListener('click', function() {
        sortPhones('SORT_BY_PRICE');
    })
}

window.addEventListener('load', addSortingFunctionality);