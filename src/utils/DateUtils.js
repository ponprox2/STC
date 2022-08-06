export function getDateDiffText(date) {
  const oldDate = new Date(date);
  const diffInSecond = Math.ceil((Date.now() - oldDate.getTime()) / 1000);
  // [ ... 59]
  if (diffInSecond < 60) {
    return 'Mới vừa cập nhật gần đây';
  }
  // [60 ... 3599]
  if (59 < diffInSecond && diffInSecond < 3600) {
    return `Cập nhật ${Math.ceil(diffInSecond / 60)} phút trước`;
  }
  // [3600 ... 86399]
  if (3599 < diffInSecond && diffInSecond < 86400) {
    return `Cập nhật ${Math.ceil(diffInSecond / 3600)} giờ trước`;
  }
  // [86400 ... ]
  if (diffInSecond > 86399) {
    return `Cập nhật từ ${oldDate.getDate()}/${
      oldDate.getMonth() + 1
    }/${oldDate.getFullYear()}`;
  }
}

export function getDatePrefix(date) {
  const inputtedDate = parseInt(date.substring(0, 2));
  const inputtedMonth = parseInt(date.substring(3, 5)) - 1;
  const inputtedYear = parseInt(date.substring(6));
  const inputtedDateObject = new Date(
    inputtedYear,
    inputtedMonth,
    inputtedDate
  );
  const temp = new Date();
  const todayDate = temp.getDate();
  const todayMonth = temp.getMonth();
  const todayYear = temp.getFullYear();
  const todayDateObject = new Date(todayYear, todayMonth, todayDate);
  const diff = inputtedDateObject - todayDateObject;
  let prefix = '';
  if (-86400001 < diff && diff < 0) {
    prefix = 'Hôm qua, ';
  } else if (diff === 0) {
    prefix = 'Hôm nay, ';
  } else if (0 < diff && diff < 86400001) {
    prefix = 'Ngày mai, ';
  }
  return prefix;
}

export function getDateDiffSecond(inputtedDate) {
  const date = new Date(inputtedDate);
  const diff = date.getTime() - Date.now();
  return Math.floor(diff / 1000);
}
