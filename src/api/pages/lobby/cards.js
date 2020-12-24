/* eslint-disable */
import axios from 'axios';

export async function getCardsAsync(options) {
  let { currentTab, option, currentQuery, currentQueryTab } = options;
  let queryList = {
    sort: `sort=${option}`,
    housingType: `housingType=${option}`,
    space: `space=${option}`,
    roomSize: `roomSize=${option}`,
    color: `color=${option}`,
  };

  if (!currentQueryTab.includes(currentTab)) {
    currentQueryTab.push(currentTab);
    currentQuery[currentTab] = `${queryList[currentTab]}`;
  } else {
    currentQuery[currentTab] = `${queryList[currentTab]}`;
  }

  let queryArray = Object.values(currentQuery);
  let stringQuery = queryArray.map((ele, index) => {
    if (index === queryArray.length - 1) {
      return `${ele}`;
    } else {
      return `${ele}&`;
    }
  });
  let query = stringQuery.join('');
  return { currentQuery, currentTab, currentQueryTab, query };

  //   const response = await axios.get(`/api/user_cards?`);
  //   console.log(response.data);
  //   return response.data;
}
