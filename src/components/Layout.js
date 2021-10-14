import React from "react";

import Header from "./Header";

const Layout = ({ children }) => {
	return (
		<div className="content">
			<Header />
			<div className="content__children">{children}</div>
		</div>
	);
};

export default Layout;
