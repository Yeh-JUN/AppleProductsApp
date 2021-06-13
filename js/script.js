
const productDisplay = document.getElementById('product-display');

//////////////////phone
const phoneDisplay = document.querySelector('.iphone-display');
const phonePic = document.querySelector('.phone-pic');
const phonePrice = document.querySelector('.phone-price');
const phonePD = document.querySelector('.phone-price-display');
const btnPhone = document.getElementById('btn-phone');

btnPhone.addEventListener('click', ()=>{
    phoneDisplay.setAttribute('style' , 'display:flex');
    padDisplay.setAttribute('style' , 'display:none');
    macDisplay.setAttribute('style' , 'display:none');
});

//////////////////pad
const padDisplay = document.querySelector('.ipad-display');
const padPic = document.querySelector('.pad-pic');
const padPrice  =document.querySelector('.pad-price');
const padPD = document.querySelector('.pad-price-display');
const btnPad = document.getElementById('btn-pad');

btnPad.addEventListener('click', ()=>{
    padDisplay.setAttribute('style' , 'display:flex');
    phoneDisplay.setAttribute('style' , 'display:none');
    macDisplay.setAttribute('style' , 'display:none');
});

///////////////mac
const macDisplay = document.querySelector('.mac-display');
const macPic = document.querySelector('.mac-pic');
const macPrice  =document.querySelector('.mac-price');
const macPD = document.querySelector('.mac-price-display');
const btnMac = document.getElementById('btn-mac');

btnMac.addEventListener('click', ()=>{
    macDisplay.setAttribute('style' , 'display:flex');
    phoneDisplay.setAttribute('style' , 'display:none');
    padDisplay.setAttribute('style' , 'display:none');
});

const productList = {
    phone:{
        red: './image/iphone-red.png',
        yellow: './image/iphone-yellow.png',
        black: './image/iphone-black.png'
    },
    pad: {
        space: './image/ipad-space.png',
        silver: './image/ipad-silver.png',
        golden: './image/ipad-gold.png'
    },
    mac: {
        space: './image/mbp13touch-space.png',
        sivler: './image/mbp13touch-silver.png'
    }
}

//#region <old Object>
// const phone = {
//     red: './image/iphone-red.png',
//     yellow: './image/iphone-yellow.png',
//     black: './image/iphone-black.png'
// };
// const pad = {
//     space: './image/ipad-space.png',
//     silver: './image/ipad-silver.png',
//     golden: './image/ipad-gold.png'
// };
// const mac = {
//     space: './image/mbp13touch-space.png',
//     sivler: './image/mbp13touch-silver.png'
// };
//#endregion

// 共用事件
productDisplay.addEventListener('click' , (event)=>{  
    const productColor = event.target.id;
    const productType = event.target.dataset.type;
    const productData = productList[productType];
    const productPic = productData && productData
    [productColor];
    switch(productType){
        case 'phone':
            phonePic.setAttribute('src' , productPic);
                break;
        case 'pad':
            padPic.setAttribute('src' , productPic);
                break;
        case 'mac':
            macPic.setAttribute('src' , productPic);
                break;
        default:
                break;
        }
});

phonePrice.addEventListener('click' , (event) =>{
    const price = event.target.dataset.price;
    phonePD.textContent = `NT$ ${price}`;
},false)

padPrice.addEventListener('click' , (event) =>{
    const price = event.target.dataset.price;
    padPD.textContent = `NT$ ${price}`;
},false)

macPrice.addEventListener('click' , (event) =>{
    const price = event.target.dataset.price;
    macPD.textContent = `NT$ ${price}`;
},false)

// pad change 單一
// itemPad.addEventListener('click' , (event)=>{
//     const color=event.target.id;
//     const type=event.target.dataset.type;
//     const productType = productList[type];
//     const productData = productType[color];
//     padPic.setAttribute('src' , productData);
// },false)

// mac change 單一
// itemMac.addEventListener('click' , (event)=>{
//     const color=event.target.id;
//     const type=event.target.dataset.type;
//     const productType = productList[type];
//     const productData = productType[color];
//     macPic.setAttribute('src' , productData);
// },false)

//#region <事件共用>
// productDisplay.addEventListener('click' ,(event)=>{
//     const productColor = event.target.id
//     const productType = event.target.dataset.type;
//     const productData = productList[productType];
//     // 防呆機制
//     const productPic = productData && productData[productColor];
//     switch(productType){
//         case 'phone':
//             if (productPic){
//                 phonePic.setAttribute('src' , productPic);
//             }
//             break;
//         case 'pad':
//             if (productPic){
//                 phonePic.setAttribute('src' , productPic);
//             }
//             break;
//         case 'mac':
//             if (productPic){
//                 phonePic.setAttribute('src' , productPic);
//             }
//             break;
//         default:
//             break;
//     }
// })
//#endregion