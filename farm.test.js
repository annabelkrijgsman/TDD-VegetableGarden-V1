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
        sun: "high",
    };
    test("Get yield for plant with environment factors", () => {
        expect(getYieldForPlant(environmentFactors, corn)).toBe(45);
    });
});

describe("getYieldForCrop", () => {
    test("Get yield for crop, simple", () => {
        const corn = {
            name: "corn",
            yield: 30,
        };
        const input = {
            crop: corn,
            numCrops: 10,
            sun: 'low',
        };
        expect(getYieldForCrop(input)).toBe(150);
    });
});

describe("getTotalYield", () => {
    test("Calculate total yield with multiple crops", () => {
        const corn = {
            name: "corn",
            yield: 30,
        };
        const pumpkin = {
            name: "pumpkin",
            yield: 60,
        };
        const crops = [
            { crop: corn, numCrops: 5, sun: 'high' },
            { crop: pumpkin, numCrops: 2, sun: 'low' },
        ];
        expect(getTotalYield({ crops })).toBe(285);
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
            yield: 30,
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
            sun: 'medium',
        };
        expect(getRevenueForCrop(input)).toBe(60);
    });
});

describe("getProfitForCrop", () => {
    test("Calculate profit for crop", () => {
        const corn = {
            name: "corn",
            yield: 30,
        };
        const input = {
            crop: corn,
            numCrops: 10,
            sun: 'high',
        };
        expect(getProfitForCrop(input)).toBe(80);
    });
});

describe("getTotalProfit", () => {
    test("Calculate total profit with multiple crops", () => {
        const corn = {
            name: "corn",
            yield: 30,
        };
        const pumpkin = {
            name: "pumpkin",
            yield: 60,
        };
        const crops = [
            { crop: corn, numCrops: 5, sun: 'high' },
            { crop: pumpkin, numCrops: 2, sun: 'low' },
        ];
        expect(getTotalProfit({ crops })).toBe(143);
    });
});