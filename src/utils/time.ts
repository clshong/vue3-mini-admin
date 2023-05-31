export const hoursTip = () => {
  let HoursTip = ''
  const date = new Date()
  if (date.getHours() >= 6 && date.getHours() < 9) {
    HoursTip = '早上好'
  } else if (date.getHours() >= 9 && date.getHours() < 12) {
    HoursTip = '下午好'
  } else if (date.getHours() >= 12 && date.getHours() < 18) {
    HoursTip = '下午好'
  } else {
    HoursTip = '晚上好'
  }
  return HoursTip
}
