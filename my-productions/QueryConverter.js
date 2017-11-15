// Send in a query
/*
Objective: Send in a link with queries and have to change that to object
Example: 
www.whatsup.com?color=red&zid=hey
=> {color: 'red', zid='hey'} 
*/

// Easy Version
var solution = (str) => {
    var result = {}
    var arr = str.split('?')
    arr[1].split('&').forEach(item => {
        var props = item.split('=');
        result[props[0]] = props[1]
    })
    return result
}


//


var tests = [
    'www.whatsup.com?name=huy?lastnam=dang',
    'www.whatsup.com?name=Sam?age=29',
    'www.whatsup.com?shoe=Nike?size=11',
    'www.whatsup.com?brand=Coach?itemId=9123',
    'www.whatsup.com?make=Honda?model=Civic',
    'www.whatsup.com?item=iphone?gen=X',
    'www.whatsup.com?brand=Samsung?screen=oled',
    'www.whatsup.com?order=iphone?status=ordered?date=Oct,2,2017',
    'www.whatsup.com?item=sock?color=red?size=M?gen=men',
    'www.whatsup.com?ticket=IMAX?movie=ThorRagnarok?status=paid',
    'www.whatsup.com?model=S?type=P100D?impression=<3',
    'www.whatsup.com?mythought=thisTestisLong?idea=NeedtoStopHere?message=HiThere',
]

// Sample Test Cases

Test.describe('Sample Tests', () => {
  Test.assertDeepEquals(solution('www.whatsup.com?name=Huy?lastname=dang'), {name: "Huy", lastname: "dang"});
  Test.assertDeepEquals(solution('www.whatsup.com?name=Sam?age=29'), {name: "Sam", age: '29'});
  Test.assertDeepEquals(solution('www.whatsup.com?shoe=Nike?size=11'), {shoe: "Nike", size: '11'});
  Test.assertDeepEquals(solution('www.whatsup.com?brand=Coach?itemId=9123'), {brand:"Coach", itemId:'9123'});
  Test.assertDeepEquals(solution('www.whatsup.com?make=Honda?model=Civic'), {make: 'Honda', model: 'Civic'});
  Test.assertDeepEquals(solution('www.whatsup.com?item=iphone?gen=X'), {item:'iphone', gen:'X'});
})

console.log(solution('www.whatsup.com?color=red&zid=hey')) //{color: 'red', zid='hey'}





// Hard version