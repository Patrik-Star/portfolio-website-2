import { StaticImageData } from "next/image";
import { links } from "./data";

export type SectionName = typeof links[number]["name"];

export type TestimonialItemType = {
    Name: string;
    title: string;
    body: string;
    image: StaticImageData | string;
    link?: string;
    jobPosition: string;
    index?: number;
}