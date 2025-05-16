# Snowflake Email Check Extension
This Cognigy Extension checks if an email address exists in the Snowflake `CUSTOMER` table from the sample dataset (`PTCDS_SF100TCL.TPCDS_SF100TCL.CUSTOMER`).

                          

The `Check Email in Snowflake` node takes an email address as input and returns:

- `isMatch` = `true` if the email exists
- `isMatch` = `false` otherwise

## Configuration

To use this Extension, you must define the following Secrets in Cognigy:

| Key | Description |
|-----|-------------|
| `SNOWFLAKE_ACCOUNT` | Full account identifier (e.g. `QJNSSGJ-LW96298`) |
| `SNOWFLAKE_USERNAME` | Your Snowflake login name (e.g. `AIAGENTS`) |
| `SNOWFLAKE_PASSWORD` | Your Snowflake login password |
| `SNOWFLAKE_WAREHOUSE` | Compute warehouse to use (e.g. `COMPUTE_WH`) |
| `SNOWFLAKE_DATABASE` | Database name (e.g. `PTCDS_SF100TCL`) |
| `SNOWFLAKE_SCHEMA` | Schema name (e.g. `TPCDS_SF100TCL`) |
| `SNOWFLAKE_ROLE` | (Optional) Role to use, e.g. `ACCOUNTADMIN` |

## Example Flow

1. Ask user for email address.
2. Use this node to check if the email exists.
3. Branch based on `isMatch`.



![Snowflake_Cognigy_3](https://github.com/user-attachments/assets/0394dbbd-eebe-4779-b581-d64b8eca86b7)



## Author

Dr. Franco Arda 
Cognigy AI Certified Specialist

## Disclaimer

This extension is intended for demonstration and educational purposes only.  
It queries Snowflake's public sample dataset and does not handle sensitive or personal user data.  
Do not use this extension in a production environment without proper authentication, input validation, and security hardening.

