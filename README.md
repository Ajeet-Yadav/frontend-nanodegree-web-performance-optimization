 
# Website (JavaScript and CSS3) Performance Optimization

## Summary
This project has two main, but separate, tasks. The first task was to optimize a (mock) portfolio page for both mobile and web browsers. Optimizations produced a Google Pagespeed Insights score of 94% or better.

The second task was to optimize a fictitious pizza menu page consisting of animated, scrolling, graphics so that the animations run at an average rate of 60 FPS.

Both tasks made use of multiple web performance best practices such as concatenating and minifying files to minimize http requests, optimizing images so that they load faster, minimizing the effects of render-blocking JavaScript and CSS, enabling file compressions and browser cache controls, etc.

## Links to GitHub Repository (Master Branch)
* GitHub Project Repository: [https://github.com/ajeet-yadv/frontend-nanodegree-web-performance-optimization/](https://github.com/ajeet-yadav/frontend-nanodegree-web-performance-optimization/ "GitHub project repository")
* GitHub Pages Demo: [http://ajeet-yadav.github.io/frontend-nanodegree-web-performance-optimization/](http://ajeet-yadav.github.io/frontend-nanodegree-web-performance-optimization/ "GitHub Pages demo")

## Tools / Techniques
- Critical rendering path optimizations to minimize render-blocking JS and CSS 
- NPM to install project dependencies (e.g. Grunt, cssmin, imagemin, etc.)
- Google Pagespeed Insights
- JSHint to lint JS code
- GitHub and GitHub Pages
- Object-Oriented Programming
- Media queries for responsive design
- JS async to minimize render-blocking scripts
- ngrok to run a secure connection to the local project files
- Grunt to automate the minification and concatenation of files
- CSS Translate and Rotation to promote graphics into their own layers
- enabling file compressions, browser cache controls and a file's max-life
- Chrome Developer Tools (and Timeline Performance Profiling)
- requestAnimationFrame for smooth scrolling

## List of Resources
[https://developers.google.com/speed/docs/insights/OptimizeCSSDelivery/](https://developers.google.com/speed/docs/insights/OptimizeCSSDelivery/ "Optimizing CSS")  
[http://www.w3schools.com/jsref/prop_win_innerheight.asp](http://www.w3schools.com/jsref/prop_win_innerheight.asp "Window Inner Height Property")  
[http://www.appneta.com/blog/bootstrap-pagespeed/](http://www.appneta.com/blog/bootstrap-pagespeed/ "Bootstrap Pagespeed")  
[http://gruntjs.com/getting-started/](http://gruntjs.com/getting-started/ "GruntJS Getting Started")  
[https://blog.openshift.com/day-5-gruntjs-let-someone-else-do-my-tedious-repetitive-tasks/](https://blog.openshift.com/day-5-gruntjs-let-someone-else-do-my-tedious-repetitive-tasks/ "Day 5 GruntJS")  
[https://developer.chrome.com/devtools/docs/rendering-settings/](https://developer.chrome.com/devtools/docs/rendering-settings/ "DevTools' Rendering Settings")  
[http://benfrain.com/improving-css-performance-fixed-position-elements/](http://benfrain.com/improving-css-performance-fixed-position-elements/ "Improving CSS Performance")  
[http://www.html5rocks.com/en/tutorials/speed/layers/](http://www.html5rocks.com/en/tutorials/speed/layers/ "HTML5 Rocks - Accelerated Rendering in Chrome")  
[http://www.html5rocks.com/en/tutorials/speed/animations/](http://www.html5rocks.com/en/tutorials/speed/animations/ "HTML5 Rocks - Faster Animations with requestAnimationFrame")  
[http://davidwalsh.name/translate3d/](http://davidwalsh.name/translate3d/ "Translate3D")  
[http://www.w3schools.com/css/css3_3dtransforms.asp](http://www.w3schools.com/css/css3_3dtransforms.asp "CSS3 3D Transforms")  
[https://developers.google.com/web/fundamentals/performance/critical-rendering-path/render-blocking-css/](https://developers.google.com/web/fundamentals/performance/critical-rendering-path/render-blocking-css/ "Render Blocking CSS")  
[http://www.paulirish.com/2011/requestanimationframe-for-smart-animating/](http://www.paulirish.com/2011/requestanimationframe-for-smart-animating/ "Paul Irish - requestAnimationFrame for Smart Animating")

## List of Optimizations Made

#### Step 1 (index.html)
- added `<script>` tags to the end of the html file (before the closing `<body>`)
- referenced css styles in-page to remove its render-blocking effects
- created new optimized images using Photoshop and ImageOptim
- added new media queries and images for different display-width breakpoints

#### Step 2 (main.js)
- for variables whose values remained constant, moved them outside of loops to improve performance
- moved external CSS stylesheets into index.html to remove its render-blocking effects
- added requestAnimationFrame method for smooth scrolling
- used a combination of transparent image png's and pizza images as css background-images to improve performance
- replaced querySelector methods with getElementById methods for better performance
- replaced querySelectorAll methods with getElementsByClassName methods for better performance

#### Step 3 (main.js, resizePizzas function)
- refactored resizePizzas(), sizeSwitcher() and changePizzaSizes(); reduced all unnecessary calculations since small/medium/large really represent only 3 constant values

#### Step 4 (main.js, updatePositions function)
- refactored updatePositions(); replaced document.body.scrollTop with pageYOffset for better performance
- decoupled/debounced scroll events consisting of performance-reducing cycles of repeated repaints and reflows; so, by decoupling, only the most recent pageYOffset is stored and used for calculations needed in repainting the sliding background pizzas
- prevented repeated calls to requestAnimationFrame, so that it isn't constantly running when no scroll events have taken place; prevented by decoupling the call from the main updatePositions() function and instead adding it to a function that checks if scrolling has taken place (ticking == true) OR if scrolling has not taken place (ticking == false)

## Frames Per Second (FPS) Snapshot Sample - Chrome DevTools Timeline
![Frames Per Second (FPS) Snapshot](http://s19.postimg.org/kdycjuwc3/timeline_screenshot.png)

# Project Requirements

## How do I complete this project?
Your challenge, if you wish to accept it (and we sure hope you will), is to optimize this online portfolio for speed! In particular, optimize the critical rendering path and make this page render as quickly as possible by applying the techniques you've picked up in the [Critical Rendering Path course](https://www.udacity.com/course/ud884).

To get started, check out the repository, inspect the code,

#### Getting started
Some useful tips to help you get started:

1. Check out the repository
2. To inspect the site on your phone, you can run a local server

  ```bash
  $> cd /path/to/your-project-folder
  $> python -m SimpleHTTPServer 8080
  ```

3. Open a browser and visit localhost:8080
4. Download and install [ngrok](https://ngrok.com/) to make your local server accessible remotely.

  ``` bash
  $> cd /path/to/your-project-folder
  $> ngrok 8080
  ```

6. Copy the public URL ngrok gives you and try running it through PageSpeed Insights! [More on integrating ngrok, Grunt and PageSpeed.](http://www.jamescryer.com/2014/06/12/grunt-pagespeed-and-ngrok-locally-testing/)

Profile, optimize, measure... and then lather, rinse, and repeat. Good luck!

#### Optimization Tips and Tricks
* [Optimizing Performance](https://developers.google.com/web/fundamentals/performance/ "web performance")
* [Analyzing the Critical Rendering Path](https://developers.google.com/web/fundamentals/performance/critical-rendering-path/analyzing-crp.html "analyzing crp")
* [Optimizing the Critical Rendering Path](https://developers.google.com/web/fundamentals/performance/critical-rendering-path/optimizing-critical-rendering-path.html "optimize the crp!")
* [Avoiding Rendering Blocking CSS](https://developers.google.com/web/fundamentals/performance/critical-rendering-path/render-blocking-css.html "render blocking css")
* [Optimizing JavaScript](https://developers.google.com/web/fundamentals/performance/critical-rendering-path/adding-interactivity-with-javascript.html "javascript")
* [Measuring with Navigation Timing](https://developers.google.com/web/fundamentals/performance/critical-rendering-path/measure-crp.html "nav timing api")  
We didn't cover the Navigation Timing API in the first two lessons but it's an incredibly useful tool for automated page profiling. I highly recommend reading.
* [The fewer the downloads, the better](https://developers.google.com/web/fundamentals/performance/optimizing-content-efficiency/eliminate-downloads.html "eliminate downloads")  
* [Reduce the size of text](https://developers.google.com/web/fundamentals/performance/optimizing-content-efficiency/optimize-encoding-and-transfer.html "optimize encoding and transfer")
* [Optimize images](https://developers.google.com/web/fundamentals/performance/optimizing-content-efficiency/image-optimization.html "image optimization") 
* [HTTP caching](https://developers.google.com/web/fundamentals/performance/optimizing-content-efficiency/http-caching.html "http caching")

#### Customization with Bootstrap
The portfolio was built on Twitter's <a href="http://getbootstrap.com/">Bootstrap</a> framework. All custom styles are in `dist/css/portfolio.css` in the portfolio repo.

* [Bootstrap's CSS Classes](http://getbootstrap.com/css/ "Bootstrap's CSS Classes")
* [Bootstrap's Components](http://getbootstrap.com/components/ "Bootstrap's Components")

#### Sample Portfolios

Feeling uninspired by the portfolio? Here's a list of cool portfolios I found after a few minutes of Googling.

* <a href="http://www.reddit.com/r/webdev/comments/280qkr/would_anybody_like_to_post_their_portfolio_site/">A great discussion about portfolios on reddit</a>
* <a href="http://ianlunn.co.uk/">http://ianlunn.co.uk/</a>
* <a href="http://www.adhamdannaway.com/portfolio">http://www.adhamdannaway.com/portfolio</a>
* <a href="http://www.timboelaars.nl/">http://www.timboelaars.nl/</a>
* <a href="http://futoryan.prosite.com/">http://futoryan.prosite.com/</a>
* <a href="http://playonpixels.prosite.com/21591/projects">http://playonpixels.prosite.com/21591/projects</a>
* <a href="http://colintrenter.prosite.com/">http://colintrenter.prosite.com/</a>
* <a href="http://calebmorris.prosite.com/">http://calebmorris.prosite.com/</a>
* <a href="http://www.cullywright.com/">http://www.cullywright.com/</a>
* <a href="http://yourjustlucky.com/">http://yourjustlucky.com/</a>
* <a href="http://nicoledominguez.com/portfolio/">http://nicoledominguez.com/portfolio/</a>
* <a href="http://www.roxannecook.com/">http://www.roxannecook.com/</a>
* <a href="http://www.84colors.com/portfolio.html">http://www.84colors.com/portfolio.html</a>
