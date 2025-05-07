/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "(pages-dir-node)/./src/components/layout/Layout.js":
/*!*****************************************!*\
  !*** ./src/components/layout/Layout.js ***!
  \*****************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Layout)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"(pages-dir-node)/./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @mui/material/styles */ \"(pages-dir-node)/./node_modules/@mui/material/node/styles/index.js\");\n/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_mui_material_styles__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _barrel_optimize_names_AppBar_Avatar_Box_Divider_Drawer_IconButton_List_ListItem_ListItemButton_ListItemIcon_ListItemText_Menu_MenuItem_Toolbar_Typography_mui_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! __barrel_optimize__?names=AppBar,Avatar,Box,Divider,Drawer,IconButton,List,ListItem,ListItemButton,ListItemIcon,ListItemText,Menu,MenuItem,Toolbar,Typography!=!@mui/material */ \"(pages-dir-node)/__barrel_optimize__?names=AppBar,Avatar,Box,Divider,Drawer,IconButton,List,ListItem,ListItemButton,ListItemIcon,ListItemText,Menu,MenuItem,Toolbar,Typography!=!./node_modules/@mui/material/index.js\");\n/* harmony import */ var _barrel_optimize_names_AccountCircle_Assessment_Category_ChevronLeft_Dashboard_ExitToApp_Inventory_Menu_People_ShoppingCart_mui_icons_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! __barrel_optimize__?names=AccountCircle,Assessment,Category,ChevronLeft,Dashboard,ExitToApp,Inventory,Menu,People,ShoppingCart!=!@mui/icons-material */ \"(pages-dir-node)/__barrel_optimize__?names=AccountCircle,Assessment,Category,ChevronLeft,Dashboard,ExitToApp,Inventory,Menu,People,ShoppingCart!=!./node_modules/@mui/icons-material/esm/index.js\");\n/* harmony import */ var _context_AuthContext__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../context/AuthContext */ \"(pages-dir-node)/./src/context/AuthContext.jsx\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_context_AuthContext__WEBPACK_IMPORTED_MODULE_3__]);\n_context_AuthContext__WEBPACK_IMPORTED_MODULE_3__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\n\n\n\n\n\nconst drawerWidth = 240;\nconst Main = (0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_4__.styled)('main', {\n    shouldForwardProp: (prop)=>prop !== 'open'\n})(({ theme, open })=>({\n        flexGrow: 1,\n        padding: theme.spacing(3),\n        transition: theme.transitions.create('margin', {\n            easing: theme.transitions.easing.sharp,\n            duration: theme.transitions.duration.leavingScreen\n        }),\n        marginLeft: `-${drawerWidth}px`,\n        ...open && {\n            transition: theme.transitions.create('margin', {\n                easing: theme.transitions.easing.easeOut,\n                duration: theme.transitions.duration.enteringScreen\n            }),\n            marginLeft: 0\n        }\n    }));\nconst AppBarStyled = (0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_4__.styled)(_barrel_optimize_names_AppBar_Avatar_Box_Divider_Drawer_IconButton_List_ListItem_ListItemButton_ListItemIcon_ListItemText_Menu_MenuItem_Toolbar_Typography_mui_material__WEBPACK_IMPORTED_MODULE_5__.AppBar, {\n    shouldForwardProp: (prop)=>prop !== 'open'\n})(({ theme, open })=>({\n        transition: theme.transitions.create([\n            'margin',\n            'width'\n        ], {\n            easing: theme.transitions.easing.sharp,\n            duration: theme.transitions.duration.leavingScreen\n        }),\n        ...open && {\n            width: `calc(100% - ${drawerWidth}px)`,\n            marginLeft: `${drawerWidth}px`,\n            transition: theme.transitions.create([\n                'margin',\n                'width'\n            ], {\n                easing: theme.transitions.easing.easeOut,\n                duration: theme.transitions.duration.enteringScreen\n            })\n        }\n    }));\nconst DrawerHeader = (0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_4__.styled)('div')(({ theme })=>({\n        display: 'flex',\n        alignItems: 'center',\n        padding: theme.spacing(0, 1),\n        ...theme.mixins.toolbar,\n        justifyContent: 'flex-end'\n    }));\nfunction Layout({ children }) {\n    const [open, setOpen] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true);\n    const [anchorEl, setAnchorEl] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    const { user, logout } = (0,_context_AuthContext__WEBPACK_IMPORTED_MODULE_3__.useAuth)();\n    const handleDrawerOpen = ()=>{\n        setOpen(true);\n    };\n    const handleDrawerClose = ()=>{\n        setOpen(false);\n    };\n    const handleMenu = (event)=>{\n        setAnchorEl(event.currentTarget);\n    };\n    const handleClose = ()=>{\n        setAnchorEl(null);\n    };\n    const handleProfile = ()=>{\n        handleClose();\n        router.push('/profile');\n    };\n    const handleLogout = ()=>{\n        handleClose();\n        logout();\n    };\n    const menuItems = [\n        {\n            text: 'Dashboard',\n            icon: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_AccountCircle_Assessment_Category_ChevronLeft_Dashboard_ExitToApp_Inventory_Menu_People_ShoppingCart_mui_icons_material__WEBPACK_IMPORTED_MODULE_6__.Dashboard, {}, void 0, false, {\n                fileName: \"D:\\\\Year 3 Term 1 Code\\\\web_final_project\\\\ecommerce-project\\\\frontend\\\\src\\\\components\\\\layout\\\\Layout.js\",\n                lineNumber: 114,\n                columnNumber: 32\n            }, this),\n            path: '/dashboard'\n        },\n        {\n            text: 'Users',\n            icon: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_AccountCircle_Assessment_Category_ChevronLeft_Dashboard_ExitToApp_Inventory_Menu_People_ShoppingCart_mui_icons_material__WEBPACK_IMPORTED_MODULE_6__.People, {}, void 0, false, {\n                fileName: \"D:\\\\Year 3 Term 1 Code\\\\web_final_project\\\\ecommerce-project\\\\frontend\\\\src\\\\components\\\\layout\\\\Layout.js\",\n                lineNumber: 115,\n                columnNumber: 28\n            }, this),\n            path: '/users'\n        },\n        {\n            text: 'Categories',\n            icon: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_AccountCircle_Assessment_Category_ChevronLeft_Dashboard_ExitToApp_Inventory_Menu_People_ShoppingCart_mui_icons_material__WEBPACK_IMPORTED_MODULE_6__.Category, {}, void 0, false, {\n                fileName: \"D:\\\\Year 3 Term 1 Code\\\\web_final_project\\\\ecommerce-project\\\\frontend\\\\src\\\\components\\\\layout\\\\Layout.js\",\n                lineNumber: 116,\n                columnNumber: 33\n            }, this),\n            path: '/categories'\n        },\n        {\n            text: 'Products',\n            icon: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_AccountCircle_Assessment_Category_ChevronLeft_Dashboard_ExitToApp_Inventory_Menu_People_ShoppingCart_mui_icons_material__WEBPACK_IMPORTED_MODULE_6__.Inventory, {}, void 0, false, {\n                fileName: \"D:\\\\Year 3 Term 1 Code\\\\web_final_project\\\\ecommerce-project\\\\frontend\\\\src\\\\components\\\\layout\\\\Layout.js\",\n                lineNumber: 117,\n                columnNumber: 31\n            }, this),\n            path: '/products'\n        },\n        {\n            text: 'Orders',\n            icon: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_AccountCircle_Assessment_Category_ChevronLeft_Dashboard_ExitToApp_Inventory_Menu_People_ShoppingCart_mui_icons_material__WEBPACK_IMPORTED_MODULE_6__.ShoppingCart, {}, void 0, false, {\n                fileName: \"D:\\\\Year 3 Term 1 Code\\\\web_final_project\\\\ecommerce-project\\\\frontend\\\\src\\\\components\\\\layout\\\\Layout.js\",\n                lineNumber: 118,\n                columnNumber: 29\n            }, this),\n            path: '/orders'\n        },\n        {\n            text: 'Reports',\n            icon: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_AccountCircle_Assessment_Category_ChevronLeft_Dashboard_ExitToApp_Inventory_Menu_People_ShoppingCart_mui_icons_material__WEBPACK_IMPORTED_MODULE_6__.Assessment, {}, void 0, false, {\n                fileName: \"D:\\\\Year 3 Term 1 Code\\\\web_final_project\\\\ecommerce-project\\\\frontend\\\\src\\\\components\\\\layout\\\\Layout.js\",\n                lineNumber: 119,\n                columnNumber: 30\n            }, this),\n            path: '/reports'\n        }\n    ];\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_AppBar_Avatar_Box_Divider_Drawer_IconButton_List_ListItem_ListItemButton_ListItemIcon_ListItemText_Menu_MenuItem_Toolbar_Typography_mui_material__WEBPACK_IMPORTED_MODULE_5__.Box, {\n        sx: {\n            display: 'flex'\n        },\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(AppBarStyled, {\n                position: \"fixed\",\n                open: open,\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_AppBar_Avatar_Box_Divider_Drawer_IconButton_List_ListItem_ListItemButton_ListItemIcon_ListItemText_Menu_MenuItem_Toolbar_Typography_mui_material__WEBPACK_IMPORTED_MODULE_5__.Toolbar, {\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_AppBar_Avatar_Box_Divider_Drawer_IconButton_List_ListItem_ListItemButton_ListItemIcon_ListItemText_Menu_MenuItem_Toolbar_Typography_mui_material__WEBPACK_IMPORTED_MODULE_5__.IconButton, {\n                            color: \"inherit\",\n                            \"aria-label\": \"open drawer\",\n                            onClick: handleDrawerOpen,\n                            edge: \"start\",\n                            sx: {\n                                mr: 2,\n                                ...open && {\n                                    display: 'none'\n                                }\n                            },\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_AccountCircle_Assessment_Category_ChevronLeft_Dashboard_ExitToApp_Inventory_Menu_People_ShoppingCart_mui_icons_material__WEBPACK_IMPORTED_MODULE_6__.Menu, {}, void 0, false, {\n                                fileName: \"D:\\\\Year 3 Term 1 Code\\\\web_final_project\\\\ecommerce-project\\\\frontend\\\\src\\\\components\\\\layout\\\\Layout.js\",\n                                lineNumber: 133,\n                                columnNumber: 13\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"D:\\\\Year 3 Term 1 Code\\\\web_final_project\\\\ecommerce-project\\\\frontend\\\\src\\\\components\\\\layout\\\\Layout.js\",\n                            lineNumber: 126,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_AppBar_Avatar_Box_Divider_Drawer_IconButton_List_ListItem_ListItemButton_ListItemIcon_ListItemText_Menu_MenuItem_Toolbar_Typography_mui_material__WEBPACK_IMPORTED_MODULE_5__.Typography, {\n                            variant: \"h6\",\n                            noWrap: true,\n                            component: \"div\",\n                            sx: {\n                                flexGrow: 1\n                            },\n                            children: \"Admin Dashboard\"\n                        }, void 0, false, {\n                            fileName: \"D:\\\\Year 3 Term 1 Code\\\\web_final_project\\\\ecommerce-project\\\\frontend\\\\src\\\\components\\\\layout\\\\Layout.js\",\n                            lineNumber: 135,\n                            columnNumber: 11\n                        }, this),\n                        user && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_AppBar_Avatar_Box_Divider_Drawer_IconButton_List_ListItem_ListItemButton_ListItemIcon_ListItemText_Menu_MenuItem_Toolbar_Typography_mui_material__WEBPACK_IMPORTED_MODULE_5__.IconButton, {\n                                    size: \"large\",\n                                    \"aria-label\": \"account of current user\",\n                                    \"aria-controls\": \"menu-appbar\",\n                                    \"aria-haspopup\": \"true\",\n                                    onClick: handleMenu,\n                                    color: \"inherit\",\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_AccountCircle_Assessment_Category_ChevronLeft_Dashboard_ExitToApp_Inventory_Menu_People_ShoppingCart_mui_icons_material__WEBPACK_IMPORTED_MODULE_6__.AccountCircle, {}, void 0, false, {\n                                        fileName: \"D:\\\\Year 3 Term 1 Code\\\\web_final_project\\\\ecommerce-project\\\\frontend\\\\src\\\\components\\\\layout\\\\Layout.js\",\n                                        lineNumber: 148,\n                                        columnNumber: 17\n                                    }, this)\n                                }, void 0, false, {\n                                    fileName: \"D:\\\\Year 3 Term 1 Code\\\\web_final_project\\\\ecommerce-project\\\\frontend\\\\src\\\\components\\\\layout\\\\Layout.js\",\n                                    lineNumber: 140,\n                                    columnNumber: 15\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_AppBar_Avatar_Box_Divider_Drawer_IconButton_List_ListItem_ListItemButton_ListItemIcon_ListItemText_Menu_MenuItem_Toolbar_Typography_mui_material__WEBPACK_IMPORTED_MODULE_5__.Menu, {\n                                    id: \"menu-appbar\",\n                                    anchorEl: anchorEl,\n                                    anchorOrigin: {\n                                        vertical: 'bottom',\n                                        horizontal: 'right'\n                                    },\n                                    keepMounted: true,\n                                    transformOrigin: {\n                                        vertical: 'top',\n                                        horizontal: 'right'\n                                    },\n                                    open: Boolean(anchorEl),\n                                    onClose: handleClose,\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_AppBar_Avatar_Box_Divider_Drawer_IconButton_List_ListItem_ListItemButton_ListItemIcon_ListItemText_Menu_MenuItem_Toolbar_Typography_mui_material__WEBPACK_IMPORTED_MODULE_5__.MenuItem, {\n                                            onClick: handleProfile,\n                                            children: \"Profile\"\n                                        }, void 0, false, {\n                                            fileName: \"D:\\\\Year 3 Term 1 Code\\\\web_final_project\\\\ecommerce-project\\\\frontend\\\\src\\\\components\\\\layout\\\\Layout.js\",\n                                            lineNumber: 165,\n                                            columnNumber: 17\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_AppBar_Avatar_Box_Divider_Drawer_IconButton_List_ListItem_ListItemButton_ListItemIcon_ListItemText_Menu_MenuItem_Toolbar_Typography_mui_material__WEBPACK_IMPORTED_MODULE_5__.MenuItem, {\n                                            onClick: handleLogout,\n                                            children: \"Logout\"\n                                        }, void 0, false, {\n                                            fileName: \"D:\\\\Year 3 Term 1 Code\\\\web_final_project\\\\ecommerce-project\\\\frontend\\\\src\\\\components\\\\layout\\\\Layout.js\",\n                                            lineNumber: 166,\n                                            columnNumber: 17\n                                        }, this)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"D:\\\\Year 3 Term 1 Code\\\\web_final_project\\\\ecommerce-project\\\\frontend\\\\src\\\\components\\\\layout\\\\Layout.js\",\n                                    lineNumber: 150,\n                                    columnNumber: 15\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"D:\\\\Year 3 Term 1 Code\\\\web_final_project\\\\ecommerce-project\\\\frontend\\\\src\\\\components\\\\layout\\\\Layout.js\",\n                            lineNumber: 139,\n                            columnNumber: 13\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"D:\\\\Year 3 Term 1 Code\\\\web_final_project\\\\ecommerce-project\\\\frontend\\\\src\\\\components\\\\layout\\\\Layout.js\",\n                    lineNumber: 125,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"D:\\\\Year 3 Term 1 Code\\\\web_final_project\\\\ecommerce-project\\\\frontend\\\\src\\\\components\\\\layout\\\\Layout.js\",\n                lineNumber: 124,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_AppBar_Avatar_Box_Divider_Drawer_IconButton_List_ListItem_ListItemButton_ListItemIcon_ListItemText_Menu_MenuItem_Toolbar_Typography_mui_material__WEBPACK_IMPORTED_MODULE_5__.Drawer, {\n                sx: {\n                    width: drawerWidth,\n                    flexShrink: 0,\n                    '& .MuiDrawer-paper': {\n                        width: drawerWidth,\n                        boxSizing: 'border-box'\n                    }\n                },\n                variant: \"persistent\",\n                anchor: \"left\",\n                open: open,\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(DrawerHeader, {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_AppBar_Avatar_Box_Divider_Drawer_IconButton_List_ListItem_ListItemButton_ListItemIcon_ListItemText_Menu_MenuItem_Toolbar_Typography_mui_material__WEBPACK_IMPORTED_MODULE_5__.Box, {\n                            sx: {\n                                display: 'flex',\n                                alignItems: 'center',\n                                width: '100%',\n                                px: 2\n                            },\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_AppBar_Avatar_Box_Divider_Drawer_IconButton_List_ListItem_ListItemButton_ListItemIcon_ListItemText_Menu_MenuItem_Toolbar_Typography_mui_material__WEBPACK_IMPORTED_MODULE_5__.Typography, {\n                                    variant: \"h6\",\n                                    sx: {\n                                        flexGrow: 1\n                                    },\n                                    children: \"E-Commerce\"\n                                }, void 0, false, {\n                                    fileName: \"D:\\\\Year 3 Term 1 Code\\\\web_final_project\\\\ecommerce-project\\\\frontend\\\\src\\\\components\\\\layout\\\\Layout.js\",\n                                    lineNumber: 194,\n                                    columnNumber: 13\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_AppBar_Avatar_Box_Divider_Drawer_IconButton_List_ListItem_ListItemButton_ListItemIcon_ListItemText_Menu_MenuItem_Toolbar_Typography_mui_material__WEBPACK_IMPORTED_MODULE_5__.IconButton, {\n                                    onClick: handleDrawerClose,\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_AccountCircle_Assessment_Category_ChevronLeft_Dashboard_ExitToApp_Inventory_Menu_People_ShoppingCart_mui_icons_material__WEBPACK_IMPORTED_MODULE_6__.ChevronLeft, {}, void 0, false, {\n                                        fileName: \"D:\\\\Year 3 Term 1 Code\\\\web_final_project\\\\ecommerce-project\\\\frontend\\\\src\\\\components\\\\layout\\\\Layout.js\",\n                                        lineNumber: 198,\n                                        columnNumber: 15\n                                    }, this)\n                                }, void 0, false, {\n                                    fileName: \"D:\\\\Year 3 Term 1 Code\\\\web_final_project\\\\ecommerce-project\\\\frontend\\\\src\\\\components\\\\layout\\\\Layout.js\",\n                                    lineNumber: 197,\n                                    columnNumber: 13\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"D:\\\\Year 3 Term 1 Code\\\\web_final_project\\\\ecommerce-project\\\\frontend\\\\src\\\\components\\\\layout\\\\Layout.js\",\n                            lineNumber: 186,\n                            columnNumber: 11\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"D:\\\\Year 3 Term 1 Code\\\\web_final_project\\\\ecommerce-project\\\\frontend\\\\src\\\\components\\\\layout\\\\Layout.js\",\n                        lineNumber: 185,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_AppBar_Avatar_Box_Divider_Drawer_IconButton_List_ListItem_ListItemButton_ListItemIcon_ListItemText_Menu_MenuItem_Toolbar_Typography_mui_material__WEBPACK_IMPORTED_MODULE_5__.Divider, {}, void 0, false, {\n                        fileName: \"D:\\\\Year 3 Term 1 Code\\\\web_final_project\\\\ecommerce-project\\\\frontend\\\\src\\\\components\\\\layout\\\\Layout.js\",\n                        lineNumber: 202,\n                        columnNumber: 9\n                    }, this),\n                    user && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_AppBar_Avatar_Box_Divider_Drawer_IconButton_List_ListItem_ListItemButton_ListItemIcon_ListItemText_Menu_MenuItem_Toolbar_Typography_mui_material__WEBPACK_IMPORTED_MODULE_5__.Box, {\n                        sx: {\n                            p: 2,\n                            display: 'flex',\n                            alignItems: 'center'\n                        },\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_AppBar_Avatar_Box_Divider_Drawer_IconButton_List_ListItem_ListItemButton_ListItemIcon_ListItemText_Menu_MenuItem_Toolbar_Typography_mui_material__WEBPACK_IMPORTED_MODULE_5__.Avatar, {\n                                sx: {\n                                    mr: 2\n                                },\n                                children: user.name.charAt(0)\n                            }, void 0, false, {\n                                fileName: \"D:\\\\Year 3 Term 1 Code\\\\web_final_project\\\\ecommerce-project\\\\frontend\\\\src\\\\components\\\\layout\\\\Layout.js\",\n                                lineNumber: 205,\n                                columnNumber: 13\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_AppBar_Avatar_Box_Divider_Drawer_IconButton_List_ListItem_ListItemButton_ListItemIcon_ListItemText_Menu_MenuItem_Toolbar_Typography_mui_material__WEBPACK_IMPORTED_MODULE_5__.Box, {\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_AppBar_Avatar_Box_Divider_Drawer_IconButton_List_ListItem_ListItemButton_ListItemIcon_ListItemText_Menu_MenuItem_Toolbar_Typography_mui_material__WEBPACK_IMPORTED_MODULE_5__.Typography, {\n                                        variant: \"subtitle1\",\n                                        children: user.name\n                                    }, void 0, false, {\n                                        fileName: \"D:\\\\Year 3 Term 1 Code\\\\web_final_project\\\\ecommerce-project\\\\frontend\\\\src\\\\components\\\\layout\\\\Layout.js\",\n                                        lineNumber: 207,\n                                        columnNumber: 15\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_AppBar_Avatar_Box_Divider_Drawer_IconButton_List_ListItem_ListItemButton_ListItemIcon_ListItemText_Menu_MenuItem_Toolbar_Typography_mui_material__WEBPACK_IMPORTED_MODULE_5__.Typography, {\n                                        variant: \"body2\",\n                                        color: \"text.secondary\",\n                                        children: user.email\n                                    }, void 0, false, {\n                                        fileName: \"D:\\\\Year 3 Term 1 Code\\\\web_final_project\\\\ecommerce-project\\\\frontend\\\\src\\\\components\\\\layout\\\\Layout.js\",\n                                        lineNumber: 208,\n                                        columnNumber: 15\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"D:\\\\Year 3 Term 1 Code\\\\web_final_project\\\\ecommerce-project\\\\frontend\\\\src\\\\components\\\\layout\\\\Layout.js\",\n                                lineNumber: 206,\n                                columnNumber: 13\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"D:\\\\Year 3 Term 1 Code\\\\web_final_project\\\\ecommerce-project\\\\frontend\\\\src\\\\components\\\\layout\\\\Layout.js\",\n                        lineNumber: 204,\n                        columnNumber: 11\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_AppBar_Avatar_Box_Divider_Drawer_IconButton_List_ListItem_ListItemButton_ListItemIcon_ListItemText_Menu_MenuItem_Toolbar_Typography_mui_material__WEBPACK_IMPORTED_MODULE_5__.Divider, {}, void 0, false, {\n                        fileName: \"D:\\\\Year 3 Term 1 Code\\\\web_final_project\\\\ecommerce-project\\\\frontend\\\\src\\\\components\\\\layout\\\\Layout.js\",\n                        lineNumber: 214,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_AppBar_Avatar_Box_Divider_Drawer_IconButton_List_ListItem_ListItemButton_ListItemIcon_ListItemText_Menu_MenuItem_Toolbar_Typography_mui_material__WEBPACK_IMPORTED_MODULE_5__.List, {\n                        children: [\n                            menuItems.map((item)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_AppBar_Avatar_Box_Divider_Drawer_IconButton_List_ListItem_ListItemButton_ListItemIcon_ListItemText_Menu_MenuItem_Toolbar_Typography_mui_material__WEBPACK_IMPORTED_MODULE_5__.ListItem, {\n                                    disablePadding: true,\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_AppBar_Avatar_Box_Divider_Drawer_IconButton_List_ListItem_ListItemButton_ListItemIcon_ListItemText_Menu_MenuItem_Toolbar_Typography_mui_material__WEBPACK_IMPORTED_MODULE_5__.ListItemButton, {\n                                        onClick: ()=>router.push(item.path),\n                                        selected: router.pathname === item.path,\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_AppBar_Avatar_Box_Divider_Drawer_IconButton_List_ListItem_ListItemButton_ListItemIcon_ListItemText_Menu_MenuItem_Toolbar_Typography_mui_material__WEBPACK_IMPORTED_MODULE_5__.ListItemIcon, {\n                                                children: item.icon\n                                            }, void 0, false, {\n                                                fileName: \"D:\\\\Year 3 Term 1 Code\\\\web_final_project\\\\ecommerce-project\\\\frontend\\\\src\\\\components\\\\layout\\\\Layout.js\",\n                                                lineNumber: 222,\n                                                columnNumber: 17\n                                            }, this),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_AppBar_Avatar_Box_Divider_Drawer_IconButton_List_ListItem_ListItemButton_ListItemIcon_ListItemText_Menu_MenuItem_Toolbar_Typography_mui_material__WEBPACK_IMPORTED_MODULE_5__.ListItemText, {\n                                                primary: item.text\n                                            }, void 0, false, {\n                                                fileName: \"D:\\\\Year 3 Term 1 Code\\\\web_final_project\\\\ecommerce-project\\\\frontend\\\\src\\\\components\\\\layout\\\\Layout.js\",\n                                                lineNumber: 223,\n                                                columnNumber: 17\n                                            }, this)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"D:\\\\Year 3 Term 1 Code\\\\web_final_project\\\\ecommerce-project\\\\frontend\\\\src\\\\components\\\\layout\\\\Layout.js\",\n                                        lineNumber: 218,\n                                        columnNumber: 15\n                                    }, this)\n                                }, item.text, false, {\n                                    fileName: \"D:\\\\Year 3 Term 1 Code\\\\web_final_project\\\\ecommerce-project\\\\frontend\\\\src\\\\components\\\\layout\\\\Layout.js\",\n                                    lineNumber: 217,\n                                    columnNumber: 13\n                                }, this)),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_AppBar_Avatar_Box_Divider_Drawer_IconButton_List_ListItem_ListItemButton_ListItemIcon_ListItemText_Menu_MenuItem_Toolbar_Typography_mui_material__WEBPACK_IMPORTED_MODULE_5__.Divider, {}, void 0, false, {\n                                fileName: \"D:\\\\Year 3 Term 1 Code\\\\web_final_project\\\\ecommerce-project\\\\frontend\\\\src\\\\components\\\\layout\\\\Layout.js\",\n                                lineNumber: 227,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_AppBar_Avatar_Box_Divider_Drawer_IconButton_List_ListItem_ListItemButton_ListItemIcon_ListItemText_Menu_MenuItem_Toolbar_Typography_mui_material__WEBPACK_IMPORTED_MODULE_5__.ListItem, {\n                                disablePadding: true,\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_AppBar_Avatar_Box_Divider_Drawer_IconButton_List_ListItem_ListItemButton_ListItemIcon_ListItemText_Menu_MenuItem_Toolbar_Typography_mui_material__WEBPACK_IMPORTED_MODULE_5__.ListItemButton, {\n                                    onClick: logout,\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_AppBar_Avatar_Box_Divider_Drawer_IconButton_List_ListItem_ListItemButton_ListItemIcon_ListItemText_Menu_MenuItem_Toolbar_Typography_mui_material__WEBPACK_IMPORTED_MODULE_5__.ListItemIcon, {\n                                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_AccountCircle_Assessment_Category_ChevronLeft_Dashboard_ExitToApp_Inventory_Menu_People_ShoppingCart_mui_icons_material__WEBPACK_IMPORTED_MODULE_6__.ExitToApp, {}, void 0, false, {\n                                                fileName: \"D:\\\\Year 3 Term 1 Code\\\\web_final_project\\\\ecommerce-project\\\\frontend\\\\src\\\\components\\\\layout\\\\Layout.js\",\n                                                lineNumber: 231,\n                                                columnNumber: 17\n                                            }, this)\n                                        }, void 0, false, {\n                                            fileName: \"D:\\\\Year 3 Term 1 Code\\\\web_final_project\\\\ecommerce-project\\\\frontend\\\\src\\\\components\\\\layout\\\\Layout.js\",\n                                            lineNumber: 230,\n                                            columnNumber: 15\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_AppBar_Avatar_Box_Divider_Drawer_IconButton_List_ListItem_ListItemButton_ListItemIcon_ListItemText_Menu_MenuItem_Toolbar_Typography_mui_material__WEBPACK_IMPORTED_MODULE_5__.ListItemText, {\n                                            primary: \"Logout\"\n                                        }, void 0, false, {\n                                            fileName: \"D:\\\\Year 3 Term 1 Code\\\\web_final_project\\\\ecommerce-project\\\\frontend\\\\src\\\\components\\\\layout\\\\Layout.js\",\n                                            lineNumber: 233,\n                                            columnNumber: 15\n                                        }, this)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"D:\\\\Year 3 Term 1 Code\\\\web_final_project\\\\ecommerce-project\\\\frontend\\\\src\\\\components\\\\layout\\\\Layout.js\",\n                                    lineNumber: 229,\n                                    columnNumber: 13\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"D:\\\\Year 3 Term 1 Code\\\\web_final_project\\\\ecommerce-project\\\\frontend\\\\src\\\\components\\\\layout\\\\Layout.js\",\n                                lineNumber: 228,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"D:\\\\Year 3 Term 1 Code\\\\web_final_project\\\\ecommerce-project\\\\frontend\\\\src\\\\components\\\\layout\\\\Layout.js\",\n                        lineNumber: 215,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"D:\\\\Year 3 Term 1 Code\\\\web_final_project\\\\ecommerce-project\\\\frontend\\\\src\\\\components\\\\layout\\\\Layout.js\",\n                lineNumber: 172,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Main, {\n                open: open,\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(DrawerHeader, {}, void 0, false, {\n                        fileName: \"D:\\\\Year 3 Term 1 Code\\\\web_final_project\\\\ecommerce-project\\\\frontend\\\\src\\\\components\\\\layout\\\\Layout.js\",\n                        lineNumber: 239,\n                        columnNumber: 9\n                    }, this),\n                    children\n                ]\n            }, void 0, true, {\n                fileName: \"D:\\\\Year 3 Term 1 Code\\\\web_final_project\\\\ecommerce-project\\\\frontend\\\\src\\\\components\\\\layout\\\\Layout.js\",\n                lineNumber: 238,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"D:\\\\Year 3 Term 1 Code\\\\web_final_project\\\\ecommerce-project\\\\frontend\\\\src\\\\components\\\\layout\\\\Layout.js\",\n        lineNumber: 123,\n        columnNumber: 5\n    }, this);\n}\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHBhZ2VzLWRpci1ub2RlKS8uL3NyYy9jb21wb25lbnRzL2xheW91dC9MYXlvdXQuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFpQztBQUNPO0FBQ007QUFpQnZCO0FBWU07QUFDdUI7QUFFcEQsTUFBTXFDLGNBQWM7QUFFcEIsTUFBTUMsT0FBT3BDLDREQUFNQSxDQUFDLFFBQVE7SUFBRXFDLG1CQUFtQixDQUFDQyxPQUFTQSxTQUFTO0FBQU8sR0FDekUsQ0FBQyxFQUFFQyxLQUFLLEVBQUVDLElBQUksRUFBRSxHQUFNO1FBQ3BCQyxVQUFVO1FBQ1ZDLFNBQVNILE1BQU1JLE9BQU8sQ0FBQztRQUN2QkMsWUFBWUwsTUFBTU0sV0FBVyxDQUFDQyxNQUFNLENBQUMsVUFBVTtZQUM3Q0MsUUFBUVIsTUFBTU0sV0FBVyxDQUFDRSxNQUFNLENBQUNDLEtBQUs7WUFDdENDLFVBQVVWLE1BQU1NLFdBQVcsQ0FBQ0ksUUFBUSxDQUFDQyxhQUFhO1FBQ3BEO1FBQ0FDLFlBQVksQ0FBQyxDQUFDLEVBQUVoQixZQUFZLEVBQUUsQ0FBQztRQUMvQixHQUFJSyxRQUFRO1lBQ1ZJLFlBQVlMLE1BQU1NLFdBQVcsQ0FBQ0MsTUFBTSxDQUFDLFVBQVU7Z0JBQzdDQyxRQUFRUixNQUFNTSxXQUFXLENBQUNFLE1BQU0sQ0FBQ0ssT0FBTztnQkFDeENILFVBQVVWLE1BQU1NLFdBQVcsQ0FBQ0ksUUFBUSxDQUFDSSxjQUFjO1lBQ3JEO1lBQ0FGLFlBQVk7UUFDZCxDQUFDO0lBQ0g7QUFHRixNQUFNRyxlQUFldEQsNERBQU1BLENBQUNHLDJNQUFNQSxFQUFFO0lBQ2xDa0MsbUJBQW1CLENBQUNDLE9BQVNBLFNBQVM7QUFDeEMsR0FBRyxDQUFDLEVBQUVDLEtBQUssRUFBRUMsSUFBSSxFQUFFLEdBQU07UUFDdkJJLFlBQVlMLE1BQU1NLFdBQVcsQ0FBQ0MsTUFBTSxDQUFDO1lBQUM7WUFBVTtTQUFRLEVBQUU7WUFDeERDLFFBQVFSLE1BQU1NLFdBQVcsQ0FBQ0UsTUFB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RjtnQkFBS0ksTUFBTUE7O2tDQUNWLDhEQUFDZ0I7Ozs7O29CQUNBTzs7Ozs7Ozs7Ozs7OztBQUlUIiwic291cmNlcyI6WyJEOlxcWWVhciAzIFRlcm0gMSBDb2RlXFx3ZWJfZmluYWxfcHJvamVjdFxcZWNvbW1lcmNlLXByb2plY3RcXGZyb250ZW5kXFxzcmNcXGNvbXBvbmVudHNcXGxheW91dFxcTGF5b3V0LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcic7XHJcbmltcG9ydCB7IHN0eWxlZCB9IGZyb20gJ0BtdWkvbWF0ZXJpYWwvc3R5bGVzJztcclxuaW1wb3J0IHtcclxuICBCb3gsXHJcbiAgRHJhd2VyLFxyXG4gIEFwcEJhcixcclxuICBUb29sYmFyLFxyXG4gIExpc3QsXHJcbiAgVHlwb2dyYXBoeSxcclxuICBEaXZpZGVyLFxyXG4gIEljb25CdXR0b24sXHJcbiAgTGlzdEl0ZW0sXHJcbiAgTGlzdEl0ZW1CdXR0b24sXHJcbiAgTGlzdEl0ZW1JY29uLFxyXG4gIExpc3RJdGVtVGV4dCxcclxuICBBdmF0YXIsXHJcbiAgTWVudSxcclxuICBNZW51SXRlbSxcclxufSBmcm9tICdAbXVpL21hdGVyaWFsJztcclxuaW1wb3J0IHtcclxuICBNZW51IGFzIE1lbnVJY29uLFxyXG4gIENoZXZyb25MZWZ0IGFzIENoZXZyb25MZWZ0SWNvbixcclxuICBEYXNoYm9hcmQgYXMgRGFzaGJvYXJkSWNvbixcclxuICBQZW9wbGUgYXMgUGVvcGxlSWNvbixcclxuICBDYXRlZ29yeSBhcyBDYXRlZ29yeUljb24sXHJcbiAgSW52ZW50b3J5IGFzIEludmVudG9yeUljb24sXHJcbiAgU2hvcHBpbmdDYXJ0IGFzIFNob3BwaW5nQ2FydEljb24sXHJcbiAgQXNzZXNzbWVudCBhcyBBc3Nlc3NtZW50SWNvbixcclxuICBFeGl0VG9BcHAgYXMgTG9nb3V0SWNvbixcclxuICBBY2NvdW50Q2lyY2xlLFxyXG59IGZyb20gJ0BtdWkvaWNvbnMtbWF0ZXJpYWwnO1xyXG5pbXBvcnQgeyB1c2VBdXRoIH0gZnJvbSAnLi4vLi4vY29udGV4dC9BdXRoQ29udGV4dCc7XHJcblxyXG5jb25zdCBkcmF3ZXJXaWR0aCA9IDI0MDtcclxuXHJcbmNvbnN0IE1haW4gPSBzdHlsZWQoJ21haW4nLCB7IHNob3VsZEZvcndhcmRQcm9wOiAocHJvcCkgPT4gcHJvcCAhPT0gJ29wZW4nIH0pKFxyXG4gICh7IHRoZW1lLCBvcGVuIH0pID0+ICh7XHJcbiAgICBmbGV4R3JvdzogMSxcclxuICAgIHBhZGRpbmc6IHRoZW1lLnNwYWNpbmcoMyksXHJcbiAgICB0cmFuc2l0aW9uOiB0aGVtZS50cmFuc2l0aW9ucy5jcmVhdGUoJ21hcmdpbicsIHtcclxuICAgICAgZWFzaW5nOiB0aGVtZS50cmFuc2l0aW9ucy5lYXNpbmcuc2hhcnAsXHJcbiAgICAgIGR1cmF0aW9uOiB0aGVtZS50cmFuc2l0aW9ucy5kdXJhdGlvbi5sZWF2aW5nU2NyZWVuLFxyXG4gICAgfSksXHJcbiAgICBtYXJnaW5MZWZ0OiBgLSR7ZHJhd2VyV2lkdGh9cHhgLFxyXG4gICAgLi4uKG9wZW4gJiYge1xyXG4gICAgICB0cmFuc2l0aW9uOiB0aGVtZS50cmFuc2l0aW9ucy5jcmVhdGUoJ21hcmdpbicsIHtcclxuICAgICAgICBlYXNpbmc6IHRoZW1lLnRyYW5zaXRpb25zLmVhc2luZy5lYXNlT3V0LFxyXG4gICAgICAgIGR1cmF0aW9uOiB0aGVtZS50cmFuc2l0aW9ucy5kdXJhdGlvbi5lbnRlcmluZ1NjcmVlbixcclxuICAgICAgfSksXHJcbiAgICAgIG1hcmdpbkxlZnQ6IDAsXHJcbiAgICB9KSxcclxuICB9KSxcclxuKTtcclxuXHJcbmNvbnN0IEFwcEJhclN0eWxlZCA9IHN0eWxlZChBcHBCYXIsIHtcclxuICBzaG91bGRGb3J3YXJkUHJvcDogKHByb3ApID0+IHByb3AgIT09ICdvcGVuJyxcclxufSkoKHsgdGhlbWUsIG9wZW4gfSkgPT4gKHtcclxuICB0cmFuc2l0aW9uOiB0aGVtZS50cmFuc2l0aW9ucy5jcmVhdGUoWydtYXJnaW4nLCAnd2lkdGgnXSwge1xyXG4gICAgZWFzaW5nOiB0aGVtZS50cmFuc2l0aW9ucy5lYXNpbmcuc2hhcnAsXHJcbiAgICBkdXJhdGlvbjogdGhlbWUudHJhbnNpdGlvbnMuZHVyYXRpb24ubGVhdmluZ1NjcmVlbixcclxuICB9KSxcclxuICAuLi4ob3BlbiAmJiB7XHJcbiAgICB3aWR0aDogYGNhbGMoMTAwJSAtICR7ZHJhd2VyV2lkdGh9cHgpYCxcclxuICAgIG1hcmdpbkxlZnQ6IGAke2RyYXdlcldpZHRofXB4YCxcclxuICAgIHRyYW5zaXRpb246IHRoZW1lLnRyYW5zaXRpb25zLmNyZWF0ZShbJ21hcmdpbicsICd3aWR0aCddLCB7XHJcbiAgICAgIGVhc2luZzogdGhlbWUudHJhbnNpdGlvbnMuZWFzaW5nLmVhc2VPdXQsXHJcbiAgICAgIGR1cmF0aW9uOiB0aGVtZS50cmFuc2l0aW9ucy5kdXJhdGlvbi5lbnRlcmluZ1NjcmVlbixcclxuICAgIH0pLFxyXG4gIH0pLFxyXG59KSk7XHJcblxyXG5jb25zdCBEcmF3ZXJIZWFkZXIgPSBzdHlsZWQoJ2RpdicpKCh7IHRoZW1lIH0pID0+ICh7XHJcbiAgZGlzcGxheTogJ2ZsZXgnLFxyXG4gIGFsaWduSXRlbXM6ICdjZW50ZXInLFxyXG4gIHBhZGRpbmc6IHRoZW1lLnNwYWNpbmcoMCwgMSksXHJcbiAgLi4udGhlbWUubWl4aW5zLnRvb2xiYXIsXHJcbiAganVzdGlmeUNvbnRlbnQ6ICdmbGV4LWVuZCcsXHJcbn0pKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIExheW91dCh7IGNoaWxkcmVuIH0pIHtcclxuICBjb25zdCBbb3Blbiwgc2V0T3Blbl0gPSB1c2VTdGF0ZSh0cnVlKTtcclxuICBjb25zdCBbYW5jaG9yRWwsIHNldEFuY2hvckVsXSA9IHVzZVN0YXRlKG51bGwpO1xyXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG4gIGNvbnN0IHsgdXNlciwgbG9nb3V0IH0gPSB1c2VBdXRoKCk7XHJcblxyXG4gIGNvbnN0IGhhbmRsZURyYXdlck9wZW4gPSAoKSA9PiB7XHJcbiAgICBzZXRPcGVuKHRydWUpO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IGhhbmRsZURyYXdlckNsb3NlID0gKCkgPT4ge1xyXG4gICAgc2V0T3BlbihmYWxzZSk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgaGFuZGxlTWVudSA9IChldmVudCkgPT4ge1xyXG4gICAgc2V0QW5jaG9yRWwoZXZlbnQuY3VycmVudFRhcmdldCk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgaGFuZGxlQ2xvc2UgPSAoKSA9PiB7XHJcbiAgICBzZXRBbmNob3JFbChudWxsKTtcclxuICB9O1xyXG5cclxuICBjb25zdCBoYW5kbGVQcm9maWxlID0gKCkgPT4ge1xyXG4gICAgaGFuZGxlQ2xvc2UoKTtcclxuICAgIHJvdXRlci5wdXNoKCcvcHJvZmlsZScpO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IGhhbmRsZUxvZ291dCA9ICgpID0+IHtcclxuICAgIGhhbmRsZUNsb3NlKCk7XHJcbiAgICBsb2dvdXQoKTtcclxuICB9O1xyXG5cclxuICBjb25zdCBtZW51SXRlbXMgPSBbXHJcbiAgICB7IHRleHQ6ICdEYXNoYm9hcmQnLCBpY29uOiA8RGFzaGJvYXJkSWNvbiAvPiwgcGF0aDogJy9kYXNoYm9hcmQnIH0sXHJcbiAgICB7IHRleHQ6ICdVc2VycycsIGljb246IDxQZW9wbGVJY29uIC8+LCBwYXRoOiAnL3VzZXJzJyB9LFxyXG4gICAgeyB0ZXh0OiAnQ2F0ZWdvcmllcycsIGljb246IDxDYXRlZ29yeUljb24gLz4sIHBhdGg6ICcvY2F0ZWdvcmllcycgfSxcclxuICAgIHsgdGV4dDogJ1Byb2R1Y3RzJywgaWNvbjogPEludmVudG9yeUljb24gLz4sIHBhdGg6ICcvcHJvZHVjdHMnIH0sXHJcbiAgICB7IHRleHQ6ICdPcmRlcnMnLCBpY29uOiA8U2hvcHBpbmdDYXJ0SWNvbiAvPiwgcGF0aDogJy9vcmRlcnMnIH0sXHJcbiAgICB7IHRleHQ6ICdSZXBvcnRzJywgaWNvbjogPEFzc2Vzc21lbnRJY29uIC8+LCBwYXRoOiAnL3JlcG9ydHMnIH0sXHJcbiAgXTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxCb3ggc3g9e3sgZGlzcGxheTogJ2ZsZXgnIH19PlxyXG4gICAgICA8QXBwQmFyU3R5bGVkIHBvc2l0aW9uPVwiZml4ZWRcIiBvcGVuPXtvcGVufT5cclxuICAgICAgICA8VG9vbGJhcj5cclxuICAgICAgICAgIDxJY29uQnV0dG9uXHJcbiAgICAgICAgICAgIGNvbG9yPVwiaW5oZXJpdFwiXHJcbiAgICAgICAgICAgIGFyaWEtbGFiZWw9XCJvcGVuIGRyYXdlclwiXHJcbiAgICAgICAgICAgIG9uQ2xpY2s9e2hhbmRsZURyYXdlck9wZW59XHJcbiAgICAgICAgICAgIGVkZ2U9XCJzdGFydFwiXHJcbiAgICAgICAgICAgIHN4PXt7IG1yOiAyLCAuLi4ob3BlbiAmJiB7IGRpc3BsYXk6ICdub25lJyB9KSB9fVxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICA8TWVudUljb24gLz5cclxuICAgICAgICAgIDwvSWNvbkJ1dHRvbj5cclxuICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJoNlwiIG5vV3JhcCBjb21wb25lbnQ9XCJkaXZcIiBzeD17eyBmbGV4R3JvdzogMSB9fT5cclxuICAgICAgICAgICAgQWRtaW4gRGFzaGJvYXJkXHJcbiAgICAgICAgICA8L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgICB7dXNlciAmJiAoXHJcbiAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgPEljb25CdXR0b25cclxuICAgICAgICAgICAgICAgIHNpemU9XCJsYXJnZVwiXHJcbiAgICAgICAgICAgICAgICBhcmlhLWxhYmVsPVwiYWNjb3VudCBvZiBjdXJyZW50IHVzZXJcIlxyXG4gICAgICAgICAgICAgICAgYXJpYS1jb250cm9scz1cIm1lbnUtYXBwYmFyXCJcclxuICAgICAgICAgICAgICAgIGFyaWEtaGFzcG9wdXA9XCJ0cnVlXCJcclxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9e2hhbmRsZU1lbnV9XHJcbiAgICAgICAgICAgICAgICBjb2xvcj1cImluaGVyaXRcIlxyXG4gICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIDxBY2NvdW50Q2lyY2xlIC8+XHJcbiAgICAgICAgICAgICAgPC9JY29uQnV0dG9uPlxyXG4gICAgICAgICAgICAgIDxNZW51XHJcbiAgICAgICAgICAgICAgICBpZD1cIm1lbnUtYXBwYmFyXCJcclxuICAgICAgICAgICAgICAgIGFuY2hvckVsPXthbmNob3JFbH1cclxuICAgICAgICAgICAgICAgIGFuY2hvck9yaWdpbj17e1xyXG4gICAgICAgICAgICAgICAgICB2ZXJ0aWNhbDogJ2JvdHRvbScsXHJcbiAgICAgICAgICAgICAgICAgIGhvcml6b250YWw6ICdyaWdodCcsXHJcbiAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAga2VlcE1vdW50ZWRcclxuICAgICAgICAgICAgICAgIHRyYW5zZm9ybU9yaWdpbj17e1xyXG4gICAgICAgICAgICAgICAgICB2ZXJ0aWNhbDogJ3RvcCcsXHJcbiAgICAgICAgICAgICAgICAgIGhvcml6b250YWw6ICdyaWdodCcsXHJcbiAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgb3Blbj17Qm9vbGVhbihhbmNob3JFbCl9XHJcbiAgICAgICAgICAgICAgICBvbkNsb3NlPXtoYW5kbGVDbG9zZX1cclxuICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICA8TWVudUl0ZW0gb25DbGljaz17aGFuZGxlUHJvZmlsZX0+UHJvZmlsZTwvTWVudUl0ZW0+XHJcbiAgICAgICAgICAgICAgICA8TWVudUl0ZW0gb25DbGljaz17aGFuZGxlTG9nb3V0fT5Mb2dvdXQ8L01lbnVJdGVtPlxyXG4gICAgICAgICAgICAgIDwvTWVudT5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICApfVxyXG4gICAgICAgIDwvVG9vbGJhcj5cclxuICAgICAgPC9BcHBCYXJTdHlsZWQ+XHJcbiAgICAgIDxEcmF3ZXJcclxuICAgICAgICBzeD17e1xyXG4gICAgICAgICAgd2lkdGg6IGRyYXdlcldpZHRoLFxyXG4gICAgICAgICAgZmxleFNocmluazogMCxcclxuICAgICAgICAgICcmIC5NdWlEcmF3ZXItcGFwZXInOiB7XHJcbiAgICAgICAgICAgIHdpZHRoOiBkcmF3ZXJXaWR0aCxcclxuICAgICAgICAgICAgYm94U2l6aW5nOiAnYm9yZGVyLWJveCcsXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgIH19XHJcbiAgICAgICAgdmFyaWFudD1cInBlcnNpc3RlbnRcIlxyXG4gICAgICAgIGFuY2hvcj1cImxlZnRcIlxyXG4gICAgICAgIG9wZW49e29wZW59XHJcbiAgICAgID5cclxuICAgICAgICA8RHJhd2VySGVhZGVyPlxyXG4gICAgICAgICAgPEJveFxyXG4gICAgICAgICAgICBzeD17e1xyXG4gICAgICAgICAgICAgIGRpc3BsYXk6ICdmbGV4JyxcclxuICAgICAgICAgICAgICBhbGlnbkl0ZW1zOiAnY2VudGVyJyxcclxuICAgICAgICAgICAgICB3aWR0aDogJzEwMCUnLFxyXG4gICAgICAgICAgICAgIHB4OiAyLFxyXG4gICAgICAgICAgICB9fVxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwiaDZcIiBzeD17eyBmbGV4R3JvdzogMSB9fT5cclxuICAgICAgICAgICAgICBFLUNvbW1lcmNlXHJcbiAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cclxuICAgICAgICAgICAgPEljb25CdXR0b24gb25DbGljaz17aGFuZGxlRHJhd2VyQ2xvc2V9PlxyXG4gICAgICAgICAgICAgIDxDaGV2cm9uTGVmdEljb24gLz5cclxuICAgICAgICAgICAgPC9JY29uQnV0dG9uPlxyXG4gICAgICAgICAgPC9Cb3g+XHJcbiAgICAgICAgPC9EcmF3ZXJIZWFkZXI+XHJcbiAgICAgICAgPERpdmlkZXIgLz5cclxuICAgICAgICB7dXNlciAmJiAoXHJcbiAgICAgICAgICA8Qm94IHN4PXt7IHA6IDIsIGRpc3BsYXk6ICdmbGV4JywgYWxpZ25JdGVtczogJ2NlbnRlcicgfX0+XHJcbiAgICAgICAgICAgIDxBdmF0YXIgc3g9e3sgbXI6IDIgfX0+e3VzZXIubmFtZS5jaGFyQXQoMCl9PC9BdmF0YXI+XHJcbiAgICAgICAgICAgIDxCb3g+XHJcbiAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cInN1YnRpdGxlMVwiPnt1c2VyLm5hbWV9PC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJib2R5MlwiIGNvbG9yPVwidGV4dC5zZWNvbmRhcnlcIj5cclxuICAgICAgICAgICAgICAgIHt1c2VyLmVtYWlsfVxyXG4gICAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cclxuICAgICAgICAgICAgPC9Cb3g+XHJcbiAgICAgICAgICA8L0JveD5cclxuICAgICAgICApfVxyXG4gICAgICAgIDxEaXZpZGVyIC8+XHJcbiAgICAgICAgPExpc3Q+XHJcbiAgICAgICAgICB7bWVudUl0ZW1zLm1hcCgoaXRlbSkgPT4gKFxyXG4gICAgICAgICAgICA8TGlzdEl0ZW0ga2V5PXtpdGVtLnRleHR9IGRpc2FibGVQYWRkaW5nPlxyXG4gICAgICAgICAgICAgIDxMaXN0SXRlbUJ1dHRvblxyXG4gICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gcm91dGVyLnB1c2goaXRlbS5wYXRoKX1cclxuICAgICAgICAgICAgICAgIHNlbGVjdGVkPXtyb3V0ZXIucGF0aG5hbWUgPT09IGl0ZW0ucGF0aH1cclxuICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICA8TGlzdEl0ZW1JY29uPntpdGVtLmljb259PC9MaXN0SXRlbUljb24+XHJcbiAgICAgICAgICAgICAgICA8TGlzdEl0ZW1UZXh0IHByaW1hcnk9e2l0ZW0udGV4dH0gLz5cclxuICAgICAgICAgICAgICA8L0xpc3RJdGVtQnV0dG9uPlxyXG4gICAgICAgICAgICA8L0xpc3RJdGVtPlxyXG4gICAgICAgICAgKSl9XHJcbiAgICAgICAgICA8RGl2aWRlciAvPlxyXG4gICAgICAgICAgPExpc3RJdGVtIGRpc2FibGVQYWRkaW5nPlxyXG4gICAgICAgICAgICA8TGlzdEl0ZW1CdXR0b24gb25DbGljaz17bG9nb3V0fT5cclxuICAgICAgICAgICAgICA8TGlzdEl0ZW1JY29uPlxyXG4gICAgICAgICAgICAgICAgPExvZ291dEljb24gLz5cclxuICAgICAgICAgICAgICA8L0xpc3RJdGVtSWNvbj5cclxuICAgICAgICAgICAgICA8TGlzdEl0ZW1UZXh0IHByaW1hcnk9XCJMb2dvdXRcIiAvPlxyXG4gICAgICAgICAgICA8L0xpc3RJdGVtQnV0dG9uPlxyXG4gICAgICAgICAgPC9MaXN0SXRlbT5cclxuICAgICAgICA8L0xpc3Q+XHJcbiAgICAgIDwvRHJhd2VyPlxyXG4gICAgICA8TWFpbiBvcGVuPXtvcGVufT5cclxuICAgICAgICA8RHJhd2VySGVhZGVyIC8+XHJcbiAgICAgICAge2NoaWxkcmVufVxyXG4gICAgICA8L01haW4+XHJcbiAgICA8L0JveD5cclxuICApO1xyXG59Il0sIm5hbWVzIjpbInVzZVN0YXRlIiwidXNlUm91dGVyIiwic3R5bGVkIiwiQm94IiwiRHJhd2VyIiwiQXBwQmFyIiwiVG9vbGJhciIsIkxpc3QiLCJUeXBvZ3JhcGh5IiwiRGl2aWRlciIsIkljb25CdXR0b24iLCJMaXN0SXRlbSIsIkxpc3RJdGVtQnV0dG9uIiwiTGlzdEl0ZW1JY29uIiwiTGlzdEl0ZW1UZXh0IiwiQXZhdGFyIiwiTWVudSIsIk1lbnVJdGVtIiwiTWVudUljb24iLCJDaGV2cm9uTGVmdCIsIkNoZXZyb25MZWZ0SWNvbiIsIkRhc2hib2FyZCIsIkRhc2hib2FyZEljb24iLCJQZW9wbGUiLCJQZW9wbGVJY29uIiwiQ2F0ZWdvcnkiLCJDYXRlZ29yeUljb24iLCJJbnZlbnRvcnkiLCJJbnZlbnRvcnlJY29uIiwiU2hvcHBpbmdDYXJ0IiwiU2hvcHBpbmdDYXJ0SWNvbiIsIkFzc2Vzc21lbnQiLCJBc3Nlc3NtZW50SWNvbiIsIkV4aXRUb0FwcCIsIkxvZ291dEljb24iLCJBY2NvdW50Q2lyY2xlIiwidXNlQXV0aCIsImRyYXdlcldpZHRoIiwiTWFpbiIsInNob3VsZEZvcndhcmRQcm9wIiwicHJvcCIsInRoZW1lIiwib3BlbiIsImZsZXhHcm93IiwicGFkZGluZyIsInNwYWNpbmciLCJ0cmFuc2l0aW9uIiwidHJhbnNpdGlvbnMiLCJjcmVhdGUiLCJlYXNpbmciLCJzaGFycCIsImR1cmF0aW9uIiwibGVhdmluZ1NjcmVlbiIsIm1hcmdpbkxlZnQiLCJlYXNlT3V0IiwiZW50ZXJpbmdTY3JlZW4iLCJBcHBCYXJTdHlsZWQiLCJ3aWR0aCIsIkRyYXdlckhlYWRlciIsImRpc3BsYXkiLCJhbGlnbkl0ZW1zIiwibWl4aW5zIiwidG9vbGJhciIsImp1c3RpZnlDb250ZW50IiwiTGF5b3V0IiwiY2hpbGRyZW4iLCJzZXRPcGVuIiwiYW5jaG9yRWwiLCJzZXRBbmNob3JFbCIsInJvdXRlciIsInVzZXIiLCJsb2dvdXQiLCJoYW5kbGVEcmF3ZXJPcGVuIiwiaGFuZGxlRHJhd2VyQ2xvc2UiLCJoYW5kbGVNZW51IiwiZXZlbnQiLCJjdXJyZW50VGFyZ2V0IiwiaGFuZGxlQ2xvc2UiLCJoYW5kbGVQcm9maWxlIiwicHVzaCIsImhhbmRsZUxvZ291dCIsIm1lbnVJdGVtcyIsInRleHQiLCJpY29uIiwicGF0aCIsInN4IiwicG9zaXRpb24iLCJjb2xvciIsImFyaWEtbGFiZWwiLCJvbkNsaWNrIiwiZWRnZSIsIm1yIiwidmFyaWFudCIsIm5vV3JhcCIsImNvbXBvbmVudCIsImRpdiIsInNpemUiLCJhcmlhLWNvbnRyb2xzIiwiYXJpYS1oYXNwb3B1cCIsImlkIiwiYW5jaG9yT3JpZ2luIiwidmVydGljYWwiLCJob3Jpem9udGFsIiwia2VlcE1vdW50ZWQiLCJ0cmFuc2Zvcm1PcmlnaW4iLCJCb29sZWFuIiwib25DbG9zZSIsImZsZXhTaHJpbmsiLCJib3hTaXppbmciLCJhbmNob3IiLCJweCIsInAiLCJuYW1lIiwiY2hhckF0IiwiZW1haWwiLCJtYXAiLCJpdGVtIiwiZGlzYWJsZVBhZGRpbmciLCJzZWxlY3RlZCIsInBhdGhuYW1lIiwicHJpbWFyeSJdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(pages-dir-node)/./src/components/layout/Layout.js\n");

