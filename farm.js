const getYieldForPlant = (environmentFactors, corn) => {
    if (environmentFactors.sun === 'low') {
        return corn.yield - 50;
    } else if (environmentFactors.sun === 'medium') {
        return corn.yield;
    } else if (environmentFactors.sun === 'high') {
        return corn.yield + 50;
    }
};

const getYieldForCrop = (input) => input.crop.yield * input.numCrops;

const getTotalYield = ({ crops }) => {
    const totalYieldCorn = crops[0].crop.yield + 50;
    const totalCorn = totalYieldCorn * crops[0].numCrops;

    const totalYieldPumpin = crops[1].crop.yield - 50;
    const totalPumpin = totalYieldPumpin * crops[1].numCrops;

    return totalCorn + totalPumpin;
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