import { createLinkToken, exchangePublicToken } from "@/lib/actions/user.actions"
import Image from "next/image"
import { useRouter } from "next/navigation"
import React, { useCallback, useEffect, useState } from 'react'
import { PlaidLinkOnSuccess, PlaidLinkOptions, usePlaidLink } from "react-plaid-link"

const PlaidLink = ({user, variant}: PlaidLinkProps ) => {

    const router = useRouter()
    
    const [token, setToken] = useState("")

    useEffect(() => {
        const getLinkToken = async () => {
           const data =  await createLinkToken(user) 
            setToken(data?.linkToken)
        }

        getLinkToken()
    }, [user])

    const onSuccess = useCallback<PlaidLinkOnSuccess>(async ( public_token : string ) => {
        await exchangePublicToken({
            publicToken: public_token,
            user
        })
        router.push("/")
    }, [user])

    const config : PlaidLinkOptions = {
        token,
        onSuccess
    }

    const { open, ready } = usePlaidLink(config)
  return (
    <>
        {variant === "primary" ? (
            <button onClick={() => open()} disabled={!ready} className="plaidlink-primary py-2">Connect Bank</button>
        ) : variant === "ghost" ? (
            <button onClick={()=> open()} className="plaidlink-ghost">
                <Image src="/icons/connect-bank.svg" alt="connect bank" height={24} width={24} />
                <p className="hidden text-[16px] font-semibold text-black-2 xl:block">
                Connect Bank
                </p>
            </button>
        ) : (
            <button onClick={()=> open()} className="plaidlink-default">
                <Image src="/icons/connect-bank.svg" alt="connect bank" height={24} width={24} />
                <p className="text-[16px] font-semibold text-black-2">
                Connect Bank
                </p>
            </button>
        )}
    </>
  )
}

export default PlaidLink