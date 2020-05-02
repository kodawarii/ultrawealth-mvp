export default function checkImport(){
    console.log(">> Helper/Functions correctly loaded");
}

export function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

export function convertLongNum(x){
    
    if(x < 1000){
        return x;
    }

    x = x.toString();

    switch(x.length){
        case(4): // 1,000
            x = x[0] + "k";
            break;
        case(5): // 20,000
            x = x.slice(0,2) + "k";
            break;
        case(6): // 300,000
            x = x.slice(0,3) + "k";
            break;
        case(7): // 4,000,000
            x = x[0] + "m";
            break;
        case(8): // 50,000,000
            x = x.slice(0,2) + "m";
            break;
        case(9): // 600,000,000
            x = x.slice(0,3) + "m";
            break;
        case(10): // 7,000,000,000
            x = x[0] + "b";
            break;
        case(11): // 70,000,000,000
            x = x.slice(0,2) + "b";
            break;
        case(12): // 700,000,000,000
            x = x.slice(0,3) + "b";
            break;
        case(13): // 7,000,000,000,000
            x = x[0] + "T";
            break;
        default:
            x="UltraCash";
            console.log(">> Number too Large / Invalid number");
            break;
    }

    return x;
}