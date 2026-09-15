function Button({
  children,
  href,
  variant = 'primary',
}) {
  const styles = {
    primary:
      'bg-blue-600 text-white hover:bg-blue-500 shadow-lg shadow-blue-600/20',
    
    secondary:
      'border border-blue-500/50 text-white hover:bg-blue-500/10 hover:border-blue-400',
  }

  const className = `
    inline-flex items-center justify-center
    rounded-lg px-6 py-3
    font-semibold
    transition duration-300
    ${styles[variant]}
  `

  if (href) {
    return (
      <a href={href} className={className}>
        {children}
      </a>
    )
  }

  return (
    <button className={className}>
      {children}
    </button>
  )
}

export default Button