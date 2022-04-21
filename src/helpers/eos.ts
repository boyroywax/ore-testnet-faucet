import { JsonRpc } from 'eosjs'

export const oreTestNetEndpoint: {url: string} = {
    url: "https://ore-staging.openrights.exchange:443"
};

export async function getOreBalance(accountName: string): Promise<string> {
    let balance: string = "0.0000"
    const rpc = new JsonRpc(oreTestNetEndpoint.url)
    console.log(accountName)
    console.log(rpc)
    try {
        const balances = await rpc.get_currency_balance('eosio.token', accountName, 'ORE')
        // console.log(await fetch(oreTestNetEndpoint.url))
        console.log(balances)
        if (balances.length === 0) {
            return balance
        }
        else {
            balance = balances[0]
        }
    }
    catch (err) {
        console.error(err)
    }
    return balance
}
