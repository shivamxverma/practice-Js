// Important point is object is copy by references 

// suppose you have a object that is obj1

const obj1 = {
  name : 'shivam',
  age : 23
}

const obj2 = obj1; // here in obj2 assign copy of reference of obj1 

// one more important point is object const object means we can not change the references when object is declared but not sure about the value inside it it may change so carefull when working with object

// coding techniques

const obj = {
  message : 'shivam',
  price : 890
}

// const message = obj.message;

const {message , price} = obj;


// shorthand property 

let cost = 900;
let day = 1;
let events = 89;

const obj3 = {
  cost,day,events
}

// function inside objects 

const obj4 = {
  // method : function function1(){
  //   console.log('resolution');
  // }
  method(){
    console.log('resolution')
  }
}
