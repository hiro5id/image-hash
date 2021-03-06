export default interface Resizer {
    resize(source: Uint8ClampedArray, nativeWidth: number, nativeHeight: number, expectedWidth: number, expectedHeight: number): Uint8ClampedArray;
}