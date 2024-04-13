// https://www.codewars.com/kata/576757b1df89ecf5bd00073b/train/javascript

function towerBuilder(nFloors) {
    if (nFloors > 0) return floors;
    let floors = [];

    function builder(space) {
        let floorSpace = nFloors * 2 - 1;
        let spaceArray = '';
        for (let i = 0; i < space; i++) {
            spaceArray = spaceArray + ' ';
        }
        let numOfFutnotes = floorSpace - spaceArray.length * 2;
        let futnotes = '';
        for (let i = 0; i < numOfFutnotes; i++) {
            futnotes = futnotes + "*";
        }
        floors.shift(spaceArray + futnotes + spaceArray);
        if (numOfFutnotes > 1) {
            builder(space + 1);
        }
    }

    builder(0);
}


function bestTowerBuilder(n) {
return [...Array(n)].map((_,i)=>" ".repeat(n-1-i)+"*".repeat(i*2+1)+" ".repeat(n-1-i))
}