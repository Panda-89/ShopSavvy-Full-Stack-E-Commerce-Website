import { createClient, OAuthStrategy } from "@wix/sdk";
import { products, collections } from "@wix/stores";
import {cookies} from "next/headers"
import {orders} from "@wix/ecom"
import {members} from "@wix/members"


export const wixClientServer = async () => {
let refreshToken

try {
const cookieStore = await cookies()
refreshToken = JSON.parse(cookieStore.get("refreshToken")?.value || "{}")
} catch (e) {
  console.error(e)
}

const myWixClient = createClient({
  modules: {
    products,
    collections,
    orders,
    members
  },
  auth: OAuthStrategy({
    clientId: process.env.NEXT_PUBLIC_WIX_CLIENT_ID!,
    tokens: {
      refreshToken, accessToken:{value: "", expiresAt:0},
    },
  }),
});
return myWixClient
}