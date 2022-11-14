
function hideEmail(email) {
  let term1 = email.split("@")[0];
  term1 = term1.slice(0, 3) + term1.slice(3).replace(/.(?=..)/g, "*");
  let term2 = email.split("@")[1];
  return `${term1}@${term2}`;
}
function hidePhone(phone) {
  return (phone = phone.slice(0, 4) + phone.slice(4).replace(/.(?=..)/g, "*"));
}










module.exports = {
  hideEmail,
  hidePhone,
};
