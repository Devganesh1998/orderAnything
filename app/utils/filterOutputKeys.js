module.exports = (response = {}, filterKeys = []) =>
    filterKeys.forEach((key) => {
        delete response[key];
    });
