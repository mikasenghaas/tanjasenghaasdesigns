import type { NextRouter } from "next/router"

export function capitalise(s: string) {
  return s.substring(0, 1).toUpperCase() + s.substring(1, s.length)
}

export function routeToMenuItem(route: string, menuItems: string[]) {
  for (let i = 0; i < menuItems.length; i++) {
    if (route.includes(menuItems[i])) {
      return menuItems[i]
    }

  }
  return 'nope'
}



function timeout(ms: number) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

export async function anchorLink(id: string, router: NextRouter) {
  if (router.pathname !== '/') {
    await router.push('/')
    await timeout(500)
  }
  const scrollY = window.scrollY
  const clientY = document.querySelector(`#${id}`)?.getBoundingClientRect().top
  const offset = 100
  if (scrollY !== undefined && clientY !== undefined) {
    window.scrollTo({
      top: scrollY + clientY - offset,
      behavior: 'smooth'
    })
  }
}
