import React, { Component } from "react";

export default class App3 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      lists: [
        {
          name: "Tiger",
          content: "this is tiger",
          image:
            "https://images.unsplash.com/photo-1503066211613-c17ebc9daef0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80"
        },
        {
          name: "Dog",
          content: "this is doc",
          image:
            "https://images.unsplash.com/photo-1504208434309-cb69f4fe52b0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80"
        },
        {
          name: "Raccoon",
          content: "this is raccoon",
          image:
            "https://images.unsplash.com/photo-1497752531616-c3afd9760a11?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80"
        }
      ]
    };
  }
  render() {
    const { lists } = this.state;
    return (
      <div>
        <h1>Render Posts</h1>
        {lists.length > 0 &&
          lists.map((list, index) => (
            <div key={index} className="card" style={{ width: "18rem", marginBottom: '1rem' }}>
              <img src={list.image} className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">{list.name}</h5>
                <span>{list.content}</span>
              </div>
            </div>
          ))}
      </div>
    );
  }
}
