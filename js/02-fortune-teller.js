// a function named tellFortune()- • takes 4 arguments: number of children, partner's name, geographic location, job title. - •	Outputs your fortune to the screen like so: "You will be a X in Y, and married to Z with N kids." - •	Call that function 3 times with 3 different values for the arguments.
 
function tellFortune (children, partner, location, jobTitle) {
    var future = 'You will be a ' + jobTitle + ' in ' + location + ', and married to ' + partner + ' ' + ' with ' + children + ' kids.';
console.log(future);  
  }      
    tellFortune ('1', 'Misha','Ocean Side ', 'teacher')    
    tellFortune ('2', 'Odo','Barbados ', 'salor')  
    tellFortune ('4', 'Amaly', 'Maui ', 'housekiper')
    tellFortune ('N', 'Z', 'Y ', 'X')  