window.addEventListener('load', () => {
    // for cross-broser support (internet explorer and other old browsers doe not fully support regular forEach)
    if (window.NodeList && !NodeList.prototype.forEach) {
        NodeList.prototype.forEach = Array.prototype.forEach
    }

    // array to store the categories
    const categories = []
    const searchInput = document.getElementById('search-bar')
    const memberCards = document.querySelectorAll('.searchable-item')

    // get all the available categories in the categories array
    document.querySelectorAll('.filter-category').forEach(titleItem => {
        categories.push(titleItem.getAttribute('data-category'))
    })

    console.log(categories)

    searchInput.addEventListener('input', () => {
        const seachInputValue = searchInput.value.toUpperCase()
        memberCards.forEach((item) => {
            if (item.innerText.toUpperCase().indexOf(seachInputValue) === -1) {
                item.style.display = 'none'
            } else {
                if(typeof item.getAttribute('data-display-default') !== null) {
                    item.style.display = item.getAttribute('data-display-default')
                } else {
                    item.style.display = 'block'
                }
            }
        })
        if(categories.length > 0) {
            categories.forEach(categoryId => {
            // variable to check if every category has active team memebers with filtering
            let hasVisibleEntries = false
            document.querySelectorAll(`[data-item-category-id='${categoryId}']`).forEach(item => {
                if (item.style.display === 'block') {
                    hasVisibleEntries = true
                }
            })
            if (hasVisibleEntries === false) {
                document.querySelectorAll(`[data-category='${categoryId}']`).forEach(row => {
                    row.style.display = 'none'
                })
            } else {
                document.querySelectorAll(`[data-category='${categoryId}']`).forEach(row => {
                    row.style.display = 'block'
                })
            }
        })
        }
    })
})