/***/ }),

/***/ "(pages-dir-node)/./src/context/AuthContext.jsx":
/*!*************************************!*\
  !*** ./src/context/AuthContext.jsx ***!
  \*************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   AuthProvider: () => (/* binding */ AuthProvider),\n/* harmony export */   useAuth: () => (/* binding */ useAuth)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ \"axios\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([axios__WEBPACK_IMPORTED_MODULE_2__]);\naxios__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\n\nconst AuthContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)();\nconst AuthProvider = ({ children })=>{\n    const [user, setUser] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const [loading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)({\n        \"AuthProvider.useEffect\": ()=>{\n            // Check if user is logged in\n            const checkAuth = {\n                \"AuthProvider.useEffect.checkAuth\": async ()=>{\n                    try {\n                        const token = localStorage.getItem('token');\n                        if (token) {\n                            // Verify token with backend\n                            const response = await axios__WEBPACK_IMPORTED_MODULE_2__[\"default\"].get('http://localhost:3001/api/auth/verify', {\n                                headers: {\n                                    Authorization: `Bearer ${token}`\n                                }\n                            });\n                            setUser(response.data.user);\n                        }\n                    } catch (error) {\n                        console.error('Auth verification failed:', error);\n                        localStorage.removeItem('token');\n                    } finally{\n                        setLoading(false);\n                    }\n                }\n            }[\"AuthProvider.useEffect.checkAuth\"];\n            checkAuth();\n        }\n    }[\"AuthProvider.useEffect\"], []);\n    const login = async (email, password)=>{\n        try {\n            const response = await axios__WEBPACK_IMPORTED_MODULE_2__[\"default\"].post('http://localhost:3001/api/auth/login', {\n                email,\n                password\n            });\n            const { token, user } = response.data;\n            localStorage.setItem('token', token);\n            setUser(user);\n            return {\n                success: true\n            };\n        } catch (error) {\n            return {\n                success: false,\n                error: error.response?.data?.message || 'Login failed'\n            };\n        }\n    };\n    const logout = ()=>{\n        localStorage.removeItem('token');\n        setUser(null);\n    };\n    const value = {\n        user,\n        loading,\n        login,\n        logout,\n        isAuthenticated: !!user\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(AuthContext.Provider, {\n        value: value,\n        children: !loading && children\n    }, void 0, false, {\n        fileName: \"D:\\\\Year 3 Term 1 Code\\\\web_final_project\\\\ecommerce-project\\\\frontend\\\\src\\\\context\\\\AuthContext.jsx\",\n        lineNumber: 62,\n        columnNumber: 5\n    }, undefined);\n};\nconst useAuth = ()=>{\n    const context = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(AuthContext);\n    if (!context) {\n        throw new Error('useAuth must be used within an AuthProvider');\n    }\n    return context;\n};\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHBhZ2VzLWRpci1ub2RlKS8uL3NyYy9jb250ZXh0L0F1dGhDb250ZXh0LmpzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUE4RTtBQUNwRDtBQUUxQixNQUFNTSw0QkFBY0wsb0RBQWFBO0FBRTFCLE1BQU1NLGVBQWUsQ0FBQyxFQUFFQyxRQUFRLEVBQUU7SUFDdkMsTUFBTSxDQUFDQyxNQUFNQyxRQUFRLEdBQUdQLCtDQUFRQSxDQUFDO0lBQ2pDLE1BQU0sQ0FBQ1EsU0FBU0MsV0FBVyxHQUFHVCwrQ0FBUUEsQ0FBQztJQUV2Q0MsZ0RBQVNBO2tDQUFDO1lBQ1IsNkJBQTZCO1lBQzdCLE1BQU1TO29EQUFZO29CQUNoQixJQUFJO3dCQUNGLE1BQU1DLFFBQVFDLGFBQWFDLE9BQU8sQ0FBQzt3QkFDbkMsSUFBSUYsT0FBTzs0QkFDVCw0QkFBNEI7NEJBQzVCLE1BQU1HLFdBQVcsTUFBTVosaURBQVMsQ0FBQyx5Q0FBeUM7Z0NBQ3hFYyxTQUFTO29DQUFFQyxlQUFlLENBQUMsT0FBTyxFQUFFTixPQUFPO2dDQUFDOzRCQUM5Qzs0QkFDQUosUUFBUU8sU0FBU0ksSUFBSSxDQUFDWixJQUFJO3dCQUM1QjtvQkFDRixFQUFFLE9BQU9hLE9BQU87d0JBQ2RDLFFBQVFELEtBQUssQ0FBQyw2QkFBNkJBO3dCQUMzQ1AsYUFBYVMsVUFBVSxDQUFDO29CQUMxQixTQUFVO3dCQUNSWixXQUFXO29CQUNiO2dCQUNGOztZQUVBQztRQUNGO2lDQUFHLEVBQUU7SUFFTCxNQUFNWSxRQUFRLE9BQU9DLE9BQU9DO1FBQzFCLElBQUk7WUFDRixNQUFNVixXQUFXLE1BQU1aLGtEQUFVLENBQUMsd0NBQXdDO2dCQUN4RXFCO2dCQUNBQztZQUNGO1lBQ0EsTUFBTSxFQUFFYixLQUFLLEVBQUVMLElBQUksRUFBRSxHQUFHUSxTQUFTSSxJQUFJO1lBQ3JDTixhQUFhYyxPQUFPLENBQUMsU0FBU2Y7WUFDOUJKLFFBQVFEO1lBQ1IsT0FBTztnQkFBRXFCLFNBQVM7WUFBSztRQUN6QixFQUFFLE9BQU9SLE9BQU87WUFDZCxPQUFPO2dCQUFFUSxTQUFTO2dCQUFPUixPQUFPQSxNQUFNTCxRQUFRLEVBQUVJLE1BQU1VLFdBQVc7WUFBZTtRQUNsRjtJQUNGO0lBRUEsTUFBTUMsU0FBUztRQUNiakIsYUFBYVMsVUFBVSxDQUFDO1FBQ3hCZCxRQUFRO0lBQ1Y7SUFFQSxNQUFNdUIsUUFBUTtRQUNaeEI7UUFDQUU7UUFDQWM7UUFDQU87UUFDQUUsaUJBQWlCLENBQUMsQ0FBQ3pCO0lBQ3JCO0lBRUEscUJBQ0UsOERBQUNILFlBQVk2QixRQUFRO1FBQUNGLE9BQU9BO2tCQUMxQixDQUFDdEIsV0FBV0g7Ozs7OztBQUduQixFQUFFO0FBRUssTUFBTTRCLFVBQVU7SUFDckIsTUFBTUMsVUFBVW5DLGlEQUFVQSxDQUFDSTtJQUMzQixJQUFJLENBQUMrQixTQUFTO1FBQ1osTUFBTSxJQUFJQyxNQUFNO0lBQ2xCO0lBQ0EsT0FBT0Q7QUFDVCxFQUFFIiwic291cmNlcyI6WyJEOlxcWWVhciAzIFRlcm0gMSBDb2RlXFx3ZWJfZmluYWxfcHJvamVjdFxcZWNvbW1lcmNlLXByb2plY3RcXGZyb250ZW5kXFxzcmNcXGNvbnRleHRcXEF1dGhDb250ZXh0LmpzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgY3JlYXRlQ29udGV4dCwgdXNlQ29udGV4dCwgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcclxuXHJcbmNvbnN0IEF1dGhDb250ZXh0ID0gY3JlYXRlQ29udGV4dCgpO1xyXG5cclxuZXhwb3J0IGNvbnN0IEF1dGhQcm92aWRlciA9ICh7IGNoaWxkcmVuIH0pID0+IHtcclxuICBjb25zdCBbdXNlciwgc2V0VXNlcl0gPSB1c2VTdGF0ZShudWxsKTtcclxuICBjb25zdCBbbG9hZGluZywgc2V0TG9hZGluZ10gPSB1c2VTdGF0ZSh0cnVlKTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIC8vIENoZWNrIGlmIHVzZXIgaXMgbG9nZ2VkIGluXHJcbiAgICBjb25zdCBjaGVja0F1dGggPSBhc3luYyAoKSA9PiB7XHJcbiAgICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3QgdG9rZW4gPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndG9rZW4nKTtcclxuICAgICAgICBpZiAodG9rZW4pIHtcclxuICAgICAgICAgIC8vIFZlcmlmeSB0b2tlbiB3aXRoIGJhY2tlbmRcclxuICAgICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgYXhpb3MuZ2V0KCdodHRwOi8vbG9jYWxob3N0OjMwMDEvYXBpL2F1dGgvdmVyaWZ5Jywge1xyXG4gICAgICAgICAgICBoZWFkZXJzOiB7IEF1dGhvcml6YXRpb246IGBCZWFyZXIgJHt0b2tlbn1gIH1cclxuICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgc2V0VXNlcihyZXNwb25zZS5kYXRhLnVzZXIpO1xyXG4gICAgICAgIH1cclxuICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICBjb25zb2xlLmVycm9yKCdBdXRoIHZlcmlmaWNhdGlvbiBmYWlsZWQ6JywgZXJyb3IpO1xyXG4gICAgICAgIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKCd0b2tlbicpO1xyXG4gICAgICB9IGZpbmFsbHkge1xyXG4gICAgICAgIHNldExvYWRpbmcoZmFsc2UpO1xyXG4gICAgICB9XHJcbiAgICB9O1xyXG5cclxuICAgIGNoZWNrQXV0aCgpO1xyXG4gIH0sIFtdKTtcclxuXHJcbiAgY29uc3QgbG9naW4gPSBhc3luYyAoZW1haWwsIHBhc3N3b3JkKSA9PiB7XHJcbiAgICB0cnkge1xyXG4gICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGF4aW9zLnBvc3QoJ2h0dHA6Ly9sb2NhbGhvc3Q6MzAwMS9hcGkvYXV0aC9sb2dpbicsIHtcclxuICAgICAgICBlbWFpbCxcclxuICAgICAgICBwYXNzd29yZFxyXG4gICAgICB9KTtcclxuICAgICAgY29uc3QgeyB0b2tlbiwgdXNlciB9ID0gcmVzcG9uc2UuZGF0YTtcclxuICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3Rva2VuJywgdG9rZW4pO1xyXG4gICAgICBzZXRVc2VyKHVzZXIpO1xyXG4gICAgICByZXR1cm4geyBzdWNjZXNzOiB0cnVlIH07XHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6IGVycm9yLnJlc3BvbnNlPy5kYXRhPy5tZXNzYWdlIHx8ICdMb2dpbiBmYWlsZWQnIH07XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgbG9nb3V0ID0gKCkgPT4ge1xyXG4gICAgbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oJ3Rva2VuJyk7XHJcbiAgICBzZXRVc2VyKG51bGwpO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IHZhbHVlID0ge1xyXG4gICAgdXNlcixcclxuICAgIGxvYWRpbmcsXHJcbiAgICBsb2dpbixcclxuICAgIGxvZ291dCxcclxuICAgIGlzQXV0aGVudGljYXRlZDogISF1c2VyXHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxBdXRoQ29udGV4dC5Qcm92aWRlciB2YWx1ZT17dmFsdWV9PlxyXG4gICAgICB7IWxvYWRpbmcgJiYgY2hpbGRyZW59XHJcbiAgICA8L0F1dGhDb250ZXh0LlByb3ZpZGVyPlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgdXNlQXV0aCA9ICgpID0+IHtcclxuICBjb25zdCBjb250ZXh0ID0gdXNlQ29udGV4dChBdXRoQ29udGV4dCk7XHJcbiAgaWYgKCFjb250ZXh0KSB7XHJcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ3VzZUF1dGggbXVzdCBiZSB1c2VkIHdpdGhpbiBhbiBBdXRoUHJvdmlkZXInKTtcclxuICB9XHJcbiAgcmV0dXJuIGNvbnRleHQ7XHJcbn07ICJdLCJuYW1lcyI6WyJSZWFjdCIsImNyZWF0ZUNvbnRleHQiLCJ1c2VDb250ZXh0IiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJheGlvcyIsIkF1dGhDb250ZXh0IiwiQXV0aFByb3ZpZGVyIiwiY2hpbGRyZW4iLCJ1c2VyIiwic2V0VXNlciIsImxvYWRpbmciLCJzZXRMb2FkaW5nIiwiY2hlY2tBdXRoIiwidG9rZW4iLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwicmVzcG9uc2UiLCJnZXQiLCJoZWFkZXJzIiwiQXV0aG9yaXphdGlvbiIsImRhdGEiLCJlcnJvciIsImNvbnNvbGUiLCJyZW1vdmVJdGVtIiwibG9naW4iLCJlbWFpbCIsInBhc3N3b3JkIiwicG9zdCIsInNldEl0ZW0iLCJzdWNjZXNzIiwibWVzc2FnZSIsImxvZ291dCIsInZhbHVlIiwiaXNBdXRoZW50aWNhdGVkIiwiUHJvdmlkZXIiLCJ1c2VBdXRoIiwiY29udGV4dCIsIkVycm9yIl0sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(pages-dir-node)/./src/context/AuthContext.jsx\n");

