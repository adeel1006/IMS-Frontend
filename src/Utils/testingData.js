//Table Testing data
export function createData(name, calories, fat, carbs, protein) {
    return { name, calories, fat, carbs, protein };
  }
  
  export const rows = [
    createData("Frozen yoghurt", 159, 6.0, 24, 4.0),
    createData("Ice cream sandwich", 237, 9.0, 37, 4.3),
    createData("Eclair", 262, 16.0, 24, 6.0),
    createData("Cupcake", 305, 3.7, 67, 4.3),
    createData("Kitkat", 356, 16.0, 49, 3.9),
    createData("Oreo", 356, 16.0, 49, 3.9),
    createData("Mars", 356, 16.0, 49, 3.9),
    createData("Galaxy", 356, 16.0, 49, 3.9),
    createData("Novella", 356, 16.0, 49, 3.9),
  ];


  //Limit 4 rows testing data 
  export const tableDataDashboard = [
    createData("Frozen yoghurt", 159, 6.0, 24, 4.0),
    createData("Ice cream sandwich", 237, 9.0, 37, 4.3),
    createData("Eclair", 262, 16.0, 24, 6.0),
    createData("Cupcake", 305, 3.7, 67, 4.3),
  ];

//Dashboard Chart data 

const getRandomNumber = () => Math.floor(Math.random() * 1000);
export const data = [
    { month: "January", number: getRandomNumber() },
    { month: "February", number: getRandomNumber() },
    { month: "March", number: getRandomNumber() },
    { month: "April", number: getRandomNumber() },
    { month: "May", number: getRandomNumber() },
    { month: "June", number: getRandomNumber() },
    { month: "July", number: getRandomNumber() },
    { month: "August", number: getRandomNumber() },
    { month: "September", number: getRandomNumber() },
    { month: "October", number: getRandomNumber() },
    { month: "November", number: getRandomNumber() },
    { month: "December", number: getRandomNumber() },
  ];
  
  ///////////////////////////////////////////////
  