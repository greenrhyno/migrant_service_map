import React from "react";
import { connect } from "react-redux";
import {
  toggleProviderVisibility,
  saveProvider,
  clearDistanceFilter,
  changeDistanceFilter,
  changeVisaFilter,
  clearVisaFilter,
  displayProviderInformation,
  selectTab
} from "redux/actions";
import { getProvidersSorted } from "redux/selectors";
import TopBar from "./top-bar";

const VISA_TYPES = ["visa1", "visa2", "visa3"];

const TopBarContainer = props => {
  return <TopBar {...props} />;
};

const mapStateToProps = state => {
  return {
    providersList: getProvidersSorted(state),
    savedProviders: state.providers.savedProviders,
    visaTypes: VISA_TYPES,
    highlightedProviders: state.highlightedProviders,
    visibleTypes: state.providerTypes.visible,
    filters: state.filters,
    providerTypes: state.providerTypes
  };
};

const mapDispatchToProps = dispatch => {
  return {
    toggleProviderVisibility: providerType => {
      dispatch(toggleProviderVisibility(providerType));
    },
    saveProvider: id => {
      dispatch(saveProvider(id));
    },
    clearDistanceFilter: () => {
      dispatch(clearDistanceFilter());
    },
    changeDistanceFilter: distance => {
      dispatch(changeDistanceFilter(distance));
    },
    clearVisaFilter: () => {
      dispatch(clearVisaFilter());
    },
    changeVisaFilter: visa => {
      dispatch(changeVisaFilter(visa));
    },
    displayProviderInformation: id => {
      dispatch(displayProviderInformation(id));
    },
    selectTab: index => {
      dispatch(selectTab(index));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TopBarContainer);
