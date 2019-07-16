import * as React from "react";
import Spinner from "./../../components/spinner/spinner";

interface Props {
  isLoading: boolean,
  onLoadData: () => void,
}

const withLoadData = (Component) => {
  class WithLoadData extends React.PureComponent<Props, null> {
    constructor(props) {
      super(props);
    }

    componentDidMount() {
      const {isLoading, onLoadData} = this.props;

      if (!isLoading) {
        onLoadData();
      }
    }

    componentDidUpdate() {
      const {isLoading, onLoadData} = this.props;

      if (!isLoading) {
        onLoadData();
      }
    }

    render() {
      return this.props.isLoading ? <Component {...this.props} /> : <Spinner/>;
    }
  }

  return WithLoadData;
};

export default withLoadData;
