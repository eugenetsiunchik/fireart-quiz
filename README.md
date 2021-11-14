## Common Explanations

### default index.js export
File`index.js` into each folder looks weird for me.
Double component mentioning `import "./app/SomeComponent/SomeComponent"` in import, is lower price, than create unnecessary import files in each component folder. 
p.s. I'll use structure with `index.js` if project based on it

## Figma design issues

### Desktop Home Page

- logo image has huge gaps;
- select input doesn't have dropdown container style;
- default value of question amount is not relevant. I made default value as 10;
- set max amount of question as 10;

### Desktop Quiz Page

- level value is not clear. What is mean 1? I set value as difficulty `hard` or `easy`;
- True button has font-family `Inter`, but main font-family `Quicksand`. I would leave it as main `Quicksend`; 


### Desktop Result Page

- title `Your score` has font-family `Comfortaa`. I would leave it as main `Quicksend`; 
- True button has wrong text, should be `Play again` instead `True`;

### Mobile Quiz Page

- title font looks different based on figma styles; I used style from desktop;
- bottom left thing on background exported with wrong color; I used image from desktop;


### Generally
- it would be nice if the font size being multiple of 4;
- same rule as above for height and width of elements;
- different background in desktop and mobile is okay, but not necessary.
  It takes more effort to implement, but doesn't bring/provide much value for users 
  It's just my opinion;
- it could be possible reuse background svg components, 
  but I need to modify exported svg. Is it part of test task?
