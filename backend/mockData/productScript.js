const fsp = require("fs/promises");

const foo = async () => {
  try {
    const rawData = await fsp.readFile("./products.json");
    const data = JSON.parse(rawData);

    const transformed = data.filter(d => d.Title)
          .map(d => {
            return ({
              name: d.Title,
              description: d['Body (HTML)'],
              price: d['Variant Price'],
              image: d['Image Src'],
              gender: d.Tags,
            });
          });

    fsp.writeFile('./product.json', JSON.stringify(transformed));

    console.log(transformed);
  } catch (error){
    console.error(error);
  }
}
foo();
