import { sample } from 'lodash';

const MOCK_OBJECTS_COUNT = 30;

const generateObjects = () => {
  const objects = [];
  const employees = Array.from({ length: 5000 }, (_, i) => i + 50);
  for (let i = 0; i < MOCK_OBJECTS_COUNT; i++) {
    objects.push({
      name: `Объект-${i + 1}`,
      date: new Date(),
      owner: `Владелец-${i + 1}`,
      address: `Адрес-${i + 1}`,
      yearOfContract: '2020',
      employeeCount: sample(employees)
    });
  }
  return objects;
};

const result = generateObjects();

export default result;
