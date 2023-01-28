const stringLength = (string) => {
   const str = string;
   if(str.length < 1 || str.length > 10){
      throw new Error ("string should have a length between 1 and 10");
   } 
   return(str.length);
}

module.exports = stringLength