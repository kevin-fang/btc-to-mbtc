var elements = document.getElementsByTagName('*');

for (var i = 0; i < elements.length; i++) {
    var element = elements[i];

    for (var j = 0; j < element.childNodes.length; j++) {
        var node = element.childNodes[j];

        if (node.nodeType === 3) {
            var text = node.nodeValue;
            var btcRegexp = /((?:\d+)|(?:\.\d+|\d+\.\d+)) (?:btc|BTC)/gi
            var match = btcRegexp.exec(text)
            //console.log(match)
            var replacedText = text.replace(btcRegexp, '$1');

            if (replacedText !== text) {
            	//console.log(match[1] * 1000)
            	replacedText = text.replace(btcRegexp, (match[1] * 1000 + ' mBTC'));
                element.replaceChild(document.createTextNode(replacedText), node);
            }
        }
    }
}