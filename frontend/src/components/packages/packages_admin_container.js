import { connect } from 'react-redux';
import { fetchPackages, composePackage, updatePackage, deletePackage } from '../../actions/package_actions';
import Packages from './packages_admin';

const mapStateToProps = (state) => {
  return {
    packages: Object.values(state.packages.all)
  };
};

const mapDispatchToProps = dispatch => ({
    fetchPackages: () => dispatch(fetchPackages()),
    composePackage: (drink_package) => dispatch(composePackage(drink_package)),
    updatePackage: (drink_package) => dispatch(updatePackage(drink_package)),
    deletePackage: (packageId) => dispatch(deletePackage(packageId)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Packages);