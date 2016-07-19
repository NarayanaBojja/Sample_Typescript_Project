var StringMethodsUsage = (function () {
    function StringMethodsUsage() {
        this.name = "Metanoia_Software_Solutions_Soft";
        this.char = undefined;
        this.shortName = undefined;
        this.position = undefined;
    }
    StringMethodsUsage.prototype.printChar = function () {
        var name;
        this.char = this.name.charAt(10);
        console.log("Character at 9 th position:   " + this.char);
        return this.char;
    };
    StringMethodsUsage.prototype.combine = function () {
        this.shortName = this.name.substring(0, 8);
        this.character = this.printChar();
        console.log("\n" + this.character + "   " + this.shortName.concat("Solutions"));
    };
    StringMethodsUsage.prototype.searchString = function () {
        this.position = this.name.indexOf("Soft");
        console.log(" Soft found at :  " + this.position);
    };
    return StringMethodsUsage;
}());
var string = new StringMethodsUsage();
string.printChar();
string.combine();
string.searchString();
//# sourceMappingURL=string-methods.js.map