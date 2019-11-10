import React, { Fragment, useEffect } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import Spinner from "../layouts/Spinner";
import CaregiverProfileItem from "./CaregiverProfileItem";
import { getProfiles } from "../../actions/profile";

const CaregiverProfiles = ({ getProfiles, profile: { profiles, loading } }) => {
  useEffect(() => {
    getProfiles();
  }, [getProfiles]);

  return (
    <Fragment>
      {loading ? (
        <Spinner />
      ) : (
        <Fragment>
          <h1 className='large text-info'>Caregiver</h1>
          <p className='lead'>Browse and connect with Caregivers</p>
          <div className='profiles'>
            {profiles.length > 0 ? (
              profiles.map(profile => (
                <CaregiverProfileItem key={profile._id} profile={profile} />
              ))
            ) : (
              <h4>No Profiles found...</h4>
            )}
          </div>
        </Fragment>
      )}
    </Fragment>
  );
};

CaregiverProfiles.propTypes = {
  getProfiles: PropTypes.func.isRequired,
  profile: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  profile: state.profile
});

export default connect(
  mapStateToProps,
  { getProfiles }
)(CaregiverProfiles);
