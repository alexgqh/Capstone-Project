import InputBase from "./inputBase"
import Placeholder from "./placeholder"

const ComboboxInput = ({ id, caption, isRequired, placeholder, options }) => {
  function renderOptions() {
    return options.map((option, i) => {
      let className = "input-dropdown-item combobox-dropdown-item input-font"
      if (i < options.length - 1) {
        className += " line-beneath"
      }
      return <div className={className}>{option}</div>
    })
  }
  return (
    <>
      <InputBase id={id} className="input-dropdown-parent" caption={caption} isRequired={isRequired} role="combobox">
        <Placeholder>{placeholder}</Placeholder>
        <div className="input-dropdown combobox-dropdown">
          {renderOptions()}
        </div>
      </InputBase>
    </>
  )
}

export default ComboboxInput