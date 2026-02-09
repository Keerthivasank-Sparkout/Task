function printPattern(num){
for(let i=0;i<num;i++){
    let star="";
    for(let j=0;j<=i;j++){
        star+="*"
    }
    console.log(star);
}
}
printPattern(5);