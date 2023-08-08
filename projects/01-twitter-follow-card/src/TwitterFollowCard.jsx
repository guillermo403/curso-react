import { useState } from "react"

export function TwitterFollowCard({ children, username, initialIsFollowing }) {
	const [ isFollowing, setIsFollowing ] = useState(initialIsFollowing)
	
	const handleClick = () => {
		setIsFollowing(!isFollowing)
	}
	
	const text = isFollowing ? "Siguiendo" : "Seguir"
	const buttonClaassName = isFollowing
		? "tw-followCard-button is-following"
		: "tw-followCard-button"
	
	return (
		<article className="tw-followCard">
			<header className="tw-followCard-header">
				<img className="tw-followCard-avatar" alt="El avatar de midudev" src={`https://unavatar.io/twitter/${username}`} />
				<div className="tw-followCard-info">
					<strong>{children}</strong>
					<span className="tw-followCard-infoUserName">@{username}</span>
				</div>
			</header>

			<aside>
				<button
					className={buttonClaassName}
					onClick={handleClick}>
						{ text }
				</button>
			</aside>
		</article>
	)
}