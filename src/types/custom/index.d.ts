export interface CustomUserRequestInterface {
    username:string,
    password:string,
    email:string,
}

export interface CustomUserInterface {
    id?:number | null,
    username:string,
    password:string,
    email:string,
    is_activated:string |false;
    refreshToken:string | null;
}