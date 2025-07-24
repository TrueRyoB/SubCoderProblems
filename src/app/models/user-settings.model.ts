export interface UserSettings {
    iconIndex: number; //TODO: アイコンのデータベースを作成する
    displayName: string;
    message?: string;
    nationality?: 'JP' | 'US'; //TODO: 国籍のデータベースを作成する
    contributionRank?: number;
    atcoderId?: string;
    twitterId?: string;
    // isAdmin?: boolean;
    // isBanned?: boolean;
    // isVerified?: boolean;
    // theme?: 'light' | 'dark';
}