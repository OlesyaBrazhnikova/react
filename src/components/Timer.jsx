import React, {useEffect, useState} from 'react';

function Timer(){
	const [time, setTime] = useState(0);
	const [timerOn, setTimerOn] = useState(false);
	
	const stylesReset = {
		backgroundColor: 'orange',
	}
	const stylesContinue = {
		backgroundColor: 'violet',
	}
	const stylesStart = {
		backgroundColor: 'green',
	}

	useEffect(() => {
		let interval = null;
	
		if (timerOn) {
		  interval = setInterval(() => {
			setTime((prevTime) => prevTime + 10);
		  }, 10);
		} else if (!timerOn) {
		  clearInterval(interval);
		}
	
		return () => clearInterval(interval);
	}, [timerOn]);

	return (
	<div className="Timers">
		<div id="btn_wrap">
			<span>{("0" + Math.floor((time / 60000) % 60)).slice(-2)}:</span>
			<span>{("0" + Math.floor((time / 1000) % 60)).slice(-2)}:</span>
			<span>{("0" + ((time / 10) % 100)).slice(-2)}</span>
		</div>
		<div id="btns">
			{!timerOn && time === 0 && (
				<button style={stylesStart} onClick={() => setTimerOn(true)}>Start</button>
			)}
			{timerOn && <button onClick={() => setTimerOn(false)}>Stop</button>}
			{!timerOn && time > 0 && (
				<button style={stylesReset} onClick={() => setTime(0)}>Reset</button>
			)}
			{!timerOn && time > 0 && (
				<button style={stylesContinue} onClick={() => setTimerOn(true)}>Continue</button>
			)}
		</div>
	</div>
	)
}
export default Timer;