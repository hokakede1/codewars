


// https://www.codewars.com/kata/emoji-ergency/train/javascript

var emojiLib = {
'[[f9.smile]]':       ':)',
'[[f9.grin]]':        ':D',
'[[f9.smiley]]':      '=)',
'[[f9.sohappy]]':     'XD',
'[[f9.tongue]]':      ':P',
'[[f9.wink]]':        ';)',
'[[f9.sad]]':         ':(',
'[[f9.slant]]':       ':/',
'[[f9.surprised]]':   ':O',
'[[f9.catface]]':     ':3',
'[[f9.cool]]':        'B)',
'[[f9.unimpressed]]': ':|',
'[[f9.angry]]':       '>:|',
'[[f9.kissing]]':     '^.^',
'[[f9.dazed]]':       '*_*',
'[[f9.dance1]]':      '<(^.^<)',
'[[f9.dance2]]':      '(>^.^)>',
'[[f9.heart]]':       '<3',
}


// const insert = (string) => {
//     var arr = string.split(']]')
//     var last = arr[arr.length - 1]
//     return string.split('[[').map(item => emojiLib[item.split(']]')[0]] ? `${emojiLib[item.split(']]')[0]]}${item.split(']]').slice(1)}` : item).join('')
//   }




  const insert = (string) => {
    var arr = string.split(' ');
    console.log(arr)
    var result = arr.map(item => {
    
        for(var prop in emojiLib){
            
            item = item.replace(prop, emojiLib[prop])
        }

    })
    return result.join(' ')
  }








  console.log(insert('Sometimes, I feel like my heart\'s in a box like [[[f9.heart]]], you know?  But it\'s cool [[f9.cool]].')) 
  //'omg fr?  taht\'s f-ed up >:| sorry that happened :/'
 
 
 
 
 
//   console.log(insert('Well that was awkward [[f9.unimpressed]]...')) //, 'Well that was awkward :|...');
//   console.log(insert('Let\'s go dancing! [[f9.dance1]][[f9.dance2]]')) //, 'Let\'s go dancing! <(^.^<)(>^.^)>')
//   console.log(insert('OMG, he just sent me a pic of it [[f9.surprised]].')) //, 'OMG, he jus sen me a pic of it :O.')