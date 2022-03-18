import * as PackageAPIUtil from '../util/package_api_util';

export const RECEIVE_PACKAGES = "RECEIVE_PACKAGES";
export const RECEIVE_NEW_PACKAGE = "RECEIVE_NEW_PACKAGE";
export const REMOVE_PACKAGE = "REMOVE_PACKAGE";

export const receivePackages = packages => ({
  type: RECEIVE_PACKAGES,
  packages
});

export const receiveNewPackage = drinks_package => ({
  type: RECEIVE_NEW_PACKAGE,
  drinks_package
})

export const fetchPackages = () => dispatch => (
  PackageAPIUtil.getPackages()
    .then(packages => dispatch(receivePackages(packages)))
    .catch(err => console.log(err))
);

export const composePackage = data => dispatch => (
  PackageAPIUtil.writePackage(data)
    .then(drinks_package => dispatch(receiveNewPackage(drinks_package)))
    .catch(err => console.log(err))
);

export const updatePackage = drinks_package => dispatch => (
  PackageAPIUtil.updatePackage(drinks_package)
    .then(
      drinks_package => dispatch(updatePackage(drinks_package)),
      err => console.log(err)
    )
)

export const removePackage = packageId => { 
  return {
    type: REMOVE_PACKAGE,
    packageId
  }
}

export const deletePackage = packageId => dispatch => (
  PackageAPIUtil.deletePackage(packageId)
    .then(
      () => dispatch(removePackage(packageId)),
      err => console.log(err)
    )
);