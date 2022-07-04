// Como podemos rodar isso em um arquivo .ts sem causar erros? 

// let employee = {};
// employee.code = 10;
// employee.name = "John";


interface EmployeeI {
  code: number,
  name: string,
}

let employee: EmployeeI = {
  code: 10,
  name: "John"
}