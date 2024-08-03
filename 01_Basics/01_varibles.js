const accountId = 144553
let accountEmail = "meshivamshri.com"
var accountPassword = "12345"
accountCity = "Jaipur"
let accountState;
// accountId = 2 //not allowed

accountEmail = "hc@hc.com"
accountPassword = "234444"
accountCity = "Mohali"

console.log(accountId);

console.table([accountEmail,accountId,accountPassword,accountCity,accountState])

/*
Prefer not to use var
Because of issue in block scope and functional scope
*/