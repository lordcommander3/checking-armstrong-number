var number= prompt("Enter Value here");
var temp = number;
var sum = 0;
while(temp>0){
var digit=temp%10;
sum +=digit**3;
temp=parseInt(temp/10);
}
if (sum==number){
    document.write(`${number} is an armstrong number`);
}else{
    document.write(`${number} is not an armstrong number`);
}