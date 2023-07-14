// Question 2 Personal Message: Store a person’s name in a variable, and print a message to that person. Your message should be simple, such as, “Hello Eric, would you like to learn some Python today?”


console.log('Answer 2')
let myName:string="Aimen";
console.log('Hello '+myName+ ", would you like to learn some Python today?")

//Question 3  Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, and titlecase.

console.log('Answer 3')
let upperCase:string = myName.toUpperCase();
let lowerCase:string = myName.toLowerCase();
let titleCase:string = (myName.charAt(0).toUpperCase())+myName.slice(1);
console.log("Uppercase:"+upperCase, "titleCase:"+titleCase, "lowerCase:"+lowerCase)


//Question 4  Famous Quote: Find a quote from a famous person you admire. Print the quote and the name of its author. Your output should look something like the following, including the quotation marks:

//Albert Einstein once said, “A person who never made a mistake never tried anything new.”

console.log('Answer 4')
console.log("Once Gojo Satoru said , \"But no matter how many allies you have around you, when you die, you’ll be alone.\".");

//Question 5 Famous Quote 2: Repeat Exercise 4, but this time store the famous person’s name in a variable called famous_person. Then compose your message and store it in a new variable called message. Print your message.

console.log('Answer 5')
let quote:string="Searching for someone to blame is just a pain.";
let famous_person:string="Gojo Satoru";
let message:string=`Once ${famous_person} said, "${quote}"`;
console.log(message)

//Question 6  Stripping Names: Store a person’s name, and include some whitespace characters at the beginning and end of the name. Make sure you use each character combination, "\t" and "\n", at least once. Print the name once, so the whitespace around the name is displayed. Then print the name after striping the white spaces.

console.log('Answer 6')

let newName:string="Aimen \n"
console.log("With white spaces:     ",newName)
console.log("Without white space:",newName)


//Question 7  Number Eight: Write addition, subtraction, multiplication, and division operations that each result in the number 8. Be sure to enclose your operations in print statements to see the results.

console.log('Answer 7')
console.log("ADD:",6+2);
console.log("SUB:",10-2);
console.log("MUL:",4*2);
console.log("DIV:",16/2);

//Question 8 You should create four lines that look like this:
//console.log(5 + 3)
//Your output should simply be four lines with the number 8 appearing once on each line.

console.log('Answer 8')
console.log('_____________________________________________________________________________________________________');
console.log("ADD:",2+6);
console.log('_____________________________________________________________________________________________________');
console.log("SUB:",11-3);
console.log('_____________________________________________________________________________________________________');
console.log("MUL:",4*2);
console.log('_____________________________________________________________________________________________________');
console.log("DIV:",16/2);
console.log('_____________________________________________________________________________________________________');

//Question 9 Favorite Number: Store your favorite number in a variable. Then, using that variable, create a message that reveals your favorite number. Print that message.

console.log('Answer 9')
let myFavNum:number=7;
let Message:string=`My favourite Number is : ${myFavNum}`;
console.log(Message)

//Question 10 Adding Comments: Choose two of the programs you’ve written, and add at least one comment to each. If you don’t have anything specific to write because your programs are too simple at this point, just add your name and the current date at the top of each program file. Then write one sentence describing what the program does.

console.log("Answer 10");
// Declared num1 as number with value 10;
let num1:number=10;
// Declared num2 as number with value 15;
let num2:number=15;
// Printed Result of their addition
console.log(num1+num2);

//Question 11  Names: Store the names of a few of your friends in a array called names. Print each person’s name by accessing each element in the list, one at a time.

console.log("Answer 11");
let friends:string[] = ["Wishma", "Noor", "Maryam"];
console.log(friends[0])
console.log(friends[1])
console.log(friends[2])

//Question 12  Greetings: Start with the array you used in Exercise 11, but instead of just printing each person’s name, print a message to them. The text of each message should be the same, but each message should be personalized with the person’s name.

console.log("Answer 12");
let Msg:string="Hello, Do you wanna watch anime??"
console.log(Msg+" "+friends[0])
console.log(Msg+" "+friends[1])
console.log(Msg+" "+friends[2])

