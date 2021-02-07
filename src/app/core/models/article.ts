export class Article {

    id: number;
    title: string;
    author: string;
    content: string;
    image: string;
    createAt: any;

    constructor(id: number, title: string, author: string,content: string, image: string, createAt: any){

        this.id = id;
        this.title = title;
        this.author = author;
        this.content = content;
        this.image = image;
        this.createAt = createAt;
    }
}