// utils/cookies.ts

export function setCookie(name: string, value: string, options: { [key: string]: any } = {}) {
    const { expires, path = "/" } = options;
    const expiresDate = expires ? new Date(Date.now() + expires * 1000).toUTCString() : undefined;
    const cookieString = `${name}=${value}; expires=${expiresDate}; path=${path}`;
    document.cookie = cookieString;
  }
  
  export function getCookie(name: string): string | null {
    const match = document.cookie.match(new RegExp('(^| )' + name + '=([^;]+)'));
    return match ? match[2] : null;
  }
  
  export function deleteCookie(name: string) {
    document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/`;
  }
  