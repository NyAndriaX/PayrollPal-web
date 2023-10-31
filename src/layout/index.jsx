import React, { lazy, Suspense } from "react";
import SidebarLeft from "../components/Sidebar/SidebarLeft.jsx";
import { useUserData } from "../context/authentification/userContext.jsx";
import NotFoundPage from "../pages/NotFound.jsx";
import { Routes, Route, Navigate } from "react-router-dom";
import Loading from "../components/common/loading.jsx";
import "./index.css";

const pageConfig = {
	ROLES_ADMIN: [
		{
			path: "/",
			component: lazy(() => import("../pages/admin/dashboard/dashboard")),
		},
		{
			path: "/dashboard",
			component: lazy(() => import("../pages/admin/dashboard/dashboard")),
		},
		{
			path: "/Listes des entreprises",
			component: lazy(() => import("../pages/admin/companyList/companyList")),
		},
		{
			path: "/Validation des freelances",
			component: lazy(() => import("../pages/admin/freelWait/freelWait.page")),
		},
		{
			path: "/Placement",
			component: lazy(() => import("../pages/admin/placement/Placement.jsx")),
		},
		{
			path: "/Paramétre",
			component: lazy(() => import("../pages/admin/settings/setting.page.jsx")),
		},
	],
	ROLES_FREELANCE: [
		// {
		// 	path: "/",
		// 	component: () => import("../pages/freelancer/dashboard/dashboard"),
		// },
	],
	ROLES_COMPANY: [
		// { path: "/", component: () => import("../pages/company/company.page") },
	],
};

const HomeLayout = () => {
	const { data } = useUserData();
	const userType = data.infosUsers?.roles;

	const allowedPages = pageConfig[userType];

	if (!allowedPages) {
		return <Navigate to="/unauthorized" replace />;
	}

	return (
		<>
			<SidebarLeft />
			<div className="content">
				<Routes>
					{allowedPages.map((page) => (
						<Route
							key={page.path}
							path={page.path}
							element={
								<Suspense fallback={<Loading />}>
									<page.component />
								</Suspense>
							}
						/>
					))}
					<Route path="/unauthorized" element={<NotFoundPage />} />
				</Routes>
			</div>
		</>
	);
};

export default HomeLayout;
