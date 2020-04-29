interface ServiceInit {
    status: 'init';
}
interface ServiceLoading {
    status: 'loading';
}
export interface ServiceLoaded<T> {
    status: 'loaded';
    payload: T;
}
interface ServiceError {
    status: 'error';
    error: Error;
}
export type IService<T> =
    | ServiceInit
    | ServiceLoading
    | ServiceLoaded<T>
    | ServiceError;