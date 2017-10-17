const myAnswer = document.getElementById('ClientAnwer');
const myFeedback = document.getElementById('feedback');
const myProblem = document.getElementById('problem');
const img = document.getElementById('Feedback');
const myScore = document.getElementById('ClientScore');
const myLevel = document.getElementById('level');
var score = 0;
var level = 1;
var answer;


var a = getNumber();
var b = getNumber();
var c = getNumber();


function CreateNumber2()
{
 a = getNumber();
 b = getNumber();
 c = getNumber();
}

function CreateNumber4()
{
 a = getNumber();
 b = getNumber();
 c = getNumber();
 d = a + b * c;
}


createProblem();

function createProblem(){
  switch (level) {
  case 1:
    answer = getNumber() + " * " + getNumber();
    theProblem = answer;
    console.log(eval(theProblem));
  break;

  case 2:
  CreateNumber2();

    answer = a + " * " + "?  = " + a * b;
    theProblem = answer;

  break;

  case 3:
      answer = getNumber() + " + " + getNumber() + " * " + getNumber();
      theProblem = answer;
      console.log(eval(theProblem));
  break;

  case 4:
  CreateNumber4();

    answer = a + " + " + b + " * " + "?  = " + d;
    theProblem = answer;
  break;
  }
  myProblem.innerHTML = theProblem;
  myAnswer.focus();
}

/*
level 1 = a*b= eval(a*b)
level 2 = a*?= eval(a*b)
level 3 = a*b*c= eval(a*b*c)
level 4 = a+b*?= eval(a+b*c)
*/

function changeScore(){
  if (score == 5) {
    level++;
    setLevel.innerHTML = level;
  }
  else if(score == 10){
    level++;
    setLevel.innerHTML = level;
  }
  else if(score == 15){
    level++;
    setLevel.innerHTML = level;
  }
  else if(score == 20){
    level++;
    setLevel.innerHTML = level;
  }
}

function getNumber(){
  return Math.floor(Math.random()*9+1)
}

myAnswer.addEventListener("keydown",keyPressed,false);

function keyPressed(evt){

    if(evt.keyCode == 13)
    {
      if(level == 1 || level == 3){
        if (eval(theProblem) == myAnswer.value){
          img.src = "Images/Right.png";
          score += 1;
          setScore.innerHTML = score;
          setLevel.innerHTML = level;
        }
        else
        {
          img.src = "Images/Wrong.png";
        }
        window.setTimeout(wait,1000);
      }else if (level == 2)
      {
      if (b == myAnswer.value){
        img.src = "Images/Right.png";
        score += 1;
        setScore.innerHTML = score;
        setLevel.innerHTML = level;
      }
      else
      {
        img.src = "Images/Wrong.png";
      }
      window.setTimeout(wait,1000);
    }
    else if (level == 4)
    {
    if (c == myAnswer.value){
      img.src = "Images/Right.png";
      score += 1;
      setScore.innerHTML = score;
      setLevel.innerHTML = level;
    }
    else
    {
      img.src = "Images/Wrong.png";
    }
    window.setTimeout(wait,1000);
  }
    changeScore();
    console.log(level);
  }
}

function wait(){
  img.src = "Images/Feedback.png";
  myAnswer.value = "";
  createProblem();

}
