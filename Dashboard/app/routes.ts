import { type RouteConfig, index } from "@react-router/dev/routes";
import {route} from '@react-router/dev/routes';
//export default [index("routes/navigator.tsx")] satisfies RouteConfig;

export default [
    route("", "routes/homePage.tsx"),
    route("details", "routes/detailsPage.tsx"),
    route("search", "routes/searchPage.tsx"),
] satisfies RouteConfig;

