import { useMediaQuery } from '@vueuse/core'
export function useMedia(){
    const isMobile = useMediaQuery('(max-width: 640px)')
    return isMobile
}