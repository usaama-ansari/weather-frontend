export type ValueOf<T> = T[keyof T];
export type GenericObject = Record<string, any>;
export type PromiseResult<SuccessType, ErrorType> = SuccessType | ErrorType;
export type GenericArrayObject = Array<Record<string, any>>;
export type ListItem<T extends Record<string, any>> = T;
