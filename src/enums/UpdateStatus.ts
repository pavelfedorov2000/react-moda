export enum UpdateStatus {
    Success = 'success',
    Error = 'error',
}

export const UpdateStatuses = {
    [UpdateStatus.Success]: {
        text: 'Данные успешно обновлены'
    },
    [UpdateStatus.Error]: {
        text: 'Не удалось обновить данные'
    }
};