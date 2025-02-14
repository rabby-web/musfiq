export type TBlog = {
    _id: string;
    title: string;
    thumbnail: string;
    category: string;
    publishedDate: Date;
    authorName: string;
    introduction: string;
    mainContent: string;
    tags?: string[];
    isDeleted?: boolean;
    createdAt: string;
};
