/* eslint-disable no-unused-vars */
const histoyList = (historyData, allUser) => {
  const dataFil = historyData.results.map((data, index) => {
    const fil = allUser.results.filter((item) => item.id === data.userId);
    const dataRes = { ...fil[0], ...data };
    return dataRes;
  });
  // console.log('test', dataFil)
  return dataFil;
};

export default histoyList;
