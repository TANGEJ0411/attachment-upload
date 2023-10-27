import React, { useEffect, useState } from 'react'
import { MdAddCircleOutline } from 'react-icons/md';

function AttachmentUpload() {

    const [selectedFiles, setSelectedFiles] = useState([]);

    const [selectedImages, setSelectedImages] = useState([]);

    const handleRemoveFiles = (index) => {
        setSelectedFiles(selectedFiles.filter((_, i) => i !== index));
    };
    const handleRemovePreview = (index) => {
        setSelectedFiles(selectedFiles.filter((_, i) => i !== index));
    };

    const onSelectFile = (event) => {
        const selectedFiles = event.target.files;
        // console.log(selectedFiles, 'selectedFiles');
        const selectedFilesArray = Array.from(selectedFiles);
        // console.log(selectedFilesArray, 'selectedFilesArray');
        const imagesArray = selectedFilesArray.map((file) => {
            console.log(file, 'file');
            return URL.createObjectURL(file);
        });
        setSelectedFiles((previousFiles) => previousFiles.concat(selectedFilesArray));
        setSelectedImages((previousImages) => previousImages.concat(imagesArray));
    };

    useEffect(() => { console.log(selectedFiles, 'selectedFilesselectedFilesselectedFilesselectedFiles') }, [selectedFiles])

    return (
        <div className='my-p-6 bg-secondary-5 border-radius-4 d-flex flex-column gap-1'>
            <h3 className='my-m3 my-text-2'>附件</h3>
            <p className='my-t4 my-text-8'>3MB 以內的 JPG/PNG 檔案。</p>
            <div>
                <div className="comment-preview-picture d-flex m-3">
                    {selectedImages &&
                        selectedImages.map((image, index) => {
                            return (
                                <div key={image}>
                                    <div className="add-pic-box my-border-radius me-2">
                                        <label className="add-pic my-border-radius ">
                                            <input
                                                type="file"
                                                name="images"
                                                className="d-none"
                                                onChange={onSelectFile}
                                                multiple
                                            />
                                            <img
                                                src={image}
                                                alt={image}
                                                height="100"
                                                width="100"
                                            />
                                        </label>
                                    </div>
                                    <button
                                        className="my-btn my-p"
                                        onClick={() => {
                                            setSelectedImages(
                                                selectedImages.filter((e) => {
                                                    console.log(e, 'e');
                                                    return e !== image;
                                                })
                                            );
                                            handleRemoveFiles(index);
                                        }}
                                    >
                                        移除
                                    </button>
                                </div>
                            );
                        })}
                    <label className="add-pic-box my-border-radius me-2">
                        <MdAddCircleOutline />
                        <input
                            type="file"
                            name="images"
                            className="d-none"
                            onChange={onSelectFile}
                            multiple
                            accept="image/png, image/jpg, image/jpeg, image/webp"
                        />
                    </label>
                </div>
            </div>


        </div>
    )
}

export default AttachmentUpload
