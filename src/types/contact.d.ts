export type TContact = {
    _id: string;
    name: string;
    email: string;
    phone?: string;
    message: string;
    isDeleted?: boolean;
    createdAt: string;
};
