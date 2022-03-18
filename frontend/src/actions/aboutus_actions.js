import * as AboutUsAPIUtil from '../util/about_us_api_util';

export const RECEIVE_ABOUT_US_ALL = "RECEIVE_ABOUT_US_ALL";
export const RECEIVE_ABOUT_US = "RECEIVE_ABOUT_US";

export const receiveAboutUsAll = aboutusall => ({
    type: RECEIVE_ABOUT_US_ALL,
    aboutusall
});

export const receiveAboutUs = aboutus => ({
    type: RECEIVE_ABOUT_US,
    aboutus
});

export const fetchAboutUs = () => dispatch => (
  AboutUsAPIUtil.getAboutUs()
    .then(aboutus => dispatch(receiveAboutUsAll(aboutus)))
    .catch(err => console.log(err))
);

export const fetchAboutUsSingle = aboutusid => dispatch => (
    // console.log(`${aboutusid}`),
    AboutUsAPIUtil.getAboutUsSingle(aboutusid)
      .then(aboutusid => dispatch(receiveAboutUs(aboutusid)))
      .catch(err => console.log(err))
  );

export const updateAboutUs = aboutus => dispatch => (
  FAQAPIUtil.updateAboutUs(aboutus)
    .then(
      aboutus => dispatch(updateAboutUs(aboutus)),
      err => console.log(err)
    )
)