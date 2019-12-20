import React, { useContext } from "react"
import mapContext from "../../mapContext"
import StyledResetButton from "./styles"

const ResetButton = () => {
	const {
		selectedCountry,
		selectedRegion,
		setSelectedCountry,
		setSelectedRegion,
	} = useContext(mapContext)

	const handleClick = () => {
		setSelectedCountry("All")
		setSelectedRegion("All")
	}

	// Only show the reset button if an option has
	// been selected for country or region
	if (selectedCountry !== "All" || selectedRegion !== "All") {
		return (
			<StyledResetButton
				onClick={handleClick}
				type="button"
				aria-hidden
			>
				<svg
					width="16px"
					height="16px"
					viewBox="0 0 16 16"
					focusable="false"
				>
					<title>Reset map</title>

					<path d="M15.196,0.083 L11.329,0.083 C10.949,0.083 10.641,0.393 10.641,0.773 L12.229,2.367 L10.312,4.284 C10.12,4.476 10.024,4.727 10.024,4.979 C10.024,5.231 10.12,5.482 10.312,5.674 C10.695,6.058 11.318,6.058 11.703,5.674 L13.617,3.759 L15.196,5.344 C15.576,5.344 15.883,5.034 15.883,4.654 L15.883,0.773 C15.883,0.393 15.576,0.083 15.196,0.083 L15.196,0.083 Z" />
					<path d="M15.192,10.645 L13.573,12.257 L11.621,10.305 C11.236,9.92 10.614,9.92 10.229,10.305 C9.845,10.689 9.845,11.311 10.229,11.695 L12.18,13.645 L10.62,15.199 C10.62,15.579 10.929,15.886 11.31,15.886 L15.191,15.886 C15.572,15.886 15.881,15.579 15.881,15.199 L15.881,11.333 C15.883,10.951 15.573,10.645 15.192,10.645 L15.192,10.645 Z" />
					<path d="M3.758,2.359 L5.342,0.78 C5.342,0.4 5.031,0.093 4.651,0.093 L0.771,0.093 C0.39,0.093 0.081,0.4 0.081,0.78 L0.081,4.646 C0.081,5.027 0.391,5.334 0.771,5.334 L2.366,3.747 L4.335,5.715 C4.527,5.908 4.778,6.004 5.029,6.004 C5.282,6.004 5.532,5.908 5.725,5.715 C6.108,5.332 6.108,4.709 5.725,4.326 L3.758,2.359 L3.758,2.359 Z" />
					<path d="M4.951,9.645 L2.361,12.235 L0.767,10.634 C0.388,10.634 0.079,10.944 0.079,11.324 L0.079,15.205 C0.079,15.586 0.388,15.895 0.767,15.895 L4.634,15.895 C5.013,15.895 5.321,15.585 5.321,15.205 L3.75,13.627 L6.342,11.035 C6.727,10.65 6.727,10.029 6.342,9.644 C5.959,9.261 5.336,9.261 4.951,9.645 L4.951,9.645 Z" />
				</svg>
			</StyledResetButton>
		)
	}

	return null
}

export default ResetButton
