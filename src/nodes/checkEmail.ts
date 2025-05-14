import { createNodeDescriptor, INodeFunctionBaseParams } from "@cognigy/extension-tools";
import * as snowflake from "snowflake-sdk";

// Define config type
interface ICheckEmailConfig {
  emailAddress: string;
  snowflakeUsername: string;
  snowflakePassword: string;
}

// This is the correct export for a Cognigy Node
export const checkEmailNode = createNodeDescriptor({
    type: "checkEmail",
    defaultLabel: "Check Email in Snowflake",
    fields: [
        {
            key: "emailAddress",
            type: "text",
            label: "Email Address",
            params: {
                required: true
            }
        },
        {
            key: "snowflakeUsername",
            type: "text",
            label: "Snowflake Username",
            params: {
                required: true
            }
        },
        {
            key: "snowflakePassword",
            type: "text",
            label: "Snowflake Password",
            params: {
                required: true
            }
        }
    ],
    function: async function ({ cognigy, config}: INodeFunctionBaseParams) {
        const { api } = cognigy;
        const { emailAddress, snowflakeUsername, snowflakePassword } = config as ICheckEmailConfig;

        const connection = snowflake.createConnection({
            account: "QJNSSGJ-LW96298",
            username: snowflakeUsername,
            password: snowflakePassword,
            warehouse: "COMPUTE_WH",
            database: "PTCDS_SF100TCL",
            schema: "TPCDS_SF100TCL",
            role: "ACCOUNTADMIN"
        });

        try {
            await new Promise<void>((resolve, reject) => {
                connection.connect((err) => {
                    if (err) reject(err);
                    else resolve();
                });
            });

            const result: any[] = await new Promise((resolve, reject) => {
                connection.execute({
                    sqlText: `SELECT c_customer_id FROM CUSTOMER WHERE c_email_address = ? LIMIT 1`,
                    binds: [emailAddress],
                    complete: (err, _stmt, rows) => {
                        if (err) reject(err);
                        else resolve(rows || []);
                    }
                });
            });

            const matchFound = result.length > 0;
            // @ts-ignore
            api.setOutput("isMatch", matchFound);

        } catch (error: any) {
            api.log("error", `Snowflake error: ${error.message}`);
            // @ts-ignore
            api.setOutput("isMatch", false);
        } finally {
            connection.destroy(() => {});
        }
    }
});
