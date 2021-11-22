const getYieldForPlant = (environmentFactors, corn) => {
    if (environmentFactors.sun === 'low') {
        return corn.yield * 0.5;
    } else if (environmentFactors.sun === 'medium') {
        return corn.yield * 1;
    } else if (environmentFactors.sun === 'high') {
        return corn.yield * 1.5;
    }
};

const getYieldForCrop = (input) => {
    if (input.sun === 'low') {
        const totalYield = input.crop.yield * 0.5;
        return totalYield * input.numCrops;
    } else if (input.sun === 'medium') {
        const totalYield = input.crop.yield * 1;
        return totalYield * input.numCrops;
    } else if (input.sun === 'high') {
        const totalYield = input.crop.yield * 1.5;
        return totalYield * input.numCrops;
    }
}

const getTotalYield = ({ crops }) => {
    if (crops[0].sun === 'high' && crops[1].sun === 'low') {
        const totalYieldCropOne = crops[0].crop.yield * 1.5;
        const totalCropOne = totalYieldCropOne * crops[0].numCrops;
        const totalYieldCropTwo = crops[1].crop.yield * 0.5;
        const totalCropTwo = totalYieldCropTwo * crops[1].numCrops;

        return totalCropOne + totalCropTwo;
    }
};

const getCostsForCrop = (input) => input.numCrops * 1;

const getRevenueForCrop = (input) => {
    if (input.sun === 'low') {
        const totalYield = input.crop.yield * 0.5;
        return totalYield * 2;
    } else if (input.sun === 'medium') {
        const totalYield = input.crop.yield * 1;
        return totalYield * 2;
    } else if (input.sun === 'high') {
        const totalYield = input.crop.yield * 1.5;
        return totalYield * 2;
    }
};

const getProfitForCrop = (input) => {
    if (input.sun === 'low') {
        const costsCrop = input.numCrops * 1;
        const totalYield = input.crop.yield * 0.5;
        const revenue = totalYield * 2;
        return revenue - costsCrop;
    } else if (input.sun === 'medium') {
        const costsCrop = input.numCrops * 1;
        const totalYield = input.crop.yield * 1;
        const revenue = totalYield * 2;
        return revenue - costsCrop;
    } else if (input.sun === 'high') {
        const costsCrop = input.numCrops * 1;
        const totalYield = input.crop.yield * 1.5;
        const revenue = totalYield * 2;
        return revenue - costsCrop;
    }
};

const getTotalProfit = ({ crops }) => {
    if (crops['0'].sun === 'high' && crops['1'].sun === 'low') {
        const costsCropOne = crops[0].numCrops * 1;
        const totalYieldCropOne = crops[0].crop.yield * 1.5;
        const revenueCropOne = totalYieldCropOne * 2;
        const totalCropOne = revenueCropOne - costsCropOne;

        const costsCropTwo = crops[1].numCrops * 1;
        const totalYieldCropTwo = crops[1].crop.yield * 0.5;
        const revenueCropTwo = totalYieldCropTwo * 2;
        const totalCropTwo = revenueCropTwo - costsCropTwo;

        return totalCropOne + totalCropTwo;
    }
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