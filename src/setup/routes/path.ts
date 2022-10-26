function path(root: string, sublink: string) {
	return `${root}${sublink}`;
}

// Main routes
export const PATH_PAGE = {
	home: "/",
	user: "/user",
	token: "/token",
	auction: "/auction",
	lottery: "/lottery",
	airdrop: "/airdrop",
};
// Route home
export const PATH_HOME = {
	root: PATH_PAGE.home,
};

// Route user
export const PATH_USER = {
	root: PATH_PAGE.user,
};

// Route token
export const PATH_TOKEN = {
	root: PATH_PAGE.token,
};

// Route auction
export const PATH_AUCTION = {
	root: PATH_PAGE.auction,
	create: path(PATH_PAGE.auction, "/create"),
};

// Route lottery
export const PATH_LOTTERY = {
	root: PATH_PAGE.lottery,
};

// Route airdrop
export const PATH_AIRDROP = {
	root: PATH_PAGE.airdrop,
};
