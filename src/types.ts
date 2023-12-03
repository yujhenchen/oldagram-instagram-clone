export type PostData = {
    id: string;
    name: string;
    username: string;
    location: string;
    avatar: string;
    post: string;
    comments: CommentData[];
    likes: number;
};

export type PostCardData = PostData & {
    liked: boolean;
};

export type PostHeaderData = Pick<PostData, 'name' | 'location' | 'avatar'>;

export type CommentData = {
    username: string;
    comment: string;
};

export type ActionButtonData = {
    buttonID: string;
    iconClasses: string;
    onClick: (buttonID: string) => void;
};
