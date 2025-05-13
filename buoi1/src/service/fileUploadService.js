const path = require('path');
const fs = require('fs');
const { error } = require('console');

const uploadSingleFile = async (req, res) => {
    if (!req.files || Object.keys(req.files).length === 0) {
        return res.status(400).json({ message: 'No file uploaded' });
    }

    let file = req.files.file;

    // Di chuyển về thư mục gốc của project rồi vào public/images/uploads
    const uploadDir = path.resolve(__dirname, '..', 'public', 'images', 'uploads');

    if (!fs.existsSync(uploadDir)) {
        fs.mkdirSync(uploadDir, { recursive: true });
    }

    const safeFileName = Date.now() + '-' + file.name;

    const uploadPath = path.join(uploadDir, safeFileName);

    file.mv(uploadPath, (err) => {
        if (err) return res.status(500).send(err);

        return res.status(200).json({
            message: 'ok',
            path: '/images/uploads/' + safeFileName,
            data: safeFileName
        });
    });
};
const uploadMultipleFiles = async (filesArr) => {
     try {
        let uploadPath = path.join(__dirname, '..', 'public', 'images', 'uploads');
        let resultArr = [];
        let countSuccess = 0;
        for (let i = 0; i < filesArr.length; i++) {
            let extname = path.extname(filesArr[i].name);
            let filename = filesArr[i].name.replace(extname, '') + '-' + Date.now() + extname;
            let filePath = path.join(uploadPath, filename);

            
            try{
                await filesArr[i].mv(filePath);
                resultArr.push({
                    message: 'ok',
                    path: '/images/uploads/' + filename,
                    data: filename,
                    error: null
                });
                countSuccess++;
            }
            catch (error) {
                resultArr.push({
                    status: 'failed',
                    path: null,
                    data: null, 
                    error: error
                });    
        }
        }

     } catch (error) {
        console.log('Error uploading files:', error);
        return res.status(500).json({
            message: 'Error uploading files',
            error: error.message
        });
        
     }
 }

module.exports = {
    uploadSingleFile,
    uploadMultipleFiles
}