

let score = 0;

 

function handleQuestion(event, questionId, answerValue) {
    event.preventDefault();
    const answer = document.querySelector(`input[name="${questionId}"]:checked`).value;
  
    if (answer === answerValue) {
      score = score + 10;
    } else {
      score -= 3;
    }
    
    document.getElementById(questionId).style.display = 'none';
  
    const nextQuestionId = parseInt(questionId.slice(1)) + 1;
    document.getElementById(`q${nextQuestionId}`).style.display = 'block';
  }
  

  const answerValues = {
    chal1: "A",
    chal2: "B",
    chal3: "C",
    chal4: "C",
    chal5: "C",
    chal6: "C",
    chal7: "C",
    chal8: "C",
    chal9: "C",
    chal10: "C",
    // Add more answer values as needed
  };
  
  for (let i = 1; i <= 9; i++) {
    const functionName = "chal" + i;
    const answerValue = answerValues[functionName];
    
    window[functionName] = function(event) {
      handleQuestion(event, "q" + i, answerValue);
    };
  }
  

  function chal10(event){
    event.preventDefault();
    const answer1 = document.querySelector('input[name="q10"]:checked').value;
    console.log('Answer 10:', answer1);

    if (answer1==="A"){
            score+=10;
    }else{
        score-=3;
    }
    console.log(score)
    document.getElementById("questions").style.display='none';
    document.getElementById("load").style.display='block';
    document.getElementById("resultvalue").innerHTML+=score;
    const advice = document.getElementById("result-advice");

    if (score<50){
        advice.innerHTML="Your Kashmiri is not so good. You should try learning more about your mother tongue."
    } else if (score>50 && score<75){
        advice.innerHTML="Your Kashmiri is decent enough but you should still try learning more about it."
    }else{
        advice.innerHTML="Your Kashmiri is very good. You should try helping people speak more Kashmiri."
    }





    setTimeout(function() {
        var loadingButton = document.getElementById("load");
        var content = document.getElementById("content");
        
        loadingButton.style.display = "none";
        content.classList.remove("hidden");
      }, 3000);
  }