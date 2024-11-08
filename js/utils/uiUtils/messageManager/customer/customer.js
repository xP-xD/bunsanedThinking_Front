// positionManager/customer.js
import { fetchGetCustomerName } from '../../../apiUtils/apiHandler/customer/customer.js';
import { MESSAGES } from '../../../../../config/constants.js';

export const renderGreeting = async () => {
  const container = document.querySelector(".container");
  const getCustomer = await fetchGetCustomerName();
  const greetingConstant = MESSAGES.GREETING;
  const greeting = document.createElement("div");
  greeting.className = "greeting";

  greeting.textContent = `${getCustomer.id} ${greetingConstant} `;

  const headerLine = document.querySelector(".header-line");
  container.insertBefore(greeting, headerLine.nextSibling);
};
