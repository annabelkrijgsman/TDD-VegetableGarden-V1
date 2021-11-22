const getYieldForPlant = (corn) => corn.yield;

const getYieldForCrop = (input) => input.crop.yield * input.numCrops;

const getTotalYield = ({ crops }) => {
    const totalCorn = crops[0].crop.yield * crops[0].numCrops;
    const totalPumpkin = crops[1].crop.yield * crops[1].numCrops;

    return totalCorn + totalPumpkin;
};

const getCostsForCrop = (input) => input.numCrops * 1;

const getRevenueForCrop = (input) => input.crop.yield * 2;

const getProfitForCrop = (corn) => corn.revenue - corn.costs;

const getTotalProfit = ({ crops }) => {
    const totalCorn = crops[0].revenue - crops[0].costs;
    const totalPumpkin = crops[1].revenue - crops[1].costs;

    return totalCorn + totalPumpkin;
};

module.exports = {
    getYieldForPlant,
    getYieldForCrop,
    getTotalYield,
    getCostsForCrop,
    getRevenueForCrop,
    getProfitForCrop,
    getTotalProfit
};