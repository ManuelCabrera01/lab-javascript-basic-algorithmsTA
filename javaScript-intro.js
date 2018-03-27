// Ironhack exercise

// Lesson 2- conditional and loop practice 
// Even and odds numbers

var odds;
var pair;
var allNum;

for (var i = 1 ; i <=20 ; i++){
  
if(i % 2 === 0){
  pair = i;
  console.log(pair + ' is pair' )
  
}else{
odds = i ;
console.log(odds + ' is odd')
  
}

  
}

// javaScript basic algorithm lab

var hacker1 = 'Manuel';
console.log('the driver\' name is ' + hacker1);
var hacker2 = prompt('whats your name');
console.log("the navegator\'s name is " + hacker2);

if ( hacker1.length > hacker2.length){
  console.log('the driver has the longest name, it has ' + hacker1.length + ' characters' );
  
}else if (hacker2.length > hacker1.length){
console.log('YO , navigator got the longest name it has ' + hacker2.length + ' characters');

}else {
  console.log('wow, you both got equally long names, ' +hacker1+ ' characters');
}

console.log(hacker1.toUpperCase().split('').join(' '));
console.log(hacker2.split('').reverse().join(''));

if (hacker1 > hacker2 ){
  
  console.log('the drivers name goes first');
  
}else if (hacker2 >hacker1 ){
  
  console.log('Yo, the navigator goes first definitely');
  
}else {
  console.log('What?! You both got the same name?');
}

 var str = prompt('enter a word to check if is palindrom').replace(/ /g,'');
 var isPal = str.replace(/ /g,'').split('').reverse().join('');
 if(str === isPal){
 console.log( str + 'is a palindrom')
 }
else {
  console.log( str + 'no is not a palindrom ')
}
var bonusStr = 'Nam nec ultricies mi, ac hendrerit nunc. Nulla lectus tellus, hendrerit et mauris at, euismod tempus sapien. Nunc imperdiet mi eget augue tempus pharetra. Nulla et nibh aliquet diam dictum euismod fermentum nec orci. Curabitur ac quam tellus. Nulla condimentum ex sed dapibus laoreet. Aenean suscipit sem in blandit consectetur. Maecenas vulputate sed nisl non tristique. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Integer risus ante, auctor ut nulla sed, consectetur euismod est. Etiam fringilla eu sem eget tempus. Etiam non orci elit. Aenean ut mattis felis. Proin efficitur sapien et eros dignissim tincidunt. Maecenas non felis iaculis, vestibulum nunc vel, vulputate quam. Praesent blandit sodales ligula, blandit ornare sem tristique eget. \ Duis tincidunt massa ipsum, nec elementum nibh suscipit vel. Donec vitae convallis ex. Nullam porta tempus tortor et accumsan. Suspendisse finibus, ipsum rhoncus pulvinar tristique, erat odio volutpat erat, sit amet feugiat diam ex quis sapien. Curabitur porttitor nibh sit amet sem blandit lobortis. Donec nulla velit, rhoncus non dui nec, vulputate congue magna. Proin convallis euismod eros id feugiat. Mauris rhoncus sem est, at rutrum sem luctus vehicula. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. In ullamcorper mauris vel arcu ultricies, hendrerit auctor enim porttitor. Vestibulum in dolor scelerisque arcu tristique rutrum. Praesent facilisis sit amet ipsum vitae scelerisque. Etiam neque lacus, sodales sit amet vulputate tempor, venenatis tristique enim. Vivamus luctus massa non nibh efficitur fermentum. \ Mauris turpis orci, pharetra ut dui in, ullamcorper ullamcorper sapien. Curabitur sed feugiat libero. Nulla in massa dolor. Maecenas scelerisque, felis in suscipit mollis, justo tellus imperdiet justo, non lobortis diam libero ut enim. Aenean elementum justo volutpat mi euismod blandit. Ut iaculis, odio eu suscipit tincidunt, turpis velit vulputate mauris, eget pretium enim dui eu odio. Phasellus et lacus iaculis, eleifend purus a, feugiat nulla. Nunc at enim vitae turpis dignissim aliquam. Donec id lectus a dolor congue vestibulum et ut leo. Pellentesque faucibus tempor velit, vitae tristique nisi accumsan sed."';

console.log(bonusStr.trim().split(/\s+/i).length);



  var numMatches = bonusStr.match(/et/gi).length;

 console.log(numMatches);



