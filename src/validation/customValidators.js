// const space="/(\s)+/g"
// const special_chars=/(!|@|#|\$|%|\^|\*|\+|-|&|\(|\)|\[|\]|\\|~|\.|;|:|\?|<|>|`|,)+/g;
// const user_name_chars=/(!|@|#|\$|%|\^|\*|\+|&|\(|\)|\[|\]|\\|~|\.|;|:|\?|<|>|`|,)+/g;
const html_tags = /(<\w*>.*<\/\w*>|<\w*>|<\/\w*>)+/g;
// const numbers= /^(\d+|\d{1,3}(,\d{3})*)(\.\d+)?\b$/g;
const date = /^(\d{4}-\d{2}-\d{2})$/g;
const time_ = /^(\d{1,2}:\d{1,2}(:\d{1,2})?)$/g;
const alpha_ = /[^\u0621-\u064Aa-zA-Z ]+/g;
const english_ = /[^a-zA-Z ]+/g;
const arabic_ = /[^\u0621-\u064A ]+/g;
// const numeric =/[^0-9\u0660-\u0669]+/g ;
const alphaNumeric_ = /[^\u0621-\u064Aa-zA-Z0-9\u0660-\u0669 ]+/g

// const strength= /^(\d{1,4}(\/|\:|\-)\d{1,5})$|^(\d{1,4})$/g; 

// function notContainsSpaceBetween(value){
//     if (value.search(space) != -1)
//         return false; 
//     return true;
// }
function alpha(value) {
    if (value == "" || value == null)
        return true
    if (value.search(alpha_) == -1)
        return true;
    return false
}

function english(value) {
    if (value == "" || value == null)
        return true
    if (value.search(english_) == -1)
        return true;
    return false
}

function arabic(value) {
    if (value == "" || value == null)
        return true
    if (value.search(arabic_) == -1)
        return true;
    return false
}

// function numeric(value){
//     if (value == "" || value == null )
//         return true 
//     if (value.search(numeric) ==-1)
//        return true ;
//     return false
// }
function alphaNumeric(value) {
    if (value == "" || value == null)
        return true
    if (value.search(alphaNumeric_) == -1)
        return true;
    return false
}

function notValidDate(value) {
    if (value == "" || value == null || !value)
        return false
    if (typeof(value) == 'object') {
        if (value.toISOString().split('T')[0].search(date) != -1)
            return false;
    }
    if (value.search(date) != -1)
        return false;
    return true;
}

function time(value) {
    if (value == "" || value == null)
        return true
    if (value.search(time_) != -1)
        return false;
    return true
}
// function notContainsSpecialChars (value){
//     if (value.search(special_chars) !=-1)
//         return false;
//     return true;
// }
function notContainsHtmlTags(value) {
    if (value == "" || value == null)
        return true ; 
    if (value.search(html_tags) != -1)
        return false;
    return true;
}
// function notValidUserName(value){
//     if (value.search(user_name_chars) !=-1)
//         return false
//     return true
// }
// function notNumber(value){
//     if (value.search(numbers) !=-1)
//         return false
//     return true
// }
// validate files 
function validateFile(val) {
    let isValidExtension = false;

    if (val.name.endsWith('jpg') || val.name.endsWith('jpeg') || val.name.endsWith('png') || val.name.endsWith('bmp')) {
        isValidExtension = true;
    } else if (val.name.endsWith('pdf')) {
        isValidExtension = true;
    } else if (val.name.endsWith('docx')) {
        isValidExtension = true
    } else {
        isValidExtension = false;
    }
    return isValidExtension

}


function customvalidateFile(val) {
    let isValidExtension = false;
    let isValidSize = false;
    let type = "";
    if (val.name.endsWith('jpg') || val.name.endsWith('jpeg') || val.name.endsWith('png') || val.name.endsWith('bmp')) {
        isValidExtension = true;
        type = "image";
    } else if (val.name.endsWith('pdf')) {
        isValidExtension = true;
        type = "pdf";
    } else if (val.name.endsWith('docx')) {
        isValidExtension = true;
        type = "docx";
    } else { isValidExtension = false; }
    if (val.size > 5000000) { isValidSize = false } //5000000 10mb
    else { isValidSize = true }
    return { source: URL.createObjectURL(val), name: val.name, size: val.size, validExtension: isValidExtension, type: type, validSize: isValidSize, rawFile: val };


}



