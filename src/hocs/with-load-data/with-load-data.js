import React, {PureComponent} from "react";

const withLoadData = (Component) => {
  class WithLoadData extends PureComponent {
    constructor(props) {
      super(props);
      this.state = {
        isLoaded: false
      };
    }
    componentDidMount() {
      if (this.props.loaded) {
        this.props.loadData();
      }
    }

    render() {
      return this.props.loaded ? <Component {...this.props} /> : <span>loading...</span>;
    }
  }

  return WithLoadData;
};

export default withLoadData;
