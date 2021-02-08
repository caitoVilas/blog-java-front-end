export class Mensaje {

    id: number;
    email: string;
    mensaje: string;
    createAt: any;

    constructor(id: number, email: string, mensaje: string, createAt: any) {

        this.id = id;
        this.email = email;
        this.mensaje = mensaje;
        this.createAt = createAt;
    }
}