/***/ }),

/***/ "(pages-dir-node)/./src/pages/_app.js":
/*!***************************!*\
  !*** ./src/pages/_app.js ***!
  \***************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var notistack__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! notistack */ \"notistack\");\n/* harmony import */ var notistack__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(notistack__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @mui/material/styles */ \"(pages-dir-node)/./node_modules/@mui/material/node/styles/index.js\");\n/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_mui_material_styles__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _mui_material_CssBaseline__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @mui/material/CssBaseline */ \"(pages-dir-node)/./node_modules/@mui/material/node/CssBaseline/index.js\");\n/* harmony import */ var _context_AuthContext__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../context/AuthContext */ \"(pages-dir-node)/./src/context/AuthContext.jsx\");\n/* harmony import */ var _components_layout_Layout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/layout/Layout */ \"(pages-dir-node)/./src/components/layout/Layout.js\");\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../styles/globals.css */ \"(pages-dir-node)/./src/styles/globals.css\");\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_5__);\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_context_AuthContext__WEBPACK_IMPORTED_MODULE_3__, _components_layout_Layout__WEBPACK_IMPORTED_MODULE_4__]);\n([_context_AuthContext__WEBPACK_IMPORTED_MODULE_3__, _components_layout_Layout__WEBPACK_IMPORTED_MODULE_4__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);\n\n\n\n\n\n\n\n\n// Create a theme\nconst theme = (0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_6__.createTheme)({\n    palette: {\n        primary: {\n            main: '#1976d2'\n        },\n        secondary: {\n            main: '#dc004e'\n        }\n    }\n});\nfunction MyApp({ Component, pageProps }) {\n    // Remove server-side injected CSS\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)({\n        \"MyApp.useEffect\": ()=>{\n            const jssStyles = document.querySelector('#jss-server-side');\n            if (jssStyles) {\n                jssStyles.parentElement.removeChild(jssStyles);\n            }\n        }\n    }[\"MyApp.useEffect\"], []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_styles__WEBPACK_IMPORTED_MODULE_6__.ThemeProvider, {\n        theme: theme,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_CssBaseline__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {}, void 0, false, {\n                fileName: \"D:\\\\Year 3 Term 1 Code\\\\web_final_project\\\\ecommerce-project\\\\frontend\\\\src\\\\pages\\\\_app.js\",\n                lineNumber: 32,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(notistack__WEBPACK_IMPORTED_MODULE_2__.SnackbarProvider, {\n                maxSnack: 3,\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_context_AuthContext__WEBPACK_IMPORTED_MODULE_3__.AuthProvider, {\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_layout_Layout__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n                            ...pageProps\n                        }, void 0, false, {\n                            fileName: \"D:\\\\Year 3 Term 1 Code\\\\web_final_project\\\\ecommerce-project\\\\frontend\\\\src\\\\pages\\\\_app.js\",\n                            lineNumber: 36,\n                            columnNumber: 13\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"D:\\\\Year 3 Term 1 Code\\\\web_final_project\\\\ecommerce-project\\\\frontend\\\\src\\\\pages\\\\_app.js\",\n                        lineNumber: 35,\n                        columnNumber: 11\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"D:\\\\Year 3 Term 1 Code\\\\web_final_project\\\\ecommerce-project\\\\frontend\\\\src\\\\pages\\\\_app.js\",\n                    lineNumber: 34,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"D:\\\\Year 3 Term 1 Code\\\\web_final_project\\\\ecommerce-project\\\\frontend\\\\src\\\\pages\\\\_app.js\",\n                lineNumber: 33,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"D:\\\\Year 3 Term 1 Code\\\\web_final_project\\\\ecommerce-project\\\\frontend\\\\src\\\\pages\\\\_app.js\",\n        lineNumber: 31,\n        columnNumber: 5\n    }, this);\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MyApp);\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHBhZ2VzLWRpci1ub2RlKS8uL3NyYy9wYWdlcy9fYXBwLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUE0QztBQUNDO0FBQ3FCO0FBQ2Q7QUFDRTtBQUNMO0FBQ2xCO0FBRS9CLGlCQUFpQjtBQUNqQixNQUFNUSxRQUFRSixpRUFBV0EsQ0FBQztJQUN4QkssU0FBUztRQUNQQyxTQUFTO1lBQ1BDLE1BQU07UUFDUjtRQUNBQyxXQUFXO1lBQ1RELE1BQU07UUFDUjtJQUNGO0FBQ0Y7QUFFQSxTQUFTRSxNQUFNLEVBQUVDLFNBQVMsRUFBRUMsU0FBUyxFQUFFO0lBQ3JDLGtDQUFrQztJQUNsQ2QsZ0RBQVNBOzJCQUFDO1lBQ1IsTUFBTWUsWUFBWUMsU0FBU0MsYUFBYSxDQUFDO1lBQ3pDLElBQUlGLFdBQVc7Z0JBQ2JBLFVBQVVHLGFBQWEsQ0FBQ0MsV0FBVyxDQUFDSjtZQUN0QztRQUNGOzBCQUFHLEVBQUU7SUFFTCxxQkFDRSw4REFBQ2IsK0RBQWFBO1FBQUNLLE9BQU9BOzswQkFDcEIsOERBQUNILGlFQUFXQTs7Ozs7MEJBQ1osOERBQUNILHVEQUFnQkE7Z0JBQUNtQixVQUFVOzBCQUMxQiw0RUFBQ2YsOERBQVlBOzhCQUNYLDRFQUFDQyxpRUFBTUE7a0NBQ0wsNEVBQUNPOzRCQUFXLEdBQUdDLFNBQVM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQU1wQztBQUVBLGlFQUFlRixLQUFLQSxFQUFDIiwic291cmNlcyI6WyJEOlxcWWVhciAzIFRlcm0gMSBDb2RlXFx3ZWJfZmluYWxfcHJvamVjdFxcZWNvbW1lcmNlLXByb2plY3RcXGZyb250ZW5kXFxzcmNcXHBhZ2VzXFxfYXBwLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IFNuYWNrYmFyUHJvdmlkZXIgfSBmcm9tICdub3Rpc3RhY2snO1xyXG5pbXBvcnQgeyBUaGVtZVByb3ZpZGVyLCBjcmVhdGVUaGVtZSB9IGZyb20gJ0BtdWkvbWF0ZXJpYWwvc3R5bGVzJztcclxuaW1wb3J0IENzc0Jhc2VsaW5lIGZyb20gJ0BtdWkvbWF0ZXJpYWwvQ3NzQmFzZWxpbmUnO1xyXG5pbXBvcnQgeyBBdXRoUHJvdmlkZXIgfSBmcm9tICcuLi9jb250ZXh0L0F1dGhDb250ZXh0JztcclxuaW1wb3J0IExheW91dCBmcm9tICcuLi9jb21wb25lbnRzL2xheW91dC9MYXlvdXQnO1xyXG5pbXBvcnQgJy4uL3N0eWxlcy9nbG9iYWxzLmNzcyc7XHJcblxyXG4vLyBDcmVhdGUgYSB0aGVtZVxyXG5jb25zdCB0aGVtZSA9IGNyZWF0ZVRoZW1lKHtcclxuICBwYWxldHRlOiB7XHJcbiAgICBwcmltYXJ5OiB7XHJcbiAgICAgIG1haW46ICcjMTk3NmQyJyxcclxuICAgIH0sXHJcbiAgICBzZWNvbmRhcnk6IHtcclxuICAgICAgbWFpbjogJyNkYzAwNGUnLFxyXG4gICAgfSxcclxuICB9LFxyXG59KTtcclxuXHJcbmZ1bmN0aW9uIE15QXBwKHsgQ29tcG9uZW50LCBwYWdlUHJvcHMgfSkge1xyXG4gIC8vIFJlbW92ZSBzZXJ2ZXItc2lkZSBpbmplY3RlZCBDU1NcclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgY29uc3QganNzU3R5bGVzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2pzcy1zZXJ2ZXItc2lkZScpO1xyXG4gICAgaWYgKGpzc1N0eWxlcykge1xyXG4gICAgICBqc3NTdHlsZXMucGFyZW50RWxlbWVudC5yZW1vdmVDaGlsZChqc3NTdHlsZXMpO1xyXG4gICAgfVxyXG4gIH0sIFtdKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxUaGVtZVByb3ZpZGVyIHRoZW1lPXt0aGVtZX0+XHJcbiAgICAgIDxDc3NCYXNlbGluZSAvPlxyXG4gICAgICA8U25hY2tiYXJQcm92aWRlciBtYXhTbmFjaz17M30+XHJcbiAgICAgICAgPEF1dGhQcm92aWRlcj5cclxuICAgICAgICAgIDxMYXlvdXQ+XHJcbiAgICAgICAgICAgIDxDb21wb25lbnQgey4uLnBhZ2VQcm9wc30gLz5cclxuICAgICAgICAgIDwvTGF5b3V0PlxyXG4gICAgICAgIDwvQXV0aFByb3ZpZGVyPlxyXG4gICAgICA8L1NuYWNrYmFyUHJvdmlkZXI+XHJcbiAgICA8L1RoZW1lUHJvdmlkZXI+XHJcbiAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTXlBcHA7Il0sIm5hbWVzIjpbInVzZVN0YXRlIiwidXNlRWZmZWN0IiwiU25hY2tiYXJQcm92aWRlciIsIlRoZW1lUHJvdmlkZXIiLCJjcmVhdGVUaGVtZSIsIkNzc0Jhc2VsaW5lIiwiQXV0aFByb3ZpZGVyIiwiTGF5b3V0IiwidGhlbWUiLCJwYWxldHRlIiwicHJpbWFyeSIsIm1haW4iLCJzZWNvbmRhcnkiLCJNeUFwcCIsIkNvbXBvbmVudCIsInBhZ2VQcm9wcyIsImpzc1N0eWxlcyIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsInBhcmVudEVsZW1lbnQiLCJyZW1vdmVDaGlsZCIsIm1heFNuYWNrIl0sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(pages-dir-node)/./src/pages/_app.js\n");

