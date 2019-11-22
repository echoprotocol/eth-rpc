const { EchoProvider } = require('echo-web3')

let echoProvider = null;

const getEchoProvider = async () => {
    if(!echoProvider){
        echoProvider = new EchoProvider(process.env.ECHO_WS_URL);
        await echoProvider.init();
    }

    return echoProvider
};

module.exports = {
    getEchoProvider,
}