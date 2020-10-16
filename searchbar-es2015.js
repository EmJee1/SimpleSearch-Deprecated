window.addEventListener('load', function() {
    // for cross-broser support (internet explorer and other old browsers doe not fully support regular forEach)
    if (window.NodeList && !NodeList.prototype.forEach) {
        NodeList.prototype.forEach = Array.prototype.forEach;
    }
    var categories = [];
    var searchInput = document.getElementById('search-bar');
    var memberCards = document.querySelectorAll('.searchable-item');
    // get all the available categories in the categories array
    document.querySelectorAll('.title-row').forEach(function(titleItem) {
        return categories.push(titleItem.getAttribute('data-category'));
    });
    searchInput.addEventListener('input', function() {
        var seachInputValue = searchInput.value.toUpperCase();
        memberCards.forEach(function(item) {
            if (item.innerText.toUpperCase().indexOf(seachInputValue) === -1) {
                item.style.display = 'none';
            } else {
                item.style.display = 'block';
            }
        });
        if(categories.length > 0) {
            categories.forEach(function(categoryId) {
            // variable to check if every category has active team memebers with filtering
            var hasVisibleEntries = false;
            document.querySelectorAll('[data-category-card-id=\'' + categoryId + '\']').forEach(function(userCard) {
                if (userCard.style.display === 'block') {
                    hasVisibleEntries = true;
                }
            });
            if (hasVisibleEntries === false) {
                document.querySelectorAll('[data-category=\'' + categoryId + '\']').forEach(function(row) {
                    row.style.display = 'none';
                });
            } else {
                document.querySelectorAll('[data-category=\'' + categoryId + '\']').forEach(function(row) {
                    row.style.display = 'block';
                });
            }
        });
        }
    });
})