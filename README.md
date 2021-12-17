# Frontend Mentor - Sunnyside agency landing page solution

This is a solution to the [Sunnyside agency landing page challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/sunnyside-agency-landing-page-7yVs3B6ef). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page

### Screenshot

![](./assets/images/ss/375.PNG)\
![](./assets/images/ss/1400.PNG)

### Links

- Solution URL: [Github Repo](https://github.com/bague-rodnel/sunnyside-agency)
- Live Site URL: [Github Pages](https://bague-rodnel.github.io/sunnyside-agency/)

## My process

This was coded with Bootstrap 5.1.3. Only the necessary compiled css files have been linked to. The js is fetched via cdn.

### Built with

- Semantic HTML5 markup
- CSS
- Javascript
- Mobile-first workflow

This was first coded with Bootstrap 5.1.3. I started over and I stuck with vanilla css for an alternate approach. The section heights are coupled to the image dimensions/aspect ratios.

The tricky bit was the css vw unit which includes the vertical scrollbar width. The Javascript code queries the browser's scrollbar width and injects it to the :root as a helper variable for subsequent css calculations.

As a result, when viewed starting from the browser's maximized window (with scrollbar) and then emulating a smaller screen (devtools?) the scrollbar width breaks layout dimension computations for 992px and above. Reloading the page at the same emulated screen size results in a 0px scrollbar width
