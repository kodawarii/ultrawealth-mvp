function getUserData2(){
    let data = {
        username: "ambushnike",
        cash: 8000000000000,
        level: 1,
        cellsOpen: [],
        items: [],
        assets: []
    };

    data.items = getMockItems();
    data.assets = getMockAssets();

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

function getMockAssets(){
    let temp = [];

    temp.push({
        type: "material",
        id: "GOLD",
        cost: 200,
        level: 1
    });

    temp.push({
        type: "material",
        id: "POW",
        cost: 2000,
        level: 12
    });

    temp.push({
        type: "estate",
        id: "HOME",
        cost: 20000,
        level: 1
    });

    temp.push({
        type: "estate",
        id: "RESO",
        cost: "800m",
        level: 102
    });

    return temp;
}

export default getUserData2;