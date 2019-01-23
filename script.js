// Use JavaScript to obtain a reference to the first section with the class of article_header and change its text with the textContent property to "Welcome to the {insert your name here} blog"
// Use JavaScript to obtain a reference to all article__header elements and change their classList property value to article__header important.
// Obtain a reference the element with a class of dashed and remove it.
// Obtain a reference the element with a class of article_footer and add the class of goldenrod it.

const articleHeaderElement = document.querySelector(".article__header");
console.log(articleHeaderElement);
articleHeaderElement.textContent = "Welcome to the {insert your name here} blog";


// const smallTextEl = document.querySelector(".smallText")
// smallTextEl.classList.remove("smallText")
// smallTextEl.classList.add("largeText")

const allArticleHeaderElements = document.querySelectorAll(".article__header");
console.log(allArticleHeaderElements);
for(i = 0; i < allArticleHeaderElements.length; i++){
    allArticleHeaderElements[i].classList.add("important");
}
console.log(allArticleHeaderElements);


const dashedElement = document.querySelector(".dashed");
dashedElement.classList.remove("dashed");
console.log(dashedElement);

const articleFooter = document.querySelector(".article__footer");
articleFooter.classList.add("goldenrod");
console.log(articleFooter);
// const bodyElement = document.querySelectorAll(".body-text");
// console.log(bodyElement);

// for(i = 0; i < bodyElement.length; i++) {
//     bodyElement[i].innerHTML = "<p>Hello World</p>";
// }