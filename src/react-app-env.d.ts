/// <reference types="react-scripts" />
//props per il Button component custom che prende un figlio (una stringa)

interface ButtonProps {
    children?: string
    onClick?: MouseEventHandler<HTMLButtonElement>
}

interface Card {
    url: string;
    title: string;
    favourite?: boolean
    id?: string
}

interface CardCollection {
    [key: string]: Card;
}