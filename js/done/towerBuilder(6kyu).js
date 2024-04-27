// https://www.codewars.com/kata/576757b1df89ecf5bd00073b/train/javascript

function towerBuilder(nFloors) {
    let floors = [];
    if (nFloors <= 0) return floors;

    function buildFloor(space, stars) {
        let floor = ' '.repeat(space) + '*'.repeat(stars) + ' '.repeat(space);
        floors.push(floor);
    }

    for (let i = 0; i < nFloors; i++) {
        let space = nFloors - i - 1;
        let stars = 2 * i + 1;
        buildFloor(space, stars);
    }

    return floors;
}


function bestTowerBuilder(n) {
return [...Array(n)].map((_,i)=>" ".repeat(n-1-i)+"*".repeat(i*2+1)+" ".repeat(n-1-i))
}