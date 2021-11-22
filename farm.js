const { cond } = require("lodash");

const getYieldForPlant = (corn) => corn.yield;

const getYieldForCrop = (input) => input.crop.yield * input.numCrops;

const getTotalYield = ({ crops }) => {
    const totalCorn = crops[0].crop.yield * crops[0].numCrops;
    const totalPumpkin = crops[1].crop.yield * crops[1].numCrops;

    return totalCorn + totalPumpkin;
};

const getCostsForCrop = (input) => input.numCrops * 1;

const getRevenueForCrop = (input) => input.crop.yield * 2;

const getProfitForCrop = (input) => input.revenue - input.costs;

module.exports = {
    getYieldForPlant,
    getYieldForCrop,
    getTotalYield,
    getCostsForCrop,
    getRevenueForCrop,
    getProfitForCrop
};