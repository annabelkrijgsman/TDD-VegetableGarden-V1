const getYieldForPlant = (environmentFactors, corn) => {
    if (environmentFactors.sun === 'low') {
        return corn.yield + corn.factor.sun.low;
    } else if (environmentFactors.sun === 'medium') {
        return corn.yield + corn.factor.sun.medium;
    } else if (environmentFactors.sun === 'high') {
        return corn.yield + corn.factor.sun.high;
    }
};

const getYieldForCrop = (input) => {
    if (input.sun === 'low') {
        const totalYield = input.crop.yield + input.crop.factor.sun.low;
        return totalYield * input.numCrops
    } else if (input.sun === 'medium') {
        const totalYield = input.crop.yield + input.crop.factor.sun.medium;
        return totalYield * input.numCrops;
    } else if (input.sun === 'high') {
        const totalYield = input.crop.yield + input.crop.factor.sun.high;
        return totalYield * input.numCrops
    }
}

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

const getRevenueForCrop = (input) => {
    if (input.sun === 'low') {
        const totalYield = input.crop.yield + input.crop.factor.sun.low;
        return totalYield * 2;
    } else if (input.sun === 'medium') {
        const totalYield = input.crop.yield + input.crop.factor.sun.medium;
        return totalYield * 2;
    } else if (input.sun === 'high') {
        const totalYield = input.crop.yield + input.crop.factor.sun.high;
        return totalYield * 2;
    }
};

const getProfitForCrop = (input) => {
    if (input.sun === 'low') {
        const costsCrop = input.numCrops * 1;
        const totalYield = input.crop.yield + input.crop.factor.sun.low;
        const revenue = totalYield * 2;
        return revenue - costsCrop;
    } else if (input.sun === 'medium') {
        const costsCrop = input.numCrops * 1;
        const totalYield = input.crop.yield + input.crop.factor.sun.medium;
        const revenue = totalYield * 2;
        return revenue - costsCrop;
    } else if (input.sun === 'high') {
        const costsCrop = input.numCrops * 1;
        const totalYield = input.crop.yield + input.crop.factor.sun.high;
        const revenue = totalYield * 2;
        return revenue - costsCrop;
    }
};


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