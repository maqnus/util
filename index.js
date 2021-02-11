const greetings = (name) => console.log(`greetings ${name}`);

const base64ToBlob = (base64, mimeType = '') => {
  const byteString = atob(base64);
  const arrayBuffer = new ArrayBuffer(byteString.length);
  const byteArray = new Uint8Array(arrayBuffer);
  for (let i = 0; i < byteString.length; i++) {
    byteArray[i] = byteString.charCodeAt(i);
  }
  return new Blob([arrayBuffer], {type: mimeType});
}

const downloadBlob = async (blob) => {
  const url = URL.createObjectURL(blob);
  window.open(url);
};

const setCookie = (cname, cvalue, exdays) => {
  var d = new Date();
  d.setTime(d.getTime() + exdays * 24 * 60 * 60 * 1000);
  var expires = "expires=" + d.toUTCString();
  document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

const getCookie = (cname) => {
  var name = cname + "=";
  var decodedCookie = decodeURIComponent(document.cookie);
  var ca = decodedCookie.split(";");
  for (var i = 0; i < ca.length; i++) {
    var c = ca[i];
    while (c.charAt(0) === " ") {
      c = c.substring(1);
    }
    if (c.indexOf(name) === 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}

const eraseCookie = (cname) => {
  document.cookie = cname + "=; Max-Age=-99999999;";
}

module.exports = {
  greetings,
  base64ToBlob,
  downloadBlob,
  setCookie,
  getCookie,
  eraseCookie,
}