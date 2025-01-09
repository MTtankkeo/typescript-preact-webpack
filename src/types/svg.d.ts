
// Signature for the svg component type because of `preact-svg-loader`.
declare module '*.svg' {
    const value: preact.FunctionComponent<preact.JSX.SVGAttributes>;
    export default value;
}

// Signature for the avif image imports that is representing the file's output path.
declare module '*.avif' {
    const value: string;
    export default value;
}

// Signature for the webp image imports that is representing the file's output path.
declare module '*.webp' {
    const value: string;
    export default value;
}

// Signature for the jpg image imports that is representing the file's output path.
declare module '*.jpg' {
    const value: string;
    export default value;
}

// Signature for the png image imports that is representing the file's output path.
declare module '*.png' {
    const value: string;
    export default value;
}