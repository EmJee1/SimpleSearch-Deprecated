# What is simple-search?

Simple-search is the easy-to-use JavaScript library for filtering small to medium amounts of data on your website.
Made in vanilla ES6 JavaScript, it also contains an ES2015 file with the same functionality, which features full IE support.

# How to implement it
1. Add the file to your project and import it with a script defer src tag, like so:
```html
<script defer src="./path/to-searchbar.js"></script>
```

2. Create your searchbar, it needs an id of search-bar
```html
<input type="text" id="search-bar">
```

3. Add the class searchable-item to all the items that you want to be searchable
```html
<div class="searchable-item"></div>
```

# Extra functions
## Categories
If you want to work with categories (rows) that have need to be hidden when none of its childs are visible, you can use the categories function.
The first thing you need to do, is adding a div that has the class has-category, and adding a data-SBcategory="" to it, that has the category ID.
```html
<div class="row has-category" data-SBcategory="2">
    <h1>Capital cities</h1>
</div>
```
Then add the row that holds the items, also add the data-SBcategory="" to this div. If you do not use a title inside the div, then add the has-category class to this div.
```html
<div class="row row-flex" data-SBcategory="2"></div>
```
When you are using categories, make sure to add the data-SBCatId="" to all the searchable-items
```html
<div class="col searchable-item" data-SBCatId="2"></div>
```

## Default row display
This feature is necessary when using flex, and there are some other use cases as well.
Use data-SBRowDisplay="" to set the default display value fo the parent div (row) when it is visible.
Flex example:
```html
<div class="row row-flex" data-SBRowDisplay='flex'></div>
```

## Default item display
This feature is the same as default row display, except it changes the default display of the item.
One use case is a table, the default behavior sets the display to block, which breaks the table layout.
To change this, add the data-SBItemDisplay="" attribute.
Table example:
```html
<tr class="searchable-item" data-SBItemDisplay="table-row"></tr>
```

## Capital strict
To make the searchbar search for matches with the same capitalization, add the data-SBCapitalStrict attribute to the search-bar
You can add it like this, when the data equals true, it will be capital strict, the default is false.
```html
<input type="text" data-SBCapitalStrict="true" id="search-bar">
```

# Examples
Check out the example .html files in this repository to see the magic of simple-search at work.
