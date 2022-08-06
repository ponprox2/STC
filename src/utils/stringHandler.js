const StringHandler = {
  capitalizeFirstLetter(string = '') {
    if (!string) return '';
    return string.charAt(0).toUpperCase() + string.slice(1);
  },
  RemoveWhiteSpace(text) {
    return text.replace(/ /g, '');
  },
  UppercaseString(text) {
    return text.toUpperCase();
  },
  removeAscent(str) {
    if (str === null || str === undefined) return str;
    str = str.toLowerCase();
    str = str.replace(/à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ/g, 'a');
    str = str.replace(/è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ/g, 'e');
    str = str.replace(/ì|í|ị|ỉ|ĩ/g, 'i');
    str = str.replace(/ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ/g, 'o');
    str = str.replace(/ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ/g, 'u');
    str = str.replace(/ỳ|ý|ỵ|ỷ|ỹ/g, 'y');
    str = str.replace(/đ/g, 'd');
    str = str.replace(/\s+/g, ' ');
    str.trim();
    return str;
  },
  // Return a sign-removed string version of inputted param
  RemoveVietnameseSigns(text) {
    let result = '';
    const regexForA = /(à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ|À|Á|Ạ|Ả|Ã|Â|Ầ|Ấ|Ậ|Ẩ|Ẫ|Ă|Ằ|Ắ|Ặ|Ẳ|Ẵ)/;
    const regexForE = /(è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ|È|É|Ẹ|Ẻ|Ẽ|Ê|Ề|Ế|Ệ|Ể|Ễ)/;
    const regexForI = /(ì|í|ị|ỉ|ĩ|Ì|Í|Ị|Ỉ|Ĩ)/;
    const regexForO = /(ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ|Ò|Ó|Ọ|Ỏ|Õ|Ô|Ồ|Ố|Ộ|Ổ|Ỗ|Ơ|Ờ|Ớ|Ợ|Ở|Ỡ)/;
    const regexForU = /(ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ|Ù|Ú|Ụ|Ủ|Ũ|Ư|Ừ|Ứ|Ự|Ử|Ữ)/;
    const regexForY = /(ỳ|ý|ỵ|ỷ|ỹ|Ỳ|Ý|Ỵ|Ỷ|Ỹ)/;
    const regexForD = /(đ|Đ)/;
    for (let i = 0; i < text.length; i++) {
      let char = text.charAt(i);
      let isUpperCase = char == char.toUpperCase();
      if (regexForA.test(char)) {
        if (isUpperCase) {
          char = 'A';
        } else {
          char = 'a';
        }
      } else if (regexForE.test(char)) {
        if (isUpperCase) {
          char = 'E';
        } else {
          char = 'e';
        }
      } else if (regexForI.test(char)) {
        if (isUpperCase) {
          char = 'I';
        } else {
          char = 'i';
        }
      } else if (regexForO.test(char)) {
        if (isUpperCase) {
          char = 'O';
        } else {
          char = 'o';
        }
      } else if (regexForU.test(char)) {
        if (isUpperCase) {
          char = 'U';
        } else {
          char = 'u';
        }
      } else if (regexForY.test(char)) {
        if (isUpperCase) {
          char = 'Y';
        } else {
          char = 'y';
        }
      } else if (regexForD.test(char)) {
        if (isUpperCase) {
          char = 'D';
        } else {
          char = 'd';
        }
      }
      result += char;
    }
    return result;
  },
  HandleStringForCounterKey(text) {
    let result = this.RemoveWhiteSpace(text);
    result = this.UppercaseString(result);
    result = this.RemoveVietnameseSigns(result);
    return result;
  },
  RemoveUnderlined(text) {
    return text.toLowerCase().replace(/[-_]/gi, ' ') || '';
  },
  getParamsFromString(propsLocationSearch) {
    let result = {};
    if (propsLocationSearch) {
      propsLocationSearch = propsLocationSearch.substring(1).split('&');
      for (let i = 0; i < propsLocationSearch.length; i++) {
        const temp = propsLocationSearch[i].split('=');
        result[temp[0]] = temp[1];
      }
    }
    return result;
  },
  showEcomPhoneNumber(phoneNumber) {
    if (phoneNumber) {
      const prefix = '(+84) ';
      if (phoneNumber.slice(0, 3) === '+84' && phoneNumber.length === 12) {
        return `${prefix}${phoneNumber.slice(3)}`;
      }
      if (phoneNumber.slice(0, 2) === '84' && phoneNumber.length === 11) {
        return `${prefix}${phoneNumber.slice(2)}`;
      }
      if (phoneNumber.slice(0, 1) === '0' && phoneNumber.length === 10) {
        return `${prefix}${phoneNumber.slice(1)}`;
      }
      if (phoneNumber.length === 9) {
        return `${prefix}${phoneNumber}`;
      }
    } else return phoneNumber;
  },
  getParamFromUrl(param) {
    const url_string = window.location.href;
    const url = new URL(url_string);
    return url.searchParams.get(param);
  }
};
export default StringHandler;
