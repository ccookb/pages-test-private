import './input.scss'

interface InputProps {
  primary?: boolean
  backgroundColor?: string
  size?: 'small' | 'medium' | 'large'
  label: string
  onClick?: () => void
}

export const Input = ({
  primary = false,
  size = 'medium',
  backgroundColor,
  label,
  ...props
}: InputProps) => {
  const mode = primary ? 'input--primary' : 'input--secondary'
  
  return (
    <span className={['input', `input--${size}`, mode].join(' ')}>
      <label
        htmlFor={label.toLowerCase()}>{label}:</label>
      <input
        type='text'
        name={label.toLowerCase()}
        style={{ backgroundColor }}
        {...props}
      />
    </span>
  )
}
