import { useSyncExternalStore } from 'react'

const emptySubscribe = () => () => {}
const getSnapshot = () => true
const getServerSnapshot = () => false

export function useIsMounted(): boolean {
    const isMounted = useSyncExternalStore(emptySubscribe, getSnapshot, getServerSnapshot)

    return isMounted
}
