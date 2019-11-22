import React, { Component } from "react";

export default class App4 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      productTypeSelectById: 1,
      productType: [
        { productTypeId: 1, name: "Laptop" },
        { productTypeId: 2, name: "Camera" },
        { productTypeId: 3, name: "Smart Phone" }
      ],
      product: [
        {
          productId: 1,
          productTypeId: 1,
          name: "Macbook Pro 13 inch 2018",
          price: 40000,
          image:
            "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1651&q=80"
        },
        {
          productId: 2,
          productTypeId: 1,
          name: "Dell Alienware 17 R4",
          price: 74000,
          image:
            "https://torrong.com/wp-content/uploads/2018/11/Notebook-Dell-Alienware-AW15-1.jpg"
        },
        {
          productId: 3,
          productTypeId: 1,
          name: "MSI GL75 Gaming",
          price: 40000,
          image:
            "https://www.bhphotovideo.com/images/images2500x2500/msi_gl75_9sdk_007_gl75_i7_9750h_16gb_512gb_1488640.jpg"
        },
        {
          productId: 4,
          productTypeId: 2,
          name: "Sony A7 Mark II",
          price: 69000,
          image:
            "https://torrong.com/wp-content/uploads/2018/11/Notebook-Dell-Alienware-AW15-1.jpg"
        },
        {
          productId: 5,
          productTypeId: 2,
          name: "Fuji X-T2",
          price: 49000,
          image:
            "https://images.unsplash.com/photo-1548594696-7c00d52005d7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1016&q=80"
        },
        {
          productId: 6,
          productTypeId: 2,
          name: "Fuji X-T2",
          price: 49000,
          image:
            "https://images.unsplash.com/photo-1492671357725-4c36ca51d815?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=975&q=80"
        },
        {
          productId: 7,
          productTypeId: 3,
          name: "iPhone X",
          price: 34900,
          image:
            "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1100&q=80"
        },
        {
          productId: 8,
          productTypeId: 3,
          name: "iPhone 8",
          price: 24900,
          image:
            "https://images.unsplash.com/photo-1535303311164-664fc9ec6532?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80"
        },
        {
          productId: 9,
          productTypeId: 3,
          name: "Galaxy Note 10",
          price: 32900,
          image:
            "https://images.unsplash.com/photo-1566837539809-c2ed29eeea08?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80"
        }
      ],
      cartLists: []
    };
  }

  handleRemoveProduct = obj => () => {
    const { cartLists } = this.state;
    this.setState({
      cartLists: cartLists.filter(data => obj.productId !== data.productId)
    });
  };

  handlePickToCart = obj => () => {
    const { cartLists, product } = this.state;
    if (cartLists.find(data => obj.productId === data.productId)) {
      this.setState({
        cartLists: cartLists.map(data =>
          obj.productId === data.productId
            ? { ...data, amount: data.amount + 1 }
            : data
        )
      });
    } else {
      this.setState({
        cartLists: [
          ...cartLists,
          {
            ...product.find(data => obj.productId === data.productId),
            amount: 1
          }
        ]
      });
    }
  };

  handleSelectProductType = id => () => {
    this.setState({ productTypeSelectById: id });
  };
  getTotalPrice = () => (
    this.state.cartLists.reduce(
      (sum, data) => sum + data.price * data.amount,
      0
    )
  )

  render() {
    const {
      productTypeSelectById,
      productType,
      product,
      cartLists
    } = this.state;
    return (
      <div style={{ padding: "2rem" }}>
        <div className="row">
          <div className="col-2" style={{ padding: "1rem" }}>
            <div className="list-group">
              {productType.length > 0 &&
                productType.map((data, index) => (
                  <button
                    key={index}
                    type="button"
                    onClick={this.handleSelectProductType(data.productTypeId)}
                    className={
                      productTypeSelectById === data.productTypeId
                        ? "list-group-item list-group-item-action active"
                        : "list-group-item list-group-item-action"
                    }
                  >
                    {data.name}
                  </button>
                ))}
            </div>
          </div>
          <div className="col-7">
            <div className="row">
              {product.length > 0 &&
                product.map(
                  (data, index) =>
                    productTypeSelectById === data.productTypeId && (
                      <div key={index} className="col-4">
                        <div
                          className="card mb-3"
                          style={{ minHeight: "400px", maxHeight: "400px" }}
                        >
                          <img
                            src={data.image}
                            className="card-img-top"
                            style={{ height: "220px" }}
                            alt="product"
                          />
                          <div className="card-body">
                            <div className="row">
                              <div className="col">
                                <div>
                                  <h5 className="card-title">{data.name}</h5>
                                  <h5>{`${data.price} Baht`}</h5>
                                </div>
                                <div>
                                  <button
                                    onClick={this.handlePickToCart(data)}
                                    className="btn btn-primary btn-block"
                                  >
                                    Pick to Cart
                                  </button>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    )
                )}
            </div>
          </div>
          <div className="col-3">
            <div className="row">
              <table className="table table-hover">
                <thead>
                  <tr>
                    <th scope="col">Product</th>
                    <th scope="col">Price</th>
                    <th scope="col">Action</th>
                  </tr>
                </thead>
                <tbody>
                  {cartLists.length > 0 &&
                    cartLists.map((data, index) => (
                      <tr key={index}>
                        <td>{data.name}</td>
                        <td>
                          {data.price}
                          <br />x {data.amount}
                        </td>
                        <td>
                          <button
                            onClick={this.handleRemoveProduct(data)}
                            className="btn btn-warning"
                          >
                            Remove
                          </button>
                        </td>
                      </tr>
                    ))}
                  <tr>
                    <td>Total Price</td>
                    <td colSpan={2}>{this.getTotalPrice()} Baht</td>
                  </tr>
                  <tr>
                    <td colSpan={3}>
                      <button className="btn btn-primary btn-block">
                        Check Out
                      </button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
