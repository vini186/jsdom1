// Examine the document object //
// console.log(document);

// console.log(document.domain);
// console.log(document.URL);
// console.log(document.title);
// // document.title =123;
// console.log(document.doctype);
// console.log(document.head);
// console.log(document.body);
// console.log(document.all);
// console.log(document.all[10]);
// //document.all[10].textContent = "hello" ;
// console.log(document.forms[0]);
// console.log(document.links);

//console.log(document.images);

// getelemented //
//console.log(document.getElementById('header-title'));
// var headerTitle = document.getElementById('header-title');
// var header = document.getElementById('main-header');
//console.log(headerTitle);
// headerTitle.textContent = 'hello';
// headerTitle.innerText = 'Goodbye';
//console.log(headerTitle.innerText);
//headerTitle.innerHTML = ' <h3>hello</h3>';
//header.style.borderBottom = 'solid 3px #000';
// get elements by classnames//

// var items=document.getElementsByClassName('list-group-item');
// console.log(items);
// console.log(items[1]);
// items[1].textContent = 'hello 2';
// items[1].style.fontWeight = 'bold';
// items[1].style.background = 'yellow';
// //give error//
// //items.style.backgroundColor = '#f4f4f4';

// for(var i=0; i<items.length; i++) {
//     items[i].style.backgroundColor = '#f4f4f4';
// }

// getelementbytagname //
// var li=document.getElementsByTagName('li');
// console.log(li);
// console.log(li[1]);
// li[1].textContent = 'hello 2';
// li[1].style.fontWeight = 'bold';
// li[1].style.background = 'yellow';
// //give error//
// //items.style.backgroundColor = '#f4f4f4';

// for(var i=0; i<li.length; i++) {
//     li[i].style.backgroundColor = '#f4f4f4';
// }

//Query selector//
// var header = document.querySelector('#main-header');
// header.style.borderBottom = 'solid 4px #ccc';


// var input= document.querySelector('input');
// input.value='helloworld'; 

// var submit = document.querySelector('input[type="submit"]');
// submit.value="send";

// var item = document.querySelector('.list-group-item');
// item.style.color='red';

// var lastItem =document.querySelector('.list-group-item:last-child');
// lastItem.style.color = 'blue'; 

// var secondItem =document.querySelector('.list-group-item:nth-child(2)');
// secondItem.style.color = 'coral'; 

//querysectorall//
var titles = document.querySelectorAll('.title');
console.log(titles);
 
titles[0].textContent='hello';

var odd= document.querySelectorAll('li:nth-child(odd)');
var even= document.querySelectorAll('li:nth-child(even)');
for(var i=0; i<odd.length;i++) {
    odd[i].style.background ='#f4f4f4';
    even[i].style.background ='#ccc';
}



















