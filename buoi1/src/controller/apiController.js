const User = require('../models/User');
const { uploadSingleFile, uploadMultipleFiles } = require('../service/fileUploadService');

const getUserAPI = async (req, res) => {
    let results = await User.find({});
    return res.status(200).json({
        message: 'ok',
        data: results
    })
}

const postUserAPI = async (req, res) => {
    let { name, email, city } = req.body;
    if (!name || !email || !city) {
        return res.status(400).json({
            message: 'missing params'
        })
    }
    let newUser = await User.create({
        name: name,
        email: email,
        city: city
    });
    return res.status(200).json({
        message: 'ok',
        data: newUser
    })
}

const putUserAPI = async (req, res) => {
    let { name, email, city } = req.body;
    let id = req.params.id;

    let user = await User.findByIdAndUpdate(id, {
        name: name,
        email: email,
        city: city
    });
    return res.status(200).json({
        message: 'ok',
        data: user
    })
}
const deleteUserAPI = async (req, res) => {
    let id = req.params.id;
    if (!id) {
        return res.status(400).json({
            message: 'missing params'
        })
    }
    let user = await User.findByIdAndDelete(id);
    if (!user) {
        return res.status(404).json({
            message: 'not found'
        })
    }
    return res.status(200).json({
        message: 'ok',
        data: user
    })
}

const uploadFileAPI = async (req, res) => {
    if (!req.files || Object.keys(req.files).length === 0) {
        return res.status(400).json({
            message: 'no files were uploaded'
        })
    }
    await uploadSingleFile(req, res, req.files.file);
}
const handleFileUploads = async (req, res) => {
    if (!req.files || Object.keys(req.files).length === 0) {
        return res.status(400).json({ message: 'No file uploaded' });
    }

    if (Array.isArray(req.files.file)) {
        await uploadMultipleFiles(req.files.file);
        return res.status(200).json({
            message: 'ok',

            path: '/images/uploads/' + req.files.file[0].name
        });

    }
    else {
        uploadFileAPI(req, res, req.files.file);

    }
}
module.exports = {
    getUserAPI, postUserAPI, putUserAPI, deleteUserAPI, uploadFileAPI, handleFileUploads
}