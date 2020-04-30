function getUserData(){
    let data = {
        username: "vetementsmaster",
        cash: 10000,
        cellsOpen: []
    };

    data.cellsOpen = populateStartingCells();

    return data;
}

function populateStartingCells(){
    let cells = [];
    
    cells.push({
        type: "wood",
        state: 0,
        progress: 0,
        found: 0
    });
    
    cells.push({
        type: "wood",
        state: 0,
        progress: 0,
        found: 0
    });

    cells.push({
        type: "wood",
        state: 1,
        progress: 89,
        found: 5802
    });

    cells.push({
        type: "iron",
        state: 1,
        progress: 47,
        found: 432
    });

    cells.push({
        type: "Lemon",
        state: 1,
        progress: 0,
        found: 432
    });

    cells.push({
        type: "Diamond",
        state: 1,
        progress: 100,
        found: 22
    });

    cells.push({
        type: "house Lv1",
        state: 2,
        progress: 100,
        found: 800
    });

    cells.push({
        type: "Copper",
        state: 2,
        progress: 100,
        found: 2452
    });

    return cells;
}

export default getUserData;