const fs = require('fs').promises;
const { join } = require('path');
const path = '/files/cacauTrybeFile.json';
// ...
const writeCacauTrybeFile = async (content) => {
  try {
    const completePath = join(__dirname, path);
    await fs.writeFile(completePath, JSON.stringify(content));
  } catch (e) {
    console.error('Erro ao salvar o arquivo', e.message);
    return null;
  }
}

const updateChocolate = async (id, update) => {
  const cacauTrybe = await readCacauTrybeFile();
  const chocolateToUpdate = cacauTrybe.chocolates.find(
    (chocolate) => chocolate.id === id,
  );

  if (chocolateToUpdate) {
    cacauTrybe.chocolates = cacauTrybe.chocolates.map((chocolate) => {
        if (chocolate.id === id) return { ...chocolate, ...update };
        return chocolate;
      });
  
    await writeCacauTrybeFile(cacauTrybe);
    return { ...chocolateToUpdate, ...update };
  }

  return false;
};

const findChocolateByName = async (query) => {
    const cacauTrybe = await readCacauTrybeFile();
    return cacauTrybe.chocolates
      .filter((chocolate) => chocolate.name.toLowerCase().includes(query.toLowerCase()));
  };
  
  module.exports = {
    writeCacauTrybeFile,
    findChocolateByName,
    updateChocolate,
  };