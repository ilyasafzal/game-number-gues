let randomName = Math.random();
randomName*10;
randomName = Math.round(randomName);

let gussnumber =prompt("please gues any number between 1 to 10");

 if (+gussnumber ===randomName)
    document.write("you won the game ",);
    //document.write(randomName);
    
 else
      document.write("sorry you loss the game");
      //document.write(  randomName);
      console.log(randomName);
      console.log(gussnumber);
 