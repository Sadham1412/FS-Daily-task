console.log("for loop print 1 to 10")
let a=10;
for(let i=1;i<=a;i++){
console.log(i);
}
console.log("while loop");
let b=1;
while(b<=5){
    console.log(b);
    b++;
}
console.log("do while loop");
let c = 1;

do {
    console.log(c);
    c++;
}
while(c <= 3);
console.log("Print numbers 1–10, skip 5 using continue, stop at 8 using break.");
let d=10;
for(let j=1;j<=d;j++){
if(j==5){
    continue;
}
    if(j==8){
        break
    }
  console.log(j);
}
