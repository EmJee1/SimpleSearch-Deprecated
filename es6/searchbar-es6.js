window.addEventListener('load', () => {
    // array to store the categories
    const categories = []
    const searchInput = document.getElementById('search-bar')
    const memberCards = document.querySelectorAll('.searchable-item')

    // get all the available categories in the categories array
    document.querySelectorAll('.has-category').forEach(titleItem => {
        categories.push(titleItem.getAttribute('data-SBcategory'))
    })

    searchInput.addEventListener('input', () => {
        const seachInputValue = searchInput.value.toUpperCase()
        memberCards.forEach((item) => {
            if (item.innerText.toUpperCase().indexOf(seachInputValue) === -1) {
                item.style.display = 'none'
            } else {
                if(item.getAttribute('data-SBItemDisplay') !== null) {
                    console.log('Not the default display')
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