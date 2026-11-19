const redirects = async () => {
  const internetExplorerRedirect = {
    destination: '/ie-incompatible.html',
    has: [
      {
        type: 'header',
        key: 'user-agent',
        value: '(.*Trident.*)', // all ie browsers
      },
    ],
    permanent: false,
    source: '/:path((?!ie-incompatible.html$).*)', // all pages except the incompatibility page
  }

  // Posts moved from /posts to /blog: keep old links and indexed URLs working.
  const postsRedirects = [
    { source: '/posts', destination: '/blog', permanent: true },
    { source: '/posts/:path*', destination: '/blog/:path*', permanent: true },
  ]

  const redirects = [internetExplorerRedirect, ...postsRedirects]

  return redirects
}

export default redirects
