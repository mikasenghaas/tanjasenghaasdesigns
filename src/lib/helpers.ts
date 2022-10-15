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
