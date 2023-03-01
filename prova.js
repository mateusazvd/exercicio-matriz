

function returnMatrix(lines, columns)
{
    let matrix = [];
    for(let i = 0; i < lines; i++)
    {
        let col = new Array(columns);
        for(let m = 0; m < columns; m++)
        {
            col[m] = (Math.round(Math.random() * 10 + 0.99));
        }
        matrix.push(col);
    }
    return matrix;
}

let arr = returnMatrix(10,10)



let maior = 0

for(let i = 0; i < arr.length;i++){
  for(let k = 0; k < arr.length; k++){
    if(arr[i][k]>maior){
      maior = arr[i][k]
    }
  }
}
let menor = 100
let pos = []
for(let t = 0; t < arr.length;t++){
  for(let w = 0;w < arr.length;w++){
    if(arr[t][w] < menor && arr[t].includes(maior)){
      menor = arr[t][w]
      pos = [t,w]
    }
  }

}




console.log(arr);
console.log(`menor : ${menor}`);
console.log(`O menor está na posição ${pos[0]},${pos[1]}`);
console.log(`maior: ${maior}`);