# log-globals

> Logs your global variables to the console

![screenshot](screenshot.png)


## Getting started

Can be used as a bookmarklet or a [DevTools snippet](https://github.com/bgrins/devtools-snippets#to-enable-devtools-snippets-in-chrome).


### Bookmarklet

```js
javascript:(function(){function c(a,b){return a.filter(function(a){return-1===b.indexOf(a)})}var b=Object.getOwnPropertyNames(window),d=Object.getOwnPropertyNames(function(){var a=document.createElement("iframe");a.style.display="none";document.body.appendChild(a);var b=a.contentWindow;document.body.removeChild(a);return b}()),b=c(c(b,d),["alert"]);console.log("Globals",b)})()
```


## License

MIT License • © [Sindre Sorhus](http://sindresorhus.com)
