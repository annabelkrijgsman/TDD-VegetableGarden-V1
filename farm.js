const getYieldForPlant = (corn) => {
    if (corn.yield === 30) {
        return corn.yield;
    }
};

const getYieldForCrop = (input) => {
    const total = input.crop.yield * input.numCrops;
    return total;
};

const getTotalYield = ({ crops }) => {

    const cornYield = crops[0].crop.yield;
    const cornNum = crops[0].numCrops;
    const totalCorn = cornYield * cornNum;

    const pumpkinYield = crops[1].crop.yield;
    const pumpkimNum = crops[1].numCrops;
    const totalPumpkin = pumpkinYield * pumpkimNum;

    return totalCorn + totalPumpkin;
};

const getCostsForCrop = (input) => {
    const totalCosts = input.numCrops * 1;
    return totalCosts;
};

module.exports = {
    getYieldForPlant,
    getYieldForCrop,
    getTotalYield,
    getCostsForCrop
};