function isValidCssColor(color) {
    if (typeof color !== 'string') {
        return false;
    }

    const trimmedColor = color.trim();

    // Hexadecimális
    const hexRegex = /^#([0-9a-fA-F]{3}|[0-9a-fA-F]{6})$/;

    // RGB 
    const rgbNum = '(25[0-5]|2[0-4]\\d|1\\d{2}|[1-9]?\\d)';
    const rgbRegex = new RegExp(`^rgb\\(\\s*${rgbNum}\\s*,\\s*${rgbNum}\\s*,\\s*${rgbNum}\\s*\\)$`, 'i');

    return hexRegex.test(trimmedColor) || rgbRegex.test(trimmedColor);
}
