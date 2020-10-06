let z,x,c;
z=1000;
let numerosPrimos=Array(z).fill(1);

for(x=2;x<z;x++){
    for(c=2;c<z;c++){
        numerosPrimos[x*c]=0;
    }
}
for(x=2;x<z;x++){
    if(numerosPrimos[x]){
        console.log(x)
    }
}