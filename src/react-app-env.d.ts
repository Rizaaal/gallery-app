/// <reference types="react-scripts" />
//props per il Button component custom che prende un figlio (una stringa)

interface TextLabel {
    children?: string
    onClick?: any
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