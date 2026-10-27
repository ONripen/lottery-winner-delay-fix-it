# lottery-winner-delay-fix-it
# Async Lottery Winner Picker - Fixed setTimeout Bug

### The Problem (Client's Bug)
Most developers write this and get a bug - all winners show at once:
```js
for(let i=0; i<5; i++){ 
  setTimeout(()=> console.log(i), 1000) 
}
// Bug: All logs appear together after 1 second
Fixed async setTimeout bug in Node.js lottery app
