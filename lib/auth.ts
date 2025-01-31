// This is a mock authentication service
// Replace with your actual authentication implementation

export interface User {
  id: string
  name: string
  email: string
  photo?: string
}

export const auth = {
  user: null as User | null,

  async login(email: string, password: string) {
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000))

    // Mock successful login
    this.user = {
      id: "1",
      name: "Nagananda",
      email: email,
      photo: "/placeholder.svg",
    }

    // Set mock cookie
    document.cookie = "auth_token=mock_token; path=/"

    return this.user
  },

  async register(data: { name: string; email: string; password: string; phone: string }) {
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000))

    // Mock successful registration
    this.user = {
      id: "1",
      name: data.name,
      email: data.email,
      photo: "/placeholder.svg",
    }

    // Set mock cookie
    document.cookie = "auth_token=mock_token; path=/"

    return this.user
  },

  async logout() {
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000))

    // Clear mock cookie
    document.cookie = "auth_token=; path=/; expires=Thu, 01 Jan 1970 00:00:01 GMT"

    this.user = null
  },

  async getUser() {
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000))

    return this.user
  },
}

