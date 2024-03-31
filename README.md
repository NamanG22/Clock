# 30 Days JavaScript Challenge - CSS + JS Clock

This is a solution to the [2nd Day Challenge in 30 Days JavaScript Challenge](https://courses.wesbos.com/account/access/65e08bd4a3eaa1a25e70b560/view/194130581).

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

## Overview

### The challenge

Users should be able to:

- View the real time in the form of a analog clock

### Screenshot

![](Screenshot_31-3-2024_213812_127.0.0.1.jpeg)

### Links

- Solution URL: [Add solution URL here](https://your-solution-url.com)
- Live Site URL: [Add live site URL here](https://your-live-site-url.com)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- Vanilla JS

### What I learned

```css
.hand {
  transition-timing-function: cubic-bezier(0.1,2.7,0.58,1);
}
```
```js
const date = new Date();
const hours = date.getHours();
const minutes = date.getMinutes();
const seconds = date.getSeconds();
```
Typical Transition functions in CSS.
How to get real date and time using javascript.

## Author

- Linkedin - [Naman Garg](https://www.linkedin.com/in/naman-garg-90356a197/)
- LeetCode - [@_NovA](https://leetcode.com/_NovA/)
- Stack Overflow - [Naman Garg](https://stackoverflow.com/users/22222152/naman-garg)
- CSSBattle - [@namang22](https://cssbattle.dev/player/namang22)
- Frontend Mentor - [@NamanG22](https://www.frontendmentor.io/profile/NamanG22)

## Acknowledgments

Thanks to wesbos for providing such challenge through which we can improve our skills in js.
