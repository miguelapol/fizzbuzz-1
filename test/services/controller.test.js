const controller=require("./../../lib/controllers/ExplorerController");
describe("Pruebas de unidad", function() {
    test("controllers stacks", function() {
        //aqui comparamos con una base test donde solo hay javascript
        const out=require("../data/explorers.json")
        expect(controller.Stacks("javascript")).toEqual(out);
    });
});