//Question 13  Your Own Array: Think of your favorite mode of transportation, such as a motorcycle or a car, and make a list that stores several examples. Use your list to print a series of statements about these items, such as “I would like to own a Honda motorcycle.”

console.log("Answer 13");
const transportation:string[]=["Honda","Tesla","Parado"]
transportation.forEach(element => {
    console.log(`I would like to own a ${element} car.`)
});

//Question 14  Guest List: If you could invite anyone, living or deceased, to dinner, who would you invite? Make a list that includes at least three people you’d like to invite to dinner. Then use your list to print a message to each person, inviting them to dinner.

console.log("Answer 14");
let guestList:string[]=["Wahiba","Fizza","Hannah"]
guestList.forEach(element => {
    console.log(`I have invited ${element} for dinner`)
});

//Question 15 Changing Guest List: You just heard that one of your guests can’t make the dinner, so you need to send out a new set of invitations. You’ll have to think of someone else to invite.

console.log("Answer 15");
console.log(`${guestList[1]} can't make it so as a replacement of him I'll call someone else.`)

guestList[1]="Aimen";
console.log("Updated Guest List",guestList)

//Question 16  More Guests: You just found a bigger dinner table, so now more space is available. Think of three more guests to invite to dinner.

console.log("Answer 16");
console.log("Adding Ayna, Aiza and Areeba to my guest list as I found a bigger table");
// Adeel to start of Array
guestList.unshift("Ayna");
// Amara in the middle of array
guestList.splice(2,0,"Aiza")
// Umer to end of array
guestList.push("Areeba")
console.log("New guest List:",guestList);
// Print Invitations again;
guestList.forEach(element=>{
    console.log(`Hello ${element}, you're invited for dinner`)
})

//Question 17  Shrinking Guest List: You just found out that your new dinner table won’t arrive in time for the dinner, and you have space for only two guests.

console.log("Answer 17");
console.log(guestList)

console.log('Sorry, guys I have space for two guests only');
while(guestList.length>2){
    guestList.pop()
}
console.log("Updated List",guestList);
guestList.forEach(element=>{
    console.log(`Hey ${element}, you're still invited.`)
})
// making list empty
while(guestList.length>0){
    guestList.pop()
}
console.log('Verify Empty List:',guestList)

// Question 18  Seeing the World: Think of at least five places in the world you’d like to visit.

console.log('Answer 18');
let locations:string[]=["Turkey","Canada","Japan"]
// Array in original Order
console.log("Original Order",locations)
// Array in alphabetical Order
let alphabeticalSort=[...locations].sort();
console.log("Alphabetical Order",alphabeticalSort);
// Reverse Alphabetical order
let reverseAlphaOrder=[...locations].sort((a,b)=>b.localeCompare(a))
console.log('Reverse Alphabetical Order',reverseAlphaOrder);
// reverse Array
let reverseArray=locations.reverse()
console.log('Reversed Array',reverseArray)
// Again Reversed ARRAY
locations.reverse()
console.log('Original after reverse',locations);

//Question 19  Dinner Guests: Working with one of the programs from Exercises 14 through 18, print a message indicating the number of people you are inviting to dinner.

console.log('Answer 19')
// Since guestList was empty so it'll show zero
console.log('Number of guests invited',guestList.length)

//Question 20  Think of something you could store in a array. For example, you could make a list of mountains, rivers, countries, cities, languages, or anything else you’d like. Write a program that creates a list containing these items.

console.log('Answer 20')
let countries:string[] = ["Turkey", "Canada", "Japan", "Indonesia", "Brazil", "Pakistan", "Russia", "Mexico"];
console.log(countries)

//Question 21  They think of something you could store in a TypeScript Object. Write a program that creates Objects containing these items.

console.log('Answer 21')

