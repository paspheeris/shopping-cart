const fsp = require("fs/promises");

const foo = async () => {
  try {
    const rawData = await fsp.readFile("./products.json");
    const data = JSON.parse(rawData);

    const seenVariants = {};
    const transformed = data.filter(d => !d.Title)
          .reduce((accum, d) => {
            const variantName = d['Option1 Value'];
            if(!seenVariants[variantName]) {
              accum.push({
                name: variantName,
              });
            }
            seenVariants[variantName] = true;
            return accum;
          }, []);

    fsp.writeFile('./variant.json', JSON.stringify(transformed));

    console.log(transformed);
  } catch (error){
    console.error(error);
  }
}
foo();
