// isAudio/is_audio, matching 1 or + uppercase/lowercase letter(s) (combination possible), with the extension .mp3, .flac, .alac, or .aac.
// isImage/is_image, matching 1 or + uppercase/lowercase letter(s) (combination possible), with the extension .jpg, .jpeg, .png, .bmp, or .gif.


String.prototype.isAudio= function(){
  //your code here
  var truth;
  var fail = 0;
  var types = ['.mp3', '.flac', '.alac', '.aac']
  var currentString = String(this);
  var arr = currentString.split('.')
  if(types.includes(`.${arr[1]}`)){
    var fileName = arr[0].split('')

    var extension = arr[1].split('')
    var count = 0;
    if(!fileName.includes(' ')){
        fileName.forEach((item) => {
            if(item.match(/^[A-Za-z]+$/)){
                truth = 1; 
                console.log(item)
            }
            else{
                fail = 999;
            }
        })
    }

    extension.forEach(item => {
                        if( item.match(".*[a-z].*") && item == item.toLowerCase()){
                            truth++;   
                        } else if (
                        parseInt(item) !== 'NaN') {
                            truth++;
                        }
                })
    if(truth + fail === extension.length + 1){
    return true
  }
  }
 
  return false
};


//=====================================================================
String.prototype.isImage= function(){
  //your code here
  var truth;
  var fail = 0;
  var types = ['.jpg', '.jpeg', '.png', '.bmp', '.gif']
  var currentString = String(this);
  var arr = currentString.split('.')
  if(types.includes(`.${arr[1]}`)){
    var fileName = arr[0].split('')

    var extension = arr[1].split('')
    var count = 0;
    if(!fileName.includes(' ')){
        fileName.forEach((item) => {
            if(item.match(/^[A-Za-z]+$/)){
                truth = 1; 
                console.log(item)
            }
            else{
                fail = 999;
            }
        })
    }

    extension.forEach(item => {
                        if( item.match(".*[a-z].*") && item == item.toLowerCase()){
                            truth++;   
                        } else if (
                        parseInt(item) !== 'NaN') {
                            truth++;
                        }
                })
    if(truth + fail === extension.length + 1){
    return true
  }
  }
 
  
  return false
};




 console.log("Nothing Else Matters.mp3".isAudio()) //false
 console.log("NothingElseMatters.mp3".isAudio()) // true
 console.log("DaftPunk.FLAC".isAudio()) //false
 console.log("DaftPunk.flac".isAudio()) //true
 console.log("AmonTobin.aac".isAudio()) //true
  console.log(" Amon Tobin.alac".isAudio()) //false
 console.log("tobin.alac".isAudio()) //true
 console.log("Home.jpg".isImage()) //true
 console.log("flat.jpeg".isImage()) //true
 console.log("icon.bmp".isImage()) //true
 console.log("icon2.jpg".isImage()) //false
 console.log("bounce.gif".isImage()) //true
 console.log("animate bounce.GIF".isImage()) //false



//SUPER SOLUTION

String.prototype.isAudio = function() {
  return /^[a-zA-Z]+\.(mp3|flac|al?ac)$/.test(this)
}

String.prototype.isImage = function() {
  return /^[a-zA-Z]+\.(jpe?g|png|bmp|gif)$/.test(this)
}