let countriesObj:object[] = [
    { name: "Turkey", population: 312854058 },
    { name: "Canada", population: 1432223776 },
    { name: "Japan", population: 324344545 },
    { name: "Indonesia", population: 234225568 }
  ];
  
  console.log(countriesObj);

  //Question 22  Intentional Error: If you haven’t received an array index error in one of your programs yet, try to make one happen. Change an index in one of your programs to produce an index error. Make sure you correct the error before closing the program.

  console.log('Answer 22')
  let intentionalError:string[]=["Sukuna","Gojo"]
  
  intentionalError[3]="Sukuna";
  // I started counting index from 1 so I inserted Sarim at 3 index it was giving me output with an empty entry like : Answer 22
  // [ 'Ali', 'Umer', <1 empty item>, 'Sarim' ]
  console.log(intentionalError)
  // Solution 1
  intentionalError.pop()
  intentionalError[2]="Sukuna";
  // Solution 2
  intentionalError.pop()
  intentionalError.push("Sukuna")
  console.log(intentionalError)
  
 //Question 23  Conditional Tests: Write a series of conditional tests. Print a statement describing each test and your prediction for the results of each test. Your code should look something like this:

 console.log('Answer 23')

// Test 1
let car:string="Honda";
console.log(car=="Honda"?"Car is Honda":"Not Honda");
// test 2
console.log(2==2)
// test 3
console.log("Aimen">"Ayna"?true:false)
// test 4
let age:number=20
console.log(age>=20);
// test 5
let sex:string="female";
console.log(sex=="female")
// Test 6
car="Mehran";
console.log(car=="Suzuki"?"Car is Suzuki":"Not Suzuki");
// test 7
console.log(2!=2)
// test 8
console.log("Aimen"<"Ayna"?true:false)
// test 9
age=10
console.log(age>=20);
// test 10
sex="female";
console.log(sex=="female")


  //Queston 24  More Conditional Tests: You don’t have to limit the number of tests you create to 10. If you want to try more comparisons, write more tests. Have at least one True and one False result for each of the following:

console.log("Answer 24");
// test of strings
console.log("Aimen"<"Ayna")
// lower case test
let lowerCaseTestVar:string="Aimen"
if(lowerCaseTestVar===lowerCaseTestVar.toLowerCase()){
    console.log('It is lower Case')
}else{
    
    console.log('It is not lower Case')
};
// equalities test
console.log(2>3)
console.log(2<3)
console.log(2==2);
console.log(2>=2)
console.log(2<=2)
// AND and OR operators
let a:number=1;
let b:number=0;
if(a||b){
    console.log('a or b one has value other than 0')
}
if(a&&b){
    console.log('a and b both are non zero')
}

// Array test
console.log(Array.isArray(a)?"It is an Array":"Not an array")

//Question  25  Alien Colors #1: Imagine an alien was just shot down in a game. Create a variable called alien_color and assign it a value of 'green', 'yellow', or 'red'.

console.log("Answer 25")
let alien_color:string="green";
if(alien_color=='green'){
    console.log('You Just Earned 5 points')
}
// Failing condition
alien_color='red';
if(alien_color=='green'){
    console.log('You just earned 5 points')
}

//Question 26  Alien Colors #2: Choose a color for an alien as you did in Exercise 25, and write an if-else chain.

console.log('Answer 26');
if(alien_color=='green'){
    console.log('You just earned 5 points')
    
}else if(alien_color!='green'){
    console.log('You just earned 10 points')
    
}

//Question 27  Alien Colors #3: Turn your if-else chain from Exercise 5-4 into an if-else chain.

console.log('Answer 27')
if(alien_color=='green'){
    console.log('You just earned 5 points')
    
}else if(alien_color=='red'){
    console.log('You just earned 15 points')
    
}else if(alien_color=='yellow'){
    console.log('You just earned 10 points')

}

//Question 28  Stages of Life: Write an if-else chain that determines a person’s stage of life. Set a value for the variable age, and then:

console.log('Answer 28')

let personAge:number=100;

if(personAge<2){
console.log('Person is Baby.')
}else if(personAge>=2 && personAge<4){
    console.log('Person is toddler.')
    
}else if(personAge>=4 && personAge<13){
    console.log('Person is kid.')
    
}else if(personAge>=13 && personAge<20){
    console.log('Person is teenager.')
    
}else if(personAge>=20 && personAge<65){
    console.log('Person is adult.')
    
}else{
    console.log('Person is elder.')

}

//Question 29  Favorite Fruit: Make a array of your favorite fruits, and then write a series of independent if statements that check for certain fruits in your array.

