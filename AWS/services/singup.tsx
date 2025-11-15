interface SignUp {
    email:string,
    password:string,
    username:string,

}

const singUpConfig = async <T extends object>(prop:SignUp): Promise<T> => {
 const response: any = {
        user: prop,
        message: "OK"
    };
    return response as T;
}

export { singUpConfig };