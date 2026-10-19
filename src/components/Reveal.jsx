export function Reveal({ as: Tag = 'div', className = '', delay = 0, children, ...props }) {
  return (
    <Tag
      className={`reveal ${className}`}
      data-reveal
      style={{ '--reveal-delay': `${delay}ms` }}
      {...props}
    >
      {children}
    </Tag>
  )
}
