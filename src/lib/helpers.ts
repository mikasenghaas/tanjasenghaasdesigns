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

export async function anchorLink(id: string, router: NextRouter) {
  let offset = 0
  if (router.pathname !== '/') {
    await router.push('/')
    offset = window.outerHeight + 20
  }
  const scrollY = window.scrollY
  const clientY = document.querySelector(`#${id}`)?.getBoundingClientRect().top
  if (scrollY !== undefined && clientY !== undefined) {
    window.scrollTo({
      top: offset + scrollY + clientY,
      behavior: 'smooth',
    })
  }
}
