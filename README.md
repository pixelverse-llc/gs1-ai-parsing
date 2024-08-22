# gs1-ai-parsing

This sample repository illustrates how to parse a raw textual payload containing group separators into individual GS1 Application Identifiers.

When used with the [STRICH](https://strich.io) Barcode Scanning SDK, use the `symbologyIdentifier` property to determine if a barcode contains GS1 data or not. 

The actual parsing is done by [BarcodeParser](https://github.com/PeterBrockfeld/BarcodeParser) or
[GS1 DigitalLinkToolkit.js](https://github.com/gs1/GS1DigitalLinkToolkit.js), the sample demonstrates
usage of both libraries.
