import View from '../hooks/View';

class UserList extends View {
  constructor(el, data) {
    super();
    this.data = data;
    this.el = document.querySelector(el);
    this.html = this.view();

    this.render();
  }

  view() {
    const {
      id,
      name,
      adress,
      city,
      zipcode
    } = this.data;

    return `
      <ul>
        <li>${id}</li>
        <li>${name}</li>
        <li>${adress}</li>
        <li>${city}</li>
        <li>${zipcode}</li>
      <ul>
    `;
  }
}

export default UserList;
