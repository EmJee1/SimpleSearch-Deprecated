window.addEventListener('load', function () {
    // for cross-broser support (internet explorer and other old browsers doe not fully support regular forEach)
    if (window.NodeList && !NodeList.prototype.forEach) {
        NodeList.prototype.forEach = Array.prototype.forEach;
    }
    // array to store the categories
    var categories = [];
    var searchInput = document.getElementById('search-bar');
    var memberCards = document.querySelectorAll('.searchable-item');
    var capitalStrict = false;

    // get all the available categories in the categories array
    document.querySelectorAll('.has-category').forEach(function (titleItem) {
        categories.push(titleItem.getAttribute('data-SBcategory'));
    });

    // check if the capital-strict data attribute has been set to true
    if (searchInput.getAttribute('data-SBCapitalStrict') === "true") {
        capitalStrict = true;
    }

    // on searchbar input change
    searchInput.addEventListener('input', function () {
        var seachInputValue = void 0;
        // capitalize the input if capital strict is disabled, else use the raw input
        if (capitalStrict === false) {
            seachInputValue = searchInput.value.toUpperCase();
        } else {
            seachInputValue = searchInput.value;
        }
        memberCards.forEach(function (item) {
            var itemInnerText = void 0;
            // capitalize the innertext if capital strict is disabled, else use the raw text
            if (capitalStrict === false) {
                itemInnerText = item.innerText.toUpperCase();
            } else {
                itemInnerText = item.innerText;
            }
            if (itemInnerText.indexOf(seachInputValue) === -1) {
                item.style.display = 'none';
            } else {
                if (item.getAttribute('data-SBItemDisplay') !== null) {
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
});