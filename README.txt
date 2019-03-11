# Movie List-API
A simple movie Web

## Features
- listing movies from movie api
- category movie by genres


### genres
```javascript=
  const dataPanel = document.getElementById('data-panel')
  const arrays = [1,3,6]
  const genres =
    {
      "1": "Action",
      "2": "Adventure",
      "3": "Animation",
      "4": "Comedy",
      "5": "Crime",
      "6": "Documentary",
      "7": "Drama",
    }

arrays.forEach(function(array){
  console.log(genres[array])
})
```

### 物件導向
```javascript=
const fruit = {
  "1": "Apple",
  "2": "Banana",
  "3": "Pear",
  "4": "Coconut"
}

const beer = {
  name: 'Ale',
  age: '2years',
  country: [{
    "1": "China",
    "2": "USA",
    "3": "England"
  },
  {
    "1": "Taiwan",
    "2": "Japan",
    "3": "France"
  }
  ]
}


console.log(Object.values(fruit))
console.log(Object.keys(fruit))
console.log(beer.name)
console.log(beer.age)
console.log(Object.values(beer.country[0]))
console.log(Object.values(beer.country[1]))
console.log(Object.keys(beer.country[0]))
```

![](https://i.imgur.com/9b5JqJp.png)