# Page Scraper jQuery Plugin

## Basics

The plugin will take all of the anchor tags on the page and insert their text and href information into a div on the page.

## Usage

In script tags in index.html or in external js file:

``` javascript
  $(document).ready(function() {
    $('a').pageScraper()
  })
```

In index.html:

``` html
  <div id="link_display">

  </div>
```

## License

MIT