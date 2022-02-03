import { useCallback, useEffect } from "react"
import { io } from "socket.io-client"

export default function Home() {
	const socketHandler = useCallback((eventName, data) => {
		// Handle sockets in here...
	}, [])

	const handleSocket = (): any => {
		const socket = io({
			path: "/api/socketio",
		})

		socket.on("connect", () => {
			console.log("Socket connected 🥳")
		})

		socket.onAny(socketHandler)

		if (socket) return () => socket.disconnect()
	}

	useEffect(handleSocket, [])

	return (
		<>
			<h2>Hi 👋</h2>
		</>
	)
}
