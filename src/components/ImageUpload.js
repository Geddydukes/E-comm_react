import React, { useState, useEffect } from "react";
import { CloudinaryContext, Image } from "cloudinary-react";
import { fetchPhotos, openUploadWidget } from "../pages/CloudinaryService";

const ImageUpload = () => {
  const [images, setImages] = useState([]);

  const beginUpload = (tag) => {
    const uploadOptions = {
      cloudName: "geddydukes",
      tags: [tag, "anImage"],
      uploadPreset: "upload",
    };
    openUploadWidget(uploadOptions, (error, photos) => {
      if (!error) {
        console.log(photos);
        if (photos.event === "success") {
          setImages([...images, photos.info.public_id]);
        }
      } else {
        console.log(error);
      }
    });
  };

  useEffect(() => {
    fetchPhotos("image", setImages);
  }, []);

  return (
    <CloudinaryContext cloudName="geddydukes">
      <div className="images">
        <button onClick={() => beginUpload("image")}>Upload Image</button>
        <section>
          {images.map((i) => (
            <Image key={i} publicId={i} fetch-format="auto" quality="auto" />
          ))}
        </section>
      </div>
    </CloudinaryContext>
  );
};

export default ImageUpload;
