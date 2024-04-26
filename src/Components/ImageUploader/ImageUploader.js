import React, { useState, useRef } from "react";
import DefaultImage from "../../image/logo192.png";
import EditIcon from "../../image/pngtree-gallery-logo-icon-design-template-vector-png-image_1048785.jpg";
import UploadingAnimation from "../../image/pngtree-gallery-logo-icon-design-template-vector-png-image_1048785.jpg";

const ImageUploader = () => {
  const [avatarURL, setAvatarURL] = useState(DefaultImage);

  const fileUploadRef = useRef();

  const handleImageUpload = (event) => {
    event.preventDefault();
    fileUploadRef.current.click();
  };

  const uploadImageDisplay = async () => {
    try {
      setAvatarURL(UploadingAnimation);
      const uploadedFile = fileUploadRef.current.files[0];
      // const cachedURL = URL.createObjectURL(uploadedFile);
      // setAvatarURL(cachedURL);
      const formData = new FormData();
      formData.append("file", uploadedFile);

      const response = await fetch(
        "https://api.escuelajs.co/api/v1/files/upload",
        {
          method: "post",
          body: formData,
        }
      );

      if (response.status === 201) {
        const data = await response.json();
        alert(data.location);
        console.log(data);
        setAvatarURL(data?.location);
      }
    } catch (error) {
      console.error(error);
      setAvatarURL(DefaultImage);
    }
  };

  return (
    <div className="relative h-96 w-96 m-8">
      <img src={avatarURL} alt="Avatar" className="h-96 w-96 rounded-full" />

      <form id="form" encType="multipart/form-data">
        <button
          type="submit"
          onClick={handleImageUpload}
          className="flex-center absolute bottom-12 right-14 h-9 w-9 rounded-full"
        >
          <img
            style={{ width: "120px" }}
            src={EditIcon}
            alt="Edit"
            className="object-cover"
          />
        </button>
        <h6>Select Image *</h6>
        <input
          type="file"
          id="file"
          ref={fileUploadRef}
          onChange={uploadImageDisplay}
          hidden
        />
      </form>
    </div>
  );
};

export default ImageUploader;
