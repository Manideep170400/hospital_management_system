import { CognitoIdentityProviderClient } from "@aws-sdk/client-cognito-identity-provider";
import { createHmac } from "crypto";

interface cognitoConfig {
    userPoolId: string;
    clientId: string;
    secretkey: string;
}

// Create object (required)
const config: cognitoConfig = {
    userPoolId: "",
    clientId: "",
    secretkey: ""
};

// step 1 : setup the cognito client
const cognitoClient = new CognitoIdentityProviderClient({
    region: ""
});

interface secretHashProps {
    userName: string;
    email: string;
    password: string;
}

const secretHash = async (props: secretHashProps): Promise<string> => {

    const hmac = createHmac("sha256", config.secretkey);

    hmac.update(props.userName + props.email);

    const hash = hmac.digest("base64");

    console.log("secret hash generated", hash);

    return hash;
}

export { secretHash, cognitoClient };

