const getYieldForPlant = (environmentFactors, corn) => {
    if (environmentFactors.sun === 'low') {
        return corn.yield + corn.factor.sun.low;
    } else if (environmentFactors.sun === 'medium') {
        return corn.yield;
    } else if (environmentFactors.sun === 'high') {
        return corn.yield + corn.factor.sun.high;
    }
};

const getYieldForCrop = (input) => input.crop.yield * input.numCrops;

const getTotalYield = ({ crops }) => {
    if (crops[0].sun === 'high' && crops[1].sun === 'low') {
        const totalYieldCropOne = crops[0].crop.yield + crops[0].crop.factor.sun.high;
        const totalCropOne = totalYieldCropOne * crops[0].numCrops
        const totalYieldCropTwo = crops[1].crop.yield + crops[1].crop.factor.sun.low;
        const totalCropTwo = totalYieldCropTwo * crops[1].numCrops

        return totalCropOne + totalCropTwo;
    }
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