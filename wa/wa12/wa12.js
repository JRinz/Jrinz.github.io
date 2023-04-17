
//project 1
let employ = '{ "employees" : [' +
'{ "firstName":"Sam" , "department":"Tech", "designation":"Manager", "salary":"40000", "raiseEligible":"true" },' +
'{ "firstName":"Mary" , "department":"Finance", "designation":"Trainee", "salary":"18500", "raiseEligible":"true" },' +
'{ "firstName":"Bill" , "department":"HR", "designation":"Executive", "salary":"21200", "raiseEligible":"false" } ]}';

const employees = JSON.parse(employ);

console.log("problem 1");
console.log(employees);

//project 2

let company = '{ "companyDetails": [' + '{"companyName":"Tech Stars"},' + '{"website":"www.techstars.site"} ]}';
const com = JSON.parse(company);

console.log("problem 2");
console.log(com);

//project 3

let emp2 = '"employees": [' +
'{"firstName": "Sam", "department"; "Tech", "designation": "Manager", "salary": "40,000", "raise eligable": "True" },' +
'{"firstName":  "Mary", "department": "Finance", , "designation": "Trainee", "salary": "18,500", "raise eligable": "True"},' +
'{"firstname": "Bill", "department": "HR", "designation": "Executive", "salary": "21,200", "raise eligable": "False"}, ' +
'{"firstname": "Anna", "department": "Tech", "designation": "Executive", "salary": "25,600", "raise eligable": "False"}]}';

console.log ("Problem 3"); 
console.log (employees2) ;

//project 4

let total = 0;

console.log("Problem 4");

//project 5
console.log("Problem 5");

//project 6

const workFromHome = ['Anna', 'Sam'];

for (i=0; i<comp['employees'].length; i++) {
    if (workFromHome.includes(comp['employees'][i]['firstName'])) {
        comp['employees'][i]["wfh"] = "true";
    }
    else {
        comp['employees'][i]["wfh"] = "false";
    }
}
console.log("Problem 6");
console.log(workFromHome);


