function getUserData2(){
    let data = {
        username: "ambushnike",
        cash: 10000,
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
        level: 1,
        amountToInvest: 0
    });

    temp.push({
        type: "material",
        id: "COS",
        cost: 9000,
        level: 12,
        amountToInvest: 0
    });

    temp.push({
        type: "estate",
        id: "HOME",
        cost: 36000,
        level: 1,
        amountToInvest: 0
    });

    temp.push({
        type: "estate",
        id: "RESO",
        cost: 375000,
        level: 102,
        amountToInvest: 0
    });

    return temp;
}

export default getUserData2;