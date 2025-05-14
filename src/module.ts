import { createExtension } from "@cognigy/extension-tools";
import { checkEmailNode } from "./nodes/checkEmail";
import { snowflakeConnection } from "./connections/snowflakeConnection";

export default createExtension({
    nodes: [
        checkEmailNode
    ],
    connections: [
        snowflakeConnection
    ]
});
