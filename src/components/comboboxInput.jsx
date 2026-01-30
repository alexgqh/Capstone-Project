import { useState, useRef } from "react"
import InputBase from "./inputBase"
import Placeholder from "./placeholder"
import IconChevron from "../assets/chevron-down-reg.svg"
import { useReserveState, useReserveDispatch } from "./context/reserveContext"

const ComboboxInput = ({ id, caption, isRequired, placeholder, options }) => {
  const [expanded, setExpanded] = useState(false)
  const idxSelected = useReserveState().occasion
  const dispatch = useReserveDispatch()
  const dropdownRef = useRef()

  function renderDropdown() {
    function renderDropdownItems() {
      return options.map((option, i) => {
        let className = "input-font input-dropdown-item combobox-dropdown-item"
        if (i < options.length - 1) {
          className += " line-beneath"
        }
        if (i === idxSelected) {
          className += " combobox-dropdown-item-active"
        }
        const handleClick = () => {
          dispatch({ type: "setOccasion", value: i })
          setExpanded(false)
        }
        return <div className={className} onClick={handleClick} role="option" key={"dropdown-option-"+i}>{option}</div>
      })
    }
    return (expanded &&
      <div className="input-dropdown combobox-dropdown" ref={dropdownRef}>
        {renderDropdownItems()}
      </div>
    )
  }

  function renderPlaceholderOrSelected() {
    if (idxSelected === null) {
      return <Placeholder>{placeholder}</Placeholder>
    } else {
      return <p className="input-font">{options[idxSelected]}</p>
    }
  }

  const handleClick = (e) => {
    if (dropdownRef.current?.contains(e.target)) return
    setExpanded(!expanded)
  }

  let style = {}
  if (expanded) style.zIndex = "1000"

  return (
    <>
      {expanded && <div className="fullscreen-mask" onClick={() => setExpanded(false)} />}
      <InputBase id={id} className="input-dropdown-parent" caption={caption} isRequired={isRequired} onClick={handleClick} role="combobox" style={style}>
        <div className="input-flex input-combobox">
          {renderPlaceholderOrSelected()}
          <img src={IconChevron} alt="Downward-pointing chevron" />
        </div>
        {renderDropdown()}
      </InputBase>
    </>
  )
}

export default ComboboxInput