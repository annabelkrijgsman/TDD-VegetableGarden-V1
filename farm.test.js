const {
    getYieldForPlant,
    getYieldForCrop,
    getTotalYield,
    getCostsForCrop,
    getRevenueForCrop,
    getProfitForCrop
} = require("./farm");

describe("getYieldForPlant", () => {
    const corn = {
        name: "corn",
        yield: 30,
    };

    test("Get yield for plant with no environment factors", () => {
        expect(getYieldForPlant(corn)).toBe(30);
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
            yield: 3,
        };
        const pumpkin = {
            name: "pumpkin",
            yield: 4,
        };
        const crops = [
            { crop: corn, numCrops: 5 },
            { crop: pumpkin, numCrops: 2 },
        ];
        expect(getTotalYield({ crops })).toBe(23);
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
        const input = {
            revenue: 60,
            costs: 10,
        };
        // const revenue = 60;
        // const costs = 10;
        //const conditions = [60, 10];
        expect(getProfitForCrop(input)).toBe(50);
    });
});

