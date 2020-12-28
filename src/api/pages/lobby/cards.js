/* eslint-disable no-unused-vars */
import axios from 'axios';

export async function getAllCardsAsync() {
  const response = await axios.get('/api/lobby/getposts');
  if (response.data.postLoad === false)
    throw new Error('포스트 불러오기에 실패했습니다.');
  return response.data.results;
}

export async function getFilterdCardsAsync(options) {
  console.log(options);
  const {
    currentTab,
    option,
    currentQuery,
    currentQueryTab,
    currentTag,
    tag,
  } = options;
  const queryList = {
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

  const queryArray = Object.values(currentQuery);
  const stringQuery = queryArray.map((ele, index) => {
    if (index === queryArray.length - 1) {
      return `${ele}`;
    }
    return `${ele}&`;
  });
  currentTag[currentTab] = tag;
  const query = stringQuery.join('');
  return { currentQuery, currentTab, currentQueryTab, query, currentTag };
}
