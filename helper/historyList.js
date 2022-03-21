const histoyList = (historyData, allUser) => {
  const dataFil = historyData.results.map((data, index) => {
    const image = allUser.results.filter(item => item.id === data.userId)
    const dataRes = {...image, ...data}
    return dataRes;
  })
  // console.log('test', dataFil)
  return dataFil
}

export default histoyList;
