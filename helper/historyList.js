const histoyList = (historyData, allUser) => {
  const dataFil = historyData.results.map((data) => {
    const fil = allUser.results.filter((item) => item.id === data.anotherUserId || item.id === data.userId);
    const dataRes = { ...fil[0], ...data };
    return dataRes;
  });
  const results = dataFil.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
  return results;
};

export default histoyList;
