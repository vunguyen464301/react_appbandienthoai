import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { AlertDialog } from 'react-onsenui';

import * as Actions from '../actions';

const Button_phone_orderDialog = ({ isOpen, actions }) => {
  return (
    <AlertDialog
      isOpen={isOpen}
      isCancelable={true}
      onCancel={actions.closeDialog}
    >
      <div className='alert-dialog-title'>Nút này để cho đẹp</div>
      <div className='alert-dialog-content'>
        {/* <Input
          modifier='underbar'
          ref={node => (input = node)}
          placeholder="số điện thoại"
          float
        /> */}
      </div>
      <div className='alert-dialog-footer'>
        <button onClick={actions.closeDialog} className='alert-dialog-button'>
          Vâng Sếp Vũ!
        </button>
        {/* <button onClick={handleButtonClick} className="alert-dialog-button">
          OK
        </button> */}
      </div>
    </AlertDialog>
  );
};

const mapStateToProps = state => ({
  isOpen: state.dialog.open
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(Actions, dispatch)
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Button_phone_orderDialog);
