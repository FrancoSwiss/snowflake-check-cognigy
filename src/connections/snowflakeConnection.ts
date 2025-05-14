import { IConnectionSchema } from '@cognigy/extension-tools';

export const snowflakeConnection: IConnectionSchema = {
    type: "snowflake",
    label: "Snowflake Account",
    fields: [
        { fieldName: "snowflakeUsername"},
        { fieldName: "snowflakePassword"}
    ]
}