import { BUTTON } from '../../../../../../config/employee/financialAccountant/financialAccountant.js';
import {
  fetchGetPaymentDetail
} from "../../../../apiUtils/apiDocumentation/employee/financialAccountant/financialAccountant.js";

const paymentDetail = (data) => {
  return [
    { label: "지급 번호", value: data.id },
    { label: "지급 금액", value: data.money },
    { label: "은행 이름", value: data.bank },
    { label: "예금주", value: data.accountHolder },
    { label: "지급 계좌 번호", value: data.bankAccount },
    { label: "지급 형태", value: data.paymentType },
    { label: "지급 상태", value: data.processStatus }
  ];
}

const context = {
  HANDLE_PAYMENT_DETAIL: {
    detailGetter: paymentDetail,
    fetchGetById: fetchGetPaymentDetail,
    buttons: BUTTON.TASK.EMPLOYEE.FINANCIAL_ACCOUNTANT.HANDLE_PAYMENT_DETAIL
  }
}

export const renderDetails = async () => {
  // 세션에서 데이터 가져오기
  const selectedDataId = JSON.parse(sessionStorage.getItem("selectedDataId"));
  const type = sessionStorage.getItem("currentType");

  // 세션에 데이터가 있으면 렌더링
  if (selectedDataId) {
    const selectedData = await context[type].fetchGetById(selectedDataId);
    renderDetailsTable(selectedData);
    renderButtons();
  }
};

// 상세 정보를 테이블 형식으로 렌더링하는 함수
const renderDetailsTable = (data) => {
  const detailsTable = document.getElementById("detailsTable");

  const details = context[sessionStorage.getItem("currentType")].detailGetter(data);

  // 테이블에 각 정보를 추가
  details.forEach(detail => {
    const row = document.createElement("tr");
    if (Array.isArray(detail.value)) {
      const tableHead = document.createElement("th");
      tableHead.textContent = detail.label;

      const tableData = document.createElement("td");
      detail.value.forEach(listDetail => {
        const nestedTable = document.createElement("table");
        listDetail.forEach(item => {
          const nestedRow = document.createElement("tr")
          const labelCell = document.createElement("th");
          labelCell.textContent = item.label;

          const valueCell = document.createElement("td");
          valueCell.textContent = item.value;

          nestedRow.appendChild(labelCell);
          nestedRow.appendChild(valueCell);

          nestedTable.appendChild(nestedRow);
        });
        tableData.appendChild(nestedTable);
      });
      row.appendChild(tableHead);
      row.appendChild(tableData);
    } else {
      const labelCell = document.createElement("th");
      labelCell.textContent = detail.label;

      const valueCell = document.createElement("td");
      valueCell.textContent = detail.value;

      row.appendChild(labelCell);
      row.appendChild(valueCell);
    }
    detailsTable.querySelector("tbody").appendChild(row);
  });
};

const renderButtons = () => {
  initialButtons(context[sessionStorage.getItem("currentType")].buttons, financialAccountantTaskMapper);
};

const initialButtons = (buttonMessages, buttonActionMapper) => {
  const buttonContainer = document.getElementById("buttonContainer");
  // 객체의 각 항목을 순회하여 버튼 생성
  Object.entries(buttonMessages).forEach(([key, name]) => {
    const button = document.createElement("div");
    button.className = "button-item";
    button.textContent = name; // 버튼에 표시할 텍스트 설정

    button.addEventListener("click", buttonActionMapper[key]);

    buttonContainer.appendChild(button); // 버튼을 buttonContainer에 추가
  });
}

const handlePaymentDetail = () => {
  alert("지급 - 재무회계");
}

const cancel = () => {
  alert("취소 - 재무회계");
}

const financialAccountantTaskMapper = {
  PAY: handlePaymentDetail,
  CANCEL: cancel
}