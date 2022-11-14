var locale = localStorage.getItem("locale")
  ? localStorage.getItem("locale")
  : "en";

function requiredError(fieldName) {
  if (locale == "ar") return `${fieldName} مطلوب  `;
  return `${fieldName} is required`;
}

function requiredIfError(...fileds) {
  if (locale == "ar") return `${fileds.toString()} مطلوبين معا `;
  return `${fileds.toString()} is required Together`;
}

function inputError(label) {
  if (locale == "ar") return ` ${label} غير صحيح`;
  return `${label} is not valid`;
}

function notExistError(label) {
  if (locale == "ar") return `${label}  موجود بالفعل`;
  return `${label} already exists`;
}

function minLengthError(fieldName, min) {
  if (locale == "ar") return `${fieldName} لا يمكن ان يكون اقل من  ${min} احرف`;
  return `${fieldName} can't be less than ${min} charcters`;
}

function maxLengthError(fieldName, max) {
  if (locale == "ar")
    return `${fieldName} لا يمكن ان يكون اكثر من  ${max} احرف`;
  return `${fieldName} can't be more than ${max} charcters`;
}

function minValueError(fieldName, min) {
  if (locale == "ar") return `${fieldName} لا يمكن ان يكون اقل من  ${min}`;
  return `${fieldName} can't be less than ${min}`;
}

function maxValueError(fieldName, max) {
  if (locale == "ar") return `${fieldName} لا يمكن ان يكون اكثر من  ${max}`;
  return `${fieldName} can't be more than ${max}`;
}

function alphaError(fieldName) {
  if (locale == "ar") return `${fieldName} يجب ان يكون احرف فقط `;
  return `${fieldName} must only be characters`;
}

function englishError(fieldName) {
  if (locale == "ar") return `${fieldName} يجب ان يكون احرف انجليزية فقط `;
  return `${fieldName} must only be english characters`;
}

function arabicError(fieldName) {
  if (locale == "ar") return `${fieldName} يجب ان يكون احرف عربية فقط `;
  return `${fieldName} must only be arabic characters`;
}

function numericError(fieldName) {
  if (locale == "ar") return `${fieldName} يجب ان يكون ارقام فقط `;
  return `${fieldName} must only be numbers`;
}

function alphaNumericError(fieldName) {
  if (locale == "ar") return `${fieldName} يجب ان يكون احرف او ارقام فقط `;
  return `${fieldName} must only be characters or numbers`;
}

function sameAsError(fieldName) {
  if (locale == "ar") return `${fieldName} ليس متطابق `;
  return `${fieldName} isn't matched`;
}

function htmlTagsError(fieldName) {
  if (locale == "ar") return `${fieldName}  لا يجب ان يحتوي علي HTML tags `;
  return `${fieldName} can't contain HTML tags`;
}

function imageTypeError() {
  if (locale == "ar") return `امتداد الصورة غير صحيح(.png,.jpg,.jpeg)`;
  return `Image type not valid ,allowed extensions(.png,.jpg,.jpeg)`;
}

function fileTypeError() {
  if (locale == "ar")
    return `امتداد الملف غير صحيح(.png,.jpg,.jpeg,.pdf.docx..)`;
  return `file type not valid ,allowed extensions(.png,.jpg,.jpeg)`;
}

function imageSizeError(size) {
  if (locale == "ar") return ` لايجب ان يزيد حجم الصورة عن ${size}MB`;
  return `Image size must be less than ${size}MB`;
}

function fileSizeError(size) {
  if (locale == "ar") return ` لايجب ان يزيد حجم الملق عن ${size}MB`;
  return `file size must be less than ${size}MB`;
}

function unauthorizedError() {
  if (locale == "ar")
    return `البريد الاكتروني / رقم الموبيل او كلمه المرور غير صحيح`;
  return `Email Adress / Mobile or password is not right`;
}

function notFoundError(label) {
  if (locale == "ar") return `${label} غير موجود`;
  return `${label} Not Exist`;
}

module.exports = {
  requiredError,
  requiredIfError,
  inputError,
  notExistError,
  minLengthError,
  maxLengthError,
  minValueError,
  maxValueError,
  alphaError,
  englishError,
  arabicError,
  numericError,
  alphaNumericError,
  sameAsError,
  htmlTagsError,
  imageTypeError,
  imageSizeError,
  unauthorizedError,
  notFoundError,
  fileTypeError,
  fileSizeError,
};
