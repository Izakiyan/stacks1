var Stack = function(){
  this.stack = [];

  this.print = function(){
    console.log(this.stack);
  }
    
  this.push = function(x){
    this.stack.push(x);
  }
    
  this.isEmpty = function(){
    if (this.stack.length===0) 
      {
        return true;
      } 
      else 
      {
        return false;
      }
  }
    
  this.peek = function(){
    var pik = this.stack[this.stack.length - 1];
    return pik;
  }
    
  this.pop = function(){
    var popo = this.stack[this.stack.length - 1];
    this.stack = this.stack.slice(-1,0);
    return popo;
    console.log(popo);
  }
}

//Use this code to test your stack:

var myStack = new Stack();
myStack.isEmpty();    //true
myStack.print();      //[]
myStack.push(2);      
myStack.isEmpty();     //false
myStack.push(4);      
myStack.print();      //[2,4]
myStack.peek();       //4
myStack.pop();
myStack.pop();
myStack.peek();       //null
myStack.isEmpty();    //true