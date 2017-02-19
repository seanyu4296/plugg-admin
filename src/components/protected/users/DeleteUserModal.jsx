import React, { PropTypes } from 'react';

const DeleteUserModal = ({openModal, isActive, fullName, handleDelete}) => {
  return (
    <div className={`${isActive ? "is-active" : ""} modal`}>
      <div className="modal-background" onClick={() => openModal(false)}></div>
      <div className="modal-content">
        <div className="card">
          <header className="card-header">
            <p className="card-header-title">
              Delete User
                    </p>
            <a className="card-header-icon">
              <span className="icon">
                <i className="fa fa-angle-down"></i>
              </span>
            </a>
          </header>
          <div className="card-content">
            <div className="content">
              Are you sure you want to delete <strong>{fullName}</strong> from the database?
                      <br />
              <small>11:09 PM - 1 Jan 2016</small>
            </div>
          </div>
          <footer className="card-footer">
            <a className="card-footer-item" onClick={() => handleDelete()}>Yes</a>
            <a className="card-footer-item" onClick={() => openModal(false)}>No</a>
          </footer>
        </div>
      </div>
      <button className="modal-close" onClick={() => openModal(false)}></button>
    </div>
  );
};

DeleteUserModal.propTypes = {

};

export default DeleteUserModal;
