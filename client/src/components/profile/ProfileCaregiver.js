import React, { Fragment, useEffect } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import Spinner from "../layouts/Spinner";
import ProfileTop from "./ProfileTop";
import ProfileAbout from "./ProfileAbout";
import ProfileEducation from "./ProfileEducation";
import ProfileCertification from "./ProfileCertification";
import { getProfileById } from "../../actions/profile";

const ProfileCaregiver = ({
  getProfileById,
  profile: { profile, loading },
  match
}) => {
  useEffect(() => {
    console.log(match.params.id);
    getProfileById(match.params.id);
  }, [getProfileById, match.params.id]);

  return (
    <Fragment>
      {profile === null || loading ? (
        <Spinner />
      ) : (
        <Fragment>
          <div className='text-center'>
            <Link
              to='/caregiver-profiles'
              className='btn btn-info my-2 float-left'
            >
              Back To Profiles
            </Link>
            <Link to='#!' className='btn btn-danger my-2 text-center'>
              Hire Now
            </Link>
            <Link to='#!' className='btn btn-dark my-2 float-right'>
              Setup an interview
            </Link>
          </div>
          <div className='profile-grid my-1'>
            <ProfileTop profile={profile} />
            <ProfileAbout profile={profile} />
            <div className='profile-edu bg-white p-2'>
              <h2 className='text-info'>Education</h2>
              {profile.education.length > 0 ? (
                <Fragment>
                  {profile.education.map(education => (
                    <ProfileEducation
                      key={education._id}
                      education={education}
                    />
                  ))}
                </Fragment>
              ) : (
                <h4>No Educational credentials</h4>
              )}
            </div>

            <div className='profile-cer bg-white p-2'>
              <h2 className='text-info'>Certification</h2>
              {profile.certification.length > 0 ? (
                <Fragment>
                  {profile.certification.map(certification => (
                    <ProfileCertification
                      key={certification._id}
                      certification={certification}
                    />
                  ))}
                </Fragment>
              ) : (
                <h4>No Certification credentials</h4>
              )}
            </div>
          </div>
        </Fragment>
      )}
    </Fragment>
  );
};

ProfileCaregiver.propTypes = {
  getProfileById: PropTypes.func.isRequired,
  profile: PropTypes.object.isRequired,
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  profile: state.profile,
  auth: state.auth
});

export default connect(
  mapStateToProps,
  { getProfileById }
)(ProfileCaregiver);
