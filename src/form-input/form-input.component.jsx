import './form-input.styles.scss'

export default function FormInput  ({label, ...OtherProps}) {
  return (
    <div className='group'>
      <input  className="form-input" {...OtherProps}/>
      <label className={`${
        OtherProps.value.length ? 'shrink' : '' 
        } form-input-label`}>{label}</label>
    </div>
  )
}
