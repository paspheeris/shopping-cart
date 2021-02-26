const fsp = require("fs/promises");

const foo = async () => {
  try {
    const rawData = await fsp.readFile("./products.json");
    const data = JSON.parse(rawData);

    const productHandleNameDict = {};
    const transformed = data
          .filter(d => {
            if(d.Title) {
              productHandleNameDict[d.Handle] = d.Title;
            }
            return !d.Title;
          })
          .map(d => {
            return ({
              productName: productHandleNameDict[d.Handle],
              variantName: d['Option1 Value'],
              quantity: d['Variant Inventory Qty'],
            });
          });

    fsp.writeFile('./product_variant.json', JSON.stringify(transformed));

    console.log(transformed);
  } catch (error){
    console.error(error);
  }
}
foo();