console.log('Answer 29')
let fav_fruits:string[]=["Watermelon","banana","Strawberry"];
let found=fav_fruits.indexOf("Orange")
if(found>=0){
    console.log('Fruit is in your list')
}else{
    console.log('Fruit is not in your list')
}

if(fav_fruits.indexOf("Orange")>=0){
    console.log('Orange is in your favorite list')
}else if(fav_fruits.indexOf('banana')>=0){
    console.log('banana is in your favourite list')
}

//Question 30  Hello Admin: Make a array of five or more usernames, including the name 'admin'. Imagine you are writing code that will print a greeting to each user after they log in to a website. Loop through the array, and print a greeting to each user:
console.log('Answer 30')
let usernames:string[]=["admin","eric","smith","admin"]
usernames.forEach(elem=>{
    if(elem=='admin'){
        console.log('Hey admin would you like to see report')
    }else{
        console.log(`Hello ${elem}, Thanks for logging in again`)
    }
})


//Question 31  No Users: Add an if test to Exercise 28 to make sure the list of users is not empty.


console.log('Answer 31')
// Empty the list
while(usernames.length>0){
    usernames.pop()
}
console.log(usernames)
if(usernames.length==0){
    console.log('we need to find users')
}

//Question 32  Checking Usernames: Do the following to create a program that simulates how websites ensure that everyone has a unique username.


console.log('Answer 32')
let current_users:string[]=["Amna","Faris","Sami","Ali"];
let new_users:string[]=["Subhan","Umer","AMNA","Amna","Shafia"];

new_users.forEach(elem=>{
    if(current_users.indexOf(elem)>=0){
        console.log(`${elem} username is not available`)
    }else{
        console.log(`${elem} username is available`)
    }
})


//Question 33  Ordinal Numbers: Ordinal numbers indicate their position in a array, such as 1st or 2nd. Most ordinal numbers end in th, except 1, 2, and 3.


console.log('Answer 33')
let ordinal_num:number[]=[1,2,3,4,5,6,7,8,9];
ordinal_num.forEach(elem=>{
    if(elem==1){
        console.log(elem+'st')
    }else if(elem==2){
        console.log(elem+'nd')
    }else if(elem==3){
        console.log(elem+'rd')
    }else{
        console.log(elem+'th')
    }
})


//Question 34  Pizzas: Think of at least three kinds of your favorite pizza. Store these pizza names in a array, and then use a for loop to print the name of each pizza.


console.log('Answer 34')
let fav_pizza=["Tandori","Pepperoni","Cheese"]
fav_pizza.forEach(elem=>{
    console.log(`${elem} Pizza`)
})
fav_pizza.forEach(elem=>{
    if(elem=='Tandori'){
console.log('I love Tandori Pizza')
}else if(elem=='Cheese'){
    
    console.log('I like Cheese Pizza more than Tandori')
}else{
        console.log('I like Pepperoni Pizza more than anyother')

    }
})


//Question 35  Animals: Think of at least three different animals that have a common characteristic. Store the names of these animals in a list, and then use a for loop to print out the name of each animal. • Modify your program to print a statement about each animal, such as A dog would make a great pet. • Add a line at the end of your program stating what these animals have in common. You could print a sentence such as Any of these animals would make a great pet!


console.log('Answer 35')
let animals:string[]=["Cat","Dog","Parrot"];

animals.forEach(element => {
    console.log("Animals:",element)
});

animals.forEach(element=>{
    if(element=='Cat'){
        console.log('Cats are cute')
    }else if(element == 'Dog'){
        console.log('Dogs are Scary')
    }else if(element=='Parrot'){
        console.log('Parrot talk sweet')
    }
})

console.log('These animals are pets')


//Question 36  T-Shirt: Write a function called make_shirt() that accepts a size and the text of a message that should be printed on the shirt. The function should print a sentence summarizing the size of the shirt and the message printed on it. Call the function.

console.log('Answer 36')
let make_shirt=(size:string,text:string)=>{
console.log(`Shirt created of ${size} size with '${text}' written on it.`)
}
make_shirt("small","I am king")

