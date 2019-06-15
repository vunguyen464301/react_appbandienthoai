import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { ListItem, Button, Col, Row } from 'react-onsenui';

import { platform } from 'onsenui';
import * as Actions from '../actions';
import Button_phone_orderDialog from './Button_phone_orderDialog';
import PhonePage from './PhonePage';
import { urlImg } from '../util';
const styles = {
  imgPhone: {
    textAlign: 'center',
    width: platform.isAndroid() ? '36px' : '100px',
    height: platform.isAndroid() ? '36px' : '100px',
    lineHeight: platform.isAndroid() ? '36px' : '30px'
  },

  buttons: {
    fontSize: '20px',
    color: '#cacaca'
  }
};

const Phone = ({
  id_phone,
  name_of_phone,
  img,
  price,
  details_display,
  details_camera,
  details_cpu,
  details_ram,
  details_rom,
  details_sim,
  details_design,
  details_pin,
  navigator,
  actions
}) => {
  const sourceImg = urlImg() + img;
  // let source;
  // source=urlImg;
  return (
    <ListItem>
      <Row>
        <Col>
          <img style={styles.imgPhone} src={sourceImg} />
        </Col>
        <Col>
          <Row>{name_of_phone}</Row>

          <Row>
            <h3>{price}</h3>
            <p>VND</p>
          </Row>
          <Row>
            <Col>
              <Button
                class='button button--outline'
                onClick={() => {
                  actions.selectphone(id_phone);
                  navigator.pushPage({ component: PhonePage });
                }}
              >
                Chi tiết
              </Button>
            </Col>
            <Col>
              <Col>
                <div
                  onClick={e => {
                    actions.openDialog(id_phone);
                  }}
                >
                  <Button_phone_orderDialog />
                  <Button class='button button--outline'>Đặt Hàng</Button>
                </div>
              </Col>
            </Col>
          </Row>
        </Col>
      </Row>
    </ListItem>
  );
};

const mapDispatchToProps = dispatch => {
  return {
    actions: bindActionCreators(Actions, dispatch)
  };
};

export default connect(
  undefined,
  mapDispatchToProps
)(Phone);
