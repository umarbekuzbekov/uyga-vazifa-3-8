let foods = [
    {
      id: 1,
      name: "Shorva",
      price: 15000,
      count: 57
    },
    {
      id: 2,
      name: "Manti",
      price: 11000,
      count: 49
    },
    {
      id: 3,
      name: "Pizza",
      price: 60000,
      count: 33
    },
    {
      id: 4,
      name: "Hamburger",
      price: 20000,
      count: 40
    },
    {
      id: 5,
      name: "Osh",
      price: 31000,
      count: 33
    },
    {
      id: 6,
      name: "Kabob",
      price: 77000,
      count: 22
    },
    {
      id: 7,
      name: "Lavash",
      price: 47000,
      count: 32
    },
    {
      id: 8,
      name: "Somsa",
      price: 8000,
      count: 47
    }
  
  ]
  
  let nomi = " "
  
  while(nomi){
    nomi = prompt("Qanday ovqat hoxhlaysiz. Iltimos ovqat nomini kiriting!"),
    "Bizda quydagi ovqatlar mavjud!"
     "Shorva"
     "Manti"
     "Pizza"
    "Hamburger"
    "Osh"
     "Kabob"
    "Lavash"
    "Somsa" 
    
    let boryokiyoq = false
    if(nomi){
      for(let ovqat of foods){
       if(ovqat.name?.toLocaleLowerCase() == nomi?.toLocaleLowerCase()){
        boryokiyoq = true
       }
      }
    }
  
    let soni = 0
  
    if(boryokiyoq){
      soni = prompt(`Nechta ${nomi} kerak`)
    } else {
      alert(`Bizda bunday ${nomi} ovqat mavjud emas. Iltimos bizning menyumizfda bor ovqat kiriting!`)
    }
  
    if(soni > 0){
      let food = {}
  
      for(let ovqat of foods){
        if(ovqat.name?.toLocaleLowerCase() == nomi?.toLocaleLowerCase()){
          food = ovqat
         }
      }
      if(food.count >= soni){
        alert(`Sizdan ${soni * food.price} som boldi.`)
        foods[food.id -1].count = food.count - soni
        console.log(foods)
      }
      else{
        alert(`Bizda ${food.count} bor ekan. ${soni - food.count} ta iltimos 15 min kuting tayyor boladi tayyor bo'ladi.`)
      }
    }
  
  
  }