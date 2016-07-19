
    class StringMethodsUsage {
     private  name : string = "Metanoia_Software_Solutions_Soft";

        private char : string = undefined;
        private shortName : string= undefined;
        private position : number= undefined;
        private character : string ;
      public  printChar() : string  {
  var name : string;
            this.char = this.name.charAt(10);
            console.log("Character at 9 th position:   "+this.char);
            return this.char;

        }

      public  combine() : void {

           this.shortName = this.name.substring(0,8);
           this.character = this.printChar();
           console.log("\n"+this.character+"   "+this.shortName.concat("Solutions"));

        }

      public  searchString() : void  {
            this.position = this.name.indexOf("Soft");
            console.log(" Soft found at :  "+this.position);

        }


    }

var string = new StringMethodsUsage();
string.printChar();
string.combine();
string.searchString();
