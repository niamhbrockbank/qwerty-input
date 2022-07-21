export default function hasUpperCase(password : string): boolean {
    for (const char of password) {
      if (char.toUpperCase() === char) {
        return true
      }
    }
    return false
  }