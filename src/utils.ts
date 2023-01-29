/** 跳转hash */
export function hashGo(url: string) {
    const hash = window.location.hash.replace(/\/$/, '')
    if (url[0] === '/') {
        window.location.hash = url
    } else {
        window.location.hash = hash + '/' + url
    }
}