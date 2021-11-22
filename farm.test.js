const {
    getYieldForPlant,
    getYieldForCrop,
    getTotalYield,
    getCostsForCrop,
    getRevenueForCrop,
    getProfitForCrop,
    getTotalProfit
} = require("./farm");

describe("getYieldForPlant", () => {
    const corn = {
        name: "corn",
        yield: 30,
        factor: {
            sun: {
                low: -50,
                medium: 0,
                high: 50,
            },
        },
    };

    const environmentFactors = {
        sun: "low",
    };
    test("Get yield for plant with environment factors", () => {
        expect(getYieldForPlant(environmentFactors, corn)).toBe(-20);
    });
});

describe("getYieldForCrop", () => {
    test("Get yield for crop, simple", () => {
        const corn = {
            name: "corn",
            yield: 3,
        };
        const input = {
            crop: corn,
            numCrops: 10,
        };
        expect(getYieldForCrop(input)).toBe(30);
    });
});

describe("getTotalYield", () => {
    test("Calculate total yield with multiple crops", () => {
        const corn = {
            name: "corn",
            yield: 30,
            factor: {
                sun: {
                    low: -50,
                    medium: 0,
                    high: 50,
                },
            },
        };
        const pumpkin = {
            name: "pumpkin",
            yield: 60,
            factor: {
                sun: {
                    low: -50,
                    medium: 0,
                    high: 50,
                },
            },
        };
        const crops = [
            { crop: corn, numCrops: 5, sun: 'high' },
            { crop: pumpkin, numCrops: 2, sun: 'low' },
        ];
        expect(getTotalYield({ crops })).toBe(420);
    });

    // test("Calculate total yield with 0 amount", () => {
    //     const corn = {
    //         name: "corn",
    //         yield: 3,
    //     };
    //     const crops = [{ crop: corn, numCrops: 0 }];
    //     expect(getTotalYield({ crops })).toBe(0);
    // });
});

describe("getCostsForCrop", () => {
    test("Calculate costs for crop", () => {
        const corn = {
            name: "corn",
            yield: 3,
        };
        const input = {
            crop: corn,
            numCrops: 10,
        };
        expect(getCostsForCrop(input)).toBe(10);
    });
});

describe("getRevenueForCrop", () => {
    test("Calculate revenue for crop", () => {
        const corn = {
            name: "corn",
            yield: 30,
        };
        const input = {
            crop: corn,
            numCrops: 10,
        };
        expect(getRevenueForCrop(input)).toBe(60);
    });
});

describe("getProfitForCrop", () => {
    test("Calculate profit for crop", () => {
        const corn = {
            revenue: 60,
            costs: 10,
        };
        expect(getProfitForCrop(corn)).toBe(50);
    });
});

describe("getTotalProfit", () => {
    test("Calculate total profit with multiple crops", () => {
        const crops = [
            { revenue: 60, costs: 10 },
            { revenue: 90, costs: 30 },
        ];
        expect(getTotalProfit({ crops })).toBe(110);
    });
});