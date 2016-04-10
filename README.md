forked from : Darcy Clarke's [Front-end-Developer-Interview-Questions](https://github.com/darcyclarke/Front-end-Developer-Interview-Questions)

# Front End Interview Questions

This is an incomplete document with an array of front-end interview questions, and some well-written answers.

What would you do to better front end latency?
https://www.youtube.com/watch?v=ch68MXWUfjo

### HTML5

What's a `doctype` do? <br/>
http://www.htmlbasictutor.ca/doctype-declaration.htm

What's the difference between standards mode and quirks mode? <br/>
https://developer.mozilla.org/en-US/docs/Quirks_Mode_and_Standards_Mode

What are the limitations when serving XHTML pages, as `application/xhtml+xml`? <br/>
http://www.webdevout.net/articles/beware-of-xhtml

How do you serve a page with content in multiple languages? <br/>

What are `data-` attributes good for? <br/>

Consider HTML5 as an open web platform. What are the building blocks of HTML5? <br/>
https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/HTML5
http://code.tutsplus.com/tutorials/28-html5-features-tips-and-techniques-you-must-know--net-13520

Describe the difference between cookies, sessionStorage and localStorage. <br/>

Can you explain the differences among `GET`, `POST`, `PUT`, and `DELETE`? <br/>

What are your favorite browser API?

What do you know about the DOM API?
https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model/Introduction

### CSS

Describe what a "reset" CSS file does and how it's useful. <br/>

Describe floats and how they work. <br/>
https://css-tricks.com/all-about-floats/

Describe z-index and how stacking context is formed. <br/>
http://philipwalton.com/articles/what-no-one-told-you-about-z-index/

What's your take on the Holy Grail? <br/>

What are the various clearing techniques and which is appropriate for what context? <br/>

Explain CSS sprites, and how you would implement them on a page or site. <br/>

What are your favourite image replacement techniques and which do you use when? <br/>

How do you serve your pages for feature-constrained browsers? What techniques/processes do you use? <br/>

What are the different ways to visually hide content (and make it available only for screen readers)? <br/>

Have you ever used a grid system, and if so, what do you prefer? <br/>

Have you used or implemented media queries or mobile specific layouts/CSS? <br/>

Any familiarity with styling SVG? <br/>

How do you optimize your webpages for print? <br/>

What are some of the "gotchas" for writing efficient CSS? <br/>

What is the difference between `display:none` and `visibility:hidden`? <br/>
http://stackoverflow.com/questions/133051/what-is-the-difference-between-visibilityhidden-and-displaynone?

What are the advantages/disadvantages of using CSS preprocessors? <br/>

How would you implement a web design comp that uses non-standard fonts? Webfonts (font services like: Google Webfonts, Typekitetc.)  <br/>

Explain how a browser determines what elements match a CSS selector? <br/>

Explain your understanding of the box model and how you would tell the browser in CSS to render your layout in different box models. <br/>

What does ```{ box-sizing: border-box; }``` do? What are its advantages? <br/>

List as many values for the display property that you can remember. <br/>

What's the difference between inline and inline-block? <br/>

What's the difference between a relative, fixed, absolute and statically positioned element? <br/>

What's your favorite CSS framework?  <br/>

Have you played around with the new CSS Flexbox or Grid specs? If so, what do you think of them from a performance standpoint? <br/>

Where would you initial, inherit or unset values in CSS?
http://www.quirksmode.org/css/cascading/values.html

### JavaScript

Explain event delegation. <br/>
https://davidwalsh.name/event-delegate

How would you create and call custom events in JavaScript? <br/>
http://www.sitepoint.com/javascript-custom-events/

Explain how `this` works in JavaScript <br/>

Explain how prototypal inheritance works <br/>

How do you go about testing your JavaScript? <br/>

AMD vs. CommonJS? <br/>

What's a hashtable? <br/>

What's IIFE? <br/>
http://benalman.com/news/2010/11/immediately-invoked-function-expression/

Explain why the following doesn't work as an IIFE: `function foo(){ }();`. <br/>

When the parser encounters the function keyword in the global scope or inside a function, it treats it as a function     declaration (statement), and not as a function expression, by default. And, paranthesis placed after a statement are     totally seperate from the statement and are simply a grouping operator. This will result in : SyntaxError: Unexpected    token ), because the compiler is expecting an expression inside the grouping operator.

What needs to be changed to properly make it an IIFE? <br/>
Parathesis need to be added around the entire function string.

What's the difference between a variable that is: `null`, `undefined` or `undeclared`? <br/>

How would you go about checking for any of these states? <br/>

What is a closure, and how/why would you use one? <br/>

What's a typical use case for anonymous functions? <br/>

Explain the "JavaScript module pattern" and when you'd use it. <br/>

What if your modules are namespace-less? <br/>

How do you organize your code? (module pattern, classical inheritance?) <br/>

What's the difference between host objects and native objects? <br/>

Difference between: `function Person(){}`, `var person = Person()`, and `var person = new Person()`? <br/>

What's the difference between `.call` and `.apply`? <br/>
http://stackoverflow.com/questions/1986896/what-is-the-difference-between-call-and-apply?rq=1

Explain `Function.prototype.bind`? <br/>

When do you optimize your code? <br/>

Can you explain how inheritance works in JavaScript? <br/>

What do you know about the Service Worker API? <br/>
https://ponyfoo.com/articles/serviceworker-revolution

When would you use `document.write()`? <br/>

Most generated ads still utilize `document.write()` although its use is frowned upon <br/>

What's the difference between feature detection, feature inference, and using the UA string <br/>

Explain AJAX in as much detail as possible <br/>

