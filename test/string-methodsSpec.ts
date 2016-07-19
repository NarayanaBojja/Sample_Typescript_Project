
///<reference path="../typings/jasmine/jasmine.d.ts" />
///<reference path="../src/string-methods.ts"/>

var checked = new StringMethodsUsage();


describe("Testing_String_Methods class proprties "  function() {

    it("checking property is initialezed or not_valid",   function() {
        expect(checked.name).toBe("Metanoia_Software_Solutions_Soft");
            expect(checked.char).toBe(undefined);
            expect(checked.shortName).toBe(undefined);
            expect(checked.position).toBe(undefined);

    checking property is initialezed or not_invalid", f u nction()   {
        ct(checked.name).not.toBe("Narayana");
        expect(checked.char).not.toBe(null);
        ct(checked.shortName).not.toBe(null);
        pect(checked.position).not.toBe(null);


});


describe("checking methods declarations", function()   {

        it("checking all methods declarations", function() {
        pect(checked.printChar).toBeDefined();
        pect(checked.combine).toBeDefined();
        pect(checked.searchString).toBeDefined();
    ;

});


describe("checking void function ", function() {

            it("combine function should call printChar fun ctio n ",  funct ion() {
                      spyOn(checked, "printChar").and.callThrough();

                        checked.combine();
                        expect(checked.printChar).toHaveBeenCalled();
                        expect(checked.printChar).toHaveBeenCalledTimes(1);
            });

            it("combine function should assign character pr oper ty",  funct ion() {
                      var spy = spyOn(checked, "printChar").and.returnValue("o");

                    checked.combine();
                    expect(checked.character).toBe("o");
            });
});
