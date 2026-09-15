import Container from './Container'

function Section({
  children,
  id,
  className = '',
}) {
  return (
    <section
      id={id}
      className={`px-6 py-24 ${className}`}
    >
      <Container>
        {children}
      </Container>
    </section>
  )
}

export default Section