function getGrade(score){
    if(score>=90 && score <= 100){
        console.log("Grade A");
    }
    else if(score >=80 && score <=89){
        console.log("Grade B");
    }
    else if(score >=70 && score <=79){
        console.log("Grade C");
    }
    else if(score >=60 && score <=69){
        console.log("Grade D");
    }
    else if(score > 0 && score <=59){
        console.log("Grade F");
    }
    else{
        console.log("invalid score");
    }
}
getGrade(91);
getGrade(90);
getGrade(100);
getGrade(101);
getGrade(78);
getGrade(81);
getGrade(60);