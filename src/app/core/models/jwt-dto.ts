export class JwtDto {

    token: string;
    bearer: string =  'Bearer';
    nombreUsuario: string;
    authorities: string[];

    constructor(token: string, nombreUsuario: string, authoritutes: string[]){

        this.token = token;
        this.nombreUsuario = nombreUsuario;
        this.authorities = authoritutes;
    }
}
