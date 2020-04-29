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
        type: "iron",
        state: 1,
        progress: 0,
        found: 0
    });

    cells.push({
        type: "house Lv1",
        state: 2,
        progress: 0,
        found: 0
    });

    cells.push({
        type: "Diamond",
        state: 3,
        progress: 0,
        found: 0
    });

    return cells;
}

export default getUserData;