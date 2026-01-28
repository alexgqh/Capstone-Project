import InputBase from "./inputBase"
import Placeholder from "./placeholder"

const ComboboxInput = ({ id, caption, isRequired, placeholder, options }) => {
  return (
    <>
      <InputBase id={id} className="input-dropdown-parent" caption={caption} isRequired={isRequired} role="combobox">
        <Placeholder>{placeholder}</Placeholder>
        <div className="input-dropdown combobox-dropdown">

        </div>
      </InputBase>
    </>
  )
}

export default ComboboxInput