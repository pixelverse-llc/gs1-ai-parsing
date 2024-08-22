const barcodeInput = document.getElementById('barcode');


document.getElementById('parseBarcodeParserButton').onclick = () => {

    // sample code showing how to parse a GS1 barcode using the BarcodeParser library
    const data = barcodeInput.value;
    const outputElem = document.getElementById('barcodeParserOutput');
    try {
        const answer = parseBarcode(data);
        let hri = '';
        for (let item of answer.parsedCodeItems) {
            hri += `${item.ai} (${item.dataTitle}): ${item.data}`;
            hri += '\n';
        }
        outputElem.innerText = hri;
    } catch (e) {
        outputElem.innerText = `ERR Parsing failed with error: ${e}`;
    }
};

document.getElementById('parseDLTButton').onclick = () => {

    // sample code showing how to parse a GS1 barcode using the GS1 Digital Link Toolkit library
    const data = barcodeInput.value;
    const outputElem = document.getElementById('dltOutput');
    try {
        const dlt = new GS1DigitalLinkToolkit();
        const answer = dlt.extractFromGS1elementStrings(data);
        outputElem.innerText = JSON.stringify(answer);
    } catch (e) {
        outputElem.innerText = `ERR Parsing failed with error: ${e}`;
    }
};

