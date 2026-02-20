export interface VideoData {
    id: {
        videoId: string;
    }
    snippet: {
        publishedAt: Date;
        channelId: string;
        title: string;
        description: string;
        thumbnails: {
            default: {
                url: string;
            },
            medium: {
                url: string;
            },
            high: {
                url: string;
            }
        },
        categoryId: number;
    }
}
