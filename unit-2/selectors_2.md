# <!DOCTYPE html>

<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>


  <style>
    #highlight{
      text-decoration: underline;
      background-color: yellow;
      color: red;
    }


    .special-text{
      font-style: italic;
    }


    .highlight{
      background-color: turquoise;
    }
  </style>


</head>
<body>
  <h1 id="highlight">highlighted with id</h1>
  ```
  <h1 class="special-text">special class</h1>
  ```
  ```
  <h1 class="special-text highlight">special and highlight with class</h1>
  ```
</body>
</html>
Here are simple short notes to explain the CSS selectors in your code so you can easily understand and recall them later:

***

### CSS Notes: ID vs Class Selectors

- `#highlight`: This is an **ID selector**. It styles a unique element with an ID of "highlight". Here, it underlines the text, colors the text red, and gives a yellow background. IDs are **unique** and used for single elements only.
- `.special-text`: This is a **class selector**. It styles any element with this class by making its text italic. Classes are reusable and can be applied to multiple elements.
- `.highlight`: Another **class selector**, which applies a turquoise background color to any element with this class.

***

### How They Work Together in HTML

- `<h1 id="highlight">`: Applies the ID style → underlined, red text, yellow background (unique element).
- `<h1 class="special-text">`: Applies italic styling from the class.
- `<h1 class="special-text highlight">`: Combines both classes — italic text and turquoise background. Multiple classes can be combined and styles apply cumulatively.

***

### Important Points

- **ID selectors (\#)** have higher specificity than **class selectors (.)** — if the same property is set in both, the ID style wins.
- IDs must be unique per page, classes can be reused on many elements.
- Use classes for reusable styles; use IDs for unique, specific element styling or interactions.

***

These notes summarize the key differences and how your CSS selectors apply to the HTML elements in your example. Keep this handy to quickly grasp ID and class selectors next time you review or write CSS!