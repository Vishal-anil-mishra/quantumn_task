export type Course = {
    name: string,
    subject: string,
    image: string,
    grade: string,
    gradeExtra: string,
    unitCount?: number,
    lessonCount?: number,
    topicCount?: number,
    studentCount?: number,
    startDate?: string,
    endDate?: string,
    classes: string[],
    starred: boolean,
    expired: boolean,
    isDetailsLinkActive: boolean,
    isScheduleLinkActive: boolean,
    isGradesLinkActive: boolean,
    isReportsLinkActive: boolean
};

export type LoginUser = {
    username: string,
    password: string,
    state: string,
    district: string,
    rememberMe: boolean,
    type: string,
};