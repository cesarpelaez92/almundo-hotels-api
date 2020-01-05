exports.success = function (req, res, data, status){
    res.status(status || 200).json(data);
}

exports.error = function (req, res, message, status){
    res.status(status || 500).send({
        error: message
    });
}