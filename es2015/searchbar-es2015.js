window.addEventListener('load', function() {
    // for cross-broser support (internet explorer and other old browsers doe not fully support regular forEach)
    if (window.NodeList && !NodeList.prototype.forEach) {
        NodeList.prototype.forEach = Array.prototype.forEach;
    }
    // array to store the categories
    var categories = [];
    var searchInput = document.getElementById('search-bar');
    var memberCards = document.querySelectorAll('.searchable-item');

    // get all the available categories in the categories array
    document.querySelectorAll('.has-category').forEach(function (titleItem) {
        categories.push(titleItem.getAttribute('data-SBcategory'));
    });

    searchInput.addEventListener('input', function () {
        var seachInputValue = searchInput.value.toUpperCase();
        memberCards.forEach(function (item) {
            if (item.innerText.toUpperCase().indexOf(seachInputValue) === -1) {
                item.style.display = 'none';
            } else {
                if (item.getAttribute('data-SBItemDisplay') !== null) {
                    console.log('Not the default display');
                    item.style.display = item.getAttribute('data-SBItemDisplay');
                } else {
                    item.style.display = 'block';
                }
            }
        });
        if (categories.length > 0) {
            categories.forEach(function (categoryId) {
                // variable to check if every category has active team memebers with filtering
                var hasVisibleEntries = false;
                document.querySelectorAll('[data-SBCatId=\'' + categoryId + '\']').forEach(function (row) {
                    if (row.style.display === 'block') {
                        hasVisibleEntries = true;
                    }
                });
                if (hasVisibleEntries === false) {
                    document.querySelectorAll('[data-SBcategory=\'' + categoryId + '\']').forEach(function (row) {
                        row.style.display = 'none';
                    });
                } else {
                    document.querySelectorAll('[data-SBcategory=\'' + categoryId + '\']').forEach(function (row) {
                        if (row.getAttribute('data-SBRowDisplay') !== null) {
                            row.style.display = row.getAttribute('data-SBRowDisplay');
                        } else {
                            row.style.display = "block";
                        }
                    });
                }
            });
        }
    });
})