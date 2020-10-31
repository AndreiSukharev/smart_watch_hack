// import Vue from 'vue';
import { sample } from 'lodash';

const MOCK_OBJECTS_COUNT = 37;

export default class BuildingService {
  constructor() {
    // this.resource = Vue.$http();
  }

  get name() {
    return 'building';
  }

  listObjects() {
    // return this.resource.get('objects');
    const result = [];
    const regions = ['СВАО', 'ЦАО', 'ЮВАО', 'ТИНАО'];
    const employees = Array.from({ length: 5000 }, (_, i) => i + 50);
    const warnings = Array.from({ length: 30 }, (_, i) => i);
    for (let i = 0; i < MOCK_OBJECTS_COUNT; i++) {
      result.push({
        name: `Объект-${i + 1}`,
        address: `Адрес-${i + 1}`,
        region: sample(regions),
        company: `Застройщик-${i + 1}`,
        employeesCount: sample(employees),
        warningsCount: sample(warnings)
      });
    }
    return {
      data: {
        buildings: result,
        regions: regions,
        headers: [
          'Объект',
          'Адрес',
          'Округ',
          'Застройщик',
          'Кол-во сотрудников',
          'Кол-во нарушений'
        ]
      }
    };
  }
}
