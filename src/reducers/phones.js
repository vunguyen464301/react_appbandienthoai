import { RECEIVE_PHONE, REMOVE_PHONE } from '../actions';

const phone = action => {
  return {
    id_phone: action.id_phone,
    name_of_phone: action.name_of_phone,
    id_company: action.id_company,
    img: action.img,
    price: action.price,
    operating_system: action.operating_system,
    details_display: action.details_display,
    details_camera: action.details_camera,
    details_cpu: action.details_cpu,
    details_ram: action.details_ram,
    details_rom: action.details_rom,
    details_sim: action.details_sim,
    details_design: action.details_design,
    details_pin: action.details_pin,
    action: action
  };
};

const phones = (state = {}, action) => {
  switch (action.type) {
    case RECEIVE_PHONE:
      return {
        ...state,
        [action.id_phone]: phone(action)
      };
    case REMOVE_PHONE:
      //  console.log(rest);
      //  delete rest[action.id];
      //  delete rest[5]
      //  delete rest[4]
      //  giá trị trả về là {} thì sẽ không có dữ liệu ghi đè lên
      //  kết quả là mới hoàn toàn
      return {};
    default:
      return state;
  }
};

export default phones;
