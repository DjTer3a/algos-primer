/*
chocolate bar

M * N (known)

break(H,W){


}
2*2
| |
| |

first split = 1
| |

| |
second split = 2
|     |

|     |
total = 3
3*2
| |
| |
| |
first split = 2
| |

| |

| |
second split = 3
|       |

|       |

|       |
total = 5
4*3
| | |
| | |
| | |
| | |
first split = 3
| | |

| | |

| | |

| | |
second split = 8
|   |   |

|   |   |

|   |   |

|   |   |
total = 3 + 8 = 11
3*4
| | | |
| | | |
| | | |
first split = 2
| | | |

| | | |

| | | |
second split = 9
|       |       |       |

|       |       |       |

|       |       |       |
total = 11

2 for loops

break(H,W){
let Hcount = 0;
let totalCount = 0;
let Wcount = 0;
for(let i = 1; i < H; i++)
    Hcount++;
}
for(let j = 1; i < W; j++){
    Wcount++
}
totalCount += Wcount * Hcount
return totalCount
}
*/

function breakChocolate(H, W) {
  let totalCount = 0;
  totalCount = W * H - 1;
  return totalCount;
}

console.log(breakChocolate(4, 3));
