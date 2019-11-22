import React, { Component } from "react";

export default class App1 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      lists: ["a", "b", "c", "d", "e", "f", "g"],
      lists2: [
        { firstName: "Gourge", lastName: "Longman", age: 13 },
        { firstName: "Zofia", lastName: "Olson", age: 20 },
        { firstName: "Elif", lastName: "Salt", age: 30 },
        { firstName: "Kyal", lastName: "Hogan", age: 12 }
      ]
    };
  }

  render() {
    const { lists, lists2 } = this.state;
    return (
      <div>
        <div>
          <h1>Render List</h1>
          <ul>{lists.length > 0 && lists.map(list => <li>{list}</li>)}</ul>
        </div>
        <div>
          <h1>Render Table</h1>
          <table>
            <thead></thead>
            <tbody>
              {lists2.length > 0 &&
                lists2.map(list2 => (
                  <tr>
                    <td>{list2.firstName}</td>
                    <td>{list2.lastName}</td>
                    <td>{list2.age}</td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}
