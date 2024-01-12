import { TestimonialItemType } from "./types";

export const validateString = (value: unknown, maxLength: number) => {
    if (!value || typeof value !== "string" || value.length > maxLength) {
        return false;
    }
    return true;
}

export const getErrorMessage = (err: unknown): string => {
    let message: string;

    if (err instanceof Error) {
        message =  err.message

    }else if (err && typeof err === 'object' && 'message' in err){
        message = String(err.message)

    }else if(typeof err === "string"){
        message = err
        
    }else{
        message = "something went wrong"
    }

    return message
}

export const shuffleArray = (array: any) => {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
};