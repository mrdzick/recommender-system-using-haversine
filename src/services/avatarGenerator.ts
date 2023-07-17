function generateAvatar(name: string | number) {
  const avatarUrl = `https://ui-avatars.com/api/?name=${name}&rounded=true`

  return avatarUrl
}

export { generateAvatar }