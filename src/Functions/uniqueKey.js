function uniqueKey() {
    const symbols =
      "QWERTZUIOPÜASDFGHJKLÖÄYXCVBNMqwertzuiopüasdfghjklöäyxcvbnm1234567890!§$%&";
    let result = "";
    for (let i = 0; i < 5; i++) {
      result = result.concat(symbols[Math.floor(Math.random() * symbols.length)]);
    }
    return result;
  }
  
  export default uniqueKey;