/***/ }),

/***/ "(pages-dir-node)/./src/styles/globals.css":
/*!********************************!*\
  !*** ./src/styles/globals.css ***!
  \********************************/
/***/ (() => {



/***/ }),

/***/ "(pages-dir-node)/__barrel_optimize__?names=AccountCircle,Assessment,Category,ChevronLeft,Dashboard,ExitToApp,Inventory,Menu,People,ShoppingCart!=!./node_modules/@mui/icons-material/esm/index.js":
/*!****************************************************************************************************************************************************************************************!*\
  !*** __barrel_optimize__?names=AccountCircle,Assessment,Category,ChevronLeft,Dashboard,ExitToApp,Inventory,Menu,People,ShoppingCart!=!./node_modules/@mui/icons-material/esm/index.js ***!
  \****************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   AccountCircle: () => (/* reexport safe */ _AccountCircle__WEBPACK_IMPORTED_MODULE_0__[\"default\"]),\n/* harmony export */   Assessment: () => (/* reexport safe */ _Assessment__WEBPACK_IMPORTED_MODULE_1__[\"default\"]),\n/* harmony export */   Category: () => (/* reexport safe */ _Category__WEBPACK_IMPORTED_MODULE_2__[\"default\"]),\n/* harmony export */   ChevronLeft: () => (/* reexport safe */ _ChevronLeft__WEBPACK_IMPORTED_MODULE_3__[\"default\"]),\n/* harmony export */   Dashboard: () => (/* reexport safe */ _Dashboard__WEBPACK_IMPORTED_MODULE_4__[\"default\"]),\n/* harmony export */   ExitToApp: () => (/* reexport safe */ _ExitToApp__WEBPACK_IMPORTED_MODULE_5__[\"default\"]),\n/* harmony export */   Inventory: () => (/* reexport safe */ _Inventory__WEBPACK_IMPORTED_MODULE_6__[\"default\"]),\n/* harmony export */   Menu: () => (/* reexport safe */ _Menu__WEBPACK_IMPORTED_MODULE_7__[\"default\"]),\n/* harmony export */   People: () => (/* reexport safe */ _People__WEBPACK_IMPORTED_MODULE_8__[\"default\"]),\n/* harmony export */   ShoppingCart: () => (/* reexport safe */ _ShoppingCart__WEBPACK_IMPORTED_MODULE_9__[\"default\"])\n/* harmony export */ });\n/* harmony import */ var _AccountCircle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AccountCircle */ \"(pages-dir-node)/./node_modules/@mui/icons-material/esm/AccountCircle.js\");\n/* harmony import */ var _Assessment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Assessment */ \"(pages-dir-node)/./node_modules/@mui/icons-material/esm/Assessment.js\");\n/* harmony import */ var _Category__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Category */ \"(pages-dir-node)/./node_modules/@mui/icons-material/esm/Category.js\");\n/* harmony import */ var _ChevronLeft__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ChevronLeft */ \"(pages-dir-node)/./node_modules/@mui/icons-material/esm/ChevronLeft.js\");\n/* harmony import */ var _Dashboard__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Dashboard */ \"(pages-dir-node)/./node_modules/@mui/icons-material/esm/Dashboard.js\");\n/* harmony import */ var _ExitToApp__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ExitToApp */ \"(pages-dir-node)/./node_modules/@mui/icons-material/esm/ExitToApp.js\");\n/* harmony import */ var _Inventory__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Inventory */ \"(pages-dir-node)/./node_modules/@mui/icons-material/esm/Inventory.js\");\n/* harmony import */ var _Menu__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Menu */ \"(pages-dir-node)/./node_modules/@mui/icons-material/esm/Menu.js\");\n/* harmony import */ var _People__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./People */ \"(pages-dir-node)/./node_modules/@mui/icons-material/esm/People.js\");\n/* harmony import */ var _ShoppingCart__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./ShoppingCart */ \"(pages-dir-node)/./node_modules/@mui/icons-material/esm/ShoppingCart.js\");\n\n\n\n\n\n\n\n\n\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHBhZ2VzLWRpci1ub2RlKS9fX2JhcnJlbF9vcHRpbWl6ZV9fP25hbWVzPUFjY291bnRDaXJjbGUsQXNzZXNzbWVudCxDYXRlZ29yeSxDaGV2cm9uTGVmdCxEYXNoYm9hcmQsRXhpdFRvQXBwLEludmVudG9yeSxNZW51LFBlb3BsZSxTaG9wcGluZ0NhcnQhPSEuL25vZGVfbW9kdWxlcy9AbXVpL2ljb25zLW1hdGVyaWFsL2VzbS9pbmRleC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDMEQ7QUFDTjtBQUNKO0FBQ007QUFDSjtBQUNBO0FBQ0E7QUFDVjtBQUNJIiwic291cmNlcyI6WyJEOlxcWWVhciAzIFRlcm0gMSBDb2RlXFx3ZWJfZmluYWxfcHJvamVjdFxcZWNvbW1lcmNlLXByb2plY3RcXGZyb250ZW5kXFxub2RlX21vZHVsZXNcXEBtdWlcXGljb25zLW1hdGVyaWFsXFxlc21cXGluZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlxuZXhwb3J0IHsgZGVmYXVsdCBhcyBBY2NvdW50Q2lyY2xlIH0gZnJvbSBcIi4vQWNjb3VudENpcmNsZVwiXG5leHBvcnQgeyBkZWZhdWx0IGFzIEFzc2Vzc21lbnQgfSBmcm9tIFwiLi9Bc3Nlc3NtZW50XCJcbmV4cG9ydCB7IGRlZmF1bHQgYXMgQ2F0ZWdvcnkgfSBmcm9tIFwiLi9DYXRlZ29yeVwiXG5leHBvcnQgeyBkZWZhdWx0IGFzIENoZXZyb25MZWZ0IH0gZnJvbSBcIi4vQ2hldnJvbkxlZnRcIlxuZXhwb3J0IHsgZGVmYXVsdCBhcyBEYXNoYm9hcmQgfSBmcm9tIFwiLi9EYXNoYm9hcmRcIlxuZXhwb3J0IHsgZGVmYXVsdCBhcyBFeGl0VG9BcHAgfSBmcm9tIFwiLi9FeGl0VG9BcHBcIlxuZXhwb3J0IHsgZGVmYXVsdCBhcyBJbnZlbnRvcnkgfSBmcm9tIFwiLi9JbnZlbnRvcnlcIlxuZXhwb3J0IHsgZGVmYXVsdCBhcyBNZW51IH0gZnJvbSBcIi4vTWVudVwiXG5leHBvcnQgeyBkZWZhdWx0IGFzIFBlb3BsZSB9IGZyb20gXCIuL1Blb3BsZVwiXG5leHBvcnQgeyBkZWZhdWx0IGFzIFNob3BwaW5nQ2FydCB9IGZyb20gXCIuL1Nob3BwaW5nQ2FydFwiIl0sIm5hbWVzIjpbXSwiaWdub3JlTGlzdCI6WzBdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(pages-dir-node)/__barrel_optimize__?names=AccountCircle,Assessment,Category,ChevronLeft,Dashboard,ExitToApp,Inventory,Menu,People,ShoppingCart!=!./node_modules/@mui/icons-material/esm/index.js\n");