function fileExtension(val) {
    let isValidExtension = false;
    if (val.name.endsWith('jpg') || val.name.endsWith('jpeg') || val.name.endsWith('png') || val.name.endsWith('bmp')) {
        isValidExtension = true;
    } else if (val.name.endsWith('pdf')) {
        isValidExtension = true;
    } else if (val.name.endsWith('docx') || val.name.endsWith("ppt") || val.name.endsWith("pptx") || val.name.endsWith("doc") || val.name.endsWith("txt")) {
        isValidExtension = true;
    } else if (val.name.endsWith('mp4') || val.name.endsWith('mov') || val.name.endsWith('avi') || val.name.endsWith('mkv') || val.name.endsWith('webm')) {
        isValidExtension = true;
    } else {
        isValidExtension = false;
    }
    return isValidExtension

}

function fileSize(val, fileSize, imageSize, videoSize) {
    if (val.name.endsWith('jpg') || val.name.endsWith('jpeg') || val.name.endsWith('png') || val.name.endsWith('bmp')) {
        if (val.size < imageSize)
            return true
    } else if (val.name.endsWith('pdf') || val.name.endsWith('docx') || val.name.endsWith("ppt") || val.name.endsWith("pptx") || val.name.endsWith("doc") || val.name.endsWith("txt")) {
        if (val.size < fileSize)
            return true
    } else if (val.name.endsWith('mp4') || val.name.endsWith('mov') || val.name.endsWith('avi') || val.name.endsWith('mkv') || val.name.endsWith('webm')) {
        if (val.size < videoSize)
            return true
    }
    return false

}

//media validator 

function mediaValidator(val) {
    let isValidExtension = false;

    if (val.name.endsWith('jpg') || val.name.endsWith('jpeg') || val.name.endsWith('png') || val.name.endsWith('bmp')) {
        isValidExtension = true;
    } else if (val.name.endsWith('mp4') || val.name.endsWith('mov') || val.name.endsWith('avi') || val.name.endsWith('mkv') || val.name.endsWith('webm')) {
        isValidExtension = true;
    }

    return isValidExtension
}



// validate image 
function imageType(value) {
    if (value == "" || value == null)
        return true
    if (value.name) {
        if (value.name.endsWith('jpg') || value.name.endsWith('jpeg') || value.name.endsWith('png') || value.name.endsWith('bmp'))
            return true
    } else {
        if (value.type.endsWith('jpg') || value.type.endsWith('jpeg') || value.type.endsWith('png') || value.type.endsWith('bmp'))
            return true
    }
    return false
}


function imageSize(value, size) {
    // console.log(size)

    if (value == "" || value == null)
        return true
    if (value.size < size)
        return true
    return false
}

function meidaSize(value, imageSize, videoSize) {
    if (value == "" || value == null)
        return true
    if (value.name.endsWith('jpg') || value.name.endsWith('jpeg') || value.name.endsWith('png') || value.name.endsWith('bmp')) {
        if (value.size < imageSize)
            return true
    } else if (value.name.endsWith('mp4') || value.name.endsWith('mov') || value.name.endsWith('avi') || value.name.endsWith('mkv') || value.name.endsWith('webm')) {
        if (value.size < videoSize)
            return true
    }
    return false
}
module.exports = {
    // notContainsSpecialChars,
    // notValidUserName,
    // notNumber,
    // numeric,
    notContainsHtmlTags,
    alpha,
    arabic,
    english,
    alphaNumeric,
    validateFile,
    notValidDate,
    time,
    imageType,
    imageSize,
    fileExtension,
    fileSize,
    mediaValidator,
    meidaSize,
    customvalidateFile: customvalidateFile


}