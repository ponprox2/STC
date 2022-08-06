

export function getOperatingSystem() {
    var userAgent = navigator.userAgent || navigator.vendor || window.opera;
  
    // Windows Phone must come first because its UA also contains "Android"
    if(typeof userAgent !=="undefined"){

        if (/windows phone/i.test(userAgent)) {
            return 'Windows Phone';
          }
        
        if (/android/i.test(userAgent)) {
            return 'Android';
        }
        
          // iOS detection from: http://stackoverflow.com/a/9039885/177710
        if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) {
            return 'iOS';
        }
        if(userAgent.indexOf('Win') !== -1) return 'Windows'
        if(userAgent.indexOf('Mac') !== -1) return 'MacOS'
        if(userAgent.indexOf('Linux') !== -1) return 'Linux'
    }
    return 'unknown';
}


export function getDeviceName(){
    var userAgent = navigator.userAgent;
    if(/(tablet|ipad|playbook|silk)|(android(?!.*mobi))/i.test(userAgent)){
        return "tablet";
    }
    if(/Mobile|iP(hone|od)|Android|BlackBerry|IEMobile|Kindle|Sild-Accelerated|(hpw|web)OS|Opera M(obi|ini)/i.test(userAgent))
    {
        return "mobile";
    }
    return "desktop";
}
