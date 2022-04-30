const ExplorerService = require("./../../lib/services/ExplorerService");

describe("Tests para ExplorerService", () => {
    test("Requerimiento 1: Calcular todos los explorers en una misión", () => {
        const explorers = [{mission: "node"}];
        const explorersInNode = ExplorerService.filterByMission(explorers, "node");
        expect(explorersInNode.length).toBe(1);
    });
    test("Tests para los stacks", () => {
        const input=[{id:3,mission: "node",stacks:["node","react"]}];
        const out=[{id:3,mission: "node",stacks:["node","react"]}];
        const explorersInNode=ExplorerService.filterbyStack(input,"node");
        expect(explorersInNode).toEqual(out);
    });

});
