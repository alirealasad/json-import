//Urls
// fetch('https://jsonplaceholder.typicode.com/todos/1')
//files note:- only work when served from servers
fetch("./file.json")
 .then(res => res.json())
 .then(data => console.log(data))
