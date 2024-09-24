const ImageList = ({ images }) => {
    const renderedImages = images.map((image, index) => (
        <img key={index} src={image.urls.regular} alt={`image-${index}`} />
    ));

    return <>{renderedImages}</>;
};

export default ImageList;
