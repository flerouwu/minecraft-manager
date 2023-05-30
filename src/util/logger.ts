export function createLogger(prefix: string, color: string) {
  return log.bind(null, prefix, color)
}

export function log(prefix: string, color: string, ...message: any) {
  console.log(
    `%c${prefix}`,
    `background-color: ${color}; color: black; border-radius: 5px; padding: 0 5px; font-weight: 600;`,
    ...message,
  )
}
