"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getListFiles = exports.getImage = exports.getBase64 = exports.getAcceptTypeString = exports.openFileDialog = void 0;
exports.openFileDialog = function (inputRef) {
    if (inputRef.current)
        inputRef.current.click();
};
exports.getAcceptTypeString = function (acceptType, allowNonImageType) {
    if (acceptType === null || acceptType === void 0 ? void 0 : acceptType.length)
        return acceptType.map(function (item) { return "." + item; }).join(', ');
    if (allowNonImageType)
        return '';
    return 'image/*';
};
exports.getBase64 = function (file) {
    var reader = new FileReader();
    return new Promise(function (resolve) {
        reader.addEventListener('load', function () { return resolve(String(reader.result)); });
        reader.readAsDataURL(file);
    });
};
exports.getImage = function (file) {
    var image = new Image();
    return new Promise(function (resolve) {
        image.addEventListener('load', function () { return resolve(image); });
        image.src = URL.createObjectURL(file);
    });
};
exports.getListFiles = function (files, dataURLKey) {
    var promiseFiles = [];
    for (var i = 0; i < files.length; i += 1) {
        promiseFiles.push(exports.getBase64(files[i]));
    }
    return Promise.all(promiseFiles).then(function (fileListBase64) {
        var fileList = fileListBase64.map(function (base64, index) {
            var _a;
            return (_a = {},
                _a[dataURLKey] = base64,
                _a.file = files[index],
                _a);
        });
        return fileList;
    });
};
