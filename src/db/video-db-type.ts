import { Resolutions } from '../input-output-types/video-types';

export interface VideoDBType {
    id: number;
    title: string;
    author: string;
    canBeDownloaded: boolean;
    minAgeRestriction: number | null;
    createdAt: string;
    publicationDate: string;
    availableResolutions: Resolutions[] | null;
}