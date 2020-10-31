const MOCK_COMPANIES_COUNT = 30;

const generateCompanies = () => {
  const companies = [];
  for (let i = 0; i < MOCK_COMPANIES_COUNT; i++) {
    const name = `Организация-${i + 1}`;
    companies.push({
      id: i,
      name: name,
      date: new Date(),
      owner: `Тест-${i + 1}`,
      params: { name: name }
    });
  }
  return companies;
};

const result = generateCompanies();

export default result;
