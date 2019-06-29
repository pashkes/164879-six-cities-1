import React, {PureComponent} from "react";
import PropType from "prop-types";
import Spinner from "./../../components/spinner/spinner.jsx";

const withLoadData = (Component) => {
  class WithLoadData extends PureComponent {
    constructor(props) {
      super(props);
    }

    componentDidMount() {
      const {isLoading, loadData} = this.props;
      if (!isLoading) {
        loadData();
      }
    }

    componentDidUpdate() {
      const {isLoading, loadData} = this.props;
      if (!isLoading) {
        loadData();
      }
    }

    render() {
      return this.props.isLoading ? <Component {...this.props} /> : <Spinner/>;
    }
  }

  WithLoadData.propTypes = {
    isLoading: PropType.bool.isRequired,
    loadData: PropType.func.isRequired,
  };

  return WithLoadData;
};

export default withLoadData;
