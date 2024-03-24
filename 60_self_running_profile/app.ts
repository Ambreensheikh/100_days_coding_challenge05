 //making a profile that response the user name and age
  let userProfile = (function() {
    let name = "Hashir";
    let age = 12;
    return {
        displayInfo : function() {
            console.log(`Name : ${name} , Age : ${12}`);
        }
    };
  })();
  //asking about the user
  userProfile.displayInfo();