(this.webpackJsonpwealth=this.webpackJsonpwealth||[]).push([[0],[,,,,,,,,,,,,function(e,t,a){},,,,,,,,,,,,,function(e,t,a){e.exports=a(51)},,,,,function(e,t,a){},,function(e,t,a){},function(e,t,a){},,,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),s=a.n(n),r=a(21),i=a.n(r),l=(a(30),a(16)),c=a.n(l),o=a(22),u=a(1),d=a(2),m=a(4),p=a(3),h=(a(32),a(15)),v=a(9),E=(a(33),a(13));a(39);var b=function(){return s.a.createElement("div",{className:"TitleNav"},s.a.createElement("div",{className:"wrapper"},s.a.createElement("div",{className:"col Padding"},s.a.createElement("div",null)),s.a.createElement("div",{className:"col Title"},s.a.createElement(E.HashLink,{to:"/"},s.a.createElement("div",null," U L T R A  W E A L T H "))),s.a.createElement("div",{className:"col MenuBtn"},s.a.createElement("div",{className:"hamburger"}," \u2630 "))))};a(40);var f=function(e){Object(m.a)(a,e);var t=Object(p.a)(a);function a(){return Object(u.a)(this,a),t.apply(this,arguments)}return Object(d.a)(a,[{key:"render",value:function(){return s.a.createElement("div",{className:"DataDisplay"},s.a.createElement("div",{className:"DataDisplay-1Data"},s.a.createElement("ul",{className:"DataDisplay-1Data-ul"},s.a.createElement("li",{className:"cash"},s.a.createElement("div",{className:"DataDisplay-Header"},"Cash"),s.a.createElement("div",{className:"DataDisplay-Figure"},"$",this.props.cash.toString().replace(/\B(?=(\d{3})+(?!\d))/g,",")),s.a.createElement("div",{className:"DataDisplay-Figure"},"$",function(e){if(e<1e3)return e;switch((e=e.toString()).length){case 4:e=e[0]+"k";break;case 5:e=e.slice(0,2)+"k";break;case 6:e=e.slice(0,3)+"k";break;case 7:e=e[0]+"m";break;case 8:e=e.slice(0,2)+"m";break;case 9:e=e.slice(0,3)+"m";break;case 10:e=e[0]+"b";break;case 11:e=e.slice(0,2)+"b";break;case 12:e=e.slice(0,3)+"b";break;case 13:e=e[0]+"T";break;default:e="UltraCash",console.log(">> Number too Large / Invalid number")}return e}(this.props.cash)),s.a.createElement("div",{className:"DataDisplay-Figure2"}," +$500 (+5.04%) ")))),s.a.createElement("div",{className:"DataDisplay-2Buttons"},s.a.createElement("ul",{className:"DataDisplay-2Buttons-ul"},s.a.createElement("li",null,s.a.createElement(E.HashLink,{to:"/inventory"},s.a.createElement("button",{className:"DataDisplay-btn"}," Inventory "))),s.a.createElement("li",null,s.a.createElement("button",{className:"DataDisplay-btn"}," Equips ")),s.a.createElement("li",null,s.a.createElement("button",{className:"DataDisplay-btn"}," Assets ")),s.a.createElement("li",null,s.a.createElement("button",{className:"DataDisplay-btn"}," SHOP ")))))}}]),a}(n.Component),C=(a(41),a(12),function(e){Object(m.a)(a,e);var t=Object(p.a)(a);function a(){return Object(u.a)(this,a),t.apply(this,arguments)}return Object(d.a)(a,[{key:"start",value:function(){this.props.start(this.props.index,this.props.data.amountInvested)}},{key:"render",value:function(){return s.a.createElement("div",{className:"CellState0"},s.a.createElement("div",{className:"CellState0-Type"}," ",this.props.data.type," "),s.a.createElement("div",{className:"CellState0-Btn"},s.a.createElement("button",{className:"StartBtn",onClick:this.start.bind(this)},"START")))}}]),a}(n.Component)),N=function(e){Object(m.a)(a,e);var t=Object(p.a)(a);function a(){return Object(u.a)(this,a),t.apply(this,arguments)}return Object(d.a)(a,[{key:"render",value:function(){return s.a.createElement("div",{className:"CellState1"},s.a.createElement("div",{className:"CellState1-Type"}," ",this.props.data.type," "),s.a.createElement("div",{className:"CellState1-Status"},s.a.createElement("div",{className:"progressCircle-Outer-Animation"},s.a.createElement("div",{className:"progressCircle"},s.a.createElement("div",{className:"CellState1-progressText"}," ",this.props.data.progress,"% ")))),s.a.createElement("div",{className:"CellState1-Info"},s.a.createElement("div",{className:"CellState1-foundText"},s.a.createElement("span",{className:"CellState1-foundText1"}," FOUND "),s.a.createElement("span",{className:"CellState1-foundText2"}," ",this.props.data.found," "))))}}]),a}(n.Component),O=function(e){Object(m.a)(a,e);var t=Object(p.a)(a);function a(){return Object(u.a)(this,a),t.apply(this,arguments)}return Object(d.a)(a,[{key:"collectItems",value:function(){this.props.collectItems(this.props.index,this.props.data.type,this.props.data.found)}},{key:"render",value:function(){return s.a.createElement("div",{className:"CellState2"},s.a.createElement("div",{className:"CellState2-Type"}," ",this.props.data.type," "),s.a.createElement("div",{className:"CellState2-Status"},s.a.createElement("div",{className:"progressCircle2"},s.a.createElement("div",{className:"CellState2-progressText"}," ",this.props.data.progress,"% "))),s.a.createElement("div",{className:"CellState2-Info"},s.a.createElement("div",{className:"CellState2-collectText",onClick:this.collectItems.bind(this)},s.a.createElement("span",{className:"CellState2-collectText1"}," COLLECT "),s.a.createElement("span",{className:"CellState2-collectText2"}," ",this.props.data.found," "))))}}]),a}(n.Component),y=function(e){Object(m.a)(a,e);var t=Object(p.a)(a);function a(){return Object(u.a)(this,a),t.apply(this,arguments)}return Object(d.a)(a,[{key:"render",value:function(){return s.a.createElement("div",{className:"CellState3"},s.a.createElement("div",{className:"CellState3-Type"}," ",this.props.data.type," "),s.a.createElement("div",{className:"CellState3-Warning"}," Axe must be equipped / More Gold is required "))}}]),a}(n.Component),T=function(e){Object(m.a)(a,e);var t=Object(p.a)(a);function a(){return Object(u.a)(this,a),t.apply(this,arguments)}return Object(d.a)(a,[{key:"render",value:function(){var e;switch(this.props.data.state){case 0:e=s.a.createElement(C,{data:this.props.data,index:this.props.index,start:this.props.start});break;case 1:e=s.a.createElement(N,{data:this.props.data});break;case 2:e=s.a.createElement(O,{data:this.props.data,index:this.props.index,collectItems:this.props.collectItems});break;case 3:e=s.a.createElement(y,{data:this.props.data});break;default:console.log("> That State does not exist")}return s.a.createElement("div",{className:"Cell"},e)}}]),a}(n.Component),k=(a(42),function(e){Object(m.a)(a,e);var t=Object(p.a)(a);function a(){return Object(u.a)(this,a),t.apply(this,arguments)}return Object(d.a)(a,[{key:"render",value:function(){return s.a.createElement("div",{className:"AddCell"},s.a.createElement("div",{className:"AddCellWrapper"},s.a.createElement("div",{className:"thePlus",onClick:this.props.openAddMenu}," + ")))}}]),a}(n.Component)),M=function(e){Object(m.a)(a,e);var t=Object(p.a)(a);function a(){return Object(u.a)(this,a),t.apply(this,arguments)}return Object(d.a)(a,[{key:"getCells",value:function(){var e=this;return this.props.cellsOpen.map((function(t,a){return s.a.createElement(T,{data:t,key:a,index:a,start:e.props.start,collectItems:e.props.collectItems})}))}},{key:"render",value:function(){return s.a.createElement("div",{className:"MineGrid"},s.a.createElement("div",{className:"MineGrid-wrapper field"},this.getCells(),s.a.createElement("div",null," ",s.a.createElement(k,{openAddMenu:this.props.openAddMenu})," ")))}}]),a}(n.Component),j=(a(43),a(44),a(45),function(e){Object(m.a)(a,e);var t=Object(p.a)(a);function a(e){var n;return Object(u.a)(this,a),(n=t.call(this,e)).state={},n}return Object(d.a)(a,[{key:"addCell",value:function(e){this.props.addCell(e)}},{key:"selectAsset",value:function(){this.props.openEnrichMenu(),this.props.addToCart(this.props.data)}},{key:"render",value:function(){var e,t="asset-row";return void 0!==this.props.data&&("material"===(e=this.props.data).type&&(t+=" asset-row-material"),"estate"===e.type&&(t+=" asset-row-estate")),s.a.createElement("div",{className:t},s.a.createElement("div",{className:"DATA_LEVEL asset-font"},e.level),s.a.createElement("div",{className:"DATA_ID asset-font"},e.id),s.a.createElement("div",{className:"DATA_COST asset-font number"},"$",e.cost),s.a.createElement("div",{className:"SELECT_BUTTON asset-font"},s.a.createElement("button",{onClick:this.selectAsset.bind(this)}," Select ")," "))}}]),a}(n.Component)),A=function(e){Object(m.a)(a,e);var t=Object(p.a)(a);function a(){return Object(u.a)(this,a),t.apply(this,arguments)}return Object(d.a)(a,[{key:"getAssets",value:function(){var e=this;return this.props.assets.map((function(t,a){return s.a.createElement(j,{data:t,key:a,index:a,openEnrichMenu:e.props.openEnrichMenu,addToCart:e.props.addToCart})}))}},{key:"render",value:function(){var e;return void 0!==this.props.assets&&(e=this.getAssets()),s.a.createElement("div",null,s.a.createElement("div",{className:"tab"},s.a.createElement("div",{className:"skill"},this.props.type),s.a.createElement("div",{className:"dropdownArrow"},"\u25be")),s.a.createElement("div",{className:"assetList"},s.a.createElement("div",{className:"assetListHeader"},s.a.createElement("div",{className:"asset-row-header"},"LEVEL"),s.a.createElement("div",{className:"asset-row-header"},"ASSET"),s.a.createElement("div",{className:"asset-row-header"},"COST"),s.a.createElement("div",{className:"asset-row-header"}," ")),s.a.createElement("div",null,e)))}}]),a}(n.Component),S=function(e){Object(m.a)(a,e);var t=Object(p.a)(a);function a(e){var n;return Object(u.a)(this,a),(n=t.call(this,e)).state={},n}return Object(d.a)(a,[{key:"render",value:function(){for(var e=this.props.userdata.assets,t=[],a=[],n=0;n<e.length;n++)switch(e[n].type){case"material":t.push(e[n]);break;case"estate":a.push(e[n]);break;default:console.log(">> That Asset Type does not exist")}return s.a.createElement("div",{className:"AddMenu"},s.a.createElement("div",{className:"AddMenu-top"},s.a.createElement("div",{className:"title"},"My Assets"),s.a.createElement("div",{className:"exit",onClick:this.props.exitAddMenu},"\u2715")),s.a.createElement("div",{className:"AddMenu-mid"},s.a.createElement("div",{className:"mid-table"},s.a.createElement("div",null," Current Cash "),s.a.createElement("div",{className:"number"}," $",this.props.userdata.cash," "))),s.a.createElement("div",{className:"AddMenu-bot"},s.a.createElement(A,{type:"History",addCell:this.props.addCell}),s.a.createElement(A,{type:"Material Skills",assets:t,openEnrichMenu:this.props.openEnrichMenu,addToCart:this.props.addToCart}),s.a.createElement(A,{type:"Estate Skills",assets:a,openEnrichMenu:this.props.openEnrichMenu,addToCart:this.props.addToCart})))}}]),a}(n.Component),I=(a(46),function(e){Object(m.a)(a,e);var t=Object(p.a)(a);function a(e){var n;return Object(u.a)(this,a),(n=t.call(this,e)).state={amountToInvest:0},n}return Object(d.a)(a,[{key:"addCell",value:function(){var e=this.props.dataList[0];e.amountToInvest=this.state.amountToInvest,this.props.addCell(e)}},{key:"plusInvest",value:function(){var e=this.state.amountToInvest;e+=1e3,this.setState({amountToInvest:e})}},{key:"minusInvest",value:function(){var e=this.state.amountToInvest;e-=1e3,this.setState({amountToInvest:e})}},{key:"removeFromCartBACK",value:function(){this.props.openAddMenu(),this.props.removeFromCart()}},{key:"removeFromCartEXIT",value:function(){this.props.exitEnrichMenu(),this.props.removeFromCart()}},{key:"render",value:function(){var e,t,a={type:"DEFAULT",id:"DEFAULT",cost:"DEFAULT",level:"DEFAULT",amountToInvest:"DEFAULT"};return this.props.dataList.length>0&&(a=this.props.dataList[0]),t=this.state.amountToInvest<=100,e=this.state.amountToInvest>=this.props.userdata.cash,s.a.createElement("div",{className:"EnrichMenu"},s.a.createElement("div",{className:"EnrichMenu-Top"},s.a.createElement("div",{onClick:this.removeFromCartBACK.bind(this)}," Back "),s.a.createElement("div",null," Adding Asset "),s.a.createElement("div",{onClick:this.removeFromCartEXIT.bind(this)},"\u2715")),s.a.createElement("div",{className:"EnrichMenu-Mid"},s.a.createElement("div",{className:"EnrichMenu-Mid-currentCash"},s.a.createElement("div",null," Current Cash "),s.a.createElement("div",null," $",this.props.userdata.cash," ")),s.a.createElement("div",{className:"EnrichMenu-Mid-assetDetails"},s.a.createElement("div",null," ",a.id," "),s.a.createElement("div",null," Cost to Add: ($",a.cost,") "),s.a.createElement("div",{className:"dummyBox"}," XXX ")),s.a.createElement("div",{className:"EnrichMenu-Mid-investAmount"},s.a.createElement("div",null," Amount to Invest: "),s.a.createElement("div",null,s.a.createElement("button",{onClick:this.minusInvest.bind(this),disabled:t},"-"),"\xa0",this.state.amountToInvest,"\xa0",s.a.createElement("button",{onClick:this.plusInvest.bind(this),disabled:e},"+"))),s.a.createElement("div",{className:"EnrichMenu-Mid-AddBtn"},s.a.createElement("button",{onClick:this.addCell.bind(this)}," Add "))))}}]),a}(n.Component)),D=function(e){Object(m.a)(a,e);var t=Object(p.a)(a);function a(e){var n;return Object(u.a)(this,a),(n=t.call(this,e)).state={cart:[],isAddMenuOpen:!1,isEnrichMenuOpen:!1},n}return Object(d.a)(a,[{key:"removeFromCart",value:function(){this.setState({cart:[]})}},{key:"addToCart",value:function(e){var t=[];t.push(e),this.setState({cart:t})}},{key:"openEnrichMenu",value:function(){this.setState({isEnrichMenuOpen:!0}),this.setState({isAddMenuOpen:!1})}},{key:"exitEnrichMenu",value:function(){this.setState({isEnrichMenuOpen:!1}),this.setState({isAddMenuOpen:!1})}},{key:"openAddMenu",value:function(){this.setState({isAddMenuOpen:!0}),this.setState({isEnrichMenuOpen:!1})}},{key:"exitAddMenu",value:function(){this.setState({isAddMenuOpen:!1}),this.setState({isEnrichMenuOpen:!1})}},{key:"render",value:function(){var e="MainComponents ",t="HideAddMenuComponent ",a="HideEnrichMenuComponent ";return this.state.isAddMenuOpen?(a="HideEnrichMenuComponent ",e="HideMainComponents ",t="AddMenuComponent "):this.state.isEnrichMenuOpen?(e="HideMainComponents ",t="HideAddMenuComponent ",a="EnrichMenuComponent "):(t="HideAddMenuComponent ",a="HideEnrichMenuComponent ",e="MainComponents "),s.a.createElement("div",{className:"Main"},s.a.createElement("div",{className:"TitleNavComponent "},s.a.createElement(b,null)),s.a.createElement("div",{className:e},s.a.createElement(f,{cash:this.props.userdata.cash}),s.a.createElement(M,{cellsOpen:this.props.userdata.cellsOpen,start:this.props.start,collectItems:this.props.collectItems,openAddMenu:this.openAddMenu.bind(this)})),s.a.createElement("div",{className:t},s.a.createElement(S,{userdata:this.props.userdata,exitAddMenu:this.exitAddMenu.bind(this),openEnrichMenu:this.openEnrichMenu.bind(this),addToCart:this.addToCart.bind(this)})),s.a.createElement("div",{className:a},s.a.createElement(I,{userdata:this.props.userdata,exitEnrichMenu:this.exitEnrichMenu.bind(this),openAddMenu:this.openAddMenu.bind(this),removeFromCart:this.removeFromCart.bind(this),dataList:this.state.cart,addCell:this.props.addCell})))}}]),a}(n.Component);a(47);function g(){return s.a.createElement("div",{className:"BannerTitle"},s.a.createElement("ul",{className:"BannerTitle-ul"},s.a.createElement("li",{className:"BannerTitle-letter"},"I"),s.a.createElement("li",{className:"BannerTitle-letter"},"N"),s.a.createElement("li",{className:"BannerTitle-letter"},"V"),s.a.createElement("li",{className:"BannerTitle-letter"},"E"),s.a.createElement("li",{className:"BannerTitle-letter"},"N"),s.a.createElement("li",{className:"BannerTitle-letter"},"T"),s.a.createElement("li",{className:"BannerTitle-letter"},"O"),s.a.createElement("li",{className:"BannerTitle-letter"},"R"),s.a.createElement("li",{className:"BannerTitle-letter"},"Y")))}a(48);var x=function(e){Object(m.a)(a,e);var t=Object(p.a)(a);function a(){return Object(u.a)(this,a),t.apply(this,arguments)}return Object(d.a)(a,[{key:"render",value:function(){return s.a.createElement("div",{className:"Cash"},"Cash $",this.props.userdata.cash)}}]),a}(n.Component),w=(a(49),a(50),function(e){Object(m.a)(a,e);var t=Object(p.a)(a);function a(){return Object(u.a)(this,a),t.apply(this,arguments)}return Object(d.a)(a,[{key:"render",value:function(){return s.a.createElement("div",{className:"Tile"},s.a.createElement("div",{className:"item-name"}," ",this.props.tileData.id," "),s.a.createElement("div",{className:"item-amount"}," ",this.props.tileData.quantity," "))}}]),a}(n.Component)),L=function(e){Object(m.a)(a,e);var t=Object(p.a)(a);function a(){return Object(u.a)(this,a),t.apply(this,arguments)}return Object(d.a)(a,[{key:"getTiles",value:function(){return this.props.userdata.items.map((function(e,t){return s.a.createElement(w,{tileData:e,key:t,index:t})}))}},{key:"render",value:function(){return s.a.createElement("div",{className:"TileGrid"},s.a.createElement("div",{className:"TileGridTitle"}," Items  | Total ",this.props.userdata.items.length),this.getTiles())}}]),a}(n.Component),B=function(e){Object(m.a)(a,e);var t=Object(p.a)(a);function a(){return Object(u.a)(this,a),t.apply(this,arguments)}return Object(d.a)(a,[{key:"render",value:function(){return s.a.createElement("div",{className:"Inventory"},s.a.createElement(b,{page:"Inventory"}),s.a.createElement(g,null),s.a.createElement(x,{userdata:this.props.userdata}),s.a.createElement(L,{userdata:this.props.userdata}))}}]),a}(n.Component);var F=function(){var e={username:"ambushnike",cash:1e4,level:1,cellsOpen:[],items:[],assets:[]};return e.items=function(){var e=[];return e.push({id:"GOLD",quantity:0}),e.push({id:"WWWW",quantity:500}),e.push({id:"OOOO",quantity:20}),e.push({id:"TSLA",quantity:1}),e.push({id:"C",quantity:0}),e.push({id:"COS",quantity:327}),e.push({id:"FB",quantity:"75m"}),e.push({id:"NFLX",quantity:"890k"}),e}(),e.assets=function(){var e=[];return e.push({type:"material",id:"GOLD",cost:200,level:1,amountToInvest:0}),e.push({type:"material",id:"COS",cost:9e3,level:12,amountToInvest:0}),e.push({type:"estate",id:"HOME",cost:36e3,level:1,amountToInvest:0}),e.push({type:"estate",id:"RESO",cost:375e3,level:102,amountToInvest:0}),e}(),e},H=function(e){Object(m.a)(a,e);var t=Object(p.a)(a);function a(e){var n;return Object(u.a)(this,a),(n=t.call(this,e)).state={userdata:F()},n}return Object(d.a)(a,[{key:"start",value:function(){var e=Object(o.a)(c.a.mark((function e(t,a){var n,s,r;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:(n=this.state.userdata).cash-=a,n.cellsOpen[t].state=1,s=function(e){return new Promise((function(t){return setTimeout(t,e)}))},r=0;case 5:if(!(r<=100)){e.next=15;break}if(0===r){e.next=9;break}return e.next=9,s(10);case 9:n.cellsOpen[t].progress=r,n.cellsOpen[t].found=8*r,this.setState({userdata:n});case 12:r++,e.next=5;break;case 15:n.cellsOpen[t].state=2,this.setState({userdata:n});case 17:case"end":return e.stop()}}),e,this)})));return function(t,a){return e.apply(this,arguments)}}()},{key:"addCell",value:function(e){var t=this.state.userdata;t.cellsOpen.push({type:e.id,state:0,progress:0,found:0,amountInvested:e.amountToInvest}),t.cash-=e.cost,this.setState({userdata:t})}},{key:"collectItems",value:function(e,t,a){for(var n=this.state.userdata,s=n.items,r=0;r<s.length;r++)s[r].id===t&&(s[r].quantity+=a);n.cellsOpen[e].state=0,this.setState({userdata:n})}},{key:"render",value:function(){var e=this;return s.a.createElement("div",{className:"App"},s.a.createElement(h.HashRouter,null,s.a.createElement(v.g,null,s.a.createElement(v.d,{exact:!0,path:"/",component:function(){return s.a.createElement(D,{userdata:e.state.userdata,start:e.start.bind(e),collectItems:e.collectItems.bind(e),addCell:e.addCell.bind(e)})}}),s.a.createElement(v.d,{exact:!0,path:"/inventory",component:function(){return s.a.createElement(B,{userdata:e.state.userdata})}}))))}}]),a}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(s.a.createElement(s.a.StrictMode,null,s.a.createElement(H,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[25,1,2]]]);
//# sourceMappingURL=main.1013ca56.chunk.js.map