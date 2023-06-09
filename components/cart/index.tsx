import { getCart, createSession } from '#/lib';
import CartButton from './button';
import { cookies } from 'next/headers';

export default async function Cart() {
    let sessionIdUpdated = false;
    let cart;
    let sessionId = cookies().get('x-session-id')?.value;

    if (!sessionId) {
        sessionId = await createSession();
        sessionIdUpdated = true;
    }
    
    if (sessionId) {
        cart = await getCart();
    }

    return <CartButton cart={cart} sessionId={sessionId} sessionIdUpdated={sessionIdUpdated} />;
}