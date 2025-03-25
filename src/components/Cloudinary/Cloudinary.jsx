import { useState } from "react";
export const Cloudinary = () => {

    const [file, setFile] = useState(null);
    const [mediaUrl, setMediaUrl] = useState("");
  
    const handleUpload = async () => {
      if (!file) return alert("Selecciona un archivo");

      const formData = new FormData();
      formData.append("file", file);
      formData.append("upload_preset",import.meta.env.VITE_UPLOAD_PRESET);
  
      const response = await fetch(
        `https://api.cloudinary.com/v1_1/${import.meta.env.VITE_CLOUD_NAME}/upload`,
        {
          method: "POST",
          body: formData,
        }
      );
  
      const data = await response.json();
      setMediaUrl(data.secure_url);
    };

   
 
  
    return (
      <div style={{ textAlign: "center", padding: "20px" }}>
        <h1>Subir Imagen o Video a Cloudinary</h1>
        <input type="file" onChange={(e) => setFile(e.target.files[0])} />
        <button onClick={handleUpload}>Subir</button>
  
        {mediaUrl && (
          <div style={{ marginTop: "20px" }}>
            {file?.type.includes("image") ? (
              <img src={mediaUrl} alt="Imagen de postres" width="300" />
            ) : (
              <video width="300" controls>
                <source src={mediaUrl} type={file.type} />
              </video>
            )}
          </div>
        )}
      </div>
    );
  
}
