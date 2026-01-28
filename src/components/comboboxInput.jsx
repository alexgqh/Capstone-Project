import { useState, useRef } from "react"
import InputBase from "./inputBase"
import Placeholder from "./placeholder"

const ComboboxInput = ({ id, caption, isRequired, placeholder, options }) => {
  const [expanded, setExpanded] = useState(false)
  const [selected, setSelected] = useState(null)
  const dropdownRef = useRef()

  function renderDropdown() {
    function renderDropdownItems() {
      return options.map((option, i) => {
        let className = "input-dropdown-item combobox-dropdown-item input-font"
        if (i < options.length - 1) {
          className += " line-beneath"
        }
        const handleClick = () => {
          setSelected(i)
          setExpanded(false)
        }
        return <div className={className} onClick={handleClick} role="option">{option}</div>
      })
    }
    return (expanded &&
      <div className="input-dropdown combobox-dropdown" ref={dropdownRef}>
        {renderDropdownItems()}
      </div>
    )
  }

  const handleClick = (e) => {
    if (dropdownRef.current?.contains(e.target)) return
    setExpanded(!expanded);
  }

  let style = {}
  if (expanded) style.zIndex = "1000"

  function renderPlaceholderOrSelected() {
    if (selected === null) {
      return <Placeholder>{placeholder}</Placeholder>
    } else {
      return <p className="input-font">{options[selected]}</p>
    }
  }

  return (
    <>
      {expanded && <div className="fullscreen-mask" onClick={() => setExpanded(false)} />}
      <InputBase id={id} className="input-dropdown-parent" caption={caption} isRequired={isRequired} onClick={handleClick} role="combobox" style={style}>
        {renderPlaceholderOrSelected()}
        {renderDropdown()}
      </InputBase>
    </>
  )
}

export default ComboboxInput