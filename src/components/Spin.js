import { Hearts } from 'react-loader-spinner'
import { useDispatch, useSelector } from 'react-redux'
import React from 'react'
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'
const Spin = (props) => {
	const spinner = useSelector((state) => state.appReducer.loading)

	return (
		<div className="loader-styles">
			<Hearts color="#00BFFF" visible={spinner} height={80} width={80} />
		</div>
	)
}

export default Spin
