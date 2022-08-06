import { format, formatDistanceToNow } from 'date-fns';

// ----------------------------------------------------------------------

export function fDate(date, type = '-') {
  if (date) {
    if (type === '-') {
      return format(new Date(date), 'dd-MM-yyyy HH:mm');
    }
    return format(new Date(date), 'dd/MM/yyyy - HH:mm');
  }
  return '';
  // return format(new Date(date), 'dd MMMM yyyy'); // tháng = chữ tiếng anh
}

export function fDateTime(date) {
  return format(new Date(date), 'dd MMM yyyy HH:mm');
}

export function fDateTimeSuffix(date) {
  return format(new Date(date), 'dd/MM/yyyy hh:mm p');
}

export function fToNow(date) {
  return formatDistanceToNow(new Date(date), {
    addSuffix: true
  });
}
