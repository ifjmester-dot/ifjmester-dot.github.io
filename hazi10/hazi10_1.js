export function createImageBox(imagePath, captionText) {
    const frame = document.createElement('figure');
    frame.classList.add('image-box');

    const img = document.createElement('img');
    img.src = imagePath;
    img.alt = captionText;

    const caption = document.createElement('figcaption');
    caption.textContent = captionText;

    frame.appendChild(img);
    frame.appendChild(caption);

    return frame;
}