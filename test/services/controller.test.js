const controller=require("./../../lib/controllers/ExplorerController");
describe("Pruebas de unidad", function() {
    test("controllers stacks", function() {
        const out=[{githubUsername:"apol",score:1,mission:"node",stacks:["javascript","reasonML","elm"]}];
        expect(controller.Stacks("javascript")).toEqual(out);
    });
});
