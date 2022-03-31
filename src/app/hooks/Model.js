const Models = class {
  constructor(data) {
    this.data = data;
  }

  findById(id) {
    return this.data.find((data) => data.id === id);
  }

  findByValue(field, value) {
    return this.data.filter((data) => data[field] === value);
  }
};

export default Models;
