var images = ['./images/placeholder_ad.jpg', './images/lone-cabin.webp', './images/ski-chalet.webp', './images/wooden-shack-woods-600w-1917229571.webp'];
var imageNum = 1;

function prevImg() {
    var element = document.getElementById('highlightImg').src;
    console.log(element);
    if (imageNum > 0) {
        var blockNum = 'block' + imageNum;
        removeBlockColor(blockNum);
        imageNum--;
        blockNum = 'block' + imageNum;
        setBlockColor(blockNum);
        document.getElementById('highlightImg').src = images[imageNum];
    }
}

function nextImg() {
    var element = document.getElementById('highlightImg').src;
    console.log('entered next image');
    if (imageNum < 3) {
        var blockNum = 'block' + imageNum;
        removeBlockColor(blockNum);
        imageNum++;
        blockNum = 'block' + imageNum;
        document.getElementById('highlightImg').src = images[imageNum];
        setBlockColor(blockNum);
    }
}


function setBlockColor(string) {
    document.getElementById(string).style.backgroundColor = "plum";

}

function removeBlockColor(string) {
    document.getElementById(string).style.backgroundColor = "rgb(175, 169, 169)";
}



function addCart() {
    var count = document.getElementById("cartCount").innerText;
    count++;
    alert('Thank you for your purchase!');
    document.getElementById('cartCount').innerText = count;
}

function changeCurrency(element) {
    var value = element.value;
    var prices = document.getElementsByClassName('price');
    if (value == 'usd') {
        for (var i = 0; i < prices.length; i++) {
            console.log('Price in euros is ' + prices[i].innerText)
            prices[i].innerText = (prices[i].innerText) * 1.11;
            console.log('New price in usd is ' + prices[i].innerText);
        }

    }
}