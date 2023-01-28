const stringLength = (string) => {
   const str = string;
   return(str.length);
   if(str.length < 1 || str.length > 10){
      throw new Error("string should have a length between 1 and 10");
   } 
}

module.exports = stringLength