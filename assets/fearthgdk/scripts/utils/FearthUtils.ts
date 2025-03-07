export class FearthUtils {
    public static string2Number(str: string, defaultValue: number): number{
        const num = Number(str);
        return isNaN(num) ? defaultValue : num;
    }
}