/***/ }),

/***/ "(pages-dir-node)/__barrel_optimize__?names=AppBar,Avatar,Box,Divider,Drawer,IconButton,List,ListItem,ListItemButton,ListItemIcon,ListItemText,Menu,MenuItem,Toolbar,Typography!=!./node_modules/@mui/material/index.js":
/*!*************************************************************************************************************************************************************************************************************!*\
  !*** __barrel_optimize__?names=AppBar,Avatar,Box,Divider,Drawer,IconButton,List,ListItem,ListItemButton,ListItemIcon,ListItemText,Menu,MenuItem,Toolbar,Typography!=!./node_modules/@mui/material/index.js ***!
  \*************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   AppBar: () => (/* reexport default from dynamic */ _AppBar__WEBPACK_IMPORTED_MODULE_0___default.a),\n/* harmony export */   Avatar: () => (/* reexport default from dynamic */ _Avatar__WEBPACK_IMPORTED_MODULE_1___default.a),\n/* harmony export */   Box: () => (/* reexport default from dynamic */ _Box__WEBPACK_IMPORTED_MODULE_2___default.a),\n/* harmony export */   Divider: () => (/* reexport default from dynamic */ _Divider__WEBPACK_IMPORTED_MODULE_3___default.a),\n/* harmony export */   Drawer: () => (/* reexport default from dynamic */ _Drawer__WEBPACK_IMPORTED_MODULE_4___default.a),\n/* harmony export */   IconButton: () => (/* reexport default from dynamic */ _IconButton__WEBPACK_IMPORTED_MODULE_5___default.a),\n/* harmony export */   List: () => (/* reexport default from dynamic */ _List__WEBPACK_IMPORTED_MODULE_6___default.a),\n/* harmony export */   ListItem: () => (/* reexport default from dynamic */ _ListItem__WEBPACK_IMPORTED_MODULE_7___default.a),\n/* harmony export */   ListItemButton: () => (/* reexport default from dynamic */ _ListItemButton__WEBPACK_IMPORTED_MODULE_8___default.a),\n/* harmony export */   ListItemIcon: () => (/* reexport default from dynamic */ _ListItemIcon__WEBPACK_IMPORTED_MODULE_9___default.a),\n/* harmony export */   ListItemText: () => (/* reexport default from dynamic */ _ListItemText__WEBPACK_IMPORTED_MODULE_10___default.a),\n/* harmony export */   Menu: () => (/* reexport default from dynamic */ _Menu__WEBPACK_IMPORTED_MODULE_11___default.a),\n/* harmony export */   MenuItem: () => (/* reexport default from dynamic */ _MenuItem__WEBPACK_IMPORTED_MODULE_12___default.a),\n/* harmony export */   Toolbar: () => (/* reexport default from dynamic */ _Toolbar__WEBPACK_IMPORTED_MODULE_13___default.a),\n/* harmony export */   Typography: () => (/* reexport default from dynamic */ _Typography__WEBPACK_IMPORTED_MODULE_14___default.a)\n/* harmony export */ });\n/* harmony import */ var _AppBar__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AppBar */ \"(pages-dir-node)/./node_modules/@mui/material/node/AppBar/index.js\");\n/* harmony import */ var _AppBar__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_AppBar__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Avatar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Avatar */ \"(pages-dir-node)/./node_modules/@mui/material/node/Avatar/index.js\");\n/* harmony import */ var _Avatar__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Avatar__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Box__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Box */ \"(pages-dir-node)/./node_modules/@mui/material/node/Box/index.js\");\n/* harmony import */ var _Box__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_Box__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _Divider__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Divider */ \"(pages-dir-node)/./node_modules/@mui/material/node/Divider/index.js\");\n/* harmony import */ var _Divider__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_Divider__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _Drawer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Drawer */ \"(pages-dir-node)/./node_modules/@mui/material/node/Drawer/index.js\");\n/* harmony import */ var _Drawer__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_Drawer__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _IconButton__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./IconButton */ \"(pages-dir-node)/./node_modules/@mui/material/node/IconButton/index.js\");\n/* harmony import */ var _IconButton__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_IconButton__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _List__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./List */ \"(pages-dir-node)/./node_modules/@mui/material/node/List/index.js\");\n/* harmony import */ var _List__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_List__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _ListItem__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./ListItem */ \"(pages-dir-node)/./node_modules/@mui/material/node/ListItem/index.js\");\n/* harmony import */ var _ListItem__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_ListItem__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var _ListItemButton__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./ListItemButton */ \"(pages-dir-node)/./node_modules/@mui/material/node/ListItemButton/index.js\");\n/* harmony import */ var _ListItemButton__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_ListItemButton__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var _ListItemIcon__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./ListItemIcon */ \"(pages-dir-node)/./node_modules/@mui/material/node/ListItemIcon/index.js\");\n/* harmony import */ var _ListItemIcon__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_ListItemIcon__WEBPACK_IMPORTED_MODULE_9__);\n/* harmony import */ var _ListItemText__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./ListItemText */ \"(pages-dir-node)/./node_modules/@mui/material/node/ListItemText/index.js\");\n/* harmony import */ var _ListItemText__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_ListItemText__WEBPACK_IMPORTED_MODULE_10__);\n/* harmony import */ var _Menu__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./Menu */ \"(pages-dir-node)/./node_modules/@mui/material/node/Menu/index.js\");\n/* harmony import */ var _Menu__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_Menu__WEBPACK_IMPORTED_MODULE_11__);\n/* harmony import */ var _MenuItem__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./MenuItem */ \"(pages-dir-node)/./node_modules/@mui/material/node/MenuItem/index.js\");\n/* harmony import */ var _MenuItem__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_MenuItem__WEBPACK_IMPORTED_MODULE_12__);\n/* harmony import */ var _Toolbar__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./Toolbar */ \"(pages-dir-node)/./node_modules/@mui/material/node/Toolbar/index.js\");\n/* harmony import */ var _Toolbar__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_Toolbar__WEBPACK_IMPORTED_MODULE_13__);\n/* harmony import */ var _Typography__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./Typography */ \"(pages-dir-node)/./node_modules/@mui/material/node/Typography/index.js\");\n/* harmony import */ var _Typography__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_Typography__WEBPACK_IMPORTED_MODULE_14__);\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHBhZ2VzLWRpci1ub2RlKS9fX2JhcnJlbF9vcHRpbWl6ZV9fP25hbWVzPUFwcEJhcixBdmF0YXIsQm94LERpdmlkZXIsRHJhd2VyLEljb25CdXR0b24sTGlzdCxMaXN0SXRlbSxMaXN0SXRlbUJ1dHRvbixMaXN0SXRlbUljb24sTGlzdEl0ZW1UZXh0LE1lbnUsTWVudUl0ZW0sVG9vbGJhcixUeXBvZ3JhcGh5IT0hLi9ub2RlX21vZHVsZXMvQG11aS9tYXRlcmlhbC9pbmRleC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQzRDO0FBQ0E7QUFDTjtBQUNRO0FBQ0Y7QUFDUTtBQUNaO0FBQ1E7QUFDWTtBQUNKO0FBQ0E7QUFDaEI7QUFDUTtBQUNGIiwic291cmNlcyI6WyJEOlxcWWVhciAzIFRlcm0gMSBDb2RlXFx3ZWJfZmluYWxfcHJvamVjdFxcZWNvbW1lcmNlLXByb2plY3RcXGZyb250ZW5kXFxub2RlX21vZHVsZXNcXEBtdWlcXG1hdGVyaWFsXFxpbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcbmV4cG9ydCB7IGRlZmF1bHQgYXMgQXBwQmFyIH0gZnJvbSBcIi4vQXBwQmFyXCJcbmV4cG9ydCB7IGRlZmF1bHQgYXMgQXZhdGFyIH0gZnJvbSBcIi4vQXZhdGFyXCJcbmV4cG9ydCB7IGRlZmF1bHQgYXMgQm94IH0gZnJvbSBcIi4vQm94XCJcbmV4cG9ydCB7IGRlZmF1bHQgYXMgRGl2aWRlciB9IGZyb20gXCIuL0RpdmlkZXJcIlxuZXhwb3J0IHsgZGVmYXVsdCBhcyBEcmF3ZXIgfSBmcm9tIFwiLi9EcmF3ZXJcIlxuZXhwb3J0IHsgZGVmYXVsdCBhcyBJY29uQnV0dG9uIH0gZnJvbSBcIi4vSWNvbkJ1dHRvblwiXG5leHBvcnQgeyBkZWZhdWx0IGFzIExpc3QgfSBmcm9tIFwiLi9MaXN0XCJcbmV4cG9ydCB7IGRlZmF1bHQgYXMgTGlzdEl0ZW0gfSBmcm9tIFwiLi9MaXN0SXRlbVwiXG5leHBvcnQgeyBkZWZhdWx0IGFzIExpc3RJdGVtQnV0dG9uIH0gZnJvbSBcIi4vTGlzdEl0ZW1CdXR0b25cIlxuZXhwb3J0IHsgZGVmYXVsdCBhcyBMaXN0SXRlbUljb24gfSBmcm9tIFwiLi9MaXN0SXRlbUljb25cIlxuZXhwb3J0IHsgZGVmYXVsdCBhcyBMaXN0SXRlbVRleHQgfSBmcm9tIFwiLi9MaXN0SXRlbVRleHRcIlxuZXhwb3J0IHsgZGVmYXVsdCBhcyBNZW51IH0gZnJvbSBcIi4vTWVudVwiXG5leHBvcnQgeyBkZWZhdWx0IGFzIE1lbnVJdGVtIH0gZnJvbSBcIi4vTWVudUl0ZW1cIlxuZXhwb3J0IHsgZGVmYXVsdCBhcyBUb29sYmFyIH0gZnJvbSBcIi4vVG9vbGJhclwiXG5leHBvcnQgeyBkZWZhdWx0IGFzIFR5cG9ncmFwaHkgfSBmcm9tIFwiLi9UeXBvZ3JhcGh5XCIiXSwibmFtZXMiOltdLCJpZ25vcmVMaXN0IjpbMF0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(pages-dir-node)/__barrel_optimize__?names=AppBar,Avatar,Box,Divider,Drawer,IconButton,List,ListItem,ListItemButton,ListItemIcon,ListItemText,Menu,MenuItem,Toolbar,Typography!=!./node_modules/@mui/material/index.js\n");

