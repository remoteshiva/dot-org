"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importStar(require("react"));
var react_router_dom_1 = require("react-router-dom");
var livingroom_png_1 = __importDefault(require("../assets/images/livingroom.png"));
function App() {
    return (react_1.default.createElement("div", null,
        react_1.default.createElement(ApplicationShell, null)));
}
exports.default = App;
function Home() {
    return (react_1.default.createElement("span", null,
        react_1.default.createElement("h1", null, "BELOW IS A TOGGLE"),
        react_1.default.createElement(SimpleToggle, null)));
}
function LandingContent() {
    return (react_1.default.createElement("div", { className: "flex flex-col text-50 content-center justify-center align-middle" },
        react_1.default.createElement("h1", { className: "flex text-5xl content-center justify-center align-middle" }, "Experience shiva digitally."),
        react_1.default.createElement("br", null),
        react_1.default.createElement("p", { className: "text-2xl" }, "We're here to help mourners unable to hold a traditional shiva connect with loved ones online.")));
}
function ApplicationShell() {
    return (react_1.default.createElement("div", null,
        react_1.default.createElement("div", { className: "bg-gray-800 pb-32", style: {
                backgroundImage: "url(" + livingroom_png_1.default + ")",
                backgroundSize: 'cover',
            } },
            react_1.default.createElement("nav", { style: { backgroundColor: '#ffffff' } },
                react_1.default.createElement("div", { className: "max-w-8xl mx-auto sm:px-6 lg:px-8" },
                    react_1.default.createElement("div", { className: "border-b border-gray-700" },
                        react_1.default.createElement("div", { className: "flex items-center justify-between h-16 px-4 sm:px-0" },
                            react_1.default.createElement("div", { className: "flex items-center" },
                                react_1.default.createElement("div", { className: "flex-shrink-0" }, "logo goes here"),
                                react_1.default.createElement("div", { className: "hidden md:block" },
                                    react_1.default.createElement("div", { className: "ml-10 flex items-baseline" }, "this is a bar of naviation"))),
                            react_1.default.createElement("div", { className: "hidden md:block" },
                                react_1.default.createElement("div", { className: "ml-4 flex items-center md:ml-6" },
                                    react_1.default.createElement("button", { type: "button", className: "p-1 border-2 border-transparent text-gray-400 rounded-full hover:text-white focus:outline-none focus:text-white focus:bg-gray-700", "aria-label": "Notifications" },
                                        react_1.default.createElement("svg", { className: "h-6 w-6", stroke: "currentColor", fill: "none", viewBox: "0 0 24 24" },
                                            react_1.default.createElement("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "2", d: "M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" }))),
                                    react_1.default.createElement("div", { className: "ml-3 relative" },
                                        react_1.default.createElement("div", null,
                                            react_1.default.createElement("button", { type: "button", className: "max-w-xs flex items-center text-sm rounded-full text-white focus:outline-none focus:shadow-solid", id: "user-menu", "aria-label": "User menu", "aria-haspopup": "true" },
                                                react_1.default.createElement("img", { className: "h-8 w-8 rounded-full", src: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80", alt: "" }))),
                                        react_1.default.createElement("div", { className: "origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg" },
                                            react_1.default.createElement("div", { className: "py-1 rounded-md bg-white shadow-xs" }))))),
                            react_1.default.createElement("div", { className: "-mr-2 flex md:hidden" },
                                react_1.default.createElement("button", { type: "button", className: "inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:bg-gray-700 focus:text-white" },
                                    react_1.default.createElement("svg", { className: "block h-6 w-6", stroke: "currentColor", fill: "none", viewBox: "0 0 24 24" },
                                        react_1.default.createElement("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "2", d: "M4 6h16M4 12h16M4 18h16" })),
                                    react_1.default.createElement("svg", { className: "hidden h-6 w-6", stroke: "currentColor", fill: "none", viewBox: "0 0 24 24" },
                                        react_1.default.createElement("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "2", d: "M6 18L18 6M6 6l12 12" }))))))),
                react_1.default.createElement("div", { className: "hidden border-b border-gray-700 md:hidden" },
                    react_1.default.createElement("div", { className: "px-2 py-3 sm:px-3" },
                        react_1.default.createElement(react_router_dom_1.BrowserRouter, null,
                            react_1.default.createElement(react_router_dom_1.Link, { className: "px-3 py-2 rounded-md text-sm font-medium text-white bg-gray-900 focus:outline-none focus:text-white focus:bg-gray-700", to: "/" }, "Home"),
                            react_1.default.createElement("br", null),
                            react_1.default.createElement(react_router_dom_1.Link, { className: "ml-4 px-3 py-2 rounded-md text-sm font-medium text-gray-300 hover:text-white hover:bg-gray-700 focus:outline-none focus:text-white focus:bg-gray-700", to: "/about" }, "About"),
                            react_1.default.createElement("br", null),
                            react_1.default.createElement(react_router_dom_1.Link, { className: "ml-4 px-3 py-2 rounded-md text-sm font-medium text-gray-300 hover:text-white hover:bg-gray-700 focus:outline-none focus:text-white focus:bg-gray-700", to: "/topics" }, "Topics"),
                            react_1.default.createElement(react_router_dom_1.Switch, null,
                                react_1.default.createElement(react_router_dom_1.Route, { path: "/about" },
                                    react_1.default.createElement(About, null)),
                                react_1.default.createElement(react_router_dom_1.Route, { path: "/topics" },
                                    react_1.default.createElement(Topics, null)),
                                react_1.default.createElement(react_router_dom_1.Route, { path: "/" },
                                    react_1.default.createElement(Home, null))))),
                    react_1.default.createElement("div", { className: "pt-4 pb-3 border-t border-gray-700" },
                        react_1.default.createElement("div", { className: "flex items-center px-5" },
                            react_1.default.createElement("div", { className: "flex-shrink-0" },
                                react_1.default.createElement("img", { className: "h-10 w-10 rounded-full", src: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80", alt: "" })),
                            react_1.default.createElement("div", { className: "ml-3" },
                                react_1.default.createElement("div", { className: "text-base font-medium leading-none text-white" }, "Tom Cook"),
                                react_1.default.createElement("div", { className: "mt-1 text-sm font-medium leading-none text-gray-400" }, "tom@example.com"))),
                        react_1.default.createElement("div", { className: "mt-3 px-2", role: "menu", "aria-orientation": "vertical", "aria-labelledby": "user-menu" },
                            react_1.default.createElement("ul", null,
                                react_1.default.createElement("li", null, "hello")))))),
            react_1.default.createElement("header", { className: "py-10 flex justify-center align-middle" },
                react_1.default.createElement("div", { className: "flex flex-col max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" },
                    react_1.default.createElement(LandingContent, null)))),
        react_1.default.createElement(CenteredCard, { content: react_1.default.createElement(Content, null) })));
}
function Content() {
    return react_1.default.createElement("div", null, "Hello");
}
function CenteredCard(_a) {
    var content = _a.content;
    return (react_1.default.createElement("main", { className: "-mt-32" },
        react_1.default.createElement("div", { className: "max-w-7xl mx-auto pb-12 px-4 sm:px-6 lg:px-8" },
            react_1.default.createElement("div", { className: "bg-white rounded-lg shadow px-5 py-6 sm:px-6" },
                react_1.default.createElement("div", { className: "border-4 border-dashed border-gray-200 rounded-lg h-96" },
                    react_1.default.createElement("div", { className: "text-center content-center justify-center" }, content))))));
}
function SimpleToggle() {
    var _a = react_1.useState(false), isOn = _a[0], setIsOn = _a[1];
    return (react_1.default.createElement("span", { role: "checkbox", "aria-checked": isOn, tabIndex: 0, onClick: function () { return setIsOn(!isOn); }, onKeyDown: function () { return setIsOn(!isOn); }, className: (isOn ? 'bg-indigo-600' : 'bg-gray-200') + " relative inline-block flex-shrink-0 h-6 w-11 border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none focus:shadow-outline" },
        react_1.default.createElement("span", { "aria-hidden": "true", className: (isOn ? 'translate-x-5' : 'translate-x-0') + " inline-block h-5 w-5 rounded-full bg-white shadow transform transition ease-in-out duration-200" })));
}
function About() {
    return react_1.default.createElement("h2", null, "About");
}
function Topics() {
    var match = react_router_dom_1.useRouteMatch();
    return (react_1.default.createElement("div", null,
        react_1.default.createElement("h2", null, "Topics"),
        react_1.default.createElement("ul", null,
            react_1.default.createElement("li", null,
                react_1.default.createElement(react_router_dom_1.Link, { to: match.url + "/components" }, "Components")),
            react_1.default.createElement("li", null,
                react_1.default.createElement(react_router_dom_1.Link, { to: match.url + "/props-v-state" }, "Props v. State"))),
        react_1.default.createElement(react_router_dom_1.Switch, null,
            react_1.default.createElement(react_router_dom_1.Route, { path: match.path + "/:topicId" },
                react_1.default.createElement(Topic, null)),
            react_1.default.createElement(react_router_dom_1.Route, { path: match.path },
                react_1.default.createElement("h3", null, "Please select a topic.")))));
}
function Topic() {
    var topicId = react_router_dom_1.useParams().topicId;
    return react_1.default.createElement("h3", null, "Requested topicId: " + topicId);
}
