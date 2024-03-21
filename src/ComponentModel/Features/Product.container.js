import { createStructuredSelector } from "reselect";
import { ProductSelector } from "../Redux/selector";
import { fetchProductsData } from "../Redux/action";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import ProductComponent from "./ProductComponent";

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators(
    {
      fetchProductsData,
    },
    dispatch
  ),
});

const mapStateToProps = createStructuredSelector({
  productData: ProductSelector,
});
export default connect(mapStateToProps, mapDispatchToProps)(ProductComponent);
