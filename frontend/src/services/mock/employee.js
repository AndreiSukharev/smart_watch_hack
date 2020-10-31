const MOCK_EMPLOYEE_COUNT = 30;

const generateEmployee = () => {
  const employee = [];
  for (let i = 0; i < MOCK_EMPLOYEE_COUNT; i++) {
    employee.push({
      name: `ФИО-${i + 1}`,
      position: `Должность-${i + 1}`,
      email: `sample${i + 1}@mail.ru`,
      phone: '+7 (999) 999-99-99'
    });
  }
  return employee;
};

const result = generateEmployee();

export default result;
