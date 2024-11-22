import { BUTTON as COMMON_BUTTON } from '../../common.js'

export const BUTTON = {
  TASK: {
    EMPLOYEE: {
      MANAGEMENTPLANNING: {
        HOME: {
          DEPARTMENT_LIST: '부서 정보 관리'
        },
        DEPARTMENT_DETAIL:{
          UPDATE: COMMON_BUTTON.COMMON.UPDATE,
          DELETE: COMMON_BUTTON.COMMON.DELETE
        }
      }
    }
  }
};

export const COMBOBOX = {
  DEPARTMENT_LIST: {
    isCombo: false // 콤보박스 없음
  }
};

export const TABLE_TITLE = {
  DEPARTMENT_LIST: "부서 정보 리스트"
};

export const COLUMN_NAME = {
  DEPARTMENT_LIST: [
    "부서 번호",
    "부서 이름",
    "소속 인원",
    "부서장 이름"
  ]
};
