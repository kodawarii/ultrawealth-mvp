function getUserData2(){
    let data = {
        username: "ambushnike",
        cash: 8000,
        level: 1,
        cellsOpen: [],
        items: []
    };

    data.items = getMockItems();

    return data;
}

function getMockItems(){
    let temp = [];

    temp.push({
        id: "GOLD",
        quantity: 0
    });
    
    temp.push({
        id: "WWWW",
        quantity: 500
    });

    temp.push({
        id: "OOOO",
        quantity: 20
    });

    temp.push({
        id: "TSLA",
        quantity: 1
    });

    temp.push({
        id: "C",
        quantity: 0
    });
    
    temp.push({
        id: "COS",
        quantity: 327
    });

    temp.push({
        id: "FB",
        quantity: "75m"
    });

    temp.push({
        id: "NFLX",
        quantity: "890k"
    });

    return temp;
}

export default getUserData2;