/***/ }),

/***/ "@mui/system":
/*!******************************!*\
  !*** external "@mui/system" ***!
  \******************************/
/***/ ((module) => {

"use strict";
module.exports = require("@mui/system");

/***/ }),

/***/ "@mui/system/DefaultPropsProvider":
/*!***************************************************!*\
  !*** external "@mui/system/DefaultPropsProvider" ***!
  \***************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@mui/system/DefaultPropsProvider");

/***/ }),

/***/ "@mui/system/InitColorSchemeScript":
/*!****************************************************!*\
  !*** external "@mui/system/InitColorSchemeScript" ***!
  \****************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@mui/system/InitColorSchemeScript");

/***/ }),

/***/ "@mui/system/RtlProvider":
/*!******************************************!*\
  !*** external "@mui/system/RtlProvider" ***!
  \******************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@mui/system/RtlProvider");

/***/ }),

/***/ "@mui/system/colorManipulator":
/*!***********************************************!*\
  !*** external "@mui/system/colorManipulator" ***!
  \***********************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@mui/system/colorManipulator");

/***/ }),

/***/ "@mui/system/createStyled":
/*!*******************************************!*\
  !*** external "@mui/system/createStyled" ***!
  \*******************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@mui/system/createStyled");

/***/ }),

/***/ "@mui/system/createTheme":
/*!******************************************!*\
  !*** external "@mui/system/createTheme" ***!
  \******************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@mui/system/createTheme");

/***/ }),

