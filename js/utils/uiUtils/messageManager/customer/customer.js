// positionManager/customer.js
import { fetchGetCustomerById } from '../../../apiUtils/apiDocumentation/customer/customer.js';
import { MESSAGES } from '../../../../../config/constants.js';

export const renderGreeting = async () => {
  const container = document.querySelector(".container");
  const getCustomer = await fetchGetCustomerById(2003);
  const greetingConstant = MESSAGES.GREETING;
  const greeting = document.createElement("div");
  greeting.className = "greeting";

  greeting.textContent = `${getCustomer.name} ${greetingConstant} `;

  const headerLine = document.querySelector(".header-line");
  container.insertBefore(greeting, headerLine.nextSibling);
};