Explain how JSONP works (and how it's not really AJAX) <br/>

Have you ever used JavaScript templating? <br/>

If so, what libraries have you used? (Mustache.js, Handlebars etc.) <br/>

Explain "hoisting". <br/>

Describe event bubbling. <br/>

What's the difference between an "attribute" and a "property"? <br/>

Why is extending built in JavaScript objects not a good idea? <br/>

Why is extending built ins a good idea? <br/>

Difference between document load event and document ready event? <br/>

What is the difference between `==` and `===`? <br/>

Explain how you would get a query string parameter from the browser window's URL. <br/>

Explain the same-origin policy with regards to JavaScript. <br/>
https://developer.mozilla.org/en-US/docs/Web/Security/Same-origin_policy
http://stackoverflow.com/questions/3076414/ways-to-circumvent-the-same-origin-policy

Describe inheritance patterns in JavaScript. <br/>

Make this work: <br/>
```javascript
[1,2,3,4,5].duplicate(); // [1,2,3,4,5,1,2,3,4,5]
```
Describe a strategy for memoization (avoiding calculation repetition) in JavaScript. <br/>

Why is it called a Ternary expression, what does the word "Ternary" indicate? <br/>

What is the arity of a function? <br/>

What is `"use strict";`? what are the advantages and disadvantages to using it? <br/>

What is a polyfill? <br/>
http://remysharp.com/2010/10/08/what-is-a-polyfill/

### jQuery

Explain "chaining". <br/>

Explain "deferreds". <br/>

What are some jQuery specific optimizations you can implement? <br/>

What does `.end()` do? <br/>

How, and why, would you namespace a bound event handler? <br/>

Name 4 different values you can pass to the jQuery method. <br/>

Selector (string), HTML (string), Callback (function), HTMLElement, object, array, element array, jQuery Object etc. <br/>

What is the effects (or fx) queue? <br/>

What is the difference between `.get()`, `[]`, and `.eq()`? <br/>

What is the difference between `.bind()`, `.live()`, and `.delegate()`? <br/>

What is the difference between `$` and `$.fn`? Or just what is `$.fn`. <br/>

Optimize this selector: <br/>

```javascript
$(".foo div#bar:eq(0)")
```
How would you disable all console.log statements in one line? <br/>
http://stackoverflow.com/questions/1215392/how-to-quickly-and-conveniently-disable-all-console-log-statements-in-my-code

### Open Questions

What did you learn yesterday/this week? <br/>

What excites or interests you about coding? <br/>

What UI, Security, Performance, SEO, Maintainability or Technology considerations do you make while building a web application or site? <br/>

Talk about your preferred development environment. (OS, Editor, Browsers, Tools etc.) <br/>

Which version control systems are you familiar with? <br/>

Can you describe your workflow when you create a web page? <br/>

Can you describe the difference between progressive enhancement and graceful degradation? <br/>

Bonus points for describing feature detection <br/>

Explain what "Semantic HTML" means. <br/>

How would you optimize a websites assets/resources? <br/>

Why is it better to serve site assets from multiple domains? How many resources will a browser download from a given domain at a time? <br/>

Name 3 ways to decrease page load. (perceived or actual load time) <br/>

If you jumped on a project and they used tabs and you used spaces, what would you do? <br/>

Write a simple slideshow page <br/>

What tools do you use to test your code's performance? <br/>

If you could master one technology this year, what would it be? <br/>

What are the differences between Long-Polling, Websockets and SSE? <br/>

Explain the importance of standards and standards bodies. <br/>

How do you avoid FOUC? <br/>

Do your best to describe the process from the time you type in a website's URL to it finishing loading on your screen. <br/>

### Blogs

[A List Apart](http://alistapart.com/) &mdash; L. Jeffrey Zeldman <br/>
[Pony Foo](https://ponyfoo.com/) &mdash; Nicolás <br/>
[Baseline For Front-End Developers](http://rmurphey.com/blog/2012/04/12/a-baseline-for-front-end- <br/>developers/) &mdash; Rebecca Murphey <br/>
http://programmers.stackexchange.com/questions/46716/what-technical-details-should-a-programmer-of-a-web-application-consider-before <br/>
http://www.nczonline.net/blog/2010/01/05/interviewing-the-front-end-engineer/ <br/>
http://css-tricks.com/interview-questions-css/ <br/>
http://davidshariff.com/quiz/ <br/>
http://blog.sourcing.io/interview-questions <br/>

### Contributors

The majority of the questions were plucked from an [oksoclap](http://oksoclap.com/) thread created originally by [Paul Irish](http://paulirish.com) ([@paul_irish](http://twitter.com/paul_irish)) and contributed to by the following individuals:

[@bentruyman](http://twitter.com/bentruyman) - http://bentruyman.com <br/>
[@cowboy](http://twitter.com/cowboy) - http://benalman.com <br/>
[@ajpiano](http://ajpiano) - http://ajpiano.com <br/>
[@SlexAxton](http://twitter.com/slexaxton) - http://alexsexton.com <br/>
[@boazsender](http://twitter.com/boazsender) - http://boazsender.com <br/>
[@miketaylr](http://twitter.com/miketaylr) - http://miketaylr.com <br/>
[@vladikoff](http://twitter.com/vladikoff) - http://vladfilippov.com <br/>
[@gf3](http://twitter.com/gf3) - http://gf3.ca <br/>
[@jon_neal](http://twitter.com/jon_neal) - http://twitter.com/jon_neal <br/>
[@wookiehangover](http://twitter.com/wookiehangover) - http://wookiehangover.com <br/>
[@iansym](http://twitter.com/iansym) - http://twitter.com/iansym <br/>
