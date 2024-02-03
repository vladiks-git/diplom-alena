export enum Roles {
    admin = 'admin',
    student = 'student',
    responsible = 'responsible',
}

export const RussianRoles: Record<Roles, string> = {
    [Roles.admin]: 'Администратор',
    [Roles.student]: 'Студент',
    [Roles.responsible]: 'Ответственный за тип мероприятия',
};

export const EventTypeOptions = [
    {
        label: 'культурно-творческая деятельность',
        value: 'культурно-творческая деятельность',
    },
    {
        label: 'научно-исследовательская',
        value: 'научно-исследовательская',
    },
    {
        label: 'общественная деятельность',
        value: 'общественная деятельность',
    },
    {
        label: 'спортивная деятельность',
        value: 'спортивная деятельность',
    },
];

export const EventStatuses = [
    {
        label: 'Вузовский',
        value: 'Вузовский',
    },
    {
        label: 'Городской',
        value: 'Городской',
    },
    {
        label: 'Областной',
        value: 'Областной',
    },
    {
        label: 'Всероссийский',
        value: 'Всероссийский',
    },
    {
        label: 'Международный',
        value: 'Международный',
    },
];

export const DirectionOptions = [
    {
        label: 'Информатика и вычислительная техника (09.03.01)',
        value: 'Информатика и вычислительная техника (09.03.01)',
    },
    {
        label: 'Информационные системы и технологии (09.03.02)',
        value: 'Информационные системы и технологии (09.03.02)',
    },
    {
        label: 'Информационная безопасность (10.03.01)',
        value: 'Информационная безопасность (10.03.01)',
    },
];

export const FacultiesOptions = [
    {
        label: 'Институт автоматики и информационных технологий (ИАИТ)',
        value: 'Институт автоматики и информационных технологий (ИАИТ)',
    },
];

export const GroupOptions = [
    {
        label: '02',
        value: '02',
    },
    {
        label: '12',
        value: '12',
    },
    {
        label: '04',
        value: '04',
    },
];

export const DepartamentOptions = [
    {
        label: 'Информационные технологии',
        value: 'Информационные технологии',
    },
    {
        label: 'Электронные системы и информационная безопасность',
        value: 'Электронные системы и информационная безопасность',
    },
];

export const CourseOptions = [
    {
        label: '1',
        value: '1',
    },
    {
        label: '2',
        value: '2',
    },
    {
        label: '3',
        value: '3',
    },
    {
        label: '4',
        value: '4',
    },
];
