import * as React from "react"


interface IHelloProps {
  name: string;
}

interface IHelloState {
}

class Hello extends React.Component <IHelloProps, IHelloState> {
  render() {
    return (
      <React.Fragment>
        Name: {this.props.name}
      </React.Fragment>
    );
  }
}

export default Hello
