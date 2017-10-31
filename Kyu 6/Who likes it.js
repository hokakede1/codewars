// https://www.codewars.com/kata/who-likes-it


function likes(names) {
    // TODO
    if(names.length === 0){
        return `no one likes this`
    }
    var part1 = names.map((item, index, array) => {
        if(index === 0){
            return item
        } else if( index === array.length - 1){
            return ` and ${item}`
        } else {
            return `, ${item}`
        }
    })
    if (names.length === 1){
        return `${part1.join('')} likes this`
    } else if(names.length < 4){
        return `${part1.join('')} like this`
    } else {
        return `${names[0]}, ${names[1]} and ${names.length - 2} others like this`
    }

    
  }




  console.log(likes([])) //, 'no one likes this');
  console.log(likes(['Peter'])) //, 'Peter likes this');
  console.log(likes(['Jacob', 'Alex'])) //, 'Jacob and Alex like this');
  console.log(likes(['Max', 'John', 'Mark'])) //, 'Max, John and Mark like this');
  console.log(likes(['Alex', 'Jacob', 'Mark', 'Max'])) //, 'Alex, Jacob and 2 others like this');



  // Other way to do 

  function likes(names) {
    names = names || [];
    switch(names.length){
      case 0: return 'no one likes this'; break;
      case 1: return names[0] + ' likes this'; break;
      case 2: return names[0] + ' and ' + names[1] + ' like this'; break;
      case 3: return names[0] + ', ' + names[1] + ' and ' + names[2] + ' like this'; break;
      default: return names[0] + ', ' + names[1] + ' and ' + (names.length - 2) + ' others like this';
    }
  }