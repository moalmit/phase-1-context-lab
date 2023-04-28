/* Your Code Here */

function createEmployeeRecord(arr){
    const obj = {
    firstName: arr[0],
    familyName: arr[1],
    title: arr[2],
    payPerHour: arr[3],
    timeInEvents: [],
    timeOutEvents: [],
    }
  return obj
  };
  
  function createEmployeeRecords(arrOfArrs){  
    let employeeRecords = arrOfArrs.map( el => createEmployeeRecord(el));
  return employeeRecords 
  };
  
  let twoRows = [
    ["moe", "sizlak", "barkeep", 2],
    ["bartholomew", "simpson", "scamp", 3]
     ];
  // let employeeRecords = createEmployeeRecords(twoRows);
  // let nameExtractor = function (e) { return e.firstName };
  // console.log(employeeRecords.map(nameExtractor));
  
  testEmployee = createEmployeeRecord(["Byron", "Poodle", "Mascot", 3]);
  function createTimeInEvent (dateStamp){
    let obj= {};
       obj.type = "TimeIn";
       obj.hour =  +(dateStamp.slice(11));
       obj.date = dateStamp.substring(0,10);
     
       this.timeInEvents.push(obj);
  return this
   };
   
  function createTimeOutEvent (dateStamp){
    let obj= {};
       obj.type = "TimeOut";
       obj.hour =  +(dateStamp.slice(11));
       obj.date = dateStamp.substring(0,10);
     
       this.timeOutEvents.push(obj);
  return this
   };
  
   function hoursWorkedOnDate(date){
    const timeIn = this.timeInEvents.find(e=>e.date === date);
    const timeOut = this.timeOutEvents.find(e=>e.date === date);
    let hours = timeOut.hour - timeIn.hour;
    return hours/100
    };
  
  function wagesEarnedOnDate(date){
    let wagesEarned = (hoursWorkedOnDate.call(this, date) * (this.payPerHour)); 
  return wagesEarned
  };
  
  /*
   We're giving you this function. Take a look at it, you might see some usage
   that's new and different. That's because we're avoiding a well-known, but
   sneaky bug that we'll cover in the next few lessons!
  
   As a result, the lessons for this function will pass *and* it will be available
   for you to use if you need it!
   */
  function allWagesFor () {
    const eligibleDates = this.timeInEvents.map(function (e) {
        return e.date
    });
    const payable = eligibleDates.reduce(function (memo, d) {
        return memo + wagesEarnedOnDate.call(this, d)
    }.bind(this), 0); // <== Hm, why did we need to add bind() there? We'll discuss soon!
    return payable
  };
  
  function findEmployeeByFirstName(srcArray, firstName){
    return srcArray.find(e=>e.firstName === firstName)
  };
  
  function calculatePayroll (arrOfEmployeeRecords){
    const total = arrOfEmployeeRecords.map(e=>allWagesFor.call(e));
    const sumAll = total.reduce((accumulator, employeeTotal) => accumulator + employeeTotal);
    return sumAll
  }