/***/ "@mui/system/styleFunctionSx":
/*!**********************************************!*\
  !*** external "@mui/system/styleFunctionSx" ***!
  \**********************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@mui/system/styleFunctionSx");

/***/ }),

/***/ "@mui/system/useThemeProps":
/*!********************************************!*\
  !*** external "@mui/system/useThemeProps" ***!
  \********************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@mui/system/useThemeProps");

/***/ }),

/***/ "@mui/utils":
/*!*****************************!*\
  !*** external "@mui/utils" ***!
  \*****************************/
/***/ ((module) => {

"use strict";
module.exports = require("@mui/utils");

/***/ }),

/***/ "@mui/utils/HTMLElementType":
/*!*********************************************!*\
  !*** external "@mui/utils/HTMLElementType" ***!
  \*********************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@mui/utils/HTMLElementType");

/***/ }),

/***/ "@mui/utils/appendOwnerState":
/*!**********************************************!*\
  !*** external "@mui/utils/appendOwnerState" ***!
  \**********************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@mui/utils/appendOwnerState");

/***/ }),

/***/ "@mui/utils/capitalize":
/*!****************************************!*\
  !*** external "@mui/utils/capitalize" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@mui/utils/capitalize");

/***/ }),

/***/ "@mui/utils/chainPropTypes":
/*!********************************************!*\
  !*** external "@mui/utils/chainPropTypes" ***!
  \********************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@mui/utils/chainPropTypes");

/***/ }),

