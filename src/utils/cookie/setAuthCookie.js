import cookies from './initialize'

export const setAuthCookie = (username, gender, token) =>
  cookies.set(
    'loggedInAs',
    {
      username,
      gender,
      token,
    },
    ['/', Date.now() + 3600 * 60],
  )
