import React, { Component } from 'react';
const { Provider, Consumer } = React.createContext();


class CheckboardContextProvider extends Component {
    render() {
      return <Provider value={3}>{this.props.children}</Provider>;
    }
  };

  export { CheckboardContextProvider, Consumer as CheckboardContextConsumer };