//Question 37  Large Shirts: Modify the make_shirt() function so that shirts are large by default with a message that reads I love TypeScript. Make a large shirt and a medium shirt with the default message, and a shirt of any size with a different message.

console.log('Answer 37')
let make_shirt2=(size:string="Large",text:string="I love javascript")=>{
    console.log(`Shirt created of ${size} size with '${text}' written on it.`)
    }
make_shirt2()

//Question 38  Cities: Write a function called describe_city() that accepts the name of a city and its country. The function should print a simple sentence, such as Karachi is in Pakistan. Give the parameter for the country a default value. Call your function for three different cities, at least one of which is not in the default country.

console.log('Answer 38')
let describe_city=(city:string="Karachi",country:string="Pakistan")=>{
    console.log(`${city} is city of ${country} `)
}
describe_city();
describe_city("Los Angeles","USA")

//Question 39  City Names: Write a function called city_country() that takes in the name of a city and its country. The function should return a string formatted like this:

let city_country=(city:string,country:string)=>{
    return `"${city}, ${country}"`
}
console.log(city_country("Islamabad","Pakistan"))
console.log(city_country("Chicago","America"))
console.log(city_country("Tokyo","Japan"))

//Question 40  Album: Write a function called make_album() that builds a Object describing a music album. The function should take in an artist name and an album title, and it should return a Object containing these two pieces of information. Use the function to make three dictionaries representing different albums. Print each return value to show that Objects are storing the album information correctly. Add an optional parameter to make_album() that allows you to store the number of tracks on an album. If the calling line includes a value for the number of tracks, add that value to the album’s Object. Make at least one new function call that includes the number of tracks on an album.


//Question 41  Magicians: Make a array of magician’s names. Pass the array to a function called show_magicians(), which prints the name of each magician in the array.

console.log('Answer 41')
const magicians:string[]=["Ali","Umer","Saba"];
const show_magicians=(array:string[])=>{
    array.forEach(elem=>{
        console.log(elem)
    })
}
show_magicians(magicians)

//Question 42  Great Magicians: Start with a copy of your program from Exercise 39. Write a function called make_great() that modifies the array of magicians by adding the phrase the Great to each magician’s name. Call show_magicians() to see that the list has actually been modified.

console.log('Answer 42')
const make_great = (array: string[]) => {
    for (let i = 0; i < array.length; i++) {
      array[i] = `the Great ${array[i]}`;
    }
  };
//   make_great(magicians);
  show_magicians(magicians); // prints "the Great Harry Houdini", "the Great David Blaine", etc.

  //Question 43  Unchanged Magicians: Start with your work from Exercise 40. Call the function make_great() with a copy of the array of magicians’ names. Because the original array will be unchanged, return the new array and store it in a separate array. Call show_magicians() with each array to show that you have one array of the original names and one array with the Great added to each magician’s name.

  console.log('Answer 43')

  const make_great2=(array:string[])=>{
let newArray:string[]=[];
for(let i=0 ;i<=array.length;i++){
    newArray.push(`The Great ${array[i]}`)
}
return newArray
  }

  console.log(make_great2(magicians))
  show_magicians(magicians)

//Question 44  Sandwiches: Write a function that accepts a array of items a person wants on a sandwich. The function should have one parameter that collects as many items as the function call provides, and it should print a summary of the sandwich that is being ordered. Call the function three times, using a different number of arguments each time.

console.log('Answer 44')
let sandwich_customers=["Aimen","Ayna","Sana"];

const sandwich_ordered=(order_list:string[])=>{
    console.log(`You have ${order_list.length} new sandwich orders`)
}
sandwich_ordered(sandwich_customers)

//Question 45  Cars: Write a function that stores information about a car in a Object. The function should always receive a manufacturer and a model name. It should then accept an arbitrary number of keyword arguments. Call the function with the required information and two other name-value pairs, such as a color or an optional feature. Print the Object that’s returned to make sure all the information was stored correctly.

console.log('Answer 45') 
let make_car=(manufacturer:string,mode_name:string,color?:string,optional_feature?:string)=>{
    let carObj={
        manufacturer,mode_name,color,optional_feature
    }
  
return carObj
}

console.log(make_car('Honda',"Civic","Black","Auto-Lock"))
