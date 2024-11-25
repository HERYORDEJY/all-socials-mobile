// For Make Log on Develop Mode
export const logOnDev = (key: string = "", message: string) => {
    if (__DEV__) {
        console.log(`\n\n ${key} :>> \t\t', ${message} , '\n\n---`);
    }
};