/***/ "@mui/utils/composeClasses":
/*!********************************************!*\
  !*** external "@mui/utils/composeClasses" ***!
  \********************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@mui/utils/composeClasses");

/***/ }),

/***/ "@mui/utils/createChainedFunction":
/*!***************************************************!*\
  !*** external "@mui/utils/createChainedFunction" ***!
  \***************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@mui/utils/createChainedFunction");

/***/ }),

/***/ "@mui/utils/debounce":
/*!**************************************!*\
  !*** external "@mui/utils/debounce" ***!
  \**************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@mui/utils/debounce");

/***/ }),

/***/ "@mui/utils/deepmerge":
/*!***************************************!*\
  !*** external "@mui/utils/deepmerge" ***!
  \***************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@mui/utils/deepmerge");

/***/ }),

/***/ "@mui/utils/deprecatedPropType":
/*!************************************************!*\
  !*** external "@mui/utils/deprecatedPropType" ***!
  \************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@mui/utils/deprecatedPropType");

/***/ }),

/***/ "@mui/utils/elementAcceptingRef":
/*!*************************************************!*\
  !*** external "@mui/utils/elementAcceptingRef" ***!
  \*************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@mui/utils/elementAcceptingRef");

/***/ }),

/***/ "@mui/utils/elementTypeAcceptingRef":
/*!*****************************************************!*\
  !*** external "@mui/utils/elementTypeAcceptingRef" ***!
  \*****************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@mui/utils/elementTypeAcceptingRef");

/***/ }),

/***/ "@mui/utils/extractEventHandlers":
/*!**************************************************!*\
  !*** external "@mui/utils/extractEventHandlers" ***!
  \**************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@mui/utils/extractEventHandlers");

/***/ }),

/***/ "@mui/utils/formatMuiErrorMessage":
/*!***************************************************!*\
  !*** external "@mui/utils/formatMuiErrorMessage" ***!
  \***************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@mui/utils/formatMuiErrorMessage");

/***/ }),

/***/ "@mui/utils/generateUtilityClass":
/*!**************************************************!*\
  !*** external "@mui/utils/generateUtilityClass" ***!
  \**************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@mui/utils/generateUtilityClass");

/***/ }),

/***/ "@mui/utils/generateUtilityClasses":
/*!****************************************************!*\
  !*** external "@mui/utils/generateUtilityClasses" ***!
  \****************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@mui/utils/generateUtilityClasses");

/***/ }),

/***/ "@mui/utils/getReactElementRef":
/*!************************************************!*\
  !*** external "@mui/utils/getReactElementRef" ***!
  \************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@mui/utils/getReactElementRef");

/***/ }),

/***/ "@mui/utils/getScrollbarSize":
/*!**********************************************!*\
  !*** external "@mui/utils/getScrollbarSize" ***!
  \**********************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@mui/utils/getScrollbarSize");

/***/ }),

/***/ "@mui/utils/integerPropType":
/*!*********************************************!*\
  !*** external "@mui/utils/integerPropType" ***!
  \*********************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@mui/utils/integerPropType");

/***/ }),

/***/ "@mui/utils/isHostComponent":
/*!*********************************************!*\
  !*** external "@mui/utils/isHostComponent" ***!
  \*********************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@mui/utils/isHostComponent");

/***/ }),

/***/ "@mui/utils/isMuiElement":
/*!******************************************!*\
  !*** external "@mui/utils/isMuiElement" ***!
  \******************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@mui/utils/isMuiElement");

/***/ }),

/***/ "@mui/utils/mergeSlotProps":
/*!********************************************!*\
  !*** external "@mui/utils/mergeSlotProps" ***!
  \********************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@mui/utils/mergeSlotProps");

/***/ }),

/***/ "@mui/utils/ownerDocument":
/*!*******************************************!*\
  !*** external "@mui/utils/ownerDocument" ***!
  \*******************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@mui/utils/ownerDocument");

/***/ }),

/***/ "@mui/utils/ownerWindow":
/*!*****************************************!*\
  !*** external "@mui/utils/ownerWindow" ***!
  \*****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@mui/utils/ownerWindow");

/***/ }),

/***/ "@mui/utils/refType":
/*!*************************************!*\
  !*** external "@mui/utils/refType" ***!
  \*************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@mui/utils/refType");

/***/ }),

/***/ "@mui/utils/requirePropFactory":
/*!************************************************!*\
  !*** external "@mui/utils/requirePropFactory" ***!
  \************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@mui/utils/requirePropFactory");

/***/ }),

/***/ "@mui/utils/resolveComponentProps":
/*!***************************************************!*\
  !*** external "@mui/utils/resolveComponentProps" ***!
  \***************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@mui/utils/resolveComponentProps");

/***/ }),

/***/ "@mui/utils/setRef":
/*!************************************!*\
  !*** external "@mui/utils/setRef" ***!
  \************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@mui/utils/setRef");

/***/ }),

/***/ "@mui/utils/unsupportedProp":
/*!*********************************************!*\
  !*** external "@mui/utils/unsupportedProp" ***!
  \*********************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@mui/utils/unsupportedProp");

/***/ }),

/***/ "@mui/utils/useControlled":
/*!*******************************************!*\
  !*** external "@mui/utils/useControlled" ***!
  \*******************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@mui/utils/useControlled");

/***/ }),

/***/ "@mui/utils/useEnhancedEffect":
/*!***********************************************!*\
  !*** external "@mui/utils/useEnhancedEffect" ***!
  \***********************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@mui/utils/useEnhancedEffect");

/***/ }),

/***/ "@mui/utils/useEventCallback":
/*!**********************************************!*\
  !*** external "@mui/utils/useEventCallback" ***!
  \**********************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@mui/utils/useEventCallback");

/***/ }),

/***/ "@mui/utils/useForkRef":
/*!****************************************!*\
  !*** external "@mui/utils/useForkRef" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@mui/utils/useForkRef");

/***/ }),

/***/ "@mui/utils/useId":
/*!***********************************!*\
  !*** external "@mui/utils/useId" ***!
  \***********************************/
/***/ ((module) => {

"use strict";
module.exports = require("@mui/utils/useId");

/***/ }),

/***/ "@mui/utils/useIsFocusVisible":
/*!***********************************************!*\
  !*** external "@mui/utils/useIsFocusVisible" ***!
  \***********************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@mui/utils/useIsFocusVisible");

/***/ }),

/***/ "@mui/utils/useSlotProps":
/*!******************************************!*\
  !*** external "@mui/utils/useSlotProps" ***!
  \******************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@mui/utils/useSlotProps");

/***/ }),

/***/ "@mui/utils/useTimeout":
/*!****************************************!*\
  !*** external "@mui/utils/useTimeout" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@mui/utils/useTimeout");

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = import("axios");;

/***/ }),

/***/ "clsx":
/*!***********************!*\
  !*** external "clsx" ***!
  \***********************/
/***/ ((module) => {

"use strict";
module.exports = require("clsx");

/***/ }),

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/***/ ((module) => {

"use strict";
module.exports = require("fs");

/***/ }),

/***/ "next/dist/compiled/next-server/pages.runtime.dev.js":
/*!**********************************************************************!*\
  !*** external "next/dist/compiled/next-server/pages.runtime.dev.js" ***!
  \**********************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/compiled/next-server/pages.runtime.dev.js");

/***/ }),

/***/ "notistack":
/*!****************************!*\
  !*** external "notistack" ***!
  \****************************/
/***/ ((module) => {

"use strict";
module.exports = require("notistack");

/***/ }),

/***/ "prop-types":
/*!*****************************!*\
  !*** external "prop-types" ***!
  \*****************************/
/***/ ((module) => {

"use strict";
module.exports = require("prop-types");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ "react-dom":
/*!****************************!*\
  !*** external "react-dom" ***!
  \****************************/
/***/ ((module) => {

"use strict";
module.exports = require("react-dom");

/***/ }),

/***/ "react-transition-group":
/*!*****************************************!*\
  !*** external "react-transition-group" ***!
  \*****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react-transition-group");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "react/jsx-runtime":
/*!************************************!*\
  !*** external "react/jsx-runtime" ***!
  \************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-runtime");

/***/ }),

/***/ "stream":
/*!*************************!*\
  !*** external "stream" ***!
  \*************************/
/***/ ((module) => {

"use strict";
module.exports = require("stream");

/***/ }),

/***/ "zlib":
/*!***********************!*\
  !*** external "zlib" ***!
  \***********************/
/***/ ((module) => {

"use strict";
module.exports = require("zlib");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next","vendor-chunks/@swc","vendor-chunks/@mui","vendor-chunks/@babel"], () => (__webpack_exec__("(pages-dir-node)/./src/pages/_app.js")));
module.exports = __webpack_exports__;

})();