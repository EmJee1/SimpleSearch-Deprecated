window.addEventListener('load', () => {
    // array to store the categories
    const categories = []
    const searchInput = document.getElementById('search-bar')
    const memberCards = document.querySelectorAll('.searchable-item')
    let capitalStrict = false

    // get all the available categories in the categories array
    document.querySelectorAll('.has-category').forEach(titleItem => {
        categories.push(titleItem.getAttribute('data-SBcategory'))
    })

    // check if the capital-strict data attribute has been set to true
    if(searchInput.getAttribute('data-SBCapitalStrict') === "true") { capitalStrict = true }

    // on searchbar input change
    searchInput.addEventListener('input', () => {
        let seachInputValue
        // capitalize the input if capital strict is disabled, else use the raw input
        if(capitalStrict === false) { seachInputValue = searchInput.value.toUpperCase() }
        else { seachInputValue = searchInput.value }
        memberCards.forEach(item => {
            let itemInnerText
            // capitalize the innertext if capital strict is disabled, else use the raw text
            if(capitalStrict === false) { itemInnerText = item.innerText.toUpperCase() }
            else { itemInnerText = item.innerText }
            if (itemInnerText.indexOf(seachInputValue) === -1) {
                item.style.display = 'none'
            } else {
                if(item.getAttribute('data-SBItemDisplay') !== null) {
                    item.style.display = item.getAttribute('data-SBItemDisplay')
                } else {
                    item.style.display = 'block'
                }
            }
        })
        if(categories.length > 0) {
            categories.forEach(categoryId => {
                // variable to check if every category has active team memebers with filtering
                let hasVisibleEntries = false
                document.querySelectorAll(`[data-SBCatId='${categoryId}']`).forEach(row => {
                    if (row.style.display === 'block') {
                        hasVisibleEntries = true
                    }
                })
                if (hasVisibleEntries === false) {
                    document.querySelectorAll(`[data-SBcategory='${categoryId}']`).forEach(row => {
                        row.style.display = 'none'
                    })
                } else {
                    document.querySelectorAll(`[data-SBcategory='${categoryId}']`).forEach(row => {
                        if(row.getAttribute('data-SBRowDisplay') !== null) {
                            row.style.display = row.getAttribute('data-SBRowDisplay')
                        } else {
                            row.style.display = "block";
                        }
                    })
                }
            })
        }
    })
})