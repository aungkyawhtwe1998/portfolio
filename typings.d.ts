import { Image } from 'next/image';
interface SanityBody {
    _createdAt: string;
    _id: string;
    _rev: string;
    _updatedAt: string;
}
interface Image {
    _type: "image",
    asset: {
        _ref: string;
        _type: "reference"
    };
}
export interface PageInfo extends SanityBody {
    _type: "pageInfo";
    address: string;
    backgroundInformation: string;
    email: string;
    role: string;
    heroImage: Image;
    name: string;
    phoneNumber: string;
    profileImage: Image;
}
export interface Technology extends SanityBody {
    _type: "skill";
    image: Image;
    progress: number;
    title: string;
}
export interface Skill extends SanityBody {
    _type: "skill";
    image: Image;
    progress: number;
    title: string;
}
export interface Experience extends SanityBody {
    _type: "experience";
    company: string;
    companyImage: Image;
    dateStarted: Date;
    dateEnded: Date;
    isCurrentlyWorkingHere: boolean;
    jobTitle: string;
    points: string[];
    technologies: Technology[];

}
export interface Project extends SanityBody {
    _type: "project";
    image: Image;
    title: string;
    linkToBuild: string;
    summary: string;
    technologies: Technology[];
}
export interface Social extends SanityBody {
    _type: "social";
    title: string;
    url: string;
}