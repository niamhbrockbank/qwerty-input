export default function hasLowerCase(password : string): boolean {
    for (const char of password) {
      if (char.toLowerCase() === char) {
        return true
      }
    }
    return false
  }