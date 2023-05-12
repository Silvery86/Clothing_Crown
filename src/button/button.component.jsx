import './button.styles.scss'

const BUTTON_TYPE_CLASS = {
    google: 'google-sign-in',
    inverted: 'inverted'
}

export default function Button({children, buttonType, ...OtherProps}) {
  return (
    <button className={`button-container ${BUTTON_TYPE_CLASS[buttonType]}`} 
    {...OtherProps} >
        {children}
    </button>
  )
}
