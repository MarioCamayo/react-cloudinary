import { useState } from "react";

const View = () => {
  // Lista inicial de imágenes
  const initialImages = [
    "https://res.cloudinary.com/dnuyl1n8j/image/upload/v1742882091/Foto_de_Fabian_10_dy0ufx.jpg",
    "https://res.cloudinary.com/dnuyl1n8j/image/upload/v1742882072/Foto_de_Fabian_9_sixmji.jpg",
    "https://res.cloudinary.com/dnuyl1n8j/image/upload/v1742882060/Foto_de_Fabian_8_jcfnds.jpg",
    "https://res.cloudinary.com/dnuyl1n8j/image/upload/v1742882048/Foto_de_Fabian_7_kbd6gs.jpg",
    "https://res.cloudinary.com/dnuyl1n8j/image/upload/v1742881991/Foto_de_Fabian_3_cnka4p.jpg",
  ];

  const [imageUrls, setImageUrls] = useState(initialImages);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showAll, setShowAll] = useState(false);

  // Función para mostrar la siguiente imagen
  const nextImage = () => {
    if (imageUrls.length > 0) {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % imageUrls.length);
    }
  };

  // Función para mostrar todas las imágenes
  const showAllImages = () => {
    if (imageUrls.length === 0) {
      setImageUrls(initialImages); // Restaurar imágenes si se borraron
      setCurrentIndex(0); // Reiniciar índice
    }
    setShowAll(true);
  };

  // Función para borrar todas las imágenes
  const deleteAllImages = () => {
    setImageUrls([]); // Se eliminan las imágenes
    setShowAll(false); // Ocultar vista de "Ver Todas"
    setCurrentIndex(0); // Reiniciar índice
  };

  return (
    <div style={{ textAlign: "center", padding: "20px" }}>
      <h1>Galería de Imágenes</h1>

      {/* Mostrar una imagen individual si no está en "Ver Todas" */}
      {!showAll && imageUrls.length > 0 && (
        <div>
          <img src={imageUrls[currentIndex]} alt="Imagen actual" width="300" />
        </div>
      )}

      {/* Mostrar todas las imágenes */}
      {showAll && imageUrls.length > 0 && (
        <div>
          {imageUrls.map((url, index) => (
            <img key={index} src={url} alt={`Imagen ${index}`} width="150" style={{ margin: "10px" }} />
          ))}
        </div>
      )}

      {/* Mensaje cuando no hay imágenes */}
      {imageUrls.length === 0 && <p style={{ color: "red", fontWeight: "bold" }}>No hay imágenes en la galería.</p>}

      <br />

      {/* Botones SIEMPRE visibles */}
      <button
        onClick={nextImage}
        disabled={imageUrls.length === 0}
        style={{ margin: "10px" }}
      >
        Siguiente Imagen
      </button>
      <button onClick={showAllImages} style={{ margin: "10px" }}>
        Ver Todas
      </button>
      <button
        onClick={deleteAllImages}
        style={{ margin: "10px", background: "red", color: "white" }}
      >
        Borrar Todas
      </button>
    </div>
  );
};

export default View;
