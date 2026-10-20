export interface Orden {
    id: number;
    userId: number;
    title: string;
    body: string;

    precio: number;
    cantidad: number;
    stock: number;
}