export const handelResponse = (data: object | string, massage = 'Ok', status = 200) => {
  const response = {
    massage,
    status,
    data
  }

  return response
}
