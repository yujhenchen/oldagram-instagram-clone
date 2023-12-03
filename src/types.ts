export type PostData = {
    name: string;
    username: string;
    location: string;
    avatar: string;
    post: string;
    comments: CommentData[];
    likes: number;
}

export type PostHeaderData = Pick<PostData, 'name' | 'location' | 'avatar'>;

export type CommentData = {
    username: string;
    comment: string;
};

export type ActionButtonData = {
    buttonID: string;
    iconClass: string;
    onClick: (buttonID: string) => void;
};
