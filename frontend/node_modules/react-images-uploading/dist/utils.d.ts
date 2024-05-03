import { ImageListType } from './typings';
export declare const openFileDialog: (inputRef: any) => void;
export declare const getAcceptTypeString: (acceptType?: string[] | undefined, allowNonImageType?: boolean | undefined) => string;
export declare const getBase64: (file: File) => Promise<string>;
export declare const getImage: (file: File) => Promise<HTMLImageElement>;
export declare const getListFiles: (files: FileList, dataURLKey: string) => Promise<ImageListType>;
