import React from 'react';
import { connect } from 'react-redux';
import { platform } from 'onsenui';

import { Page, Row, Col } from 'react-onsenui';

import NavBar from '../components/NavBar';
import { urlImg } from '../util';
const styles = {
  main: {
    fontFamily: platform.isIOS() ? 'Lato' : null,
    textAlign: 'center',
    color: '#4a4a4a',
    width: '100%',
    marginTop: '30px'
  },
  imgPhone: {
    // color:'#ffff',
    textAlign: 'center',
    width: platform.isAndroid() ? '36px' : '200px',
    height: platform.isAndroid() ? '36px' : '200px',
    lineHeight: platform.isAndroid() ? '36px' : '30px'
    // borderRadius: '6px',
    // fontSize: platform.isAndroid() ? '16px' : '21px'
  },

  name: {
    textTransform: 'uppercase',
    fontSize: '24px',
    lineHeight: '24px'
  },
  textDetails: {
    fontSize: '18px',
    fontWeight: 100,
    margin: '10px'
  },
  data: {
    fontSize: '15px',
    fontWeight: 100,
    margin: '15px 25px',
    background: 'rgb(241, 223, 61)',
    color: 'blue'
  },
  textPerameter: {
    fontWeight: 'bold'
  },
  textPrice: {
    fontWeight: 'bold',
    margin: '15px 25px'
  }
};

const PhonePage = ({
  id_phone,
  id_company,
  name_of_phone,
  img,
  price,
  operating_system,
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
  let content;
  content = (
    <div>
      <div style={styles.name}>{name_of_phone}</div>
      <img style={styles.imgPhone} src={sourceImg} />
      <br />
      <div style={styles.textPrice}>{price} VND</div>
      <div style={styles.textDetails}>Thông số cấu hình</div>
      <div style={styles.data}>
        <Row>
          <Col style={styles.textPerameter}>Hệ điều hành :</Col>
          <Col>{operating_system}</Col>
        </Row>
        <Row>
          <Col style={styles.textPerameter}>Màn hình :</Col>
          <Col>{details_display}</Col>
        </Row>
        <Row>
          <Col style={styles.textPerameter}>Camera :</Col>
          <Col>{details_camera}</Col>
        </Row>
        <Row>
          <Col style={styles.textPerameter}>CPU :</Col>
          <Col>{details_cpu}</Col>
        </Row>
        <Row>
          <Col style={styles.textPerameter}>RAM :</Col>
          <Col>{details_ram}</Col>
        </Row>
        <Row>
          <Col style={styles.textPerameter}>ROM :</Col>
          <Col>{details_rom}</Col>
          <Row />
          <Col style={styles.textPerameter}>SIM :</Col>
          <Col>{details_sim}</Col>
        </Row>

        <Row>
          <Col style={styles.textPerameter}>DESIGN :</Col>
          <Col>{details_design}</Col>
        </Row>

        <Row>
          <Col style={styles.textPerameter}>PIN :</Col>
          <Col>{details_pin}</Col>
        </Row>
      </div>
    </div>
  );

  return (
    <Page
      renderToolbar={() => (
        <NavBar
          backButton={true}
          title={`${name_of_phone}`}
          navigator={navigator}
        />
      )}
    >
      <div style={styles.main}>{content}</div>
    </Page>
  );
};
const mapStateToProps = state => ({
  ...state.phones[state.selectedPhone]
});

export default connect(mapStateToProps)(PhonePage);
