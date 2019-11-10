import React, { useEffect, Fragment } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import ProfileActions from "./ProfileActions";
import { getCurrentProfile } from "../../actions/profile";
import Education from "./Education";
import Certification from "./Certification";
import Spinner from "../layouts/Spinner";

const ProfileCaregivers = ({
  getCurrentProfile,
  auth: { user },
  profile: { profile, loading }
}) => {
  useEffect(() => {
    getCurrentProfile();
  }, [getCurrentProfile]);
  return loading && profile === null ? (
    <Spinner />
  ) : (
    <Fragment>
      <h1 className='large text-info pt-4'>Profile</h1>
      <p className='lead'>
        <i className='fas fa-user'></i> Welcome {user && user.name}
      </p>
      {profile !== null ? (
        <Fragment>
          <ProfileActions />
          <Education education={profile.education} />
          <Certification certification={profile.certification} />
        </Fragment>
      ) : (
        <Fragment>
          <p>You have not yet setup a profile, please add some information.</p>
          <Link to='/create-caregiver-profile' className='btn btn-info my-1'>
            Create Profile
          </Link>
        </Fragment>
      )}
    </Fragment>
  );
};

ProfileCaregivers.propTypes = {
  getCurrentProfile: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  profile: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth,
  profile: state.profile
});

export default connect(
  mapStateToProps,
  { getCurrentProfile }
)(ProfileCaregivers);
