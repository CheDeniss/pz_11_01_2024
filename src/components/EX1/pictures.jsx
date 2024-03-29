import React from 'react';
import './styles.css'

const Gallery = () => {

    const galleryArr = [
        "https://upload.wikimedia.org/wikipedia/commons/a/af/Vincent_Van_Gogh_-_The_Potato_Eaters.png",
        "https://upload.wikimedia.org/wikipedia/commons/8/89/VanGogh-Houses_Seen_from_the_Back.jpg",
        "https://upload.wikimedia.org/wikipedia/commons/f/f9/Vincent_Willem_van_Gogh_016.jpg",
        "https://upload.wikimedia.org/wikipedia/commons/9/9f/Toulouse-Lautrec_de_Henri_Vincent_van_Gogh_Sun.jpg",
        "https://upload.wikimedia.org/wikipedia/commons/8/8b/Vincent_van_Gogh_-_Herfstlandschap_%281885%29.jpg",
        "https://upload.wikimedia.org/wikipedia/commons/b/b6/Gogh4.jpg"
    ]


    return (
        <div>
            <h2>Галерея</h2>
            <ul className="gallery">
                {
                    galleryArr.map((src, index) => (
                        <li key={index}><img height={600} className="gallery-item" src={src} alt="Picture"/></li>
                    ))
                }

            </ul>
        </div>
    );
};

export default Gallery;
