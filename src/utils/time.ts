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

export const currentTime = () => {
  const date = new Date()
  const Y = date.getFullYear()
  let M: any = date.getMonth() + 1
  M = M < 10 ? '0' + M : M
  let D: any = date.getDate()
  D = D < 10 ? '0' + D : D
  let H: any = date.getHours()
  H = H < 10 ? '0' + H : H
  let F: any = date.getMinutes()
  F = F < 10 ? '0' + F : F
  let S: any = date.getSeconds()
  S = S < 10 ? '0' + S : S
  return Y + '-' + M + '-' + D + ' ' + H + ':' + F + ':' + S
}
