var StringMethodsUsage=function(){function t(){this.name="Metanoia_Software_Solutions_Soft",this["char"]=void 0,this.shortName=void 0,this.position=void 0}return t.prototype.printChar=function(){return this["char"]=this.name.charAt(10),console.log("Character at 9 th position:   "+this["char"]),this["char"]},t.prototype.combine=function(){this.shortName=this.name.substring(0,8),this.character=this.printChar(),console.log("\n"+this.character+"   "+this.shortName.concat("Solutions"))},t.prototype.searchString=function(){this.position=this.name.indexOf("Soft"),console.log(" Soft found at :  "+this.position)},t}(),string=new StringMethodsUsage;string.printChar(),string.combine(),string.searchString();